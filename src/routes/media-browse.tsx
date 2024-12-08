import { useState } from "react";
import AnimeQuery from "../components/anime-query";

const MediaBrowse = ({initType}:{initType:string}) => {
    const [type,setType] = useState<string>(initType);
    return(
        <div className="p-4">
            <div className="flex items-center gap-2 text-3xl">
                <label htmlFor="type">Browse:</label>
                <select name="type" id="type" className="p-2 rounded-xl" value={type} onChange={(e) => setType(e.target.value)} >
                    <option value="ANIME">Anime</option>
                    <option value="MANGA">Manga</option>
                </select>
            </div>
            <AnimeQuery type={type}/>
        </div>
    )
}

export default MediaBrowse;
