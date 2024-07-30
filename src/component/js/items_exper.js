import '../css/items_exper.css'
import React from 'react';
const Item_exp=(props)=>{
    const {id,url,title,describ} = props
    return(
        <div className="Experience-box" id={id}>
            <div className='video'>
                <iframe
                    width="420"
                    height="280"
                    src={url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div className="description">
                <h2 className='title'>{title}</h2>
                <p className='descrip'>{describ}</p>
            </div>
        </div>

    );
}
export default Item_exp;