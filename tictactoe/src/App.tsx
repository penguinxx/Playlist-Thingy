import React from 'react';
import User from './components/UserContext';
import '../src/component_styling/style.css'
import { MyButton } from './components/MyButton';

const stephano: User = 
{ 
    name: "Lu ~ ",
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
                <img
                className='avatar'
                src={stephano.profile_pic_url}
                />
                <h1
                style={{fontSize: '20px'}}>{stephano.name}
                </h1>
                </div>
            </div>
                
                
            <div className='component-card'>
                <MyButton  user = {stephano}></MyButton>  

            </div>
        </div>

        
        

            
            
        
        
    ); 
    }