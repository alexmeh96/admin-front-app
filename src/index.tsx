import {createRoot} from "react-dom/client";
import {StrictMode} from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/Router";
import {AuthProvider} from "./context/Auth";
import "./style/globals.css"

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

container.render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
)
