import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../components/spinner";
import SearchInput from "../components/searchInput";
import Card from "../components/card";

const Searched = () => {
  const { searched, loading } = useSelector((state) => ({ ...state.recipes }));
  const [modifiedRecipe, setModifiedRecipe] = useState([]);

  useEffect(() => {
    if (searched) {
      const newRecipes = searched.map((item) => {
        const { id, title, image } = item;
        return {
          id: id,
          title: title,
          image: image,
        };
      });
      setModifiedRecipe(newRecipes);
    } else {
      setModifiedRecipe([]);
    }
  }, [searched]);

  if (loading) {
    return <Spinner />;
  }

  if (searched.length > 0) {
    return (
      <>
        <SearchInput />
        <main className="grid place-items-center min-h-screen gap-3 p-5">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold font-serif text-green-900 my-5">
              Results:
            </h1>
            <section className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {modifiedRecipe.map((item) => {
                return (
                  <div key={item.id}>
                    <Card element={item} />
                  </div>
                );
              })}
            </section>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <SearchInput />
        <div className="h-screen mt-20 text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold font-serif text-green-900 my-5">
            No Recipes matched your search criteria
          </h1>
        </div>
      </>
    );
  }
};

export default Searched;
