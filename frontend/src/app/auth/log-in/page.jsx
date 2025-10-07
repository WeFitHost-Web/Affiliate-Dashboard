
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from './../../context/auth-context';
import logo from '~/public/images/logo-icon.png'
import CustomInput from './../../components/custom-input';

import AsyncButton from '../../components/async-button';
const Login = () => {
   const { createPassword, setCreatePassword } = useUser();
   const [error, setError] = useState('');

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
  

   const [submitting, setSubmitting] = useState(false);
   const [successful, setSuccessful] = useState(false);
   const router = useRouter();
   const handleSubmit = async (e) => {
      e.preventDefault();

      if (submitting) return;
      setError('');
      setSubmitting(true);

      try {
         const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email,password}),
         });

         if (!res.ok) {
            const error = await res.json();
            setError(error?.error || 'An error occurred during signup.');
            return;
         }

         window.dispatchEvent(new CustomEvent('userUpdated'));
         window.dispatchEvent(new CustomEvent('usersUpdated'));
         setSuccessful(true);

         const redirectUrl =
            new URLSearchParams(window.location.search).get('redirect') || '/';

         setTimeout(() => {
            router.push(redirectUrl);
         }, 2000);
      } catch (err) {
         setError(err.message || 'Something went wrong.');
      } finally {
         setSubmitting(false);
      }
   };
   useEffect(() => {
      if (
         error ===
         'This email is registered with Google. Please log in using Google or set a password.'
      ) {
         setCreatePassword(true);
      } else {
         setCreatePassword(false);
      }
   }, [error]);
   const [redirectUrl, setRedirectUrl] = useState('/');

   useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectParam = urlParams.get('redirect') || '/';
      setRedirectUrl(redirectParam);
   }, [typeof window !== 'undefined' ? window.location.search : null]);


   const handleSignupRedirect = () => {
      router.push(`/auth/sign-up?redirect=${encodeURIComponent(redirectUrl)}`);
   };
   const validErrors = [
      'An error occurred during login.',
      'No account found with this email address.',
   ];

   const emailErrors = [
		'No account found with this email address.',
		'This email is registered with Google. Please log in using Google or set a password.',
	];
	const handledErrors = [
		...emailErrors,
		'Incorrect password. Please try again.',
   ];
   
   const [passwordVisible, setPasswordVisible] = useState(false);
	const toggleVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

   return (
    
         <div className="flex-col gap-8  w-[400px]  flex items-center relative z-10 bg-white py-4 px-4  rounded-sm ">
         <div className="flex items-center gap-2 ">
            <Image alt="logo" src={logo} className='w-10' />
            <div className='flex flex-col leading-none'>
  <h1 className="text-center  text-2xl  poppins-bold leading-none">
                  WeFitHost
               </h1>
               {/* <button
                  onClick={handleSignupRedirect}
                  className=" text-sm text-green text-center pb-3 "
               >
                  Create account instead?
               </button> */}
            <span className='text-sm leading-none'>Affiliate Dashboard</span>
            </div>
             
            </div>
            <form
               className="flex flex-col gap-4     items-center justify-center w-full "
               onSubmit={handleSubmit}
         >
            
               <CustomInput
				value={email}
				setValue={setEmail}
				setError={setError}
				errorContent="All fields are required"
				classname_override="!bg-lightGrey"
				error={error}
				label="Email Address"
				inputType="email"
				required={true}
				name="email"
				serverError={emailErrors}
			/>
              <CustomInput
				value={password}
				label="Password"
				setValue={setPassword}
				setError={setError}
				errorContent="All fields are required"
				classname_override="!bg-lightGrey"
				error={error}
				name="password"
				inputType={passwordVisible ? 'text' : 'password'}
				password
				toggleVisibility={toggleVisibility}
				passwordVisible={passwordVisible}
				serverError={['Incorrect password. Please try again.']}
			/>
               {validErrors.includes(error) && (
                  <span className="text-center text-sm text-red">{error}</span>
            )}
            

            <AsyncButton
               buttonType='submit'
				action="Log In"
				loading={submitting}
				classname_override="max-sm:!h-[40px] hover:!bg-darkPurple duration-150 "
				success={successful}
			
				onClick={() => handleSubmit()}
			/>
            
            </form>
<div className='flex flex-col gap-1 items-start w-full'>
            <Link
               href={'/auth/forgot-password'}
               className=" text-primary    text-sm  text-center max-md:text-xs link-style-blue"
            >
               {createPassword ? 'Set password?' : 'Forgot password?'}
         </Link>
          <span
             
               className="  text-sm  text-center max-md:text-xs"
            >
            Don't have an account? <Link href={'/auth/sign-up'} className="link-style-blue text-primary  ">Sign up</Link>
            </span>
            </div>
         </div>
   
   );
};

export default Login;
