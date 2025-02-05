'use client'
import { useState, useContext } from 'react';
// import { FavoritesContext } from '../context/FavouritesContext';
import {useFavoritesContext} from "../context/FavouritesContext";

interface Character {
  name: string;
  gender: string;
  homeworld: string;
  birth_year: string;
  hair_color: string;
  height: string;
  mass: string;
  url: string;
}

const useFavorites = () => {
    const { favorites, addFavorite: contextAddFavorite, removeFavorite: contextRemoveFavourite, editFavorite: contextEditFavourite } = useFavoritesContext();
  
    const addFavorite = (character: Character) => {
      contextAddFavorite(character);
    };

    const removeFavorite = (character: Character) =>{
      contextRemoveFavourite(character)
    }

    const editFavorite = (character: Character) =>{
      contextEditFavourite(character);
    }
  
    const isFavorite = (character: Character) => {
      return favorites.some((fav) => fav.name === character.name);
    };


  
    return {
      favorites,
      addFavorite,
      removeFavorite,
      editFavorite,
      isFavorite,
    };
  };

export default useFavorites;