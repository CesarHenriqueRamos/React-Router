import React from 'react';

export default class Partida extends React.Component{
    render(){
        return (
            <div>
                <h2 className="estadio">{this.props.estadio}</h2>
                <div className="data">
                    <span>{this.props.data}</span>
                    <span>-</span>
                    <span>{this.props.hora}</span>
                </div>
            </div>
        )
    }
}