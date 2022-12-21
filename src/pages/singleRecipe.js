import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleRecipe } from "../recipesSlice/recipesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../components/spinner";

const SingleRecipe = () => {
  const { recipe, loading } = useSelector((state) => ({ ...state.recipes }));
  const [modifiedRecipe, setModifiedRecipe] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSingleRecipe({ id }));
  }, [id]); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (recipe) {
      const {
        title,
        image,
        servings,
        readyInMinutes: minutes,
        extendedIngredients: ingredients,
        instructions,
        vegan,
      } = recipe;
      const newRecipe = {
        title,
        image,
        servings,
        minutes,
        ingredients,
        instructions,
        vegan,
      };
      setModifiedRecipe(newRecipe);
    } else {
      setModifiedRecipe(null);
    }
  }, [id, recipe]);

  if (!modifiedRecipe) {
    return <h2 className="section-title">No Recipe to Display</h2>;
  } else {
    const {
      title,
      image,
      servings,
      minutes,
      ingredients,
      instructions,
      vegan,
    } = modifiedRecipe;

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <section className="bg-white bg-opacity-80 mx-10 mt-0 mb-5 py-4 rounded-lg px-12">
            <div className="flex flex-col items-center justify-center">
              <button
                className="mt-2 rounded-md border border-green-900 bg-white text-green-900 text-lg font-bold font-serif 
           py-2 px-3 hover:bg-green-900 hover:text-white"
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>
            </div>
            <div
              className="container flex flex-col px-6 py-4 mx-auto space-y-6 items-center
             md:h-128 md:py-4 md:flex-row md:items-center md:space-x-6"
            >
              <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
                <div className="max-w-lg md:mx-12 md:order-2">
                  <h1 className="text-3xl font-bold font-serif tracking-wide text-green-900 md:text-4xl">
                    {title}
                  </h1>
                  <div class="mt-8">
                    <div
                      className="grid px-7 py-2 items-center text-green-900 font-serif justify-around
                     grid-cols-3 gap-4 divide-x divide-solid"
                    >
                      <div className="col-span-1 px-3 flex flex-col items-center">
                        <span className="text-2xl font-bold">{servings}</span>
                        <span className="text-lg font-medium">Person</span>
                      </div>
                      <div className="col-span-1 px-3 flex flex-col items-center">
                        <span className="text-2xl font-bold">{minutes}</span>
                        <span className="text-lg font-medium">Minutes</span>
                      </div>
                      <div className="col-span-1 px-3 flex flex-col items-center">
                        {vegan ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                          </svg>
                        )}
                        <span className="text-lg font-medium">Vegan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center w-full h-96 md:w-1/2">
                <img
                  className="object-cover w-full h-full max-w-2xl rounded-md"
                  src={image}
                  alt={title}
                ></img>
              </div>
            </div>

            <div
              className="container flex flex-col px-6 py-4 mx-auto space-y-6 items-center 
            md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6"
            >
              <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
                <div className="mt-8">
                  <div className="px-4 sm:px-8 max-w-5xl m-auto">
                    <h1 className="text-center text-2xl text-green-900 font-bold font-serif text-md mb-4">
                      Ingredients
                    </h1>
                    {ingredients &&
                      ingredients.map((ingredient) => {
                        const { id, original } = ingredient;
                        return ingredient ? (
                          <ul className="mt-2 font-serif text-lg">
                            <li className="px-4 py-2" key={id}>
                              {original}
                            </li>
                          </ul>
                        ) : null;
                      })}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center  md:w-1/2">
                <div className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                  <h1 className="text-center text-2xl text-green-900 font-bold font-serif text-md mb-4">
                    Instructions
                  </h1>
                  <p
                    className="text-md font-serif text-lg"
                    dangerouslySetInnerHTML={{ __html: instructions }}
                  ></p>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
};

export default SingleRecipe;
