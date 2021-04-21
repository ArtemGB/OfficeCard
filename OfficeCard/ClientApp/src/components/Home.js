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
                OfficeName="Офис на Мясницкой"
                OfficeDescription="Идеально подходит под юридические, консультационные, финансовые, аудиторские услуги,
                страхование, агентство недвижимости, услуги косметологии, микрохирургии, стоматологии,
                справки, ателье, учебные курсы, адвокатское бюро,
                нотариальные услуги, рекламное и PR-агенство и т.п."
                OfficeReference="/FirstOffice"
                Price="240 000 в месяц"
                Square="161 кв.м."></OfficeBlock>
                <OfficeBlock OfficeImg="/Images/1Street.jpeg" OfficeName="Тот самый Офис"
                OfficeDescription="Идеально подходит под юридические, консультационные, финансовые, аудиторские услуги,
                страхование, агентство недвижимости, услуги косметологии, микрохирургии, стоматологии,
                справки, ателье, учебные курсы, адвокатское бюро,
                нотариальные услуги, рекламное и PR-агенство и т.п."
                OfficeReference="/SecondOffice"></OfficeBlock>
            </div >
        );
    }
}
