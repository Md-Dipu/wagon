import React from "react";
import { AuthContext } from "../Context/AuthContext";

const useAuth = () =>
    React.useContext(AuthContext);

export default useAuth;