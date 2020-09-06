import React from 'react';

import BotaoBol from './BotaoGol';

export default class Time extends React.Component{
    render(){
        return (
            <div>
                <h1 className="time">{this.props.nome}</h1>
                <h2 className="gol">{this.props.gols}</h2>
                <BotaoBol marcarGol={this.props.marcarGol} />
            </div>
        )
    }
}