import React, { Component } from 'react'
import ProjectItem from '../components/ProjectItem'
import * as Projects from '../../../public/projects.json'

class ProjectSection extends Component {

    render() {

        const projects = Projects.projects.map((project, i) => (
            <ProjectItem key={ i }
                         name={ project.name }
                         description={ project.description }
                         tools={ project.tools }
                         type={ project.type }
                         url={ project.url }
            />
        ))

        return (
            <div id="project-section">
                <h1> Projects </h1>
                { projects }
            </div>
        )

    }
}

export default ProjectSection