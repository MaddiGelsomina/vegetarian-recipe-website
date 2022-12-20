import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../recipesSlice/recipesSlice";
import { Spinner } from "./spinner";
import Card from "./card";

const Recipes = () => {
  const { recipes, loading } = useSelector((state) => ({ ...state.recipes }));
  const [modifiedRecipe, setModifiedRecipe] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (recipes) {
      const newRecipes = recipes.map((item) => {
        const { id, title, image, servings, readyInMinutes } = item;
        return {
          id: id,
          title: title,
          image: image,
          servings: servings,
          minutes: readyInMinutes,
        };
      });
      setModifiedRecipe(newRecipes);
    } else {
      setModifiedRecipe([]);
    }
  }, [recipes]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <main className="grid place-items-center min-h-screen gap-3 p-5">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold font-serif text-green-900 mt-2 mb-8">
            Our suggestions:
          </h1>
          <section className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {modifiedRecipe.map((item) => {
              return (
                <div>
                  <Card key={item.id} element={item} />
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default Recipes;
