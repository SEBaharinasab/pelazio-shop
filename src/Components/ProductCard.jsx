import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ detail }) {
   const navigate = useNavigate();
   return (
      <>
         <h2>{detail.title}</h2>
         <p>
            {detail.price} Rials
            <button>add to cart</button>
            <button onClick={() => navigate('/products/' + detail.id)}>read more</button>
         </p>
         <p>{detail.description}</p>
         <hr />
      </>
   );
}

export default ProductCard;
