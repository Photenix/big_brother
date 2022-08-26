import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { providerGoogle } from '../../firebase.config'

import { typesLogin } from "../types/types"

export const logoutAsync = () => {
    return(dispatch) => {

       const auth = getAuth();
       signOut(auth)

        .then((user) => {
            dispatch(logout)
        })
        .catch(error => {
            console.log(error)
        })
    }
}
export const logout = () => {
    return{
        type: typesLogin.logout,
    }
}

export const loginEmailyPassAsync =(email, password) =>{
    return(dispatch)=>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(login(user.email, user.password))
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

export const loginGoogleAsync =()=>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithPopup(auth, providerGoogle)
        .then(({user})=>{
            dispatch(login(user.email, ''))
        })
        .catch(error=>{
            console.log(error)
        })
    }
}


export const login = (email, password) =>{
    return{
        type: typesLogin.login, 
        payload: {
            email, 
            password
        }
    }
}