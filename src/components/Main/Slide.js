import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Slide extends React.Component {

    render(){

        const images = [
            {
                original: process.env.PUBLIC_URL+'/img/photos/original/a.jpg',
                thumbnail: process.env.PUBLIC_URL+'/img/photos/thumb/a.jpg',
            },
            {
                original: process.env.PUBLIC_URL+'/img/photos/original/b.jpg',
                thumbnail: process.env.PUBLIC_URL+'/img/photos/thumb/b.jpg',
            },
            {
                original: process.env.PUBLIC_URL+'/img/photos/original/d.jpg',
                thumbnail: process.env.PUBLIC_URL+'/img/photos/thumb/d.jpg',
            },
            {
                original: process.env.PUBLIC_URL+'/img/photos/original/c.png',
                thumbnail: process.env.PUBLIC_URL+'/img/photos/thumb/c.png',
            },
            {
                original: process.env.PUBLIC_URL+'/img/photos/original/e.jpg',
                thumbnail: process.env.PUBLIC_URL+'/img/photos/thumb/e.jpg',
            }
        ]       
        return(
            <ImageGallery items={images} autoPlay={true} />
        );
    }
}