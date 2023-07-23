import React from "react";
import { Link } from "react-router-dom";

const Featurecard = ({cards = [1,2,3]}) => {
  return (
    <section className="bg-indigo-300 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-blue-800 tracking-widest font-medium title-font mb-1">
            Go with Verity of Categories
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-mono">
            Choose Categories
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.map((card) => {
            return (
              <Link to={`/categories/${card}`} className="p-4 md:w-1/4 cursor-pointer">
                <div className="flex rounded-lg h-full bg-white p-8 flex-col hover:bg-gray-200 hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    
                    <h2 className="text-gray-900 text-lg title-font font-medium capitalize text-center ml-16 font-mono ">
                      {card || `Example`}
                    </h2>
                  </div>
                  
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featurecard;
