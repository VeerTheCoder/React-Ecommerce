import React from "react";
import { Link } from "react-router-dom";
import ecart from "../../assets/ecart.png";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Tooltip } from "@material-ui/core";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className=" w-10 translate-y-1 translate-x-3" src={ecart} />
          <span className="ml-3 text-xl font-mono ">E-Cart</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation) => {
            return (
              <Link
                to={navigation.path}
                className="mr-5 p-2 hover:font-semibold font-mono hover:underline hover:text-blue-900 ">
                {navigation.name}
              </Link>
            );
          })}
        </nav>
        <Tooltip title="Go to Cart">
        <Link
          to={"/cart"}
          className="inline-flex items-center bg-indigo-400 text-white  border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
          
          <AddShoppingCartIcon/>
          
        </Link>
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
