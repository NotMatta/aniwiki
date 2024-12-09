const Characters = ({name,image,role}:{role:string,name:string,image:string}) => {
    return(
        <div className="flex gap-2 lg:w-[300px] border w-full flex-grow">
            <img src={image}
                alt={name} className="w-24 h-32 object-cover"/>
            <div className="flex flex-col justify-between flex-grow p-2">
                <p>{name}</p>
                <p className="w-full text-right">{role.toLowerCase()}</p>
            </div>
        </div>
    )
}

export default Characters
