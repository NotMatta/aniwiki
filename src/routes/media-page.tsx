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
import Side from "../components/page-components/side";

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
        <div className="border-t max-h-full lg:h-full flex flex-col-reverse overflow-y-scroll lg:overflow-auto lg:flex-row">
            <div className="flex-grow shrink-0 lg:shrink bg-white z-10 relative pt-0 lg:overflow-y-scroll lg:max-h-full [&_strong]:text-3xl [&>div]:p-6 border-r">
                <img className="hidden lg:block w-full h-[300px] object-cover" src={data.Media.bannerImage || "https://i.pinimg.com/originals/88/20/ff/8820ff7553baaf595822b58c5590b604.jpg"} 
                    alt={data.Media.title.romaji}/>
                <div className="space-y-2">
                    <strong>Description</strong>
                    <p>
                        {removeHTML(data.Media.description)}
                    </p>
                </div>
                <div className="space-y-2">
                    <strong>Relations</strong>
                    {data.Media.relations?.nodes?.length > 0  &&<Recommendations media={data.Media.relations.nodes.map((node) => {
                        if(node) return {id:node.id,name:node.title.romaji,image:node.coverImage.large,type:node.type}
                    }).filter(item => item !== undefined)}/>}
                </div>
                <div className="space-y-2">
                    <strong>Characters</strong>
                    <div className="flex flex-wrap gap-2 mb-2 justify-between">
                        {data.Media.characters.edges.map((edge) => (
                            <Characters role={edge.role} name={edge.node.name.full} image={edge.node.image.large} key={edge.node.name.full}/>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <strong>Status</strong>
                    <UserStats 
                        current={data.Media.stats.statusDistribution[0].amount}
                        planning={data.Media.stats.statusDistribution[1].amount}
                        completed={data.Media.stats.statusDistribution[2].amount}
                        dropped={data.Media.stats.statusDistribution[3].amount}
                        paused={data.Media.stats.statusDistribution[4].amount}/>
                </div>
                <div className="space-y-2">
                    <strong>Score</strong>
                    <ScoreBoard averageScore={data.Media.averageScore} meanScore={data.Media.meanScore} favourites={data.Media.favourites} popularity={data.Media.popularity} />
                </div>
                <div className="space-y-2">
                    <strong>Recomendation</strong>
                    {data.Media.recommendations.nodes.length > 0 &&
                        <Recommendations media={data.Media.recommendations.nodes.map((node) => {
                            if(node.mediaRecommendation) return {name:node.mediaRecommendation.title.romaji,image:node.mediaRecommendation.coverImage.large,id:node.mediaRecommendation.id,type:node.mediaRecommendation.type}
                            }).filter(item => item !== undefined)}/>}
                </div>
            </div>
            <Side data={data}/>
        </div>
    );
}

export default MediaPage;
