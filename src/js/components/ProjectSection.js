import React, { Component } from 'react'
import StackGrid from 'react-stack-grid'
import ProjectItem from '../components/ProjectItem'
import { PROJECT_CONTAINER_STYLES } from '../styles/ProjectItem'
import { TEXT_STYLES } from '../styles/Text'
import * as Projects from '../../../public/projects.json'

const projects = Projects.projects

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
                columnWidth={ PROJECT_CONTAINER_STYLES.columnWidth(window.innerWidth) } 
                duration={ PROJECT_CONTAINER_STYLES.animationLength }
                gutterWidth={ PROJECT_CONTAINER_STYLES.gutterWidth }
                gutterHeight={ PROJECT_CONTAINER_STYLES.gutterHeight }
            >
                { projectsWrapper }
            </StackGrid>
        </div>
    )
}