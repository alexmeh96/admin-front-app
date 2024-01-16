import {createBrowserRouter, createHashRouter, Navigate} from "react-router-dom"
import {App} from "../App";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PrivatePage from "../pages/PrivatePage/PrivatePage";
import PublicPage from "../pages/PubluicPage/PublicPage";
import RequireAuth from "../components/auth/RequireAuth";

// export const router = createBrowserRouter([
export const router = createHashRouter([
    {
        // element: <Layout />,
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            // {path: "/", element: <RequireAuth redirectTo="/login"><HomePage/></RequireAuth>},
            {path: "/", element: <HomePage/>},
            {path: "/private", element: <RequireAuth redirectTo="/login"><PrivatePage/></RequireAuth>},
            {path: "/private/:ticker", element: <RequireAuth redirectTo="/login"><PrivatePage/></RequireAuth>},
            {path: "/public", element: <PublicPage/>},
            {path: "*", element: <Navigate to="/" replace/>},

        ],
    },
    {path: "/login", element: <RequireAuth redirectTo="/" isAuth={false}><LoginPage/></RequireAuth>},
    {path: "*", element: <Navigate to="/login" replace/>},


])
