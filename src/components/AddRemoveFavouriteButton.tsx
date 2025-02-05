'use client'
import useFavorites from "../hooks/useFavourite";
import Button from "./Button";

// interface HandleFavouriteButtonProps {
//   character: {
//     name: string;
//     url: string;
//     // add other character properties you need
//   };
// }

const HandleFavouriteButton = ({ character }: any) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  return   <Button
    onClick={() => {
      if (isFavorite(character)) {
        removeFavorite(character);
      } else {
        addFavorite(character);
      }
    }}
  >
    {isFavorite(character) ? 'Remove from Favorites' : 'Add to Favorites'}
  </Button>
}

export default HandleFavouriteButton;

