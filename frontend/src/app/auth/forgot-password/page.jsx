'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useUser } from '../../context/auth-context';
import AsyncButton from '../../components/async-button';
import CustomInput from '../../components/custom-input';

const VerifyEmail = () => {
   const [error, setError] = useState('');

   const { createPassword, setCreatePassword } = useUser();
   const [email, setEmail] = useState('');

   const [submitting, setSubmitting] = useState(false);
   const [successful, setSuccessful] = useState(false);
   const check = !email;
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (check) {
         setSubmitting(false);
         setError('Email is required');
         return;
      }
      setError('');

      setSubmitting(true);
      try {
         const res = await fetch('/api/auth/forgot-password/check-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
         });

         if (res.ok) {
            setSubmitting(false);
            setSuccessful(true);
            localStorage.setItem('email', email);
            setTimeout(() => {
               window.location.href = '/auth/forgot-password/verify-email';
            }, 2000);
         } else {
            const data = await res.json();
            setError(data.error || 'Reset password failed');
            setSubmitting(false);
         }
      } catch (err) {
         setSubmitting(false);
      }
   };
   return (
    
         <div className="flex-col gap-4  w-[400px]  flex items-center relative z-10   bg-white py-6 px-4  rounded-sm ">
            <div className="flex flex-col gap-3">
               <h1 className="  tracking-wide text-center text-[35px] uppercase leading-none ">
                  {createPassword ? 'Set' : 'Forgot'} password
               </h1>
               <h1 className="text-sm text-center text-grey">
                  You’re about to {createPassword ? 'set' : 'reset'} your
                  password. Enter your email so we send instructions to{' '}
                  {createPassword ? 'set' : 'reset'} your password.
               </h1>
            </div>
            <div className="flex flex-col gap-4     items-center justify-center w-full ">
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
			/>

               {error && (
                  <span className="text-center text-sm text-red">{error}</span>
               )}
             
               <AsyncButton
               buttonType='submit'
				action="Continue"
				loading={submitting}
				classname_override="max-sm:!h-[40px] duration-150 "
				success={successful}
			
				onClick={() => handleSubmit()}
			/>

            </div>

            <Link href={'/auth/log-in'} className="text-primary text-sm text-green link-style-blue">
               Return to login
            </Link>
         </div>
   );
};

export default VerifyEmail;
