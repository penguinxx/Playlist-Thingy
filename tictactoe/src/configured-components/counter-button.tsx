import { useState } from "react";
import '../styling/style.css'


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