import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="grid place-items-center min-h-screen gap-3 p-5">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold font-serif text-green-900 my-5">
        Error 404
      </h1>
      <p className="text-xl sm:text-2xl md:text-4xl font-bold font-serif text-green-900 my-5">
        Page not found...
      </p>
      <Link to="/">
        <button className="px-8 py-4 font-bold text-green-900">
          Back to Home
        </button>
      </Link>
    </section>
  );
};

export default Error;
