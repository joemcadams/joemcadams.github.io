import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { NavigationBar } from './components/NavigationBar'
import { AppStyles } from './styles/App'

const App = () => (
    <MuiThemeProvider muiTheme={ getMuiTheme(AppStyles) } >
        <NavigationBar />
    </MuiThemeProvider>
)

export default App
