import React, { useState } from "react";
import '../component_styling/style.css'




export function MyButton() {
    return (
        <button
            className="my-button"
            onClick={() => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            }}
        >
            An important secret lies ahead Lu ~ Click me
        </button>
    );
}

export function StupidBoredomButton()
{
    const [count, setCount] = useState(0)

    function handleClick()
    {
        setCount(count +1);
    }

    return (
        <div>
            <button
            className="my-button"
            onClick={handleClick}
            >
                Clicked ( {count} ) times!


            </button>
            
        </div>

    );
}   

export function stupidStopWatch()
{
    
}
