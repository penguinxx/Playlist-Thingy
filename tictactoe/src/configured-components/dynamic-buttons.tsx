import {DynamicButton} from '../components/DynamicButtons'

export const RockPlaylistButton = () =>
(
    <DynamicButton
    class_name="rock-playlist-button"
    link = "https://www.youtube.com/watch?v=HhVTuowsBrQ&list=PLD1W2UDUZ6NuiYQfr830ftP5EK_7lliuE&pp=gAQB"
    image="https://img.icons8.com/win10/512w/FFFFFF/rock-music.png"
    imgClass="rock-playlist-button-image"
    text = "My RockPlaylist"
    textClass=".rock-playlist-button-text"
    />
    
);

export const RickRollButton = () =>
    (
        <DynamicButton
        class_name="my-button"
        link = "https://www.youtube.com/watch?v=HhVTuowsBrQ&list=PLD1W2UDUZ6NuiYQfr830ftP5EK_7lliuE&pp=gAQB"
        text = "A secret lies ahead Lu ~ Click me"
        />
        
    );

