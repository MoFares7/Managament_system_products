import React from "react"
import ReactDOM from "react-dom"
import { RouterProvider } from "react-router-dom"
import { ContextProvider } from "./contexts/ContextProvider.jsx"
import router from "./router.jsx"
import "./index.css";
ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>

    </React.StrictMode>,
    document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals