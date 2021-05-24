import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "./image-gallery.css";
const images = [
    {
        original: '/Images/Autozavodskaya/1.jpg',
        thumbnail: '/Images/Autozavodskaya/1.jpg',
    },
    {
        original: '/Images/Autozavodskaya/1(2).jpg',
        thumbnail: '/Images/Autozavodskaya/1(2).jpg',
    },
    {
        original: '/Images/Autozavodskaya/2.jpg',
        thumbnail: '/Images/Autozavodskaya/2.jpg',
    },
    {
        original: '/Images/Autozavodskaya/2(2).jpg',
        thumbnail: '/Images/Autozavodskaya/2(2).jpg',
    },
    {
        original: '/Images/Autozavodskaya/3.jpg',
        thumbnail: '/Images/Autozavodskaya/3.jpg',
    },
    {
        original: '/Images/Autozavodskaya/4.jpg',
        thumbnail: '/Images/Autozavodskaya/4.jpg',
    },
    {
        original: '/Images/Autozavodskaya/5.jpg',
        thumbnail: '/Images/Autozavodskaya/5.jpg',
    },
    {
        original: '/Images/Autozavodskaya/6.jpg',
        thumbnail: '/Images/Autozavodskaya/6.jpg',
    },
    {
        original: '/Images/Autozavodskaya/7.jpg',
        thumbnail: '/Images/Autozavodskaya/7.jpg',
    },
    {
        original: '/Images/Autozavodskaya/8.jpg',
        thumbnail: '/Images/Autozavodskaya/8.jpg',
    },
    {
        original: '/Images/Autozavodskaya/9.jpg',
        thumbnail: '/Images/Autozavodskaya/9.jpg',
    },
    {
        original: '/Images/Autozavodskaya/IMG_20210524_134810.jpg',
        thumbnail: '/Images/Autozavodskaya/IMG_20210524_134810.jpg',
    },
    {
        original: '/Images/Autozavodskaya/IMG_20210524_135331.jpg',
        thumbnail: '/Images/Autozavodskaya/IMG_20210524_135331.jpg',
    }
];

export class AutozavodskayaImageGallery extends Component {
    static displayName = AutozavodskayaImageGallery.name;
    render() {
        return <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />;
    }
}