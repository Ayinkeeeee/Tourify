import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthStatus() {
    
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setLoggedIn(true)
                setCheckingStatus(false)
            }else{
                setLoggedIn(true)
                setCheckingStatus(false)
            }
        })
    }, [])

  return {loggedIn, checkingStatus}
}
