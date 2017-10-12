import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { TEXT_STYLES } from '../styles/Text'
import { ABOUT_ITEM_STYLES } from '../styles/About'
import * as _ from 'lodash'

const DESCRIPTION_TEXT_STYLES = window.innerWidth > 800 ? TEXT_STYLES.ABOUT_ITEM_TEXT : TEXT_STYLES.ABOUT_ITEM_TEXT_MOBILE
const IMAGE_STYLES = window.innerWidth > 800 ? ABOUT_ITEM_STYLES.IMAGE : ABOUT_ITEM_STYLES.IMAGE_MOBILE
const HEADER_STYLES = _.merge(_.cloneDeep(TEXT_STYLES.HEADER), {
    fontSize: '1.75em'
})

class AboutItem extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            inFocus: false
        }
    }
    
    initialDepth = 2
    hoverDepth = 4

    handleMouseEnter = () => this.setState({ inFocus: true })
    handleMouseLeave = () => this.setState({ inFocus: false })


    render = () => (
        <Paper 
            zDepth={ this.state.inFocus === true ? this.hoverDepth : this.initialDepth }
            onMouseEnter={ this.handleMouseEnter }
            onMouseLeave={ this.handleMouseLeave }
            style={ ABOUT_ITEM_STYLES.CONTAINER }
        >
            <h1 style={ HEADER_STYLES }> { this.props.title } </h1>
            <img src={ this.props.imagePath } alt="A hilarious gif" style={ IMAGE_STYLES } />
            <p style={ DESCRIPTION_TEXT_STYLES }> { this.props.description } </p>
        </Paper>
    )
}

export default AboutItem
