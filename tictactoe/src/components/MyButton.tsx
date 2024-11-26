import React from "react";
import '../component_styling/style.css';
import { user } from '../components/UserContext';

export function MyButton() {
    console.log(user); // Debug to check if user is imported correctly

    return (
        <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className="my-button">
                Click me pls {user.nickname} 🥺
            </button>
        </a>
    );
}
