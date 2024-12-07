import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import User from './configured-components/dynamic-profile-image';
import './styling/style.css';
import  * as DynamicButton from './configured-components/dynamic-buttons';
import { UserProfile } from './configured-components/dynamic-profile-image';
import Navbar from "./components/navigation-bar-component"


const stephano: User = 
{ 
    name: "Stephano",
    message: "Hey Lu ~ <3",
    profile_pic_url: "https://pbs.twimg.com/media/C1VAxYgUoAAfQZ2.jpg",
    image_size: 90
};

export default function MyApp() {
    return (
        <Router>
            <div className='stephano-wrapper'>
                <div className='nav-bar'>
                    <Navbar title='My App'/>
                </div>
                <div className='info-card'> 
                    <UserProfile user={stephano}/>   
                </div>
                <div className='component-card'>
                    <DynamicButton.RockPlaylistButton/>
                </div>
            </div>
        </Router>
    );
}
