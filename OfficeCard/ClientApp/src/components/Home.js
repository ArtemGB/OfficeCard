import React, { Component } from 'react';
import { MyGallery } from './ImagesCarousel';
import './Home.css';
import { YMaps, Map, Placemark, Button } from 'react-yandex-maps';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h2 align="center">А Р Е Н Д А</h2>
                <h3 align="center">Офис в центре Москвы</h3>

                <div align="center">
                    <MyGallery />
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


                <p align="center"><b><b><h4>161 кв.м. 270 000 в месяц</h4></b></b></p>
                <p align="center"><b><b><h4>Москва, ЦАО, р-н Басманный, Мясницкая ул., 22/стр1</h4></b></b></p>

                <YMaps>
                    <div align="center" className="YaMapBlock">
                        <Map className="YaMap" defaultState={{ center: [55.763457, 37.636024], zoom: 17 }}>
                            <Placemark
                                geometry={[55.762145, 37.634470]}
                                properties={{
                                    iconCaption: "Мясницкая ул., 22с1"
                                }}
                                options={{
                                    iconColor: "red"
                                }}
                            />
                        </Map>
                    </div>
                </YMaps>

                <p>
                    <b>Описание:</b> Офис 161 кв.м на ул. Мясницкая  - в шаговой доступности от станций метро
                    <b>"Чистые пруды"</b>, <b>"Тургеневская"</b>, <b>"Сретенский бульвар"</b>, <b>"Лубянка"</b>. Вход с
                    Банковского переулка, респектабельная входная группа.
    </p>

                <p>
                    <b>Идеально подходит</b> под юридические, консультационные, финансовые, аудиторские услуги,
                    страхование, агентство недвижимости, услуги косметологии, микрохирургии, стоматологии,
                    справки, ателье, учебные курсы, адвокатское бюро,
                    нотариальные услуги, рекламное и PR-агенство и т.п.
    </p>

                <p>Офис оснащен системами:</p>
                <ul>
                    <li>приточно-вытяжной вентиляции;</li>
                    <li>кондиционирования;</li>
                    <li>электронного доступа;</li>
                    <li>видеонаблюдения.</li>
                </ul>

                <p>
                    Подведенная мощность - 35 кВт, с системой стабилизации 3-х фазного
                    напряжения. Отдельная серверная комната оснащена двумя кондиционерами,
                    современной АТС Panasonic KX-TDA200, обеспечивающей все виды
                    телеметрической связи.
    </p>
                <p>
                    Офис имеет зально-кабинетную компоновку с кроссировкой по кабинетам:
                    телефонии и локальной вычислительной системы из серверной, имеющий оптико-
                    волоконный ввод от интернет-провайдеров.
    </p>
                <p>
                    Эксплуатационные расходы: электроснабжение, вода, интернет
                    оплачиваются по факту потребления.
    </p>
                <p>
                    В ухоженном дворе предоставляются два парковочных места для авто,
                    закреплённые за помещением. После косметического ремонта.
    </p>

                <p>Предоставляется юридический адрес.</p>
                <p><b>Депозит - от 1 месяца.</b></p>

                <div align="center" style={{
                    marginBottom: "10px"
                }}>
                    <img src="/Images/Scheme.jpg" className="SchemeImg" />
                </div>
                <h4>Помещения:</h4>
                <ul>
                    <li>
                        <b>Помещение 1</b> – 85,8 кв.м, 5 окон с видом на Банковский переулок, поделено
                             на три зоны внутренними перегородками: зона рядом с входной
                             дверью, зона рецепции, зона общего назначения.

                    </li>
                    <li>
                        <b>Помещение 2</b> – 7,3 кв.м. кабинет, без окон.
                    </li>
                    <li>
                        <b>Помещение 3</b> – 16,5 кв.м, кабинет, 2 окна во внутренний двор.
                    </li>
                    <li>
                        <b>Помещение 4</b> – 3,6 кв.м., кухня (без мокрой точки).
                    </li>
                    <li>
                        <b>Помещение 5</b> – 7,8 кв.м., кабинет, 1 окно во внутренний двор.
                    </li>
                    <li>
                        <b>Помещения 6</b> – 18,9 кв.м., кабинет, 1 окно во внутренний двор.
                    </li>
                    <li>
                        <b>Помещение 7</b> – серверная комната.
                    </li>
                    <li>
                        <b>Помещения 8, 9, 10</b> – сан.узел (2).
                    </li>

                </ul>
                <div class="item-view-block">
                    <div class="item-params">
                        <ul class="item-params-list">
                            <li class="item-params-list-item">
                                <span class="item-params-label">Налог УСН:</span> (упрощённая система налогообложения)
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Обеспечительный платеж:</span> 270 000 ₽
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
                                <span class="item-params-label">Срок аренды:</span> Длительный
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Минимальный срок:</span> 12 мес.
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Парковка:</span> Наземная
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Стоимость парковки:</span> Бесплатно
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Количество мест на парковке:</span> 2
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Комиссия от клиента:</span> Без комиссии
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Номер налоговой:</span> 1
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Юридический адрес:</span> Предоставляется
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Планировка:</span> Смешанная
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Состояние:</span> Офисная отделка
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Мебель:</span> Нет
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
                        <li>Ателье одежды</li>
                        <li>Гостиница</li>
                        <li>Медицинский центр</li>
                        <li>Аптека</li>
                        <li>Минимаркет</li>
                        <li>Банкомат</li>
                        <li>Отделение банка</li>
                        <li>Салон красоты</li>
                        <li>Буфет</li>
                        <li>Нотариальная контора</li>
                        <li>Ресторан</li>
                        <li>Кафе</li>
                    </ul>
                </div>
            </div >
        );
    }
}
