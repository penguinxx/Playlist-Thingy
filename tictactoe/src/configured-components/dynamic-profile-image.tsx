import "../styling/style.css"
import React, { useState } from "react"

export default interface User {
    name: string;
    message: string;
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
        <div className="info-card">
            <img
            src={user.profile_pic_url}
            alt={user.message}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
            className="avatar"
            />
            {isHovered && (               
                <p
                className="p-customize"
                >{user.message}
                </p>              
            )}
                
        </div>
    );
}


