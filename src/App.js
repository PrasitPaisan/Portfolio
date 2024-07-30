import React from 'react';
import Navbar from './component/js/navbar';
import Description from './component/js/Description';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Experience from './component/js/experiense';
import Skills from './component/js/Skills';
import Contact from './component/js/contact';
function App() {
    const init_experiense = [
        {
            id: uuidv4(),
            url: "https://www.youtube.com/embed/CY5WLrSYPzo?autoplay=1&loop=1&playlist=CY5WLrSYPzo&mute=1&controls=0&modestbranding=1",
            title: "JUJUTSU KAISEN",
            describ: "A dragon is a mythical creature that appears in the folklore of many cultures around the world. While the exact characteristics of dragons can vary widely depending on cultural context, there are some common traits and themes:"
        },
        {
            id: uuidv4(),
            url: "https://www.youtube.com/embed/KNHY2T93z9s?autoplay=1&loop=1&playlist=KNHY2T93z9s&mute=1&controls=0&modestbranding=1",
            title: "DEMONS SLAYER",
            describ: "A dragon is a mythical creature that appears in the folklore of many cultures around the world. While the exact characteristics of dragons can vary widely depending on cultural context, there are some common traits and themes:"
        },
        {
            id: uuidv4(),
            url: "https://www.youtube.com/embed/WgxPOnwPWQ4?autoplay=1&loop=1&playlist=WgxPOnwPWQ4&mute=1&controls=0&modestbranding=1",
            title: "SOLO LEVELING",
            describ: "A dragon is a mythical creature that appears in the folklore of many cultures around the world. While the exact characteristics of dragons can vary widely depending on cultural context, there are some common traits and themes:"
        },
        {
            id: uuidv4(),
            url: "https://www.youtube.com/embed/eacDqj2C-IA?autoplay=1&loop=1&playlist=eacDqj2C-IA&mute=1&controls=0&modestbranding=1",
            title: "ONE PIECE",
            describ: "A dragon is a mythical creature that appears in the folklore of many cultures around the world. While the exact characteristics of dragons can vary widely depending on cultural context, there are some common traits and themes:"
        }
        ,
        {
            id: uuidv4(),
            url: "https://www.youtube.com/embed/nMT9jw0WByk?autoplay=1&loop=1&playlist=nMT9jw0WByk&mute=1&controls=0&modestbranding=1",
            title: "KAIJU NO.8",
            describ: "A dragon is a mythical creature that appears in the folklore of many cultures around the world. While the exact characteristics of dragons can vary widely depending on cultural context, there are some common traits and themes:"
        },
        {
            id: uuidv4(),
            url: "https://www.youtube.com/embed/LbTGR7tHV_k?autoplay=1&loop=1&playlist=LbTGR7tHV_k&mute=1&controls=0&modestbranding=1",
            title: "NARUTO",
            describ: "A dragon is a mythical creature that appears in the folklore of many cultures around the world. While the exact characteristics of dragons can vary widely depending on cultural context, there are some common traits and themes:"
        }
        ,
        {
            id: uuidv4(),
            url: "https://www.youtube.com/embed/cvARWC0TpqA?autoplay=1&loop=1&playlist=cvARWC0TpqA&mute=1&controls=0&modestbranding=1",
            title: "ONE PUNCH",
            describ: "A dragon is a mythical creature that appears in the folklore of many cultures around the world. While the exact characteristics of dragons can vary widely depending on cultural context, there are some common traits and themes:"
        }
    ];
    return (
        <div>
            <Navbar />
            <Description/>
            <Skills/>
            <Experience itemExper={init_experiense}/>
            <Contact/>
        </div>
    );
}


export default App;
