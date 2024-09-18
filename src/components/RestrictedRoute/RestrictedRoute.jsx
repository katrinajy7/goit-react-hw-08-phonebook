import { useAuth } from '../../redux/hooks/useAuth';
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: component, redirecTo= '/'}) => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Navigate to={redirecTo} /> : <component />;

};