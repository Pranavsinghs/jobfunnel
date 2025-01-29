import React from 'react'
import { useUser } from '@clerk/clerk-react';
import { Navigate ,useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const {isSignedIn , user, isLoaded } = useUser();
    const {pathname} = useLocation();

    if(isLoaded && !isSignedIn && isSignedIn!==undefined) {
        return <Navigate to="/?sign-in=true" />
    }
  

    //checking onboarding station
    if(
      user !== undefined && 
      !user?.unsafeMetadata?.role && 
      pathname !== '/Onboarding'

    )
    return <Navigate to="/Onboarding"/>


  return children
}

export default ProtectedRoute