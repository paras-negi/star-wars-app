import React from "react";
import {
  fetchCharacterDetails,
  fetchAdditionalDetails,
} from "../../actions/swapi";
import HandleFavouriteButton from "../../../components/AddRemoveFavouriteButton";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
// import useFavorites from '../../../hooks/useFavourite';

interface CharacterDetailsProps {
  params: {
    id: string;
  };
}

const CharacterDetailsPage = async ({ params }: CharacterDetailsProps) => {
  const { id } = await params;
  const character = await fetchCharacterDetails(id);
  // Fetch films and starships
  const films = await fetchAdditionalDetails(character.films);
  const starships = await fetchAdditionalDetails(character.starships);

  return (
    <React.Fragment>
      <Header />
      <div className="container mx-auto p-4 min-h-[calc(100vh-12rem)]">
        <h1 className="text-2xl font-bold mb-4">{character.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Character Details */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            <p>
              <strong>Gender:</strong> {character.gender}
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
              <strong>Eye Color:</strong> {character.eye_color}
            </p>
            <p>
              <strong>Birth Year:</strong> {character.birth_year}
            </p>
            <p>
              <strong>Home World:</strong> {character.homeworld}
            </p>
            <p>
              <strong>Skin Color:</strong> {character.skin_color}
            </p>
          </div>

          {/* Films and Starships */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Films</h2>
            <ul className="list-disc pl-5">
              {films.map((film) => (
                <li key={film.title}>{film.title}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">Starships</h2>
            <ul className="list-disc pl-5">
              {starships.map((starship) => (
                <li key={starship.name}>{starship.name}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Add/Remove Favorites Button */}
        <div className="mt-4">
          <HandleFavouriteButton character={character} />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CharacterDetailsPage;
