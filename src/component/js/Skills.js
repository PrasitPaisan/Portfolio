import React, { useState } from "react";
import '../css/Skill.css';
import { v4 as uuidv4 } from 'uuid';

const Skills = () => {
    let initSkills = [
        { image: "/logo/HTML5_logo_and_wordmark.svg.png", title: "Html" },
        { image: "/logo/python-logo.png", title: "Python" },
        { image: "/logo/sql-logo1.png", title: "SQL" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png?20210705212817", title: "CSS" },
        { image: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png", title: "JAVASCRIPT" },
        { image: "/logo/mongo-logo.png", title: "MONGODB" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png", title: "BOOTSTRAP" },
        { image: "/logo/nodejs-logo.png", title: "NODE JS" }
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
