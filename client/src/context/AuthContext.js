import React from "react";
import useFirebase from "../hooks/useFirebase";

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={useFirebase()}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext };
export default AuthProvider;