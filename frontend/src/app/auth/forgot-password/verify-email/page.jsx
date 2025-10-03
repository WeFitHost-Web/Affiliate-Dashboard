'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AsyncButton from '../../../components/async-button';
const VerifyEmail = () => {
   const [error, setError] = useState('');
   const [isVerifying, setIsVerifying] = useState(false);
   const [email, setEmail] = useState('test@test.com');
   const [isSuccessful, setIsSuccessful] = useState(false);
   const [verificationCode, setVerificationCode] = useState(Array(4).fill(''));
   // useEffect(() => {
   //    const storedEmail = localStorage.getItem('email');
   //    if (storedEmail) {
   //       setEmail(storedEmail);
   //    } else {
   //       setError('Email not found. Please go back to sign up.');
   //    }
   // }, []);
   const isVerificationCodeComplete = () => {
      return verificationCode.every((digit) => digit.length === 1);
   };

   const handleChange = (e, index) => {
   
      setError('');
      const value = e.target.value;

      if (/^[0-9]$/.test(value) || value === '') {
         const newCode = [...verificationCode];
         newCode[index] = value;
         setVerificationCode(newCode);

         if (value && index < 5) {
            document.getElementById(`code-input-${index + 1}`)?.focus();
         }
      }
   };

   const handleKeyDown = (e, index) => {
   
      if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
         document.getElementById(`code-input-${index - 1}`)?.focus();
      }
   };
   const handlePaste = (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData('Text').trim();
      const isValid = /^[0-9]*$/.test(pastedData);

      if (isValid) {
         const newCode = [...verificationCode];
         pastedData.split('').forEach((char, i) => {
            if (i < newCode.length) newCode[i] = char;
         });
         setVerificationCode(newCode);

         const lastFilledIndex = Math.min(
            pastedData.length - 1,
            verificationCode.length - 1
         );
         document.getElementById(`code-input-${lastFilledIndex}`)?.focus();
      }
   };
   const handleVerify = async () => {
      if (!email) {
         setError('Email not found. Please go back to sign up.');
         return;
      }
      if (!isVerificationCodeComplete()) {
         setError('Please enter all 6 digits of the verification code.');
         return;
      }
      setIsVerifying(true);
      try {
         const codeString = verificationCode.join('');
         const response = await fetch(
            '/api/auth/forgot-password/verify-email',
            {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ email, verificationCode: codeString }),
            }
         );

         const data = await response.json();

         if (response.ok) {
            setIsSuccessful(true);
            setTimeout(() => {
               window.location.href = '/auth/forgot-password/reset';
            }, 2000);
         } else {
            setError(data.error || 'Verification failed');
         }
      } catch (error) {
         setError('An error occurred during verification');
      } finally {
         setIsVerifying(false);
      }
   };

   return (
     
         <div className="flex-col gap-4   w-[400px]  flex items-center relative z-10   bg-white py-4 px-4  rounded-sm ">
            <h1 className="   tracking-wide text-center text-[40px] uppercase  leading-none">
               verification
            </h1>

            <div className="flex flex-col gap-4 w-full  items-center">
               <h1 className="text-base   text-black  leading-6  text-center md:text-sm">
                  We{`'`}ve sent you a mail at
                 
                  <span className="font-semibold text-sm  "> {email||'test@test.com'}</span>
                  <br />
                  Enter the code in the field below
               </h1>
               <div className="flex flex-col">
                  <div className="flex justify-between gap-2 w-full text-white">
                     {verificationCode.slice(0, 4).map((digit, index) => (
                        <input
                           key={index}
                           id={`code-input-${index}`}
                           type="text"
                           value={digit}
                           onChange={(e) => handleChange(e, index)}
                           onPaste={handlePaste}
                           onKeyDown={(e) => handleKeyDown(e, index)}
                           maxLength={1}
                           className={`text-[22px]   outline-none px-2 py-3 rounded-md bg-lightGrey text-center ring focus:ring-2 ring-primary   w-[55px]  h-[56px] poppins text-black grow-0 shrink-0 max-w-[55px]  max-h-[56px]  ${
                              error && 'border border-red'
                           }`}
                           placeholder="*"
                        />
                     ))}
                  </div>
               </div>
               {error && (
                 
                     <h1 className="text-sm text-danger">{error}</h1>
               )}
            
                <AsyncButton
               buttonType='submit'
				action="Continue"
				loading={isVerifying}
				classname_override="max-sm:!h-[40px] duration-150 "
				success={isSuccessful}
				disabled={isVerifying || !isVerificationCodeComplete()}
				onClick={handleVerify}
			/>
            </div>

            <Link href={'/auth/log-in'} className=" text-sm text-primary  link-style-blue">
               Return to login
            </Link>
         </div>
   );
};

export default VerifyEmail;
