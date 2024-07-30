import React, { useState } from "react";
import '../css/Skill.css';
import { v4 as uuidv4 } from 'uuid';

const Skills = () => {
    let initSkills = [
        { image: "https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png", title: "Html" },
        { image: "https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg", title: "Python" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0meudPajUwAbo9Ngm2dO7KQevGTGAyFzdw&s", title: "SQL" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png?20210705212817", title: "CSS" },
        { image: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png", title: "JAVASCRIPT" },
        { image: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png", title: "MONGODB" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png", title: "BOOTSTRAP" },
        { image: "https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png", title: "NODE JS" }
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="grid-container">
            <div className="title-head-skill">
                <div className="box-cover-skill">
                    <p className="text-skill">Skill...</p>
                </div>
            </div>
            <div className="Skill_box">
                {initSkills.map((element, index) => (
                    <div 
                        className="box-skills" 
                        key={uuidv4()} 
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="#!">
                            <img className="image-icon" src={element.image} alt={element.title} />
                        </a>
                        <div className={`alert_box ${hoveredIndex === index ? 'show' : ''}`}>
                            <p><strong>{element.title}</strong></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora hic velit at quidem explicabo nisi itaque iure, porro mollitia!</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
