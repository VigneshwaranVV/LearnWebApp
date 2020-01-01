import React from 'react';
import './styles.css'

export default function SingleFeed(props) {
    const { data } = { ...props }
    return (
        <div className="newsContainer">
            <div className="dataContainer">
                <p className="title">{data.title}</p>
                <p className="description">{data.description}</p>
            </div>
                <img src={data.urlToImage} className="image"/>
        </div>
    )
}
