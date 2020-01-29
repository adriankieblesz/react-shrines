import React, { Component } from 'react';
import './ShrineDescription.scss'
import Sensoji from './Sensoji';
import Meiji from './Meiji';
import Gotokuji from './Gotokuji';
import Hie from "./Hie";

class ShrineDescription extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <Sensoji />
                <Meiji />
                <Gotokuji />
                <Hie />
            </React.Fragment>
        );
    }
}

export default ShrineDescription;