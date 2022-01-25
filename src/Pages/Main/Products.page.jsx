import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../Components/ProductCard';

function Products() {
   const allProductsList = useSelector(state => state.products);
   console.log(allProductsList);

   return (
      <>
         {
            allProductsList.map((singleProduct, index) => (
               <ProductCard key={index} detail={singleProduct} />
            ))
         }
      </>
   );
}

export default Products;
