import { BookOpen, Search, TvMinimal } from "lucide-react"
import { Link } from "react-router"

const NavBar = () => {
    return(
        <div className="w-full flex justify-between min-h-14 items-center px-6">
            <div className="w-1/2">
                <Link to="/"><img className="h-8 font-extrabold text-xl" src="/logo.png" alt="AniWiki"/></Link>
            </div>
            <div className="flex gap-4 [&_p]:hidden md:[&_p]:block [&>a]:gap-2 [&>a]:flex">
                <Link to="/search"><Search/><p>Search</p></Link>
                <Link to="/browse/anime/"><TvMinimal/><p>Anime</p></Link>
                <Link to="/browse/manga/"><BookOpen/><p>Manga</p></Link>
            </div>
        </div>
    )
}

export default NavBar
