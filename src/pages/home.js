import React from "react";
import SearchInput from "../components/searchInput";
import Recipes from "../components/recipes";
const Home = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col item-center justify-between py-8">
        <div className="flex flex-1 flex-col items-center justify-top">
          <h1 className=" text-4xl lg:text-5xl xl:text-6xl text-green-900 tracking-wider font-bold font-serif text-center">
            Search unique vegetarian recipes
          </h1>
          <div className="flex flex-col items-center space-y-2 mt-12">
            <SearchInput />
          </div>
        </div>
      </div>

      <Recipes />
    </>
  );
};

export default Home;
