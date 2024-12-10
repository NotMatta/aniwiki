const ScoreBoard = ({averageScore,meanScore,favourites,popularity}:{averageScore:number,meanScore:number,favourites:number,popularity:number}) => {
    return(
            <div className="w-full bg-gray-100 rounded-lg text-gray-800 flex flex-col md:flex-row justify-between gap-4 p-4 [&>p]:p-2 [&>p]:rounded-lg [&>p]:bg-gray-300">
                <p>Average Score: {averageScore}%</p>
                <p>Mean Score: {meanScore}%</p>
                <p>Favourites: {favourites}</p>
                <p>Popularity: {popularity}</p>
            </div>
    )
}

export default ScoreBoard
