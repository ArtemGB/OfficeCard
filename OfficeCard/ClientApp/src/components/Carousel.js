import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export class DemoCarousel extends Component {
    static displayName = DemoCarousel.name;
    render() {
        return (
            <Carousel width = "70%" height = "70%">
                <div>
                    <img src="/Images/1Street.jpeg" />
                    <p className="legend">Вид с улицы</p>
                </div>
                <div>
                    <img src="/Images/2StretDoor.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/Images/3InsideRoom.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/Images/3InsideRoom1.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/Images/3InsideRoom2.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};