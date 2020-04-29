import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';


// const ImageList = (props)=> {
//     const images = props.images.map((image)=> {
//         return <img alt={image.description} key={image.id} src={image.urls.regular}/>
        
//     });
//     return <div>{images}</div>

// };
// before creating imagecard component
// const ImageList = (props)=> {
//     const images = props.images.map(({description, id, urls})=> {
//         return <img alt={description} key={id} src={urls.regular}/>
        
//     });
//     return <div className="image-list">{images}</div>

// };

const ImageList = (props)=> {
    const images = props.images.map((image)=> {
        return <ImageCard key={image.id} image={image}/>    
    });
    return <div className="image-list">{images}</div>

};

export default ImageList;