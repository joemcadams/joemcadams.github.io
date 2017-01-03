import React, { Component } from 'react'
import HomePage from '../components/HomePage'
import AboutSection from '../components/AboutSection'
import ProjectItem from '../components/ProjectItem'
import LineSeparator from '../components/LineSeparator'
import { push as Menu } from 'react-burger-menu'

class NavigationMenu extends Component {

    render() {
        return (
            <div id="outer-container">
                <Menu pageWrapId={ "page-wrap" }
                      outerContainerId={ "outer-container"}
                >
                    <a href="home">
                        <p>Home</p>
                    </a>
                    <a href="about">
                        <p>About</p>
                    </a>
                    <a href="projects">
                        <p>Projects</p>
                    </a>
                </Menu>
                <div id="page-wrap">
                    <HomePage />
                    <LineSeparator />
                    <AboutSection />
                </div>
            </div>
        )
    }
}

export default NavigationMenu
