import { LoaderCircle } from "lucide-react"

const SpinPage = () => {
    return(
        <div className="absolute top-0 left-0 w-full bg-white h-full flex items-center justify-center">
            <LoaderCircle size={64} className="animate-spin text-gray-500"/>
        </div>
    )
}

export default SpinPage
