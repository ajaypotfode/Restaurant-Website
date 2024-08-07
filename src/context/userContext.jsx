import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signInWithPopup,
         GoogleAuthProvider, 
         onAuthStateChanged} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from './firebase';

export const UserAuthContext = createContext();
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const SignUp = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const Login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const LogOut = async () => {
        try {
          await auth.signOut();
        } catch (error) {
          console.error('Error signing out:', error);
        }
      };
    const googleSignIn=()=>{
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        const verify = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return verify;
    })

  return <UserAuthContext.Provider value={{user,SignUp, Login, googleSignIn, LogOut }}>
                  {children}
         </UserAuthContext.Provider>
}

export default ContextProvider;