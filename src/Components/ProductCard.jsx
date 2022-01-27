import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ detail }) {
   const navigate = useNavigate();
   return (
      <>
         <button className={"text-left rounded-lg shadow-lg bg-white flex overflow-hidden cursor-pointer "} onClick={() => navigate('/products/' + detail.id)}>
            <div className={"w-28 aspect-square"}>
               <img className={"w-full h-full object-cover object-center"} src={detail.image} alt={detail.title + ' preview'} />
            </div>
            <div className={"flex flex-col items-stretch p-2 flex-1 "}>
               <h3 className={"text-lg font-bold"}>{detail.title}</h3>
               <div className={"flex-1"}>{detail.price}Rials</div>
               <p className={"text-sm text-gray-700"}>
                  {detail.description.split(' ').slice(0, 8).join(' ') + "..."}
                  <span className='rounded text-xs leading-none mx-1 py-1 px-2 bg-sky-900 text-sky-50'>read more</span>
               </p>
            </div>
         </button>
      </>
   );
}

export default ProductCard;
