import Characters from "../components/page-components/characters";
import UserStats from "../components/page-components/user-stats";
import { useParams } from "react-router";
import ScoreBoard from "../components/page-components/score";
import Recommendations from "../components/page-components/recommendations";
import { OperationVariables, useQuery } from "@apollo/client";
import { MediaType, GET_MEDIA } from "../queries/media-query";
import { useEffect } from "react";
import SpinPage from "../components/spin-page";
import ErrorPage from "../components/error-page";

const removeHTML = (text:string) => {
  const div = document.createElement('div');
  div.innerHTML = text;
  return div.textContent || div.innerText || '';
}

const MediaPage = ({format}:{format:string}) => {
    const {id} = useParams()
    const {data,loading,error} = useQuery<{Media:MediaType},OperationVariables>(GET_MEDIA,{variables:{id,format}})
    useEffect(() => {
        if(data){
            console.log(data)
        }
    }, [data])
    if(loading) return <SpinPage/>
    if(error || !data) return <ErrorPage/>
    return (
        <div className="[&>div]:md:border max-h-full md:h-full flex flex-col-reverse overflow-y-scroll md:overflow-auto md:flex-row">
            <div className="flex-grow bg-white z-10 p-2 md:overflow-y-scroll max-h-full">
                <p className="mb-2"><strong>{data.Media.title.romaji}</strong><br/>
                    {removeHTML(data.Media.description)}
                </p>
                <strong>Relations</strong><br/>
                {data.Media.relations?.nodes?.length > 0  &&<Recommendations media={data.Media.relations.nodes.map((node) => {
                    if(node) return {id:node.id,name:node.title.romaji,image:node.coverImage.large,type:node.type}
                }).filter(item => item !== undefined)}/>}
                <strong>Characters</strong><br/>
                <div className="flex flex-wrap gap-2 mb-2 justify-between">
                    {data.Media.characters.edges.map((edge) => (
                        <Characters role={edge.role} name={edge.node.name.full} image={edge.node.image.large} key={edge.node.name.full}/>
                    ))}
                </div>
                <strong className="mb2">Status</strong>
                <UserStats 
                    current={data.Media.stats.statusDistribution[0].amount}
                    planning={data.Media.stats.statusDistribution[1].amount}
                    completed={data.Media.stats.statusDistribution[2].amount}
                    dropped={data.Media.stats.statusDistribution[3].amount}
                    paused={data.Media.stats.statusDistribution[4].amount}/>
                <strong className="mb2">Score</strong>
                <ScoreBoard averageScore={data.Media.averageScore} meanScore={data.Media.meanScore} favourites={data.Media.favourites} popularity={data.Media.popularity} />
                <strong className="mb2">Recomendation</strong>
                {data.Media.recommendations.nodes.length > 0 &&
                    <Recommendations media={data.Media.recommendations.nodes.map((node) => {
                        if(node.mediaRecommendation) return {name:node.mediaRecommendation.title.romaji,image:node.mediaRecommendation.coverImage.large,id:node.mediaRecommendation.id,type:node.mediaRecommendation.type}
                        }).filter(item => item !== undefined)}/>}
            </div>
            <div className="md:min-w-[350px] md:max-w-[350px] md:overflow-y-scroll pb-2 relative md:bg-black md:text-white [&_p]:px-2 flex flex-col">
                <img src={data.Media.bannerImage}
                    alt="" className="w-full min-h-[450px] object-cover"/>
                <div className="bg-gradient-to-b from-transparent to-white md:to-black w-full h-[450px] absolute top-0 flex items-end">
                    <img src={data.Media.coverImage.large}
                        alt="" className="w-[180px] h-[300px] object-cover p-2 rounded-xl"/>
                    <p className="text-2xl font-bold">{data.Media.title.romaji}</p>
                </div>
                <br/>
                <p>Format: {data.Media.format}</p>
                <p>Status: {data.Media.status}</p>
                <p>Start Date: {data.Media.startDate.year}</p>
                <p>End Date: {data.Media.endDate.year}</p>
                <div className="px-2 [&_p]:bg-[#202020] [&_p]:p-1 [&_p]:rounded-lg [&_p]:text-gray-300">
                    <strong>Tags</strong>
                    <div className="flex flex-wrap gap-2">
                        {data.Media.tags.map((tag:{name:string}) => (
                            <p key={tag.name}>{tag.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MediaPage;
