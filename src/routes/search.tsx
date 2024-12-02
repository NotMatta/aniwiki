import { useQuery } from "@apollo/client";
import { SEARCH_ANIME } from "../queries/search";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const Search = () => {
    const {key} = useParams()
    const navigate = useNavigate()
    const { data, error, loading} = useQuery(SEARCH_ANIME, {
        variables: {
            search: key,
            type: "ANIME",
            perPage: 10
        }
    })
    useEffect(() => {
        console.log(data)
    }, [data])
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error...</div>
    return (
        <div>
            <button className="p-2 bg-gray-200 rounded-xl m-2" onClick={() => navigate("/")}>Go back</button>
            {data?.Page.media.map((anime: {id:number,title:{english:string,native:string},coverImage:{large:string}}) => (
                <div key={anime.id}>
                    <img src={anime.coverImage.large} alt={anime.title.english} className=""/>
                    <h2>{anime.title.english || anime.title.native}</h2>
                </div>
            ))}
        </div>
    );
}

export default Search;
