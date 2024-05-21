/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react"
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const {users, setUsers} = useState(null);
    const {loading, setLoading} = useState(true)

    const createUsers = (email, password)=>{
        // setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUsers = (email, password)=>{
      return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        users,
        loading,
        createUsers,
        signInUsers
        

    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider