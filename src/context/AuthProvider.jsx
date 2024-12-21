import React from "react";
import AuthContext from "./AuthContext";

const AuthProvider=({children})=>{
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return(
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;