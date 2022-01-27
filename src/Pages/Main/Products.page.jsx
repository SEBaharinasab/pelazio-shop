import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../Components/ProductCard';

function Products() {
   const allProductsList = useSelector(state => state.db.products);

   return (
      <>
         <h1
            className='text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200'
         >Products</h1>
         <div className={"grid grid-cols-1 gap-4 mt-2 sm:grid-cols-2 lg:grid-cols-3"}>
            {
               allProductsList.map((singleProduct, index) => (
                  <ProductCard key={index} detail={singleProduct} />
               ))
            }
         </div>
      </>
   );
}

export default Products;
