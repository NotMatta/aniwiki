import { Link } from "react-router";
const ErrorPage = () => {
    return (
        <div className="absolute left-0 w-full h-full flex justify-center items-center flex-col gap-2">
            <h1 className="text-7xl font-bold">Oops! Something went wrong.</h1>
            <Link to="/aniwiki/" className="text-2xl font-bold underline">Go back to home</Link>
        </div>
    );
}

export default ErrorPage
