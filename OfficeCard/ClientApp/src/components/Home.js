﻿import React, { Component } from 'react';
import { DemoCarousel } from './Carousel';
import './Home.css'

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h2 align="center"><u>А Р Е Н Д А</u></h2>
                <h3 align="center">Офис в центре Москвы</h3>

                <div align="center">
                    <DemoCarousel />
                </div>

                <table width="100%">
                    <tr>
                        <td align="center"><h4>8 916 350 13 60</h4></td>
                        <td align="center"><h4>8 963 782 62 64</h4></td>
                    </tr>
                </table>

                <p align="center"><b><u><h4>161 кв.м. 270 000 в месяц</h4></u></b></p>
                <p align="center"><b><u><h4>Москва, ЦАО, р-н Басманный, Мясницкая ул., 22/стр1</h4></u></b></p>
                <article>
                    Офис 161 кв.м на ул. Мясницкая  - в шаговой доступности от станций метро
                    "Чистые пруды", "Тургеневская", "Сретенский бульвар", "Лубянка". Вход с
                    Банковского переулка, респектабельная входная группа.
    </article>

                <p>Офис оснащен системами:</p>
                <ul>
                    <li>приточно-вытяжной вентиляции;</li>
                    <li>кондиционирования;</li>
                    <li>электронного доступа;</li>
                    <li>видеонаблюдения.</li>
                </ul>

                <article>
                    Подведенная мощность - 35 кВт, с системой стабилизации 3-х фазного
                    напряжения. Отдельная серверная комната оснащена двумя кондиционерами,
                    современной АТС Panasonic KX-TDA200, обеспечивающей все виды
                    телеметрической связи.
    </article>
                <article>
                    Офис имеет зально-кабинетную компоновку с кроссировкой по кабинетам:
                    телефонии и локальной вычислительной системы из серверной, имеющий оптико-
                    волоконный ввод от интернет-провайдеров.
    </article>
                <article>
                    Эксплуатационные расходы: электроснабжение, вода, интернет
                    оплачиваются по факту потребления.
    </article>
                <article>
                    В ухоженном дворе предоставляются два парковочных места для авто,
                    закреплённые за помещением. После косметического ремонта.
                    Предоставляется юридический адрес.
    </article>
                <br />
                <p><b>Депозит - от 1 месяца.</b></p>
                <div class="item-view-block">
                    <div class="item-params">
                        <ul class="item-params-list">
                            <li class="item-params-list-item">
                                <span class="item-params-label">Налог УСН:</span> (упрощённая система налогообложения)
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Обеспечительный платеж:</span> 285 000 ₽
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Коммунальные платежи:</span> Включены
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Эксплуатационные расходы:</span> Не ключены
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
                                <span class="item-params-label">Арендные каникулы:</span> Нет
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Стоимость парковки:</span> Бесплатно
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Комиссия от клиента:</span> Без комиссии
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Номер налоговой:</span> 1
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Стоимость парковки:</span> Бесплатно
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
                                <span class="item-params-label">Мебель:</span> Нет
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Количество мокрых точек:</span> 1
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Мощность, кВт:</span> 35
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Доступ:</span> Наземная
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Парковка:</span> Нет
                    </li>
                            <li class="item-params-list-item">
                                <span class="item-params-label">Количество мест:</span> 2
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
            </div>
        );
    }
}
