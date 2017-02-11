import React, { Component } from 'react'
import { Card,
    CardImg,
    CardText,
    CardBlock,
    CardTitle,
    CardSubtitle,
    Button } from 'reactstrap';
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
                <Card>
                    <CardBlock>
                        <CardTitle className="project-title"> { this.props.name } </CardTitle>
                        <CardSubtitle className="project-subtitle"> { this.props.type } { " " } { icon } </CardSubtitle>
                        <CardText>
                            { this.props.description }
                            Tools used:
                            { this.props.tools.map((tool, i) => <span key={ i }>{ tool }</span> )}
                        </CardText>
                            <Button block={ true } color='secondary'>
                                <a href={ this.props.url }>
                                    See the project
                                </a>
                            </Button>
                    </CardBlock>
                </Card>
            </div>
        )
    }
}

export default ProjectItem