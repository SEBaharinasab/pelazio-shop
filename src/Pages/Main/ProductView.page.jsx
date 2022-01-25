import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

function ProductView() {
   const { productId } = useParams();
   const [productInformation] = useSelector(state => state.products.filter(product => product.id == productId));
   return (
      <>
         {productInformation ? (<>
            <h1>{productInformation.title}</h1>
            <img src={productInformation.image} width={128} />
            <p>{productInformation.description}</p>
         </>) : (<>
            <blockquote style={{color:"GrayText", fontSize:"2rem"}}>Product not found!</blockquote>
         </>)}
      </>
   );
}

export default ProductView;
