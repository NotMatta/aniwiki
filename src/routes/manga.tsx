import { useParams } from "react-router";

const MangaPage = () => {
    const {id} = useParams()
    return (
        <div>
        <h1>Anime Page</h1>
        <p>manga {id}</p>
        </div>
    );
}

export default MangaPage;
