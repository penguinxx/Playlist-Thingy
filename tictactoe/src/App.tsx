import React from 'react';
import User from './components/UserContext';
import '../src/component_styling/style.css'
import { MyButton } from './components/MyButton';
import {UserProfile} from './components/UserContext'

const stephano: User = 
{ 
    name: "Stephano",
    description: "Imaginary Boyfriend",
    profile_pic_url: "https://pbs.twimg.com/media/C1VAxYgUoAAfQZ2.jpg",
    image_size: 90

}



export default function MyApp()
{
    return(

        <div className='stephano-wrapper'>
            <div className='info-card'>
                <div className='base-info'>
                <UserProfile user = {stephano}/>
                <h1 className='discript-style'>
                    {stephano.name}
                </h1>
                </div>
            </div>
                
                
            <div className='component-card'>
                <MyButton/>  

            </div>
        </div>

        
        

            
            
        
        
    ); 
    }