import { useQuery } from "@apollo/client"
import { GET_POPULAR_MEDIA, GET_TOP_MEDIA, GET_TRENDING_MEDIA, GET_UPCOMING_MEDIA } from "../queries/media-query"
import { useEffect } from "react"
import { useNavigate } from "react-router"

type media = {
    id:string,
    coverImage:{extraLarge:string},
    title:{romaji:string}
    type:string
}

const DisplayMedia = ({media}:{media:media[]}) => {
    const navigate = useNavigate()
    return(
        <div className="flex w-full max-w-full md:max-h-[450px] md:overflow-y-hidden gap-1 overflow-y-scroll">
            {media.map((page) => (
                <div onClick={() => navigate(`/${page.type.toLowerCase()}/${page.id}`)} key={page.id} className="w-[140px] md:w-[250px] flex-shrink-0 p-2 rounded md:hover:w-[260px] duration-300">
                    <img src={page.coverImage.extraLarge} alt={page.title.romaji} className="w-full min-h-[200px] md:min-h-[350px] md:max-h-[350px] max-h-[250px] object-cover"/>
                    <h3 className="line-clamp-2">{page.title.romaji}</h3>
                </div>
                ))
            }
        </div>
    )

}

const TrendingMedia = ({type}:{type:string}) => {
    const {data,loading,error} = useQuery(GET_TRENDING_MEDIA,{variables:{type}})
    useEffect(() => {
        console.log(data)
    },[data])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error</div>

    return <DisplayMedia media={data.Page.media}/>
}

const PopularMedia = ({type}:{type:string}) => {
    const {data,loading,error} = useQuery(GET_POPULAR_MEDIA,{variables:{type}})
    useEffect(() => {
        console.log(data)
    },[data])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error</div>

    return <DisplayMedia media={data.Page.media}/>
}

const UpcomingMedia = ({type}:{type:string}) => {
    const {data,loading,error} = useQuery(GET_UPCOMING_MEDIA,{variables:{type}})
    useEffect(() => {
        console.log(data)
    },[data])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error</div>

    return <DisplayMedia media={data.Page.media}/>
}

const TopMedia = ({type}:{type:string}) => {
    const {data,loading,error} = useQuery(GET_TOP_MEDIA,{variables:{type}})
    useEffect(() => {
        console.log(data)
    },[data])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error</div>

    return <DisplayMedia media={data.Page.media}/>
}

const MediaQuery = ({type,hide}:{type:string,hide:string}) => {
    return(
        <div className={`[&_img]:rounded-md grow min-h-0 max-h-full overflow-y-scroll ${hide}`}>
            <h1 className="text-xl font-bold">Trending {type}</h1>
            <TrendingMedia type={type.toUpperCase()}/>
            <h1 className="text-xl font-bold">Popular {type}</h1>
            <PopularMedia type={type.toUpperCase()}/>
            <h1 className="text-xl font-bold">Upcoming {type}</h1>
            <UpcomingMedia type={type.toUpperCase()}/>
            <h1 className="text-xl font-bold">Top {type}</h1>
            <TopMedia type={type.toUpperCase()}/>
        </div>
    )
}

export default MediaQuery;
