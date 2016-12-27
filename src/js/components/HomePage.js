import React, { Component } from 'react'
import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'

class HomePage extends Component {
  render() {
    return (
      <div id="Home-Page">
        <div id="Home-Name-Banner">
          <h1> Joe McAdams </h1>
        </div>
        <div id="Home-Description">
          <p> Full Stack Developer </p>
          <p> Lukewarm Hipster </p>
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

export default HomePage
