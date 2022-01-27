import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeDarkMode } from "../Store/reducers/theme.slice";
import { FaMoon, FaSun, FaShoppingCart } from "react-icons/fa";

function Navbar() {
   const dispatch = useDispatch();
   const themeDarkMode = useSelector(state => state.theme.darkMode);
   return (
      <nav className={"bg-cyan-700 text-white flex items-center justify-center relative p-4"}>
         <Link className={"text-3xl sm:text-4xl"} to={'/'}>Pelazio Shop!</Link>
         <button
            className={"aspect-square absolute -translate-y-1/2 top-1/2 right-4 p-2"}
            onClick={() => dispatch(changeDarkMode())}
         >
            {themeDarkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
         </button>
         <Link
            className={"aspect-square absolute -translate-y-1/2 top-1/2 left-4"}
            to={'/cart'}
         >
            <FaShoppingCart size={24} />
            <span
               className={" absolute -translate-y-1/2 translate-x-1/2 -top-0.5 -right-0.5 bg-red-500 text-white text-xs px-1 py-0.5  rounded-full"}
            >100</span>
         </Link>
      </nav>
   );
}

export default Navbar;
