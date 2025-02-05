"use client"; // Mark as a Client Component to use hooks
import React, { useState } from "react";
import { useFavoritesContext } from "../../context/FavouritesContext";
import CharacterCard from "../../components/CharacterCard";
import EditModal from "../../components/EditFavCharacterModal";
import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FavoritesPage = () => {
  const { favorites, removeFavorite, editFavorite } = useFavoritesContext();

  const [editingCharacter, setEditingCharacter] = useState<null | any>(null);

  const handleEdit = (character: any) => {
    setEditingCharacter(character);
  };

  const handleSave = (updatedCharacter: any) => {
    editFavorite(updatedCharacter);
    setEditingCharacter(null);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="min-h-[calc(100vh-12rem)] container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Favorites</h1>
        {favorites.length === 0 ? (
          <div className="block">
            <p>No favorites added yet.</p>

            <div className="mt-4">
              <Link
                href={`/`}
                className="block w-1/5 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-center"
              >
                Add Favorites
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((character) => (
              <CharacterCard
                key={character.name}
                character={character}
                // onEdit={() => handleEdit(character)}
                // onRemove={() => removeFavorite(character)}
              >
                <div className="mt-4 flex justify-between gap-5">
                  <button
                    onClick={() => handleEdit(character)}
                    className="px-2 py-2 bg-green-500 text-white rounded w-1/2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeFavorite(character)}
                    className="px-2 py-2 bg-white-500 text-green-500  rounded w-1/2 border-green-500 border-2"
                  >
                    Remove
                  </button>
                </div>
              </CharacterCard>
            ))}
          </div>
        )}

        <EditModal
          editingCharacter={editingCharacter}
          handleSave={handleSave}
          setEditingCharacter={setEditingCharacter}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default FavoritesPage;
