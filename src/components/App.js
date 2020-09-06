import React from 'react';

//import Contador from './Contador';
import PracarContainer from './PlacarContainer';

const dados = {
    partida:{
        estadio: 'Maracanã/Rj',
        data: '06/09/2020',
        hora: '19H'
    },
    casa:{
        nome: 'Time A'
    },
    visitante:{
        nome:'Time B'
    }
}
export default class App extends React.Component{
    render(){
        return <PracarContainer {...dados} />
    }
}