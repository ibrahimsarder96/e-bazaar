import React from 'react';

const Cart = () => {
  // const {cart} = props;
  // let total = 0;
  // let shipping = 0;
  // let quantity = 0;
  // for(const product of cart){
  //     quantity = quantity + product.quantity;
  //      total = total + product.price * product.quantity;
  //      shipping = shipping + product.shipping;
  // }
  // let tax = parseFloat((total * 0.1).toFixed(2));
  // let grandTotal = total + shipping + tax;
  return (
    <div className=' sticky h-screen text-center'>
      <h1 className=' pt-5 text-2xl font-bold text-orange-500'>Order Summary</h1>
      <div className="pl-3 text-xl">
      {/* <h1 className='mt-5'>Selected Items: {quantity}</h1>
      <p className='mt-5'>Total Price: $ {total}</p>
      <p className='mt-5'>Total Shipping: $ {shipping}</p>
      <p className='mt-5'>Tax: {tax}</p>
      <h5 className='mt-5 font-bold'>Grand Total: {grandTotal.toFixed(2)}</h5>
      {props.children} */}
      </div>
    </div>
  );
};

export default Cart;