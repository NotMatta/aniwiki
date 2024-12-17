import { useState } from "react";

const removeHTML = (text:string) => {
  const div = document.createElement('div');
  div.innerHTML = text;
  return div.textContent || div.innerText || '';
}

const Description = ({description}:{description:string}) => {
    const [showMore,setShowMore] = useState<boolean>(false)
    return(
        <div className="space-y-2">
            <strong>Description</strong>
            <p className={`md:hidden ${showMore ? "" : "overflow-hidden text-ellipsis line-clamp-3"}`}>
                {removeHTML(description)}
            </p>
            <p className="hidden md:block">
                {removeHTML(description)}
            </p>
            <p className="md:hidden cursor-pointer" onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</p>
        </div>
    )
}

export default Description
