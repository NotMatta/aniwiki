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
        <div className="flex flex-col items-center h-0 max-h-full flex-grow gap-2">
            <div className="flex justify-center rounded-full bg-[rgba(0,0,0,0.5)] [&>*]:w-12 [&_button]:max-w-12">
                <button className="flex items-center justify-center disabled:text-black" disabled={page < 2} onClick={() => {navigate('/aniwiki/search?q='+q+'&type='+type+'&page='+(page-1))}}><ChevronLeft size={24}/></button>
                <p className="border-r border-l border-black p-2 text-center">{page}</p>
                <button className="flex items-center justify-center disabled:text-black" disabled={data.Page.pageInfo.lastPage == page} onClick={() => {navigate('/aniwiki/search?q='+q+'&type='+type+'&page='+(page+1))}}><ChevronRight/></button>
            </div>
            <div className="flex flex-wrap justify-around gap-4 w-full overflow-y-scroll h-full">
                {data.Page.media.map((media:{title:{romaji:string},id:string,coverImage:{large:string}}) => (
                    <div className="flex flex-col items-center text-center gap-1 shrink-0 w-[150px] md:w-[240px] hover:w-[250px] rounded duration-300" key={media.id} onClick={() => navigate(`/aniwiki/${type}/${media.id}`)}>
                        <img className="w-full mx-2 lg:max-h-[350px] max-h-[230px] md:min-h-[350px] min-h-[230px] object-cover rounded" src={media.coverImage.large} alt={media.title.romaji}/>
                        <p className="text-wrap line-clamp-2 text-sm lg:text-md overflow-hidden max-h-6 max-w-[200px]">{media.title.romaji}</p>
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
            navigate('/aniwiki/search?'+params.toString())
        }
    }
    return (
        <div className="p-2 h-full flex flex-col gap-2">
            <form onSubmit={handleSearch} className="flex [&>*]:bg-[rgba(0,0,0,0.5)] overflow-hidden rounded-lg">
                <input name="search" defaultValue={params.get('q') || ""} type="text" placeholder="Search.." className="p-2 flex grow outline-none"/>
                <select name="type" defaultValue={params.get('type') || ""} className="p-2 border-l border-r border-black">
                    <option value="ANIME">Anime</option>
                    <option value="MANGA">Manga</option>
                </select>
                <button type="submit" className="p-2 flex items-center"><Search/></button>
            </form>
            {params.get("q") != "" && <Results q={params.get("q") || ""} page={parseInt(params.get("page") || "1")} type={params.get("type") || ""}/>}
        </div>
    );
}

export default SearchPage
