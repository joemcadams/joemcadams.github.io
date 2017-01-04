import React, { Component } from 'react'
import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'

class HomeSection extends Component {
    render() {
        return (
            <div id="home-page">
                <div id="home-name-banner">
                    <h1> Joe McAdams </h1>
                </div>
                <div id="home-description">
                    <p> Full Stack Developer </p>
                    <p> DIY Enthusiast  </p>
                    <p> Critically-Acclaimed Hipster </p>
                    <a href="https://linkedin.com/in/josephwmcadams">
                        <FaLinkedinSquare />
                    </a>
                    <a href="https://github.com/joemcadams">
                        <FaGithubSquare />
                    </a>
                </div>
            </div>
        )
    }
}

export default HomeSection
