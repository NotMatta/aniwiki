import { useQuery } from "@apollo/client"
import { GET_POPULAR_ANIME, GET_TOP_ANIME, GET_TRENDING_ANIME, GET_UPCOMING_ANIME } from "../queries/anime-query"
import { useEffect } from "react"
import { useNavigate } from "react-router"

type media = {
    id:string,
    coverImage:{extraLarge:string},
    title:{romaji:string}
}

const DisplayAnime = ({media}:{media:media[]}) => {
    const navigate = useNavigate()
    return(
        <div className="flex w-full justify-around md:max-h-[350px] md:overflow-y-hidden flex-wrap gap-2">
            {media.map((anime:{id:string,coverImage:{extraLarge:string},title:{romaji:string}}) => (
                <div onClick={() => navigate("/anime/"+anime.id)} key={anime.id} className="w-[200px] flex-shrink-0 p-2 hover:bg-[#DDDDDD] rounded">
                    <img src={anime.coverImage.extraLarge} alt={anime.title.romaji} className="w-[200px] h-[300px] object-cover"/>
                    <h3 className="h-12">{anime.title.romaji}</h3>
                </div>
                ))
            }
        </div>
    )

}

const TrendingAnime = () => {
    const {data,loading,error} = useQuery(GET_TRENDING_ANIME)
    useEffect(() => {
        console.log(data)
    },[data])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error</div>

    return <DisplayAnime media={data.Page.media}/>
}

const PopularAnime = () => {
    const {data,loading,error} = useQuery(GET_POPULAR_ANIME)
    useEffect(() => {
        console.log(data)
    },[data])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error</div>

    return <DisplayAnime media={data.Page.media}/>
}

const UpcomingAnime = () => {
    const {data,loading,error} = useQuery(GET_UPCOMING_ANIME)
    useEffect(() => {
        console.log(data)
    },[data])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error</div>

    return <DisplayAnime media={data.Page.media}/>
}

const TopAnime = () => {
    const {data,loading,error} = useQuery(GET_TOP_ANIME)
    useEffect(() => {
        console.log(data)
    },[data])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error</div>

    return <DisplayAnime media={data.Page.media}/>
}

const AnimeQuery = () => {
    return(
        <div className="[&_img]:rounded-md">
            <h1 className="text-xl font-bold">Trending Anime</h1>
            <TrendingAnime />
            <h1 className="text-xl font-bold">Popular Anime</h1>
            <PopularAnime />
            <h1 className="text-xl font-bold">Upcoming Anime</h1>
            <UpcomingAnime />
            <h1 className="text-xl font-bold">Top Anime</h1>
            <TopAnime />
        </div>
    )
}

export default AnimeQuery;
