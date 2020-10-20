import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
    {
        original: '/Images/1Street.jpeg',
        thumbnail: '/Images/1Street.jpeg',
    },
    {
        original: '/Images/2StretDoor.jpeg',
        thumbnail: '/Images/2StretDoor.jpeg',
    },
    {
        original: '/Images/2BehindTheStreetDoor.jpeg',
        thumbnail: '/Images/2BehindTheStreetDoor.jpeg',
    },
    {
        original: '/Images/3OnLevelDoor.jpeg',
        thumbnail: '/Images/3OnLevelDoor.jpeg',
    },
    {
        original: '/Images/3InsideRoom.jpeg',
        thumbnail: '/Images/3InsideRoom.jpeg',
    },
    {
        original: '/Images/3InsideRoom1.jpeg',
        thumbnail: '/Images/4InsideRoom.jpeg',
    },
    {
        original: '/Images/3InsideRoom2.jpeg',
        thumbnail: '/Images/3InsideRoom2.jpeg',
    },
    {
        original: '/Images/4InsideRoom.jpeg',
        thumbnail: '/Images/4InsideRoom.jpeg',
    },
    {
        original: '/Images/5Toulet.jpeg',
        thumbnail: '/Images/5Toulet.jpeg',
    },
    {
        original: '/Images/6InsRoom.jpg',
        thumbnail: '/Images/6InsRoom.jpg',
    },
    {
        original: '/Images/7insRoom.jpg',
        thumbnail: '/Images/7insRoom.jpg',
    },
    {
        original: '/Images/7insRoom.jpg',
        thumbnail: '/Images/7insRoom.jpg',
    },
    {
        original: '/Images/9InsRoom2.jpeg',
        thumbnail: '/Images/9InsRoom2.jpeg',
    },
    {
        original: '/Images/10InsRoom.jpeg',
        thumbnail: '/Images/10InsRoom.jpeg',
    }
];

export class MyGallery extends Component {
    static displayName = MyGallery.name;
    render() {
        return <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>;
    }
}