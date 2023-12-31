import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';

const menuItems = <>
<li className='text-xl text-whit'><CustomLink className='text-white' to="/">Home</CustomLink></li>
<li className='text-xl text-whit'><CustomLink className='text-white' to="/about">About</CustomLink></li>
<li className='text-xl text-whit'><CustomLink className='text-white' to="/all gift vouchers">All Gift Vouchers</CustomLink></li>
<li className='text-xl text-whit'><CustomLink className='text-white' to="/cart">Cart</CustomLink></li>
</>

const Navbar = () => {
  return (
    <div className="navbar bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
      {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case lg:text-4xl text-primary">
    e-Bazaar</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" text-white menu menu-horizontal px-1">
    {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  <CustomLink className="text-xl" to="/login">Login</CustomLink>
  </div>
</div>
  );
};

export default Navbar;