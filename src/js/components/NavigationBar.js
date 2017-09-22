import React, { Component } from 'react'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import { Paper } from 'material-ui'
import MdHome from 'react-icons/lib/md/home'
import MdImportantDevices from 'react-icons/lib/md/important-devices' // projects icon
import MdInsertEmoticon from 'react-icons/lib/md/insert-emoticon' // about icon

// import { HomeSection } from './HomeSection'
// import { AboutSection } from './AboutSection'
// import { ProjectSection } from './ProjectSection'

const VIEWS = {
  HOME: 0,
  PROJECTS: 1,
  ABOUT: 2
}

const iconSize = 30

// TODO: How the hell do you bind components to state's view??? 

export class NavigationBar extends Component {

  constructor() {
    super()
    this.state = {
      selectedIndex: VIEWS.HOME
    }
  }
  
  changeViewTo = ( value ) => {
    this.setState({
      selectedIndex: value,
    })
  }
  
  render() {
    return (
      <Paper zDepth={ 1 }>
        <BottomNavigation selectedIndex={ this.state.selectedIndex }>
          <BottomNavigationItem
            label="Home"
            icon={ <MdHome size={ iconSize }/> } 
            onClick={ () => this.changeViewTo(VIEWS.HOME) }
          />
          <BottomNavigationItem
            label="Projects"
            icon={ <MdImportantDevices size={ iconSize }/> }
            onClick={ () => this.changeViewTo(VIEWS.PROJECTS) }
          />
          <BottomNavigationItem
            label="About"
            icon={ <MdInsertEmoticon size={ iconSize }/> }
            onClick={ () => this.changeViewTo(VIEWS.ABOUT) }
          />
        </BottomNavigation>
      </Paper>
    )
  }
}