import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSearchRecipe } from "../recipesSlice/recipesSlice";

function SearchInput() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    navigate("/recipes");
    dispatch(fetchSearchRecipe({ input }));
    e.target.reset();
  };

  return (
    <>
      <div className="relative w-[200px] m-auto text-lg bg-transparent text-slate-500">
        <form
          className="flex border-b-2 border-green-800 py-2"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none focus:text-green-900"
            value={input}
            type="text"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchInput;
