import { useNavigate } from "react-router"

const Recommendations = ({media}:{media:{id:number,name:string,image:string,type:string}[]}) => {
    const navigate = useNavigate();
    return(
        <div className="w-full max-w-full overflow-x-scroll flex gap-2 pb-2 [&>div]:shrink-0">
            {media.map((page) => (
                <div className="w-[200px] font-semibold hover:cursor-pointer hover:w-[220px] duration-300" key={page.name} onClick={() => navigate(`/${page.type.toLowerCase()}/${page.id}`)}>
                    <img src={page.image}
                        alt={page.name} className="w-full h-[300px] object-cover rounded-md select-none pointer-events-none"/>
                    <p>{page.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Recommendations
