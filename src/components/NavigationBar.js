import React, { Component } from 'react';
import './NavigationBar.scss';
import './NavButton';
import NavButton from './NavButton';
class NavigationBar extends Component {
    state = {
        navHeight: 0,
        navPosition: 0,
        isFixed: false,
        idName: "relativeNav",
        showButton: false,
        iconClicked: false,
        className: "open",
        animate: false,
        listClassName: "gridList"
    }
    handleScroll = () => {
        let scrollY = window.scrollY || window.pageYOffset;

        this.setState(() => ({
            navPosition: this.refs.navbar.getBoundingClientRect().top + this.state.navHeight + scrollY
        }))

        if (this.state.navPosition <= scrollY + this.state.navHeight) {
            this.setState(() => ({
                isFixed: true,
                idName: "fixedNav",
                showButton: true,
                listClassName: ""
            }))
        }
        if (window.innerWidth < 1025 && this.state.navPosition <= scrollY + this.state.navHeight) {
            this.setState(() => ({
                className: "close",
                iconClicked: false
            }))
        }
        else {
            this.setState(() => ({
                className: ""
            }))
        }
        if (this.refs.tempDiv && this.state.navPosition <= this.refs.tempDiv.getBoundingClientRect().top + scrollY + this.refs.tempDiv.clientHeight - 1) {
            this.setState(() => ({
                isFixed: false,
                idName: "relativeNav",
                showButton: false,
                listClassName: "gridList"
            }))

        }
        window.scrollY > this.refs.navbar.getBoundingClientRect().top + window.scrollY - (window.innerHeight * .7) && this.setState(() => ({
            animate: true
        }))
    }
    handleResize = () => {
        if (window.innerWidth < 1025 && !this.state.iconClicked) {
            this.setState(() => ({
                className: "close",
            }))
        }
        else {
            this.setState(() => ({
                className: ""
            }))
        }
        if (this.state.navHeight !== this.refs.navbar.clientHeight) {
            this.setState(() => ({
                navHeight: this.refs.navbar.clientHeight
            }))
        }
    }
    handleClickLink = () => {
        if (window.innerWidth < 1025) {
            this.setState(() => ({
                className: "close",
                iconClicked: false
            }))
        }

    }
    handleClickNavBtn = () => {
        this.setState((prevState) => ({
            iconClicked: !prevState.iconClicked
        }))
        if (this.state.iconClicked) {
            this.setState(() => ({
                className: "close"
            }))
        }
        else {
            this.setState(() => ({
                className: ""
            }))
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
        window.addEventListener('scroll', this.handleScroll);
        this.setState(() => ({
            navHeight: this.refs.navbar.clientHeight
        }))
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {

        return (
            <React.Fragment>
                {this.state.isFixed && <div ref={"tempDiv"} style={{ height: this.state.navHeight, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}></div>}
                <nav id={`${this.state.idName}`} className={`${this.state.className}`} ref={"navbar"}>
                    <ul className={this.state.listClassName}>
                        <li className={`${this.state.animate ? 'showButtons' : ''}`}>
                            <a href="#sensoji" onClick={this.handleClickLink}>Sensō-ji</a>
                        </li>
                        <li className={`${this.state.animate ? 'showButtons' : ''}`}>
                            <a href="#meiji" onClick={this.handleClickLink}>Meiji-jingu</a>
                        </li>
                        <li className={`${this.state.animate ? 'showButtons' : ''}`}>
                            <a href="#gotokuji" onClick={this.handleClickLink}>Gotokuji</a>
                        </li>
                        <li className={`${this.state.animate ? 'showButtons' : ''}`}>
                            <a href="#hie" onClick={this.handleClickLink}>Hie</a>
                        </li>
                        <li className={`${this.state.animate ? 'showButtons' : ''}`}>
                            <a href="#" onClick={this.handleClickLink}>Zojoji</a>
                        </li>
                        {/* <li>
                            <a href="#">Toyokawa Inari</a>
                        </li>
                        <li>
                            <a href="#">Nezu</a>
                        </li> */}
                    </ul>
                </nav>
                {this.state.showButton ? <NavButton
                    iconClicked={this.state.iconClicked}
                    click={this.handleClickNavBtn}
                /> : null}

            </React.Fragment>
        );
    }
}

export default NavigationBar;