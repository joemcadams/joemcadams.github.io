import React, { Component } from 'react'
import HomePage from './HomeSection'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import LineSeparator from '../components/LineSeparator'
import { slide as Menu } from 'react-burger-menu'

class NavigationMenu extends Component {

    render() {
        return (
            <div id="outer-container">
                <Menu pageWrapId="page-wrap"
                      outerContainerId="outer-container"
                      className="navigation-menu"
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
                    <LineSeparator />
                    <ProjectSection />
                </div>
            </div>
        )
    }
}

export default NavigationMenu
