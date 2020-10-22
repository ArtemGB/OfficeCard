﻿import React, { Component } from 'react';
import { YMaps, Map, Marker, MarkerLayout, Placemark } from 'yandex-map-react';

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };
  
  const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
  ];

export class MyYaMap extends Component {
    static displayName = MyYaMap.name;
    render() {
        return (
            <YMaps>
                <Map defaultState={mapData}>
                    {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                </Map>
            </YMaps>
        );
    }
}