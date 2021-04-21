import React, { Component } from 'react';
import './OfficeBlock.css';

export class OfficeBlock extends Component {
    static displayName = OfficeBlock.name;

    render() {
        return (
            <div class="block">
                <a href={this.props.OfficeReference} class="text">
                    <h2>
                        {this.props.OfficeName}
                    </h2>
                    <div class="block-text">
                        <img class="block-img" src={this.props.OfficeImg} />
                        <p>{this.props.OfficeDescription}</p>
                        <p>Цена: {this.props.Price}</p>
                        <p>Площадь: {this.props.Square}</p>
                    </div>
                </a>
            </div>
        );
    }
}