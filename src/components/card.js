import { Link } from "react-router-dom";

const Card = ({ element }) => {
  return (
    <>
      <div className="relative max-w-xs mx-2 my-4">
        <div
          className="absolute w-full h-[300px] bg-white rounded-tr-[40px] rounded-bl-[40px]
          hover:z-10 hover:transition-all hover:duration-700 hover:scale-110"
        >
          <div className="flex min-h-full flex-col items-center justify-center">
            <p className="text-xl px-3 text-green-900 font-bold font-serif text-center">
              {element.title}
            </p>
            <div>
              <div
                className="grid px-7 py-4 items-center text-green-900 font-serif justify-around
                     grid-cols-2 gap-4 divide-x divide-solid"
              >
                <div className="col-span-1 px-3 flex flex-col items-center">
                  <span className="text-xl font-bold">{element.servings}</span>
                  <span className="text-lg font-bold">Person</span>
                </div>
                <div className="col-span-1 px-3 flex flex-col items-center">
                  <span className="text-xl font-bold">{element.minutes}</span>
                  <span className="text-lg font-bold">Minutes</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-green-900 font-bold font-serif">
              Discover the recipe
            </p>

            <Link to={`/recipe/${element.id}`}>
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
            src={element.image}
            alt={element.title}
          />
          <div className="absolute top-9 w-full">
            <p className="text-2xl px-3 text-white font-extrabold font-serif text-center">
              {element.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
