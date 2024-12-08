import { useNavigate } from "react-router"

const Recommendations = ({animes}:{animes:{id:number,name:string,image:string}[]}) => {
    const navigate = useNavigate();
    return(
        <div className="w-full max-w-full overflow-x-scroll flex gap-2 pb-2 [&>div]:shrink-0">
            {animes.map((anime) => (
                <div className="w-[200px] font-semibold hover:cursor-pointer hover:w-[220px] duration-300" key={anime.name} onClick={() => navigate(`/anime/${anime.id}`)}>
                    <img src={anime.image}
                        alt={anime.name} className="w-full h-[300px] object-cover rounded-md select-none pointer-events-none"/>
                    <p>{anime.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Recommendations
