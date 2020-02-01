import React, { Component } from 'react';
import './ShrineDescription.scss'
import Sensoji from './Sensoji';
import Meiji from './Meiji';
import Gotokuji from './Gotokuji';
import Hie from "./Hie";
import Toyokawa from './Toyokawa';

class ShrineDescription extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <Sensoji />
                <Hie />
                <Gotokuji />
                <Meiji />
                <Toyokawa />
            </React.Fragment>
        );
    }
}

export default ShrineDescription;