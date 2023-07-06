import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const { _id, img, name, price} = product;

  const navigate = useNavigate();

  const navigateToProductDetail = id => {
    navigate(`/product/${id}`)
  }
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-accent text-2xl">{name}</h2>
    <p className='text-accent font-bold text-2xl'>$ {price}</p>
    <div className="card-actions justify-end">
      <button onClick={ () => navigateToProductDetail(_id)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Product;