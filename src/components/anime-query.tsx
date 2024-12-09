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
        <div className="flex w-full justify-around md:max-h-[350px] md:overflow-y-hidden flex-wrap gap-2">
            {media.map((page) => (
                <div onClick={() => navigate(`/${page.type.toLowerCase()}/${page.id}`)} key={page.id} className="w-[200px] flex-shrink-0 p-2 hover:bg-[#DDDDDD] rounded">
                    <img src={page.coverImage.extraLarge} alt={page.title.romaji} className="w-[200px] h-[300px] object-cover"/>
                    <h3 className="h-12">{page.title.romaji}</h3>
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

const MediaQuery = ({type}:{type:string}) => {
    return(
        <div className="[&_img]:rounded-md">
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
