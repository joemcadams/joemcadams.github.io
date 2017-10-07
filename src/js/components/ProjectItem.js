import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import FaDesktop from 'react-icons/lib/fa/desktop'
import FaMobile from 'react-icons/lib/fa/mobile'
import FaGlobe from 'react-icons/lib/fa/globe'
import GoCircuitBoard from 'react-icons/lib/go/circuit-board'
import { PROJECT_CONTAINER_STYLES, PROJECT_ITEM_STYLES } from '../styles/ProjectItem'

const projectTypes = {
    DESKTOP: "desktop",
    WEB: "web",
    HARDWARE: "hardware",
    MOBILE: "mobile"
}

const ProjectItem = (props) => {
    
    let allTools = ""
    props.tools.forEach((tool, i) => { i === props.tools.length - 1 ? allTools += `${tool}` : allTools += `${tool}, ` })
    
    let icon = {}
    const iconSize = 30
    if (props.type === projectTypes.DESKTOP) icon = <FaDesktop size={ iconSize }/>
    if (props.type === projectTypes.HARDWARE) icon = <GoCircuitBoard size={ iconSize }/>
    if (props.type === projectTypes.MOBILE) icon = <FaMobile size={ iconSize }/>
    if (props.type === projectTypes.WEB) icon = <FaGlobe size={ iconSize }/>
    // <CardMedia><img src={ props.imagePath } alt="Project Image" /></CardMedia>
    
    return (
        <Paper zDepth={ 2 } style={ PROJECT_CONTAINER_STYLES }>
            <Card style={ PROJECT_ITEM_STYLES }>
                <CardHeader
                    title={ props.name }
                    subtitle={ allTools }
                    avatar={ icon }
                />
                <CardText> { props.description } </CardText>
                <CardActions>
                    <a href={ props.url }><RaisedButton label="See more" primary /></a>
                </CardActions>
            </Card>
        </Paper>
    )
}

export default ProjectItem