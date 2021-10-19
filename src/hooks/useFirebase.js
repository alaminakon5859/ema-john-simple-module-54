import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initializeathentication from "../firebase/firebase.init";


initializeathentication();
const useFirebase=()=>{
    const [user, setUser]=useState({});

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    const signinusinggoogle=()=>{
       return signInWithPopup(auth, googleprovider)
               
            }


     const logOut=()=>{
        signOut(auth)
        .then(() => {
           setUser({});

          })
          
     }


     useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
          });
          return unsubscribe;
     },[])       
   return{
       user,
       logOut,
       signinusinggoogle,

   }
}


export default useFirebase;