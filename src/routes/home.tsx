import { ChevronRight, GithubIcon, SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router";

const Home = () => {
    return(
        <div className="h-full max-h-full relative flex flex-col w-full items-center justify-center space-y-4">
            <p className="text-center w-10/12 lg:w-2/3 text-4xl md:text-7xl font-extrabold">A Wiki for all your Anime and Manga</p>
            <div className="flex flex-col md:flex-row gap-4 font-semibold">
                <Link to="/browse/anime" className="cursor-pointer flex items-center gap-1 bg-white text-black hover:invert duration-300 py-2 px-4 text-xl rounded-xl justify-center">Start Browsing <ChevronRight /></Link>
                <a target="_blank" href="https://github.com/NotMatta/aniwiki/"
                    className="flex items-center gap-2 bg-[#101010] py-2 px-4 text-xl rounded-xl shadow hover:shadow-white justify-center">
                    Source
                    <GithubIcon/>
                    <SquareArrowOutUpRight size={16}/>
                </a>
            </div>
            <div className="absolute bottom-1 left-1 flex items-center">
                <img src="https://anilist.co/img/icons/icon.svg" alt="Anilist Logo" className="w-6 h-6"/>
                <p className="text-sm">Powered by Anilist</p>
            </div>
        </div>
    )
}

export default Home;
