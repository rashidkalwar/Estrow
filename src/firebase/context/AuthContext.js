import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getAuth,
} from 'firebase/auth';
import firebaseApp from '../clientApp';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const auth = getAuth(firebaseApp);

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const router = useRouter();

  const createUserwithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => {
        toast('Signed in with Google successfully!', {
          icon: '✅',
        });
        router.push('/');
      })
      .catch((error) => {
        toast(error.message.slice(9), {
          icon: '⛔️',
        });
      });
  };

  const signInWithTwitter = () => {
    signInWithPopup(auth, new TwitterAuthProvider())
      .then(() => {
        toast('Signed in with Twitter successfully!', {
          icon: '✅',
        });
        router.push('/');
      })
      .catch((error) => {
        console.log(error.message);
        toast(error.message.slice(9), {
          icon: '⛔️',
        });
      });
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithEmailPassword,
        createUserwithEmailPassword,
        signInWithGoogle,
        signInWithTwitter,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
