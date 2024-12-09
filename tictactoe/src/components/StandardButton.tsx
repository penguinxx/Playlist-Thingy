interface IButton
{
    class_name: string
    link: string
    image?: string
    imgClass?:string
    text?: string
    textClass?:string
}

export function StandardButton({ class_name, link, image, imgClass, text, textClass }: IButton) {


    return (
        <button
            className={class_name}
            onClick={() => {
                window.open(link);
            }}
        >
            {image && <img src={image} className={imgClass}/>}
            {text && <span className={textClass}>{text}</span>}
        </button>
    );
}




  


