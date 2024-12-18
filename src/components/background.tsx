const images = [
    "https://github.com/NotMatta/aniwiki/blob/main/public/gallery/pic1.png?raw=true",
    "https://github.com/NotMatta/aniwiki/blob/main/public/gallery/pic3.png?raw=true",
    "https://github.com/NotMatta/aniwiki/blob/main/public/gallery/pic4.jpg?raw=true",
    "https://github.com/NotMatta/aniwiki/blob/main/public/gallery/pic5.webp?raw=true",
    "https://github.com/NotMatta/aniwiki/blob/main/public/gallery/pic6.jpg?raw=true",
    "https://github.com/NotMatta/aniwiki/blob/main/public/gallery/pic7.webp?raw=true",
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
