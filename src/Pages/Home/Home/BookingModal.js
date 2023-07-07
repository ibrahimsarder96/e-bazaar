import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import app from '../../../firebase.init';


const BookingModal = ({vendible, setVendible}) => {
  const {_id, name, price ,stock} = vendible;
  const [user, loading] = useAuthState(app);

console.log(user)
  const handleOrder = event =>{
    event.preventDefault()
    const order = {
      productId: _id,
      stock: stock,
      product: name,
      price,
      customer:user.email,
      customerName:event.target.name.value,
      quantity:event.target.quantity.value,
      country:event.target.country.value,
      date: event.target.date.value,
      code: event.target.code.value,
      phone: event.target.phone.value
    }
    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.success){
        toast(`Order Successful`);
      }
      else{
        toast.error (`Stock Not Available`);
      }
      setVendible(null);
    })
  }

  return (
    <div className=''>
    <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        
        <div className="modal-box bg-slate-800">
        <label for="booking-modal" className="btn hover:bg-orange-500 hover:text-white bg-white btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-white text-lg">Booking for: <span className='text-purple-400'>{name}</span></h3>
          <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-5'> 
          <input type="emil" name="email"  readOnly value={user?.email || ''} className="input input-bordered w-full max-w-xs border-lime-400 bg-white text-black text-lg"/>
          <input type="text" name="quantity" placeholder='product quantity' className="input input-bordered w-full max-w-xs border-lime-400 bg-white text-black text-lg"/>
          <input type="text" name="name" placeholder='name' className="input input-bordered w-full max-w-xs border-lime-400 bg-white text-black text-lg"/>
          <input type="text" name="country" placeholder='country' className="input input-bordered w-full max-w-xs border-lime-400 bg-white text-black text-lg"/>
          <input type="text" name="date" placeholder="date" className="input input-bordered w-full max-w-xs border-lime-400 bg-white text-black text-lg"/>
          <input type="text" name="code" placeholder='divison code' className="input input-bordered w-full max-w-xs border-lime-400 bg-white text-black text-lg"/>
          <input type="text" name="phone" placeholder="Phone" className="input input-bordered w-full max-w-xs border-lime-400 bg-white text-black text-lg"/>
          <input type="submit" value="Submit" className="bg-orange-400 rounded-md w-full max-w-xs border-lime text-white p-3 text-xl font-bold cursor-pointer"/>
          </form>
        </div>
      </div>
  </div>
  );
};

export default BookingModal;