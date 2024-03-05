import React from "react";
import { GlobalContext } from "../../Context";
import { useContext } from "react";
import RecipeItem from "../../Components/Recipe-Item/RecipeItem";

function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is Added
          </p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
