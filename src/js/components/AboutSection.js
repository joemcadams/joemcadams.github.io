import React, { Component } from 'react'
import * as About from '../../../public/about.json'
import AboutItem from '../components/AboutItem'

class AboutSection extends Component {
    render() {
        const sections = About.sections.map((section, i) => (
            <AboutItem key={ i }
                       title={ section.title }
                       description={ section.description }
                       imagePath={ section.imagePath }
            />
        ))
        return (
          <div id="about">
              <h1 id="about-title"> About Me </h1>
              { sections }
          </div>
        )
    }
}

export default AboutSection