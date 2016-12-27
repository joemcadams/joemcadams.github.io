import React, { Component } from 'react'
import HomePage from '../components/HomePage'
import { pushRotate as Menu } from 'react-burger-menu'

class NavigationMenu extends Component {

    static propTypes = {
        pages: React.PropTypes.arrayOf(React.PropTypes.any)
    }

    render() {
        return (
            <div id="outer-container">
                <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                    <a id="HomePage" href="/home">
                        Home
                    </a>
                    <a id="AboutPage" href="/about">
                        About
                    </a>
                    <a id="ProjectsPage" href="/projects">
                        Projects
                    </a>
                </Menu>
                <main id="page-wrap">
                    <HomePage />
                </main>
            </div>
        )
    }
}

export default NavigationMenu
