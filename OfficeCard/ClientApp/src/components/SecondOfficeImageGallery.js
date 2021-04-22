import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "./image-gallery.css";
const images = [
    {
        original: '/Images/Myasnickaya24_7/Мясницкая-24-фасад-min.jpg',
        thumbnail: '/Images/Myasnickaya24_7/Мясницкая-24-фасад-min.jpg',
    },
    {
        original: '/Images/Myasnickaya24_7/Myasn1-mini-min-1024x555.jpg',
        thumbnail: '/Images/Myasnickaya24_7/Myasn1-mini-min-1024x555.jpg',
    },
    {
        original: '/Images/Myasnickaya24_7/Зал-1.jpg',
        thumbnail: '/Images/Myasnickaya24_7/Зал-1.jpg',
    },
    {
        original: '/Images/Myasnickaya24_7/Зал-2.jpg',
        thumbnail: '/Images/Myasnickaya24_7/Зал-2.jpg',
    },
    {
        original: '/Images/Myasnickaya24_7/комната2-min.jpg',
        thumbnail: '/Images/Myasnickaya24_7/комната2-min.jpg',
    },
    {
        original: '/Images/Myasnickaya24_7/Комнаты.jpg',
        thumbnail: '/Images/Myasnickaya24_7/Комнаты.jpg',
    },
    {
        original: '/Images/Myasnickaya24_7/Кухня.jpg',
        thumbnail: '/Images/Myasnickaya24_7/Кухня.jpg',
    },
    {
        original: '/Images/Myasnickaya24_7/2этаж.jpg',
        thumbnail: '/Images/Myasnickaya24_7/2этаж.jpg',
    },
    {
        original: '/Images/Myasnickaya24_7/2этаж5-min.jpg',
        thumbnail: '/Images/Myasnickaya24_7/2этаж5-min.jpg',
    },
];

export class SecondOfficeImageGallery extends Component {
    static displayName = SecondOfficeImageGallery.name;
    render() {
        return <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>;
    }
}