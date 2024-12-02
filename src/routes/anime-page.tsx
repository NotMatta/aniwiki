import { Menu } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";

const AnimePage = () => {
    const {id} = useParams()
    const [toggleMenu,setToggle] = useState(false)
    return (
        <div className="[&>div]:border h-full flex flex-col-reverse md:flex-row">
            <div className={`duration-300 ${toggleMenu? "w-[300px]" : "w-10"}`}>
                <button onClick={() => setToggle(!toggleMenu)}><Menu/></button>
                <div className="flex flex-col overflow-hidden w-full ml-10">
                    <a>Description</a>
                    <a>Stats</a>
                    <a>Characters</a>
                    <a>Reviews</a>
                    <a>Recommendations</a>
                </div>
            </div>
            <div className="flex-grow bg-white z-10 p-2 overflow-y-scroll max-h-full">
                <p className="mb-2"><strong>Dandadan</strong><br/>
                    This is a story about Momo, a high school girl who comes from a family of spirit mediums, and her classmate Okarun, an occult fanatic. After Momo rescues Okarun from being bullied, they begin talking. However, an argument ensues between them since Momo believes in ghosts but denies aliens exist, and Okarun believes in aliens but denies ghosts exist.
                    To prove to each other what they believe in is real, Momo goes to an abandoned hospital where a UFO has been spotted and Okarun goes to a tunnel rumored to be haunted. To their surprise, they each encounter overwhelming paranormal activities that transcend comprehension. Amid these predicaments, Momo awakens her hidden power and Okarun gains the power of a curse to overcome these new dangers! Their fateful love begins as well!? 
                </p>
                <strong>Characters</strong><br/>
                <div className="flex flex-wrap gap-2 mb-2">
                    <div className="flex gap-2 w-[300px] border">
                        <img src="https://s4.anilist.co/file/anilistcdn/character/large/b222593-qBqUvpodooAI.png"
                            alt="character" className="w-24 h-32 object-cover"/>
                        <p>Character Name</p>
                    </div>
                    <div className="flex gap-2 w-[300px] border">
                        <img src="https://s4.anilist.co/file/anilistcdn/character/large/b222593-qBqUvpodooAI.png"
                            alt="character" className="w-24 h-32 object-cover"/>
                        <p>Character Name</p>
                    </div>
                    <div className="flex gap-2 w-[300px] border">
                        <img src="https://s4.anilist.co/file/anilistcdn/character/large/b222593-qBqUvpodooAI.png"
                            alt="character" className="w-24 h-32 object-cover"/>
                        <p>Character Name</p>
                    </div>
                    <div className="flex gap-2 w-[300px] border">
                        <img src="https://s4.anilist.co/file/anilistcdn/character/large/b222593-qBqUvpodooAI.png"
                            alt="character" className="w-24 h-32 object-cover"/>
                        <p>Character Name</p>
                    </div>
                    <div className="flex gap-2 w-[300px] border">
                        <img src="https://s4.anilist.co/file/anilistcdn/character/large/b222593-qBqUvpodooAI.png"
                            alt="character" className="w-24 h-32 object-cover"/>
                        <p>Character Name</p>
                    </div>
                    <div className="flex gap-2 w-[300px] border">
                        <img src="https://s4.anilist.co/file/anilistcdn/character/large/b222593-qBqUvpodooAI.png"
                            alt="character" className="w-24 h-32 object-cover"/>
                        <p>Character Name</p>
                    </div>
                </div>
                <strong className="mb2">Status</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <strong className="mb2">Threads</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="w-full h-[700px] md:h-full md:min-w-[300px]  relative bg-black text-white [&_p]:px-2 flex flex-col">
                <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg"
                    alt="anime cover" className="w-full h-[450px] object-cover mb-2"/>
                <div className="bg-gradient-to-b from-transparent to-black w-full h-[450px] absolute top-0 flex flex-col justify-end">
                    <p className="text-2xl font-bold">Dandadan {id}</p>
                </div>
                <p>Format: TV</p>
                <p>Status: Realising</p>
                <p>Rating: 8.5</p>
                <p>Tags: Action, Adventure, Comedy</p>
                <p>Date: 2021-2022</p>
            </div>
        </div>
    );
}

export default AnimePage;
