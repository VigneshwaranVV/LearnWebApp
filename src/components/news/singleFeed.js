import React from 'react';
import './styles.css'
import CustomButton from '../../common/VButton/CustomButton';

export default function SingleFeed(props) {
    const { data, showSave } = { ...props }
    return (
        <div className="newsContainer">
            <div className="imageContainer">
                <img src={data.urlToImage} className="image" alt="img"/>
            </div>
            <div className="dataContainer">
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                    <p className="title">{data.title}</p>
                </a>
                <p className="description">{data.description}</p>
                <p className="publishDate">{new Date(data.publishedAt).toDateString()}</p>
                {showSave && <div>
                    <CustomButton label="Save" isDisabled={false} />
                </div>
                }
            </div>
        </div>
    )
}
