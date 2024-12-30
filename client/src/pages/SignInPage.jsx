import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <SignIn signUpUrl='/signup' forceRedirectUrl='/'/>
    </div>
  );
};

export default SignInPage;
