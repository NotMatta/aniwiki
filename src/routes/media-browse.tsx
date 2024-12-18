import { useState } from "react";
import MediaQuery from "../components/media-query";

const MediaBrowse = ({initType}:{initType:string}) => {
    const [type,setType] = useState<string>(initType.toUpperCase());
    const [page,setPage] = useState({anime:(initType == "anime"),manga:(initType == "manga")}); //to prevent spam
    return(
        <div className="flex flex-col gap-2 p-4 h-full">
            <div className="flex items-center gap-2 text-3xl">
                <label htmlFor="type">Browse:</label>
                <select name="type" id="type" className="p-2 rounded-xl bg-[rgba(0,0,0,0.5)]" value={type} onChange={(e) => {
                    if(e.target.value == "ANIME") setPage({...page,anime:true})
                    else setPage({...page,manga:true})
                    setType(e.target.value)
                }}>
                    <option disabled value="none">Choose</option>
                    <option value="ANIME">Anime</option>
                    <option value="MANGA">Manga</option>
                </select>
            </div>
            {page.anime && <MediaQuery hide={type != "ANIME" ? "invisible pointer-events-none -z-50 h-0 overflow-none" : ""} type="ANIME"/>}
            {page.manga && <MediaQuery hide={type != "MANGA" ? "invisible pointer-events-none -z-50 h-0 overflow-none" : ""} type="MANGA"/>}
        </div>
    )
}

export default MediaBrowse;
