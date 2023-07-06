import React from 'react';
import Product from './Product';
import useProducts from '../../../Hooks/useProducts';

const Products = () => {
  const [products] = useProducts();
  return (
    <div>
      <h1 className='text-center mt-16 mb-8 text-2xl font-bold  text-primary'>Shop</h1>
      <div className='mt-11  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
      {
        products.map(product => <Product
        key={product._id}
        product={product}
        ></Product>)
      }
      </div>
    </div>
  );
};

export default Products;