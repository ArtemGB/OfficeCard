import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

export class DemoCarousel extends Component {
    static displayName = DemoCarousel.name;
    render() {
        return (
            <Carousel width="70%" height="70%">
                <div>
                    <img src="/Images/1Street.jpeg" />
                    <p className="legend CarouselLabel">Вид с улицы</p>
                </div>
                <div>
                    <img src="/Images/2StretDoor.jpeg" />
                    <p className="legend CarouselLabel">Вход в здание</p>
                </div>
                {/* <div>
                    <img src="/Images/2BehindTheStreetDoor.jpeg" />
                    <p className="legend CarouselLabel">Лестница на этаж</p>
                </div> */}
                {/* <div>
                    <img src="/Images/3OnLevelDoor.jpeg" />
                    <p className="legend CarouselLabel">Дверь на этаже</p>
                </div> */}
                <div>
                    <img src="/Images/3InsideRoom.jpeg" />
                    <p className="legend CarouselLabel">Основное помещение</p>
                </div>
                <div>
                    <img src="/Images/3InsideRoom1.jpeg" />
                    <p className="legend CarouselLabel">Основное помещение</p>
                </div>
                <div>
                    <img src="/Images/4InsideRoom.jpeg" />
                    <p className="legend CarouselLabel">Основное помещение</p>
                </div>
                <div>
                    <img src="/Images/3InsideRoom2.jpeg" />
                    <p className="legend CarouselLabel">Малое помещение</p>
                </div>
            </Carousel>
        );
    }
};