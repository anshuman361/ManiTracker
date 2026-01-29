// import { Navigate } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { getUserFromStorage } from "../../utils/getUserFromStore";

// import { getUserFromStorage } from "../utils/getUserFromStore";

const AuthRoute = ({ children }) => {
  const user = getUserFromStorage();

  // NOT logged in → go to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in → allow access
  return children;
};

export default AuthRoute;
