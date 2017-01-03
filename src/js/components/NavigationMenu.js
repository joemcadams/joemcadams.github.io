import React, { Component } from 'react'
import HomePage from '../components/HomePage'
import AboutSection from '../components/AboutSection'
import ProjectItem from '../components/ProjectItem'
import { slide as Menu } from 'react-burger-menu'

class NavigationMenu extends Component {

    render() {
        return (
            <div id="outer-container">
                <Menu pageWrapId={ "page-wrap" }
                      outerContainerId={ "outer-container"}
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
                <div id="page-wrap">
                    <HomePage />
                </div>
            </div>
        )
    }
}

export default NavigationMenu
