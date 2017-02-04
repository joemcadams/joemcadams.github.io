import React, { Component } from 'react'
import * as About from '../../../public/about.json'
import AboutItem from '../components/AboutItem'

class AboutSection extends Component {
    render() {
        const sections = About.sections.map((item, i) => (
            <AboutItem key={ i }
                       title={ item.name }
                       description={ item.description }
                       imagePath={ item.imagePath }
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