import React, { Component } from 'react'
import ProjectItem from '../components/ProjectItem'
import * as Projects from '../../../public/projects.json'

const projects = Projects.projects

export const ProjectSection = () => (
    <div id="project-section">
        <h1> Projects </h1>
        { projects.map((project, i) => (
            <ProjectItem
                key={ i }
                name={ project.name }
                tools={ project.tools }
                description={ project.description }
                type={ project.type }
                url={ project.url }
            />
        ))}
    </div>
)