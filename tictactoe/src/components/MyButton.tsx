import React from "react";
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

        