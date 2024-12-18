import {Routes, Route } from "react-router";
import Home from "./routes/home";
import MediaBrowse from "./routes/media-browse";
import MediaPage from "./routes/media-page";
import SearchPage from "./routes/search-page";

const routes = [
    {path: "/aniwiki/", element: <Home />},
    {path: "/aniwiki/anime/:id", element: <MediaPage format="ANIME"/>},
    {path: "/aniwiki/manga/:id", element: <MediaPage format="MANGA"/>},
    {path: "/aniwiki/browse/anime", element: <MediaBrowse initType="anime" />},
    {path: "/aniwiki/browse/manga", element: <MediaBrowse initType="manga" />},
    {path: "/aniwiki/search/", element: <SearchPage/>},
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

