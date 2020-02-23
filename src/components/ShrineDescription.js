import React, { Component } from 'react';
import './ShrineDescription.scss'
import Sensoji from './Sensoji';
import Meiji from './Meiji';
import Gotokuji from './Gotokuji';
import Hie from "./Hie";
import Toyokawa from './Toyokawa';
// const ShrineDescription = ({ asyncLoading }) => {
//     return (
//         <React.Fragment>
//             <Sensoji asyncLoading={asyncLoading} />
//             <Hie asyncLoading={asyncLoading} />
//             <Gotokuji asyncLoading={asyncLoading} />
//             <Toyokawa asyncLoading={asyncLoading} />
//             <Meiji asyncLoading={asyncLoading} />
//         </React.Fragment>
//     );
// }

// export default ShrineDescription;
class ShrineDescription extends Component {
    state = {
        load: false
    }
    //Allow for asynchronous loading of images
    handleAsyncLoad = () => {
        // setTimeout(() => {
        !this.state.load &&
            this.setState(() => ({
                load: true
            }));
        // }, 450);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleAsyncLoad)
    }
    render() {
        const { load } = this.state;
        return (
            <React.Fragment>
                <Sensoji asyncLoading={load} />
                <Hie asyncLoading={load} />
                <Gotokuji asyncLoading={load} />
                <Toyokawa asyncLoading={load} />
                <Meiji asyncLoading={load} />
            </React.Fragment>
        );
    }
}

export default ShrineDescription;