import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../components/spinner";
import SearchInput from "../components/searchInput";
import { Link } from "react-router-dom";

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
            <section className="grid grid-flow-row gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {modifiedRecipe.map((item) => {
                return (
                  <div>
                    <div className="relative max-w-xs mx-2 my-4">
                      <div
                        className="absolute w-full h-[300px] bg-white rounded-tr-[40px] rounded-bl-[40px]
          hover:z-10 hover:transition-all hover:duration-700 hover:scale-110"
                      >
                        <div className="flex min-h-full flex-col items-center justify-center">
                          <p className="text-xl px-3 text-green-900 font-bold font-serif text-center">
                            {item.title}
                          </p>

                          <p className="text-lg text-green-900 font-bold font-serif mt-6">
                            Discover the recipe
                          </p>

                          <Link to={`/recipe/${item.id}`}>
                            <button
                              className="mt-2 rounded-md border border-green-900 bg-white text-green-900 font-serif py-2 px-3 text-md
            hover:bg-green-900 hover:text-white"
                            >
                              Here
                            </button>
                          </Link>
                        </div>
                      </div>

                      <div className="relative hover:-z-20">
                        <img
                          className="relative w-full h-[300px] object-center object-cover rounded-tr-[40px] rounded-bl-[40px]"
                          src={item.image}
                          alt={item.title}
                        />
                        <div className="absolute top-9 w-full">
                          <p className="text-2xl px-3 text-white font-extrabold font-serif text-center">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
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
