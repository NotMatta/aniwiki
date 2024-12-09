import {useNavigate, useSearchParams } from "react-router";
import SpinPage from "../components/spin-page";
import { SEARCH_MEDIA } from "../queries/media-query";
import { useQuery } from "@apollo/client";
import ErrorPage from "../components/error-page";
import { useEffect } from "react";
import { ChevronRight, ChevronLeft, Search } from "lucide-react";

const Results = ({q,page,type}:{q:string,page:number,type:string}) => {
    const navigate = useNavigate()
    const {data,loading,error} = useQuery(SEARCH_MEDIA,{variables:{search:q,perPage:12,type:type,page:page,sort:["POPULARITY_DESC"]}})
    useEffect(() => {
        if(data){
            console.log(data)
        }
    }, [data])
    if (loading) return <SpinPage/>
    if (error) return <ErrorPage/>
    return(
        <div className="flex flex-col items-end gap-2">
            <div className="flex justify-center gap-4 border [&_*]:disabled:bg-red-50">
                <button disabled={page < 2} onClick={() => {navigate('/search?q='+q+'&type='+type+'&page='+(page-1))}}><ChevronLeft/></button>
                <p className="border-r border-l p-2">{page}</p>
                <button disabled={data.Page.pageInfo.lastPage == page} onClick={() => {navigate('/search?q='+q+'&type='+type+'&page='+(page+1))}}><ChevronRight/></button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {data.Page.media.map((media:{title:{romaji:string},id:string,coverImage:{large:string}}) => (
                    <div key={media.id} onClick={() => navigate(`/${type}/${media.id}`)}>
                        <img className="w-[200px] mx-2 h-[300px] object-cover" src={media.coverImage.large} alt={media.title.romaji}/>
                        <p className="text-wrap overflow-hidden max-h-6 max-w-[200px]">{media.title.romaji}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

const SearchPage = () => {
    const params = useSearchParams()[0]
    const navigate = useNavigate()
    if (!params.has("q") || !params.has("type")) {params.set("q","");params.set("type","ANIME");params.set("page","1")}
    if (params.get("type") != "ANIME" && params.get("type") != "MANGA") {params.set("type","ANIME")}
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const search = formData.get('search') as string
        const type = formData.get('type') as string
        if(search){
            params.set('q',search)
            params.set('type',type)
            params.set('page','1')
            navigate('/search?'+params.toString())
        }
    }
    return (
        <div className="p-2">
            <form onSubmit={handleSearch} className="flex [&>*]:bg-gray-200 border border-gray-500 overflow-hidden rounded-lg">
                <input name="search" defaultValue={params.get('q') || ""} type="text" placeholder="Search.." className="text-gray-700 p-2 flex grow"/>
                <select name="type" defaultValue={params.get('type') || ""} className="p-2 border-l border-r border-gray-500">
                    <option value="ANIME">Anime</option>
                    <option value="MANGA">Manga</option>
                </select>
                <button type="submit" className="p-2 flex items-center"><Search/>Search</button>
            </form>
            <h1>{params.get("q") == "" ? "Start Searchin!" : "Search Results"}</h1>
            {params.get("q") != "" && <Results q={params.get("q") || ""} page={parseInt(params.get("page") || "1")} type={params.get("type") || ""}/>}
        </div>
    );
}

export default SearchPage
