import React from 'react';
import { useUser, SignOutButton, UserButton } from '@clerk/clerk-react';

const HomePage = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Welcome, {user?.fullName || 'User'}!</h1> 

      {user && <UserButton />}

      {!user && <p>Please sign in to access your account.</p>}

      <SignOutButton />
    </div>
  );
};

export default HomePage;
