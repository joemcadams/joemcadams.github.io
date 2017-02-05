import React, { Component } from 'react'
import FaDesktop from 'react-icons/lib/fa/desktop'
import FaMobile from 'react-icons/lib/fa/mobile'
import FaGlobe from 'react-icons/lib/fa/globe'
import GoCircuitBoard from 'react-icons/lib/go/circuit-board'

const projectTypes = {
    DESKTOP: "desktop",
    WEB: "web",
    HARDWARE: "hardware",
    MOBILE: "mobile"
}

class ProjectItem extends Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        type: React.PropTypes.node.isRequired,
        tools: React.PropTypes.arrayOf(React.PropTypes.string),
        url: React.PropTypes.string.isRequired
    }

    render() {
        let icon = {}
        if (this.props.type === projectTypes.DESKTOP) icon = <FaDesktop />
        if (this.props.type === projectTypes.HARDWARE) icon = <GoCircuitBoard />
        if (this.props.type === projectTypes.MOBILE) icon = <FaMobile />
        if (this.props.type === projectTypes.WEB) icon = <FaGlobe />

        return (
            <div className="project-item">
                <p>
                    { icon }
                </p>
                <h1> { this.props.name } </h1>
                <p className="project-description">
                    { this.props.description }

                    See the project <a href={ this.props.url }> here</a>.
                </p>
                <div className="tools-section">
                    Tools used:
                    <ul>
                        { this.props.tools.map((tool) => <li>{ tool }</li> )}
                    </ul>
                </div>

            </div>
        )
    }
}

export default ProjectItem