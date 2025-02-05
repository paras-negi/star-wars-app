"use client";
import Link from "next/link";
import useFavorites from "../hooks/useFavourite";

interface CharacterCardProps {
  character: {
    name: string;
    gender: string;
    homeworld: string;
    birth_year: string;
    hair_color: string;
    height: string;
    mass: string;
    url: string;
  };

  children?: React.ReactNode;
  // onEdit?: () => void;
  // onRemove?: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  children,
}) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(character);

  // Extract character ID from the SWAPI URL
  const characterId = character.url.split("/").filter(Boolean).pop();

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white relative">
      {/* Favorite Icon */}
      <button
        onClick={() => favorite ? removeFavorite(character) : addFavorite(character)}
        className="absolute top-2 right-2"
      >
        {favorite ? (
          <img className="size-8" src="/save.png" alt="icon" />
        ) : (
          <img className="size-8" src="/love.png" alt="icon" />
        )}{" "}
        {/* Replace with actual icon if needed */}
      </button>

      <h2 className="text-xl font-bold mb-2">{character.name}</h2>
      <p>
        <strong>Gender:</strong> {character.gender}
      </p>
      <p>
        <strong>Birth Year:</strong> {character.birth_year}
      </p>
      <p>
        <strong>Height:</strong> {character.height} cm
      </p>
      <p>
        <strong>Mass:</strong> {character.mass} kg
      </p>
      <p>
        <strong>Hair Color:</strong> {character.hair_color}
      </p>
      <p>
        <strong>Home Planet:</strong> {character.homeworld}
      </p>

      {children ? (
        <>{children}</>
      ) : (
        <div className="mt-4">
          <Link
            href={`/characters/${characterId}`}
            className="block w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-center"
          >
            View Details
          </Link>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
