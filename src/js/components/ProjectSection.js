import React, { Component } from 'react'
import StackGrid from 'react-stack-grid'
import * as _ from 'lodash'
import ProjectItem from '../components/ProjectItem'
import { CONTAINER_STYLES, HEADER_STYLES } from '../styles/Projects'
import { TEXT_STYLES } from '../styles/Text'
import { Projects } from '../projects'

const projects = Projects.sections
const headerStyles = _.merge(_.clone(TEXT_STYLES.HEADER), HEADER_STYLES)

export const ProjectSection = () => {
    const projectsWrapper = projects.map((project, i) => (
        <ProjectItem
            key={ i }
            name={ project.name }
            tools={ project.tools }
            description={ project.description }
            type={ project.type }
            url={ project.url }
            imagePath={ project.imagePath }
        />
    ))

    return (
        <div>
            <h1 style={ headerStyles }> Projects </h1>
            <StackGrid 
                columnWidth={ CONTAINER_STYLES.COLUMN_WIDTH(window.innerWidth) }
                duration={ CONTAINER_STYLES.ANIMATION_LENGTH }
                gutterWidth={ CONTAINER_STYLES.GUTTER_WIDTH }
                gutterHeight={ CONTAINER_STYLES.GUTTER_HEIGHT }
            >
                { projectsWrapper }
            </StackGrid>
        </div>
    )
}