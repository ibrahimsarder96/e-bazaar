// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import useProduct from '../../hooks/useProduct';
// import { addToDb, getStoredCart } from '../../utilities/fakedb';
// import Cart from './Cart';
// import useProducts from '../../hooks/useProducts';
// import BookingModal from './BookingModal';

// const ProductDetail = () => {
//   const {productId} = useParams();
//   const [product] = useProduct(productId);
//   const [products] = useProducts();
//   const [cart, setCart] = useState([]);
//   const [vendible, setVendible] = useState(null);

//   useEffect( () => {
//     const storedCart = getStoredCart();
//     const savedCart = [];
//     for(const id in storedCart){
//       const addedProduct = products.find(product => product._id === id);
//       if(addedProduct){
//         const quantity = storedCart[id];
//         addedProduct.quantity = quantity;
//         savedCart.push(addedProduct);
//       }
//     }
//     setCart(savedCart);
//   },[products]);

//   const handleAddToCart = (selectedProduct) => {
//     let newCart = [];
//         const exists = cart.find(product => product._id === selectedProduct._id);
//         if(!exists){
//             selectedProduct.quantity = 1;
//             newCart = [...cart, selectedProduct];
//         }
//         else{
//             const rest = cart.filter(product => product._id !== selectedProduct._id);
//             exists.quantity = exists.quantity + 1;
//             newCart = [...rest, exists];
//         }
//     setCart(newCart);
//     addToDb(product._id)
//   };
  
//   return (
//    <div className='px-40'>
//      <div>
//       <div className='grid md:grid-cols-1 lg:grid-cols-3 '>
//         <div>
//         <img className='w-96 h-96 mt-10' src={product.img} alt="" />
//         <div>
//         <button onClick={ () => handleAddToCart(product)} className="btn inline-block hover:bg-orange-500 bg-lime-500 text-xl font-bold text-white mt-5 w-96">Add To Cart</button>
//         <label 
//         onClick={() => setVendible(product)}
//         htmlFor="booking-modal" 
//         className="btn hover:bg-orange-500 bg-lime-500 text-xl font-bold text-white mt-5 w-96">Buy Now</label>
//         </div>
//         </div>
//         <div className='pt-32 ml-10 mt-10'>
//           <h1 className='text-2xl font-bold'>{product.name}</h1>
//           <p className='text-2xl my-3'>Price: <span className='text-amber-300'>${product.price}</span></p>
//           <h3 className='text-2xl'>Stock: <span>{product.stock}</span></h3>
//         </div>
//         <div>
//           <Cart
//           cart={cart}
//           >
//             <Link to='/order'>
//               <button className='text-white bg-lime-400 rounded-lg p-3 mt-5'>Order Review</button>
//             </Link>
//           </Cart>
//         </div>
//       </div>
//     </div>
//     <div>
//     <h1 className='text-2xl font-bold'>Product Description</h1>
//       <p>{product.description}</p>
//       </div>
//       {
//         vendible && <BookingModal setVendible={setVendible} vendible={vendible}></BookingModal>
//       }
//    </div>
//   );
// };

// export default ProductDetail;