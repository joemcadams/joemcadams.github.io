import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import * as About from '../../../public/about.json'
import AboutItem from '../components/AboutItem'

class AboutSection extends Component {
    render() {
        const sections = About.sections.map((item, i) => (
            <Col md="6" key={ i }>
                <AboutItem key={ i }
                           title={ item.name }
                           description={ item.description }
                           imagePath={ item.imagePath }
                />
            </Col>
        ))
        return (
          <div id="about">
              <h1 id="about-title"> About Me </h1>
              <Container>
                  <Row className="about-row">
                      { sections }
                  </Row>
              </Container>
          </div>
        )
    }
}

export default AboutSection