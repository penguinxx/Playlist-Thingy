import React from "react";
import '../component_styling/style.css'
import User from './UserContext';



export function MyButton({ user }: { user: User }) {
    return (
        <button
            className="my-button"
            onClick={() => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            }}
        >
            You're gonna wanna see this {user.name}. Trust me bro. Click me
        </button>
    );
}

        