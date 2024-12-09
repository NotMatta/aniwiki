import {Routes, Route } from "react-router";
import Home from "./routes/home";
import MediaBrowse from "./routes/media-browse";
import MediaPage from "./routes/media-page";

const routes = [
    {path: "/", element: <Home />},
    {path: "/anime/:id", element: <MediaPage format="ANIME"/>},
    {path: "/manga/:id", element: <MediaPage format="MANGA"/>},
    {path: "/browse/:type", element: <MediaBrowse />},
]

export const RoutesProvider = () => {
    return (
            <Routes>
                {routes.map((route,key) => (
                    <Route key={key} {...route} />
                ))}
            </Routes>
    )
}

