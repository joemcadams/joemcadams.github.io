import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import MdHome from 'react-icons/lib/md/home'
import MdImportantDevices from 'react-icons/lib/md/important-devices' // projects icon
import MdInsertEmoticon from 'react-icons/lib/md/insert-emoticon' // about icon
import { HomeSection } from './HomeSection'
import { AboutSection } from './AboutSection'
import { ProjectSection } from './ProjectSection'
import { CONTENT_STYLES } from '../styles/NavigationBar'

const VIEWS = {
  HOME: 0,
  PROJECTS: 1,
  ABOUT: 2
}

export class NavigationBar extends Component {

  constructor() {
    super()
    this.state = {
      value: VIEWS.HOME
    }
  }
  
  changeViewTo = ( value ) => {
    this.setState({
      value: value,
    })
  }
  
  render() {
    return (
      <Tabs
        onChange={ (value) => this.changeViewTo(value) }
        contentContainerStyle={ CONTENT_STYLES }
      >
        <Tab label="Home" icon={ <MdHome className="icon" /> } value={ VIEWS.HOME }>
          <HomeSection/>
        </Tab>
        <Tab label="Projects" icon={ <MdImportantDevices className="icon" /> } value={ VIEWS.PROJECTS }>
          <ProjectSection/>
        </Tab>
        <Tab label="About" icon={ <MdInsertEmoticon className="icon" /> } value={ VIEWS.ABOUT }>
          <AboutSection/>
        </Tab>
      </Tabs>
    )
  }
}