import {Routes, Route } from "react-router";
import Home from "./routes/home";
import MediaBrowse from "./routes/media-browse";
import MediaPage from "./routes/media-page";
import SearchPage from "./routes/search-page";

const routes = [
    {path: "/", element: <Home />},
    {path: "/anime/:id", element: <MediaPage format="ANIME"/>},
    {path: "/manga/:id", element: <MediaPage format="MANGA"/>},
    {path: "/browse/anime", element: <MediaBrowse initType="anime" />},
    {path: "/browse/manga", element: <MediaBrowse initType="manga" />},
    {path: "/search/", element: <SearchPage/>},
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

