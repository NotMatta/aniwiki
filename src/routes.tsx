import {Routes, Route } from "react-router";
import Home from "./routes/home";
import Search from "./routes/search";
import AnimePage from "./routes/anime-page";
import MangaPage from "./routes/manga";

const routes = [
    {path: "/", element: <Home />},
    {path: "anime/:id", element: <AnimePage />},
    {path: "manga/:id", element: <MangaPage />},
    {path: "/search", element: <Search />},
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

