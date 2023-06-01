import React from "react";
import {Routes, Route} from 'react-router-dom';
import LoginPage from "./LoginPage/LoginPage";
import {MainRoutes, PagesRoutes} from "../components/Routes";

const AdminPrivateRoute = React.memo(React.lazy(() => import('../components/Layouts/AdminPrivateRoute')));

const Loading = () => <div className="loading-container"><p className="loading">Loading ...</p></div>;

const Main = () => {
    return (
        <React.Suspense fallback={<Loading/>}>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                {MainRoutes.map((route: any) => (
                    <Route path={route.path} key={route.path}
                           element={<AdminPrivateRoute as={route.component} path={route.path}/>}/>
                ))}
                {PagesRoutes.map((route: any) => (
                    <Route path={route.path} key={route.path}
                           element={<AdminPrivateRoute as={route.component} path={route.path}/>}/>
                ))}
            </Routes>
        </React.Suspense>
    );
}
export default Main;