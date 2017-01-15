import React, { Component } from 'react'
import { FaDesktop as DesktopIcon } from 'react-icons/lib/fa/desktop'
import { FaMobile as MobileIcon } from 'react-icons/lib/fa/mobile'
import { FaGlobe as WebIcon } from 'react-icons/lib/fa/globe'
import { GoCircuitBoard as HardwareIcon } from 'react-icons/lib/go/circuit-board'

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
        type: React.PropTypes.string.isRequired,
        tools: React.PropTypes.arrayOf(React.PropTypes.string),
        url: React.PropTypes.string.isRequired
    }

    render() {
        let icon = {}
        if (this.props.type === projectTypes.DESKTOP) icon = DesktopIcon
        if (this.props.type === projectTypes.HARDWARE) icon = HardwareIcon
        if (this.props.type === projectTypes.MOBILE) icon = MobileIcon
        if (this.props.type === projectTypes.WEB) icon = WebIcon

        return (
            <div>
                { icon }
                <h1> { this.props.name } </h1>
                <p className="project-description">
                    { this.props.description }
                    See the project <a href={ this.props.url }> here </a>.
                </p>
                <p className="tools-section">
                    Tools used:
                </p>
                <ul>
                    { this.props.tools.forEach((tool) => (
                        <li> { tool } </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProjectItem