import React, { Component } from 'react';
import { SecondOfficeImageGallery } from './SecondOfficeImageGallery';
import './OfficePage.css';
import { YMaps, Map, Placemark, Button } from 'react-yandex-maps';

export class SecondOffice extends Component {
    static displayName = SecondOffice.name;

    render() {
        return (
            <div>
                <h2 align="center">А Р Е Н Д А</h2>
                <h2 align="center">ИДЕАЛЬНО ДЛЯ РАЗВИТИЯ ВАШЕГО БИЗНЕСА!</h2>
                <h3 align="center">ПОМЕЩЕНИЕ СВОБОДНОГО НАЗНАЧЕНИЯ (ПСН)</h3>
                <h3 align="center">ЦЕНТР МОСКВЫ (ЦАО)</h3>


                <div align="center">
                    <SecondOfficeImageGallery />
                    <h2>Ключи на руках. Оперативный показ.</h2>
                </div>
                <h3 align="center">ЗВОНИТЕ, ЧТОБЫ ДОГОВОРИТЬСЯ!</h3>
                <div className="telephoneNumbersBlock">
                    <p><a href="tel:+79163501360" className="telephoneNumber">+7 916 350 13 60</a> <a href="whatsapp://send?phone=79163501360"
                        style={{
                            marginLeft: "10px"
                        }}>
                        <img src="/Images/whatsappIcon.ico" /></a>
                    </p>
                </div>

                <p align="center"><b><b><h4>196 КВ.М. ДВУХЭТАЖНЫЙ 395 000 В МЕСЯЦ</h4></b></b></p>
                <p align="center"><b><b><h4>МОСКВА, МЯСНИЦКАЯ УЛИЦА, ДОМ 24/7</h4></b></b></p>

                <YMaps>
                    <div align="center" className="YaMapBlock">
                        <Map className="YaMap" defaultState={{ center: [55.763457, 37.636024], zoom: 17 }}>
                            <Placemark
                                geometry={[55.762667, 37.635206]}
                                properties={{
                                    iconCaption: "Мясницкая ул., 24/7"
                                }}
                                options={{
                                    iconColor: "red"
                                }}
                            />
                        </Map>
                    </div>
                </YMaps>

                <p>
                    <b>Описание:</b> помещение свободного назначения 196 кв.м.,
                    двухэтажное, в центре Москвы. Шикарный ремонт люкс класса.
                    Высокая проходимость пешего трафика. Насыщенная инфраструктура района.
                    Популярная у москвичей и гостей зона отдыха – Чистые пруды!
                </p>

                <p><b>Вход: </b>отдельный вход</p>
                <p><b>Доступность: 2 МИНУТЫ! </b>от станций метро «ТУРГЕНЕВСКАЯ» И
                    «ЧИСТЫЕ ПРУДЫ» <b>пешая доступность</b> от станций метро
                    «СРЕТЕНСКИЙ БУЛЬВАР», «ЛУБЯНКА»</p>

                <p>
                    <b>Идеально подходит:</b> под интернет магазин, юридические,
                    консультационные, инвестиционные, финансовые, аудиторские
                    услуги, агентство недвижимости, услуги косметологии,
                    микрохирургии, стоматологии, ателье, учебные курсы,
                    страхование, учебные курсы, нотариат, рекламное и PR-агентство,
                    любое производство и др.
                </p>

                <p>Оснащение системами:</p>
                <ul>
                    <li>приточно-вытяжной вентиляции;</li>
                    <li>кондиционирование;</li>
                    <li>электронный доступ;</li>
                    <li>видеонаблюдение;</li>
                    <li>видеонаблюдение по периметру здания;</li>
                    <li>подведённая мощность 30 кВт</li>
                    <li>круглосуточная охрана</li>
                </ul>

                <p><b>Планировка:</b> зально-кабинетная</p>

                <p><b>Эксплуатационные расходы: </b>электроснабжение, вода, интернет
                    оплачиваются по факту потребления</p>

                <p><b>Парковка: </b>парковочные места на охраняемой
                    стоянке во дворе рядом с помещением оплачиваются отдельно
                    по договору с ТСЖ</p>

                {/*                 <div align="center" className="item-view-block" style={{
                    marginBottom: "10px",}}>
                    <img src="/Images/Scheme.jpg" className="SchemeImg" />
                </div> */}

                <div class="item-view-block">
                    <div class="item-params">
                        <ul class="item-params-list">
                            <li class="item-params-list-item">
                                <span class="item-params-label">Юридический адрес:</span> Предоставляется
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Налог УСН:</span> (упрощённая система налогообложения)
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Обеспечительный платеж:</span> 395 000 ₽
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Коммунальные платежи:</span> Включены
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Эксплуатационные расходы:</span> Не включены
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Предоплата:</span> 1 месяц
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Тип аренды:</span> Прямая аренда
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Срок аренды:</span> Длительная
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Минимальный срок:</span> 12 мес.
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Комиссия от клиента:</span> Без комиссии
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Номер налоговой:</span> 1
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Планировка:</span> Смешанная
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Состояние:</span> Офисная отделка в идеальном состоянии
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Количество мокрых точек:</span> 4
                            </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Мощность, кВт:</span> 30
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item-view-block">
                    <h4>Инфраструктура</h4>
                    <ul>
                        <li>кафе, рестораны, общепит</li>
                        <li>гостиница</li>
                        <li>медицинский центр</li>
                        <li>аптеки</li>
                        <li>банки</li>
                        <li>салон красоты</li>
                        <li>минимаркет</li>
                    </ul>
                </div>
            </div >
        );
    }
}
