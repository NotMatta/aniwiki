import { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    const [input,setInput] = useState<string>('');
    const handleSearch = () => {
        navigate(`/search/${input}`);
    }
    return(
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleSearch}>Fetch Anime</button>
        </div>
    )
}

export default Home;
