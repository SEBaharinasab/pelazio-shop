import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FaCartPlus, FaPlus, FaMinus } from "react-icons/fa";
import { addToCart } from '../../Store/reducers/database.slice';

function ProductView() {
   const navigate = useNavigate()
   const dispatch = useDispatch();
   // Product selection based on the productID obtained from the url
   const { productId } = useParams();
   const [productInformation] = useSelector(state => state.db.products.filter(product => product.id === productId));

   // The number of products that the customer wants to order
   const [numberOfOrder, setNumberOfOrder] = useState(1);
   const cartPlus = () => setNumberOfOrder(num => ++num);
   const cartMinus = () => setNumberOfOrder(num => num !== 0 ? --num : 0);

   const addNewToCart = () => {
      dispatch(addToCart({ count: numberOfOrder, productId: productInformation.id }));
      navigate('/cart');
   };

   return productInformation ?
      (<>
         <div className={"grid grid-cols-1 gap-2 py-2 sm:grid-cols-5"}>
            <div className={"w-full aspect-video relative sm:col-span-2 sm:aspect-square sm:rounded-xl sm:overflow-hidden "}>
               <img
                  className={"w-full h-full object-cover object-center"}
                  src={productInformation.image}
                  alt={productInformation.title + "preview"} />
               <div className={"absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-900 flex flex-col-reverse p-4 sm:hidden "}>
                  <h1 className={"text-gray-300 text-3xl"}>{productInformation.title}</h1>
               </div>
            </div>
            <div className={"sm:col-span-3 sm:flex sm:flex-col sm:gap-3"}>
               <h1 className={"hidden sm:block text-slate-900 text-4xl font-bold dark:text-slate-300"}>{productInformation.title}</h1>
               <span className={"inline-flex overflow-hidden"}>
                  <button className={"rounded-l bg-gray-600 text-white px-2 sm:px-3 sm:py-2"} onClick={cartMinus}><FaMinus /></button>
                  <input className={"border-y border-gray-600 w-10 text-center"} type="number" value={numberOfOrder} onChange={(e) => setNumberOfOrder(e.target.value)} />
                  <button className={"rounded-r bg-gray-600 text-white px-2 sm:px-3 sm:py-2"} onClick={cartPlus}><FaPlus /></button>
                  <button className={"ml-2 rounded text-red-500 text-3xl dark:text-red-600"} onClick={addNewToCart}><FaCartPlus /></button>
               </span>
               <p className='dark:text-slate-300'>{productInformation.description}</p>
            </div>
         </div>
      </>) :
      (<>
         <blockquote style={{ color: "GrayText", fontSize: "2rem" }}>Product not found!</blockquote>
      </>);
}

export default ProductView;
