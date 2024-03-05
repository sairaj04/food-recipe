import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../Components/Recipe-Item/RecipeItem";

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <h2>Loading,Please Wait....</h2>;

  return (
    <div className=" py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="lg:text-4xl text=xl text-center text-black font-extrabold">
          <p> Nothing to Show Please Search Some Thing </p>
        </div>
      )}
    </div>
  );
}

export default Home;
