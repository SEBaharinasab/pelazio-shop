import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
   return (
      <>
      <h1 className={"text-3xl sm:text-5xl font-semibold text-slate-900 dark:text-slate-300"}>Home</h1>
         <ul className={"inline-flex items-stretch gap-2 p-2 mt-4 border border-indigo-500 bg-indigo-100 rounded-lg"}>
            <li><Link className={"w-full block py-2 px-3 border border-indigo-500 text-indigo-50 bg-indigo-500 hover:text-indigo-500 hover:border-indigo-500 hover:bg-indigo-50 rounded"} to={"/products"}>Products</Link></li>
            <li><Link className={"w-full block py-2 px-3 border border-indigo-500 text-indigo-50 bg-indigo-500 hover:text-indigo-500 hover:border-indigo-500 hover:bg-indigo-50 rounded"} to={"/axios"}>Axios</Link></li>
         </ul>
      </>
   );
}

export default Home;
