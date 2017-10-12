import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import FaDesktop from 'react-icons/lib/fa/desktop'
import FaMobile from 'react-icons/lib/fa/mobile'
import FaGlobe from 'react-icons/lib/fa/globe'
import GoCircuitBoard from 'react-icons/lib/go/circuit-board'
import MdVisibility from 'react-icons/lib/md/visibility'
import { PROJECT_ITEM_STYLES } from '../styles/Projects'

const PROJECT_TYPES = {
    DESKTOP: "desktop",
    WEB: "web",
    HARDWARE: "hardware",
    MOBILE: "mobile",
    AR_VR: "ar/vr"
}

const ProjectItem = props => {
    
    let allTools = ""
    props.tools.forEach((tool, i) => { i === props.tools.length - 1 ? allTools += `${tool}` : allTools += `${tool}, ` })
    
    let icon = {}
    const iconSize = 30
    if (props.type === PROJECT_TYPES.DESKTOP) icon = <FaDesktop size={ iconSize }/>
    if (props.type === PROJECT_TYPES.HARDWARE) icon = <GoCircuitBoard size={ iconSize }/>
    if (props.type === PROJECT_TYPES.MOBILE) icon = <FaMobile size={ iconSize }/>
    if (props.type === PROJECT_TYPES.WEB) icon = <FaGlobe size={ iconSize }/>
    if (props.type === PROJECT_TYPES.AR_VR) icon = <MdVisibility size={ iconSize }/>
    
    return (
        <Paper zDepth={ 1 }>
            <Card style={ PROJECT_ITEM_STYLES }>
                <CardMedia><img src={ props.imagePath } alt="Project"/></CardMedia>
                <CardHeader
                    title={ props.name }
                    subtitle={ allTools }
                    avatar={ icon }
                />
                <CardText style={ PROJECT_ITEM_STYLES.TEXT }> { props.description } </CardText>
                <CardActions>
                    { props.url ? <a href={ props.url }><RaisedButton label="See more" primary /></a> : <div /> }
                </CardActions>
            </Card>
        </Paper>
    )
}

export default ProjectItem