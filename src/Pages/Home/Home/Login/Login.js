import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import 'animate.css';
import auth from '../../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Login = () => {
  const [ gUser, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    // loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  // const [token] = useToken(user || gUser);
 
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if(user || gUser){
    navigate(from, { replace: true });
  }
  // if(loading || gLoading){
  //   return <Loading></Loading>
  // }
  let signInError;
  if(error || gError){
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
  }
  const onSubmit = data =>{
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };

  //***The function has not finished the work*******
  
  return (
  <div className='flex justify-center items-center my-20'>
    <div className="h-full  animate__animated animate__zoomIn card w-96 bg-gray-300 shadow-xl">
  <div className='card  w-96  shadow-2xl'>
  <div className="card-body w-96">
  <h2 className="text-center text-accent text-2xl font-bold">Login</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-black font-bold ">Email</span>
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
      {signInError}
        <input className='btn hover:bg-slate-600 bg-orange-400 w-full max-w-xs uppercase orange-400 text-white font-extrabold' type='submit' value='Login'/>
    </form>
    <p className='text-accent'>New e-Bazaar? <Link to="/signup" className='text-blue-400'>Create New Account</Link></p>
  </div>
  </div>
</div>
  </div>
 

  );
};

export default Login;