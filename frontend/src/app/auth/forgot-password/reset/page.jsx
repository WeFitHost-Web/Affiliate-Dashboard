'use client';
import AsyncButton from '../../../components/async-button';
   import { useEffect, useState } from 'react';
import Link from 'next/link';
import CustomInput from '../../../components/custom-input';
const ResetPassword = () => {
   const [error, setError] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('test@test.com');
   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
   const [submitting, setSubmitting] = useState(false);
   const [isSuccessful, setIsSuccessful] = useState(false);
   const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
   };

   // useEffect(() => {
   //    const storedEmail = localStorage.getItem('email');
   //    if (storedEmail) {
   //       setEmail(storedEmail);
   //    } else {
   //       setError('Email not found, please return to login');
   //    }
   // }, []);
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!password) {
         setError('Password is required');
         return;
      }
      
      setSubmitting(true);
      try {
         const res = await fetch('/api/auth/forgot-password/reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password, email }),
         });
         if (res.ok) {
            setSubmitting(false);
            setIsSuccessful(true);
            setTimeout(() => {
               window.location.href = '/';
            }, 3000);
            localStorage.removeItem('email');
         } else {
            const data = await res.json();
            setError(data.error || 'Password reset failed');
            setSubmitting(false);
         }
      } catch (err) {
         setSubmitting(false);
      }
   };
   return (
      
         <div className="flex-col gap-4  w-[400px]  flex items-center relative z-10   bg-white py-6 px-4  rounded-sm ">
            <div className="flex flex-col gap-3">
               <h1 className="  neue-thin tracking-wide text-center text-[35px] uppercase leading-none ">
                  Reset password
               </h1>
               <h1 className="text-sm text-center text-grey">
                  Enter your new password below
               </h1>
            </div>
            <div className="flex flex-col w-full  gap-6 ">
               <div className="flex flex-col w-full gap-6 ">
                  <CustomInput
				value={password}
				label="Password"
				setValue={setPassword}
				setError={setError}
				errorContent="All fields are required"
				classname_override="!bg-lightGrey"
				error={error}
				name="password"
				inputType={isPasswordVisible ? 'text' : 'password'}
				password
				toggleVisibility={togglePasswordVisibility}
				passwordVisible={isPasswordVisible}
				serverError={['Incorrect password. Please try again.']}
			/>
                  
               </div>
               {error && (
                  <p className="text-sm text-center  text-red">{error}</p>
               )}
              
<AsyncButton
               buttonType='submit'
				action="Reset"
				loading={submitting}
				classname_override="max-sm:!h-[40px] duration-150 "
				success={isSuccessful}
				disabled={submitting || !password}
			
				onClick={() => handleSubmit()}
			/>

            </div>

            <Link
               href={'/auth/log-in'}
               className="text-sm text-primary  link-style-blue"
            >
               Return to login
            </Link>
         </div>
    
   );
};

export default ResetPassword;
