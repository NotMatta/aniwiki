const ScoreBoard = ({averageScore,meanScore,favourites,popularity}:{averageScore:number,meanScore:number,favourites:number,popularity:number}) => {
    return(
            <div className="relative w-full rounded-lg text-white flex flex-col md:flex-row justify-between gap-4 p-4 [&>p]:p-2 [&>p]:rounded-lg [&>p]:bg-gray-800">
                <p>Average Score: {averageScore}%</p>
                <p>Mean Score: {meanScore}%</p>
                <p>Favourites: {favourites}</p>
                <p>Popularity: {popularity}</p>
                <div className="-z-10 absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
            </div>
    )
}

export default ScoreBoard
