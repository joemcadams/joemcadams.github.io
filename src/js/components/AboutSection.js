import React, { Component } from 'react'
import StackGrid from 'react-stack-grid'
import { TEXT_STYLES } from '../styles/Text'
import { About } from '../about'
import AboutItem from '../components/AboutItem'
import { CONTAINER_STYLES } from '../styles/About'

export class AboutSection extends Component {

    render() {
        return (
          <div>
            <h1 style={ TEXT_STYLES.HEADER }> About Me </h1>
            <StackGrid 
                columnWidth={ CONTAINER_STYLES.COLUMN_WIDTH(window.innerWidth) } 
                duration={ CONTAINER_STYLES.ANIMATION_LENGTH }
                gutterWidth={ CONTAINER_STYLES.GUTTER_WIDTH }
                gutterHeight={ CONTAINER_STYLES.GUTTER_HEIGHT }
            >
                { About.sections.map((section, i) => (
                    <AboutItem
                        key={ i } 
                        title={ section.name }
                        imagePath={ section.imagePath }
                        description={ section.description }
                    />
                ))}
            </StackGrid>
          </div>
        )
    }
}