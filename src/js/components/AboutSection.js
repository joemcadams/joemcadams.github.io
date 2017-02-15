import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import * as About from '../../../public/about.json'
import AboutItem from '../components/AboutItem'

class AboutSection extends Component { // TODO: Figure out why last to columns render weird on mobile

    splitProjectsIntoChunks = () => {
        const projectSection = []
        for (let i = 0; i < About.sections.length; i += 2) {
            projectSection.push( // For every two items in the array, create a new Row
                this.createRowForSection(
                    this.createColumnForSections(About.sections.slice(i, i + 2)), i
                )
            )
        }
        return projectSection
    }

    createColumnForSections = (sections) => {
        return (
            sections.map((item, i) => (
                <Col md="6" key={ i }>
                    <AboutItem key={ i }
                               title={ item.name }
                               description={ item.description }
                               imagePath={ item.imagePath }
                    />
                </Col>
            ))
        )
    }

    createRowForSection = (section, key) => {
        return (
            <Row key={ key }>
                { section }
            </Row>
        )
    }

    render() {
        return (
          <div id="about">
              <h1 id="about-title"> About Me </h1>
              <Container>
                  { this.splitProjectsIntoChunks() }
              </Container>
          </div>
        )
    }
}

export default AboutSection