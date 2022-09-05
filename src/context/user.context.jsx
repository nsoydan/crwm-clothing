import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase.utils";


export const UserContext=createContext({
    currentUser: null,
    setCurrentUser: ()=>null,                   // initial values
});


export const UserProvider = ({children})=>{
    const [currentUser,setCurrentUser]=useState(null);  
    const value={currentUser,setCurrentUser};
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            console.log("şu an sign in olan user:",user);
            
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    },[]);




    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
} 

