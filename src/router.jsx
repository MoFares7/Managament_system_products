import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from './view/LoginPage';
import DashboardPage from './view/DashboardPage';
import SurveysPage from './view/SurveysPage';
import SignUpPage from './view/SignUpPage';
import DefaultLayout from './components/DefaultLayout';
import { Children } from "react";
import GuestLayout from './components/GuestLayout';
import SurvyesViewPage from "./view/SurveysViewPage";
import SurveyPublicView from "./view/SurveyPublicView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Navigate to="/" />
            },
            {
                path: "/",
                element: <DashboardPage />,
            },
            {
                path: "/surveys",
                element: <SurveysPage />,
            },
            {
                path: "/surveys/create",
                element: <SurvyesViewPage />,
            },
            {
                path: "/surveys/:id",
                element: <SurvyesViewPage />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/signup",
                element: <SignUpPage />,
            },
        ],
    },
    {
        path: "/survey/public/:slug",
        element: <SurveyPublicView />,
    },
]);

export default router;