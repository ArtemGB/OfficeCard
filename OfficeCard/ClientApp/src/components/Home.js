import React, { Component } from 'react';
import './Home.css';
import './Layout.css'
import {OfficeBlock} from './OfficeBlock'

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div class="mainLayout">
                <h1 align="center">Офисы Москвы</h1>
                <OfficeBlock 
                OfficeImg="/Images/1Street.jpeg" 
                OfficeName="Офис, улица мясницкая, дом 22."
                OfficeDescription="Четыре минуты от метро Тургеневская, Чистые пруды. Идеально подходит: под юридические, консультационные, финансовые, аудиторские услуги,
                страхование, агентство недвижимости, услуги косметологии, микрохирургии, стоматологии,
                справки, ателье, учебные курсы, адвокатское бюро,
                нотариальные услуги, рекламное и PR-агенство и т.п."
                OfficeReference="/Myasnickaya22"
                Price="240 000 в месяц"
                Square="161 кв.м."></OfficeBlock>
                <OfficeBlock OfficeImg="/Images/1Street.jpeg" OfficeName="Помещение свободного назначения, улица Мясницкая, дом 24/7"
                OfficeDescription="Четыре минуты от метро Тургеневская, Чистые пруды. Идеально подходит:
                 под интернет магазин, юридические, консультационные, инвестиционные, 
                 финансовые, аудиторские услуги, агентство недвижимости, услуги косметологии, 
                 микрохирургии, стоматологии, ателье, учебные курсы, страхование, 
                 учебные курсы, нотариат, рекламное и PR-агентство, любое производство и др."
                 Price="425 000 в месяц"
                 Square="196 кв.м., двухэтажный"
                OfficeReference="/Myasnickaya24_7"></OfficeBlock>
            </div >
        );
    }
}
