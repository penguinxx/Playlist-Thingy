import React from "react"; 
import "../component_styling/style.css"
import { useState } from "react";

export default interface User {
    name: string;
    description: string;
    profile_pic_url: string;
    image_size: number;
}

export function UserProfile({user}: {user:User})
{
    const[isHovered, setIsHovered] = useState<boolean>(false);

    function handleMouseEnter()
    {
        setIsHovered(true);
    }

    function handleMouseExit()
    {
        setIsHovered(false);
    }


    return (
        <div>
            <img
            src={user.profile_pic_url}
            alt={user.description}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
            className="avatar"
            />
            {isHovered && (
                <div className="info-card">
                    <p>{user.description}</p>
                </div>
            )}
                
        </div>
    );


}


