import React, { Component } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import ProjectItem from '../components/ProjectItem'
import * as Projects from '../../../public/projects.json'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

export default class ProjectSection extends Component {

    render() {

        const colsForSmScreen = 1
        const colsForMdScreen = 1
        const colsForLgScreen = 2

        const projects = Projects.projects.map((project, i) => (
            <div key={ i } className="project-item-wrapper">
                <ProjectItem
                     key={ i }
                     name={ project.name }
                     description={ project.description }
                     tools={ project.tools }
                     type={ project.type }
                     url={ project.url }
                />
            </div>
        ))

        const createProjectLayouts = () => {
            const smallDeviceLayout = []
            const mediumDeviceLayout = []
            const largeDeviceLayout = []
            Projects.projects.forEach((project, i) => {
                const smallItem = {
                    i: JSON.stringify(i),
                    x: i % colsForSmScreen,
                    y: 0,
                    w: 1,
                    h: 5,
                    static: true
                }
                const mediumItem = {
                    i: JSON.stringify(i),
                    x: i % colsForMdScreen,
                    y: Math.floor(i / colsForMdScreen),
                    w: 1,
                    h: 5,
                    static: true
                }
                const largeItem = {
                    i: JSON.stringify(i),
                    x: i % colsForLgScreen,
                    y: Math.floor(i / colsForLgScreen),
                    w: 1,
                    h: 4,
                    static: true
                }
                smallDeviceLayout.push(smallItem)
                mediumDeviceLayout.push(mediumItem)
                largeDeviceLayout.push(largeItem)
            })
            // TODO: inspect these arrays to ensure expected values are correct
            return { lg: largeDeviceLayout, md: mediumDeviceLayout, sm: smallDeviceLayout }
        }

        return (
            <div id="project-section">
                <h1> Projects </h1>
                <ResponsiveReactGridLayout
                    className="project-layout"
                    measureBefoureMount={ true }
                    layouts={ createProjectLayouts() }
                    breakpoints={ { lg: 1200, md: 500, sm: 0 } }
                    cols={ { lg: colsForLgScreen, md: colsForMdScreen, sm: colsForSmScreen }}
                >
                    { projects }
                </ResponsiveReactGridLayout>
            </div>
        )

    }
}