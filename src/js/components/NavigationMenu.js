import React, { Component } from 'react'
import HomePage from '../components/HomePage'
import AboutItem from '../components/AboutItem'
import ProjectItem from '../components/ProjectItem'
import { slide as Menu } from 'react-burger-menu'

class NavigationMenu extends Component {

    render() {
        const menuStyles = {
            bmBurgerButton: {
                position: 'fixed',
                width: '36px',
                height: '30px',
                left: '36px',
                top: '36px'
            },
            bmBurgerBars: {
                background: '#373a47'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: '#bdc3c7'
            },
            bmMenu: {
                background: '#0496FF',
                padding: '2.5em 1.5em 0',
                fontSize: '1.15em'
            },
            bmMorphShape: {
                fill: '#373a47'
            },
            bmItemList: {
                color: '#b8b7ad',
                padding: '0.8em'
            },
            bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)'
            }
        }
        /* FIXME: Padding or margin isn't quite right when any element added to main div */
        return (
            <div id="outer-container">
                <Menu pageWrapId={ "page-wrap" }
                      outerContainerId={ "outer-container"}
                      styles={ menuStyles }
                >
                    <a id="HomePage" href="/home">
                        <p>Home</p>
                    </a>
                    <a id="AboutPage" href="/about">
                        <p>About</p>
                    </a>
                    <a id="ProjectsPage" href="/projects">
                        <p>Projects</p>
                    </a>
                </Menu>
                <main id="page-wrap">
                </main>
            </div>
        )
    }
}

export default NavigationMenu
