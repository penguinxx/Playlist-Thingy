import { useState } from "react"


interface IButton
{
    class_name: string
    link: string
    image?: string
    imgClass?:string
    text?: string
    textClass?:string
}

export function DynamicButton({class_name, link, image,imgClass, text}: IButton) {
    const[isHovered, setIsHovered] = useState<boolean>(false);

    function handleMouseEnter()
    {
        setIsHovered(true)
    }
    function handleMouseExit()
    {
        setIsHovered(false)
    }



    return (
        <button
            className= {class_name}
            onClick={() => {
                window.open(link);
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
        >
            {text && text}
            {image && <img src={image} className={imgClass}/>}
            
            {isHovered && (
                <div className="component-card"></div>
            )}
        </button>
    );
}




  


