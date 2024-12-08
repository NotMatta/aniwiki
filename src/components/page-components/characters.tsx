const Characters = ({name,image}:{name:string,image:string}) => {
    return(
        <div className="flex gap-2 lg:w-[300px] border w-full flex-grow">
            <img src={image}
                alt={name} className="w-24 h-32 object-cover"/>
            <p>{name}</p>
        </div>
    )
}

export default Characters
