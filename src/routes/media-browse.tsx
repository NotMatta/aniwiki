import { useState } from "react";
import MediaQuery from "../components/media-query";

const MediaBrowse = ({initType}:{initType:string}) => {
    const [type,setType] = useState<string>(initType);
    return(
        <div className="flex flex-col gap-2 p-4 h-full">
            <div className="flex items-center gap-2 text-3xl">
                <label htmlFor="type">Browse:</label>
                <select name="type" id="type" className="p-2 rounded-xl bg-[rgba(0,0,0,0.5)]" value={type} onChange={(e) => setType(e.target.value)} >
                    <option value="ANIME">Anime</option>
                    <option value="MANGA">Manga</option>
                </select>
            </div>
            <MediaQuery type={type}/>
        </div>
    )
}

export default MediaBrowse;
