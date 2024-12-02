import { useState } from "react";
import AnimeQuery from "../components/anime-query";

const Search = () => {
    const [type,settype] = useState("ANIME");
    return(
        <div className="p-4">
            <div className="flex items-center gap-2 text-3xl">
                <label htmlFor="type">Browse:</label>
                <select name="type" id="type" className="p-2 rounded-xl" value={type} onChange={(e) => settype(e.target.value)} >
                    <option value="ANIME">Anime</option>
                    <option value="MANGA">Manga</option>
                </select>
            </div>
            <div className={type != "ANIME" ? "hidden" : ""}>
                <AnimeQuery/>
            </div>
        </div>
    )
}

export default Search;
