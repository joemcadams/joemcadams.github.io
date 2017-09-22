import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { NavigationBar } from './components/NavigationBar'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div id="App">
                    <NavigationBar />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
