import {useAuth} from "../../context/Auth";
import {Navigate} from "react-router-dom"

const RequireAuth = ({ children, isAuth = true, redirectTo }: any) => {
    const auth = useAuth();

    if (isAuth) {
        return auth ? children : <Navigate to={redirectTo} replace />
    }
    return !auth ? children : <Navigate to={redirectTo} replace />

}

export default RequireAuth;
