import React, { Component } from 'react'
import * as AboutItems from '../../../public/about.json'
import AboutItem from '../components/AboutItem'

//FIXME: AboutSection is not rendering the children properly
class AboutSection extends Component {

    render() {
        return (
          <div>
              { AboutItems.sections.forEach((section) =>
                  <AboutItem title={section.title}
                             description={section.description}
                             imagePath={section.imagePath}
                  /> )}
          </div>
        )
    }
}