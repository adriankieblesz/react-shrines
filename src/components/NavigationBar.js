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
        //update current scrollY position
        let scrollY = window.scrollY || window.pageYOffset;

        //determine navbar position related to scroll position
        this.setState(() => ({
            navPosition: this.refs.navbar.getBoundingClientRect().top + this.state.navHeight + scrollY
        }))
        //update navbar height when changed
        if (this.state.navHeight !== this.refs.navbar.clientHeight) {
            this.setState(() => ({
                navHeight: this.refs.navbar.clientHeight
            }))
        }
        //if top navbar verge is below or same level as scrollY then make it sticky to the top of the window
        if (this.state.navPosition <= scrollY + this.state.navHeight) {
            this.setState(() => ({
                isFixed: true,
                idName: "fixedNav",
                showButton: true,
                listClassName: ""
            }))
        }
        //if substitute size box exists and  top navbar verge sticks to substitute box then make it relative and erase substitute box
        if (this.refs.tempDiv && this.state.navPosition <= this.refs.tempDiv.getBoundingClientRect().top + scrollY + this.refs.tempDiv.clientHeight - 1) {
            this.setState(() => ({
                isFixed: false,
                idName: "relativeNav",
                showButton: false,
                listClassName: "gridList"
            }))
        }
        //if mobile mode and navbar position under or equal it's relative place then close it
        if (window.innerWidth < 1025 && this.state.navPosition <= scrollY + this.state.navHeight) {
            this.setState(() => ({
                className: "close",
                iconClicked: false
            }))
        }
        else {
            this.setState(() => ({
                className: "",
            }))
        }
        //if scrollY reaches to the top of NavigationBar component's container then execute animation responsible for showing buttons in fixed order 
        window.scrollY > this.refs.navbar.getBoundingClientRect().top + window.scrollY - (window.innerHeight * .7) && this.setState(() => ({
            animate: true
        }))
    }
    handleResize = () => {
        //if mobile mode and still resizing then set navbar as default
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
        //update navbar height when changed
        if (this.state.navHeight !== this.refs.navbar.clientHeight) {
            this.setState(() => ({
                navHeight: this.refs.navbar.clientHeight
            }))
        }
    }
    //if mobile mode and one of the links has been clicked then close navbar
    handleClickLink = () => {
        if (window.innerWidth < 1025) {
            this.setState(() => ({
                className: "close",
                iconClicked: false
            }))
        }

    }
    //Function responsible for changing the state of the navbar button during mobile mode
    handleClickNavBtn = () => {

        this.setState((prevState) => ({
            iconClicked: !prevState.iconClicked
        }))
        // if (this.state.iconClicked) {
        //     this.setState(() => ({
        //         className: "close"
        //     }))
        // }
        // else {
        //     this.setState(() => ({
        //         className: ""
        //     }))
        // }
        this.state.iconClicked ?
            this.setState(() => ({
                className: "close"
            })) :
            this.setState(() => ({
                className: ""
            }))
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
        window.addEventListener('scroll', this.handleScroll);
        //determine initial nav height
        this.setState(() => ({
            navHeight: this.refs.navbar.clientHeight
        }))
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { isFixed, navHeight, idName, className, listClassName, animate, showButton, iconClicked } = this.state;
        return (
            <React.Fragment>
                {isFixed && <div ref={"tempDiv"} style={{ height: navHeight, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}></div>}
                <nav id={`${idName}`} className={`${className}`} ref={"navbar"}>
                    <ul className={listClassName}>
                        <li className={`${animate ? 'showButtons' : ''}`}>
                            <a href="#sensoji" onClick={this.handleClickLink}>Sensō-ji</a>
                        </li>
                        <li className={`${animate ? 'showButtons' : ''}`}>
                            <a href="#hie" onClick={this.handleClickLink}>Hie</a>
                        </li>
                        <li className={`${animate ? 'showButtons' : ''}`}>
                            <a href="#gotokuji" onClick={this.handleClickLink}>Gotokuji</a>
                        </li>
                        <li className={`${animate ? 'showButtons' : ''}`}>
                            <a href="#toyokawa" onClick={this.handleClickLink}>Toyokawa</a>
                        </li>
                        <li className={`${animate ? 'showButtons' : ''}`}>
                            <a href="#meiji" onClick={this.handleClickLink}>Meiji-jingu</a>
                        </li>
                    </ul>
                </nav>
                {/* Show hamburger menu*/}
                {showButton ? <NavButton
                    iconClicked={iconClicked}
                    click={this.handleClickNavBtn}
                /> : null}

            </React.Fragment>
        );
    }
}

export default NavigationBar;