import React, { Component } from 'react'
import StackGrid from 'react-stack-grid'
import ProjectItem from '../components/ProjectItem'
import { CONTAINER_STYLES } from '../styles/Projects'
import { TEXT_STYLES } from '../styles/Text'
import * as Projects from '../../../public/projects.json'

const projects = Projects.sections

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
            <h1 style={ TEXT_STYLES.HEADER }> Projects </h1>
            <StackGrid 
                columnWidth={ CONTAINER_STYLES.columnWidth(window.innerWidth) } 
                duration={ CONTAINER_STYLES.animationLength }
                gutterWidth={ CONTAINER_STYLES.gutterWidth }
                gutterHeight={ CONTAINER_STYLES.gutterHeight }
            >
                { projectsWrapper }
            </StackGrid>
        </div>
    )
}