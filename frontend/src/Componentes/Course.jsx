// import React from 'react'
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

export default function Course() {
  return (
    <div>
      <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl">
              We&apos;re delighted to have you{" "}
              <span className="text-pink-500">Here:)</span>
            </h1>
            <p className="mt-12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              aliquid iste id, repudiandae quidem obcaecati culpa, aspernatur
              autem enim incidunt quia nobis illo voluptatibus quo pariatur
              provident recusandae, beatae optio.
            </p>
            <Link to="/">
              <button className="mt-6 px-4 py-2 bg-pink-500 hover:bg-pink-700 duration-300 rounded-md">
                Back
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {list.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </>
    </div>
  );
}
