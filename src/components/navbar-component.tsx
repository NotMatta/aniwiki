import { BookOpen, Search, TvMinimal } from "lucide-react"

const NavBar = () => {
    return(
        <div className="w-full flex justify-between min-h-14 items-center px-2">
            <p className="w-1/2">Logo</p>
            <div className="flex gap-4 [&_p]:hidden md:[&_p]:block [&>a]:gap-2 [&>a]:flex">
                <a href="/search"><Search/><p>Search</p></a>
                <a href="/anime"><TvMinimal/><p>Anime</p></a>
                <a href="/manga"><BookOpen/><p>Manga</p></a>
            </div>
        </div>
    )
}

export default NavBar
