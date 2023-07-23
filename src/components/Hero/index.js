import React from "react";
import heroImg from "../../assets/ecom.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font px-10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif">
            Shop with Confidence at
            <br className="hidden lg:inline-block " />
            <span className="text-blue-500 font-mono">E-Cart Today!</span>
          </h1>
          <p className="mb-8 leading-relaxed font-serif">
            Experience shopping like never before. Browse through our diverse
            product range, enjoy fantastic deals, and relish the convenience of
            having everything you desire delivered to your doorstep.
          </p>
          <div className="flex justify-center">
            <Link to='/products' className="inline-flex font-mono text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Start shopping
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={heroImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
