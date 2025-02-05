'use client'
import React, { createContext, useContext, useState } from 'react';

interface FavoritesContextType {
  favorites: any[];
  addFavorite: (character: any) => void;
  removeFavorite: (character: any) => void;
  editFavorite: (updatedCharacter: any) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addFavorite = (character: any) => {
    setFavorites((prev) => [...prev, character]);
  };

  const removeFavorite = (character: any) => {
    setFavorites((prev) => prev.filter((fav) => fav.name !== character.name));
  };

  const editFavorite = (updatedCharacter: any) => {
    setFavorites((prev) => 
      prev.map((fav) => (fav.name === updatedCharacter.name ? updatedCharacter : fav))
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, editFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used within a FavoritesProvider');
  return context;
};