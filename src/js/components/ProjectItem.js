/**
 * Created by joemcadams on 12/28/16.
 */
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

    propTypes = {
        title: React.propTypes.string.isRequired,
        description: React.propTypes.string.isRequired,
        projectType: React.propTypes.string.isRequired,
        tools: React.propTypes.arrayOf(React.propTypes.string),
        URL: React.propTypes.string.isRequired
    }

    render() {
        let icon = {};
        if (this.props.projectType === projectTypes.DESKTOP) icon = DesktopIcon;
        if (this.props.projectType === projectTypes.HARDWARE) icon = HardwareIcon;
        if (this.props.projectType === projectTypes.MOBILE) icon = MobileIcon;
        if (this.props.projectType === projectTypes.WEB) icon = WebIcon;

        return (
            <div>
                { icon }
                <h1> { this.props.title } </h1>
                <p>
                    { this.props.description}

                    See the project <a href={this.props.URL}> here </a>.
                </p>
                <p>
                    Tools used: { this.props.tools }
                </p>

            </div>
        )
    }
}