import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function withAuth(Component) {
  return function ProtectedRoute(props) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const profile = useSelector((state) => state.profile);

    useLayoutEffect(() => {
      if (!profile?.email) {
        navigate("/login");
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
      return () => {
        setIsAuthenticated(false);
      };
    }, [profile, pathname]);

    return isAuthenticated ? <Component {...props} /> : null;
  };
}
