import { MediaType } from "../../queries/media-query"
import { useState } from "react"

const Side = ({data}:{data:{Media:MediaType}}) => {
    const [showMore,setShowMore] = useState<boolean>(false)
    return(
        <div className="h-[200px] mb-[20px] lg:mb-0 lg:h-full shrink-0 lg:min-w-[400px] lg:max-w-[400px] 2xl:max-w-[450px] 2xl:min-w-[450px] lg:overflow-y-scroll relative lg:bg-black lg:text-white flex flex-col lg:overflow-hidden">
            <img src={data.Media.coverImage.extraLarge}
                alt="" className="hidden w-full min-h-[450px] lg:block h-full object-cover absolute top-0"/>
            <img src={data.Media.bannerImage || "https://i.pinimg.com/originals/88/20/ff/8820ff7553baaf595822b58c5590b604.jpg"}
                alt="" className="w-full h-full lg:hidden object-cover absolute top-0 overflow"/>
            <div className="h-full w-full lg:hidden p-2 z-10 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)] flex items-end">
                <div className="flex items-end gap-2 ">
                    <img src={data.Media.coverImage.extraLarge} alt={data.Media.title.romaji}
                    className="lg:hidden min-w-24 min-h-38 max-h-48 max-w-30 w-1/4 h-1/4 object-cover rounded translate-y-8 shadow shadow-black"/>
                    <p className="font-bold">{data.Media.title.romaji}</p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-transparent hidden lg:flex to-black w-full h-full absolute top-0 items-end p-6 space-x-2">
                <div className="flex-grow max-w-full min-w-0 text-sm">
                    <p className="text-3xl font-bold">{data.Media.title.romaji}</p>
                    <p>Format: {data.Media.format}</p>
                    <p>Status: {data.Media.status}</p>
                    <p>Start Date: {data.Media.startDate.year}</p>
                    <p>End Date: {data.Media.endDate.year}</p>
                    <div className="[&_p]:bg-[#202020] [&_p]:py-1 [&_p]:px-2 [&_p]:rounded-lg [&_p]:text-gray-300 space-y-2">
                        <strong>Tags</strong>
                        <div className="flex  *:shrink-0 min-w-0 w-full max-w-full overflow-auto flex-wrap gap-2">
                            {showMore && data.Media.tags.map((tag:{name:string}) => (
                                <p key={tag.name}>{tag.name}</p>
                            ))}
                            {!showMore && data.Media.tags.map((tag:{name:string},i:number) => (
                                i<6 && <p key={tag.name}>{tag.name}</p>
                            ))}
                            <p className="cursor-pointer" onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less " : "Show More.. "}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Side
