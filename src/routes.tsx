import {Routes, Route } from "react-router";
import Home from "./routes/home";
import Search from "./routes/search";

const routes = [
    {path: "/", element: <Home />},
    {path: "/search/:key", element: <Search />},
]

export const RoutesProvider = () => {
    return (
            <Routes>
                {routes.map((route) => (
                    <Route {...route} />
                ))}
            </Routes>
    )
}

