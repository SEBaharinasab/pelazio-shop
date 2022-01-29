import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCartOrder, increaseCartOrder, removeOrder } from '../../Store/reducers/database.slice';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Cart() {
   const navigate = useNavigate();
   // Redux-toolkit hooks
   const dispatch = useDispatch();
   const { cart, products } = useSelector(state => state.db);
   const list = cart.map(item => ({ id: item.id, count: item.count, product: products.filter(product => product.id === item.productId)[0] }));

   // Sum of price for final order
   const [priceSum, setPriceSum] = useState(0);
   useEffect(() => {
      console.log('useEffect rendered')
      setPriceSum(list.reduce((acc, curr) => acc + (curr.count * curr.product.price), 0));
   }, [cart]);

   return (
      <>
         <h1 className='text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-300'>Cart page</h1>
         <div className={"flex gap-2"}>
            <div className='w-4/5 md:w-3/5 flex flex-col items-stretch gap-4 py-4'>
               {list.map((item, index) => (
                  <div className='flex gap-2 rounded-lg shadow-md bg-white overflow-hidden dark:bg-gray-400' key={index + item.product.title}>
                     <div className={"w-28 min-h-full aspect-square"}>
                        <img className={"h-full w-full object-cover object-center"} src={item.product.image} alt={item.product.title + "preview"} />
                     </div>
                     <div className='cursor-pointer h-full' onClick={() => navigate('/products/' + item.product.id)}>
                        <h3 className='text-xl sm:text-2xl'>{item.product.title}</h3>
                        <div>price: {(item.count) * (item.product.price)}Rials</div>
                     </div>
                     <div className='self-center flex items-center h-full'>
                        <div className='inline-flex rounded overflow-hidden'>
                           <button className='px-2 bg-gray-700 text-white' onClick={() => dispatch(increaseCartOrder(item.id))}>+</button>
                           <span className='w-10 bg-white text-center' >{item.count}</span>
                           <button className='px-2 bg-gray-700 text-white' onClick={() => dispatch(decreaseCartOrder(item.id))}>-</button>
                        </div>
                        <button
                           className='text-sm p-2 ml-2 text-white bg-red-500 rounded'
                           onClick={() => dispatch(removeOrder(item.id))}
                        ><FaTrash /></button>
                     </div>
                  </div>
               ))}
            </div>
            <div className={"w-1/5 md:w-2/5"}>
               <div className={"sticky top-10 bg-red-500"}>
                  <p>{priceSum}</p>
               </div>
            </div>
         </div>
      </>
   );
}

export default Cart;
