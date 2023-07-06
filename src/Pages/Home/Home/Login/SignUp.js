import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
const SignUp = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, updError] = useUpdateProfile(auth);
  const [agree, setAgree] = useState(false);
  // const [token] = useToken(user || gUser);
  
  const navigate = useNavigate();
  // const location = useLocation();
  // let from = location.state?.from?.pathname || "/";

  if(user){
    console.log(user)

    // navigate(from, { replace: true });
  }
 
  let signInError;
  if(error  || updError){
    signInError = <p className='text-red-500'><small>{error?.message}</small></p>

  }
  const onSubmit = async(data) =>{
    createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name});
      navigate('/')
  };
  return (
    <div className="card h-screen justify-center items-center">
    <div className='card w-100 animate__animated animate__zoomIn bg-gray-300 shadow-2xl'>
    <div className="card-body w-96">
    <h2 className="text-center text-accent text-2xl font-bold">Sign UP</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black font-bold">Name</span>
          </label>
          <input 
          type="text" 
          placeholder="write your name" 
          className="input input-bordered bg-white text-black shadow-2xl w-full max-w-xs"
          {...register("name",{
            required: {
              value: true,
              message: 'Name is Required'
            }
          })}
          />
          <label className="label">
          {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
          </label>
        </div>
          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black font-bold">Email</span>
          </label>
          <input 
          type="email" 
          placeholder="write your email" 
          className="input input-bordered bg-white text-black shadow-2xl w-full max-w-xs"
          {...register("email",{
            required: {
              value: true,
              message: 'Email is Required'
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: 'Provide a valid Email' 
            }
          })}
          />
          <label className="label">
          {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
          </label>
        </div>
          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black font-bold">Password</span>
          </label>
          <input 
          type="password" 
          placeholder="write your password" 
          className="input input-bordered bg-white text-black shadow-2xl w-full max-w-xs"
          {...register("password",{
            required: {
              value: true,
              message: 'Password is Required'
            },
            minLength: {
              value: 6,
              message: 'Must be 6 character or longer' 
            }
          })}
          />
         
          <label className="label">
          {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
          </label>
        </div>
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        <label className={`pl-2 ${agree ? 'text-green-400' : 'text-red-500'}`} htmlFor="terms">Accept OnlineExplore terms and Condition</label>
        {signInError}
          <input
          disabled={!agree} 

          className='btn disabled:bg-slate-500 disabled:text-white hover:bg-orange-400 bg-orange-400 w-full max-w-xs uppercase orange-400 font-extrabold mt-2' 
          type='submit' 
          value='Sign UP'/> 
      </form>
      <p className='text-accent'>New e-Bazaar? <Link to="/login" className='text-blue-400'>Please Login</Link></p>
     
    </div>
    </div>
  </div>
  );
};

export default SignUp;