import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if(loading){
    return <Loading></Loading>
}

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
