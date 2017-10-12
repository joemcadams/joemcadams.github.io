import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { NavigationBar } from './components/NavigationBar'
import { APP_STYLES } from './styles/App'

const App = () => (
    <MuiThemeProvider muiTheme={ getMuiTheme(APP_STYLES) } >
        <NavigationBar />
    </MuiThemeProvider>
)

export default App
