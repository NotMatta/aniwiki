import { BookOpen, Search, TvMinimal } from "lucide-react"
import { Link } from "react-router"

const NavBar = () => {
    return(
        <div className="w-full flex justify-between min-h-14 items-center px-2 lg:px-6">
            <div className="w-1/2">
                <Link to="/"><img className="h-8 font-extrabold text-xl hover:invert duration-300" src="https://github.com/NotMatta/aniwiki/blob/main/public/logo.png?raw=true" alt="AniWiki"/></Link>
            </div>
            <div className="flex lg:gap-4 [&_p]:hidden md:[&_p]:block [&>a]:gap-2 [&>a]:flex [&>a]:p-2">
                <Link to="/search/" className="hover:bg-[rgba(0,0,0,0.5)] duration-300 rounded-xl"><Search/><p>Search</p></Link>
                <Link to="/browse/anime/" className="hover:bg-[rgba(0,0,0,0.5)] duration-300 rounded-xl"><TvMinimal/><p>Anime</p></Link>
                <Link to="/browse/manga/" className="hover:bg-[rgba(0,0,0,0.5)] duration-300 rounded-xl"><BookOpen/><p>Manga</p></Link>
            </div>
        </div>
    )
}

export default NavBar
