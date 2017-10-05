import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import ProjectItem from '../components/ProjectItem'
import * as Projects from '../../../public/projects.json'

const projects = Projects.projects

export const ProjectSection = () => (
    <div id="project-section">
        <h1> Projects </h1>
    </div>
)