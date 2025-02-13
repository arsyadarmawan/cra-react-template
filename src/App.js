import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import routeMapper from './utils/routemapper';
import routesConfig from './route/routes.json';

function App() {
    const [isLogin, setLogin] = React.useState(false);
    const [routes, setRoutes] = React.useState([]);

    React.useEffect(() => {
        setRoutes(routeMapper(routesConfig, isLogin, setLogin));
    }, [isLogin]);

    return (
        <div className="App">
            <ul className="menu">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/member" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Member
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Category
                    </NavLink>
                </li>
                <li>
                    {isLogin ? (
                        <NavLink
                            to="/logout"
                            onClick={(e) => {
                                e.preventDefault();
                                setLogin(false);
                            }}
                        >
                            Logout
                        </NavLink>
                    ) : (
                        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Login
                        </NavLink>
                    )}
                </li>
            </ul>
            <div className="main">
                <Routes>{routes}</Routes>
            </div>
        </div>
    );
}

export default App;