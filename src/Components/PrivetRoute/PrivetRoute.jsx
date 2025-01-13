import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  return (
    <Navigate
      to="/Login"
      state={{ from: location }}
      replace
    ></Navigate>
  );
};

export default PrivetRoute;
