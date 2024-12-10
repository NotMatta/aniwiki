import { MediaType } from "../../queries/media-query"

const Side = ({data}:{data:{Media:MediaType}}) => {
    return(
        <div className="h-[450px] lg:h-full shrink-0 lg:min-w-[500px] lg:max-w-[500px] lg:overflow-y-scroll relative lg:bg-black lg:text-white flex flex-col">
            <img src={data.Media.coverImage.extraLarge}
                alt="" className="hidden w-full min-h-[450px] lg:block h-full object-cover absolute top-0"/>
            <img src={data.Media.bannerImage || "https://i.pinimg.com/originals/88/20/ff/8820ff7553baaf595822b58c5590b604.jpg"}
                alt="" className="w-full min-h-[450px] h-full lg:hidden object-cover absolute top-0"/>
            <div className="bg-gradient-to-b from-transparent to-white lg:to-black w-full h-full absolute top-0 flex items-end p-6 space-x-2">
                <img src={data.Media.coverImage.extraLarge} alt={data.Media.title.romaji} className="lg:hidden w-36 h-56 object-cover rounded"/>
                <div className="flex-grow max-w-full min-w-0">
                    <p className="text-2xl font-bold">{data.Media.title.romaji}</p>
                    <p>Format: {data.Media.format}</p>
                    <p>Status: {data.Media.status}</p>
                    <p>Start Date: {data.Media.startDate.year}</p>
                    <p>End Date: {data.Media.endDate.year}</p>
                    <div className="[&_p]:bg-[#202020] [&_p]:py-1 [&_p]:px-2 [&_p]:rounded-lg [&_p]:text-gray-300">
                        <strong>Tags</strong>
                        <div className="flex overflow-x-scroll *:shrink-0 min-w-0 w-full max-w-full lg:overflow-auto lg:flex-wrap gap-2">
                            {data.Media.tags.map((tag:{name:string}) => (
                                <p key={tag.name}>{tag.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Side
