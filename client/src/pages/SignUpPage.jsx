import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <SignUp signInUrl='/signin' forceRedirectUrl='/'/>
    </div>
  );
};

export default SignUpPage;
