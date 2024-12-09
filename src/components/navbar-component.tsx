import { BookOpen, Search, TvMinimal } from "lucide-react"
import { Link } from "react-router"

const NavBar = () => {
    return(
        <div className="w-full flex justify-between min-h-14 items-center px-2">
            <p className="w-1/2">Logo</p>
            <div className="flex gap-4 [&_p]:hidden md:[&_p]:block [&>a]:gap-2 [&>a]:flex">
                <Link to="/search"><Search/><p>Search</p></Link>
                <Link to="/browse/anime/"><TvMinimal/><p>Anime</p></Link>
                <Link to="/browse/manga/"><BookOpen/><p>Manga</p></Link>
            </div>
        </div>
    )
}

export default NavBar
