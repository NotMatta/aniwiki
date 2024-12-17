import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface CharactersProps {
    role: string
    node: {
        name: {full:string}
        image: {large:string}
    }
}

const Characters = ({characters}:{characters:CharactersProps[]}) => {

    const [showMore,setShowMore] = useState<boolean>(false)

    return(
        <div className="space-y-2">
            <div><strong>Characters</strong><button onClick={() => setShowMore(!showMore)}>{showMore ? <ChevronUp/> : <ChevronDown/>}</button></div>
            <div className="flex flex-wrap gap-2 mb-2 justify-between">
                {characters.map((character, i) => (
                    i < (showMore? 99 : 6) && <div className="flex gap-2 lg:w-[300px] p-1 rounded overflow-hidden w-full flex-grow relative">
                        <img src={character.node.image.large}
                            alt={character.node.name.full} className="w-24 h-32 object-cover"/>
                        <div className="flex flex-col justify-between flex-grow p-2">
                            <p>{character.node.name.full}</p>
                            <p className="w-full text-right">{character.role.toLowerCase()}</p>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters
