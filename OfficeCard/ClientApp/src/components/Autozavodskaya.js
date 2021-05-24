import React, { Component } from 'react';
import { AutozavodskayaImageGallery } from './AutozavodskayaGallery';
import './OfficePage.css';
import { YMaps, Map, Placemark, Button } from 'react-yandex-maps';

export class AutozavodskayaOffice extends Component {
    static displayName = AutozavodskayaOffice.name;

    render() {
        return (
            <div>
                <h2 align="center">А Р Е Н Д А</h2>
                <h2 align="center">Офисное помещение</h2>
                <h3 align="center">2 минуты от станций метро и МЦК «Автозаводская»!</h3>
                <h3 align="center">ЗВОНИТЕ, ЧТОБЫ ДОГОВОРИТЬСЯ!</h3>

                <div align="center">
                    <AutozavodskayaImageGallery />
                    <h2>Ключи на руках. Оперативный показ.</h2>
                </div>
                <div className="telephoneNumbersBlock">
                    <p><a href="tel:+79163501360" className="telephoneNumber">+7 916 350 13 60</a> <a href="whatsapp://send?phone=79163501360"
                        style={{
                            marginLeft: "10px"
                        }}>
                        <img src="/Images/whatsappIcon.ico" /></a>
                    </p>
                    <p>
                        <a href="tel:+79637826264" className="telephoneNumber">+7 963 782 62 64</a> <a href="whatsapp://send?phone=79637826264"
                            style={{
                                marginLeft: "10px"
                            }}>
                            <img src="/Images/whatsappIcon.ico" /></a>
                    </p>
                </div>


                <p align="center"><b><b><h4>44 кв.м и 32 кв.м.</h4></b></b></p>
                <p align="center"><b><b><h4>1-й Кожуховский проезд, дом 11</h4></b></b></p>

                <YMaps>
                    <div align="center" className="YaMapBlock">
                        <Map className="YaMap" defaultState={{ center: [55.706715, 37.662030], zoom: 17 }}>
                            <Placemark
                                geometry={[55.706715, 37.662030]}
                                properties={{
                                    iconCaption: "1-й Кожуховский проезд, дом 11"
                                }}
                                options={{
                                    iconColor: "red"
                                }}
                            />
                        </Map>
                    </div>
                </YMaps>

                <p>
                    <b>Описание:</b> сдаются два блока в подвальном этаже 44 кв.м и 32 кв.м.
                    Можно арендовать всю площадь – 76 кв. м., можно разбить на меньшие блоки!
                    Над помещением нежилой 1-й этаж жилого дома. Обустроенная территория.
                </p>

                <p><b>Вход:</b> отдельаный вход</p>

                <p><b>Доступность: </b> 2 минуты от станций метро и МЦК «Автозаводская»</p>

                <p>
                    <b>Назначение:</b> небольшие офисы, пункты выдачи
                    интернет заказов, интернет магазин, нотариат, страхование и т.п.
                </p>

                <p><b>Оснащение: </b>кондиционеры</p>
                <p><b>Планировка: </b>офисно-кабинетная, без окон</p>
                <p><b>Эксплуатационные расходы: </b></p>
                <p><b>Парковка:</b>свободная </p>

                <div class="item-view-block">
                    <div class="item-params">
                        <ul class="item-params-list">
                            <li class="item-params-list-item">
                            <li class="item-params-list-item">
                                <span class="item-params-label">Юридический адрес:</span> Предоставляется
                            </li>
                                <span class="item-params-label">Налог:</span> УСН
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Обеспечительный платеж:</span> за 1 месяц
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Предоплата:</span> 1 месяц
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Коммунальные платежи:</span> Включены
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Эксплуатационные расходы:</span> Не включены
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Тип аренды:</span> СУбаренда
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Срок аренды:</span> от 11 месяцев
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Комиссия от клиента:</span> Без комиссии
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Планировка:</span> офисно-кабинетная
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Количество мокрых точек:</span> 1
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Мощность, кВт:</span> 35
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item-view-block">
                    <h4>Инфраструктура</h4>
                    <ul>
                        <li>Деловой центр</li>
                        <li>ТЦ</li>
                        <li>Жилые дома</li>
                        <li>Кафе</li>
                        <li>Рестораны</li>
                        <li>Аптеки</li>
                        <li>Салон красоты</li>
                        <li>Магазины</li>
                    </ul>
                </div>
            </div >
        );
    }
}
