const images = [
    "/gallery/pic1.png",
    "/gallery/pic3.png",
    "/gallery/pic4.jpg",
    "/gallery/pic5.webp",
    "/gallery/pic6.jpg",
    "/gallery/pic7.webp",
]

const Background = () => {
    return (
        <div className="absolute w-full h-full top-0 left-0 -z-10">
            <img src={images[Math.floor(Math.random() * images.length)]} alt="background"
                className="object-cover w-full h-full"/>
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-70"></div>
        </div>
    );
}

export default Background;
