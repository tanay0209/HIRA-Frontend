// import React from "react";
// import { Navigate } from "react-router-dom";
// import { isAuthenticated } from "./index";

const AdminRoute = ({ children }) => {
    // return isAuthenticated() && isAuthenticated().user.role === 1 ? (
    //     <>{children}</>
    // ) : (
    //     <Navigate to="/" />
    // );
    return <>{children}</>
};

export default AdminRoute;


