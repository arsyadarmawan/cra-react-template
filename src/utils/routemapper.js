import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Category from '../pages/category';
import Post from '../pages/post';
import Member from '../pages/member';
import Login from '../pages/login';
import GuardRoute from '../components/guardroute';

const components = {
    Home,
    About,
    Category,
    Post,
    Member,
    Login,
    GuardRoute
};

const routeMapper = (routes, isLogin, setLogin) => {
    return routes.map((route, index) => {
        const Component = components[route.element];
        const props = route.props || {};

        if (route.element === 'GuardRoute') {
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={<GuardRoute {...props} isLogin={isLogin}><Member /></GuardRoute>}
                />
            );
        }

        if (route.element === 'Login') {
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={<Component {...props} setLogin={setLogin} />}
                />
            );
        }

        return <Route key={index} path={route.path} element={<Component {...props} />} />;
    });
};

export default routeMapper;