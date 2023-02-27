import React from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () =>
    React.useContext(AuthContext);

export default useAuth;