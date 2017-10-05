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

        const CardExampleWithAvatar = () => (
            <Card>
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="images/nature-600-337.jpg" alt="" />
                </CardMedia>
                <CardHeader
                    title={ props.name }
                    subtitle={ props.tools }
                    avatar={ icon }
                />
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText> { props.description } </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        )
        return (
            <div className="project-item">
                <Card className="project-card">
                    <CardBlock>
                        <CardTitle className="project-title"> { this.props.name } </CardTitle>
                        <CardSubtitle className="project-subtitle">
                            { icon }
                            <br/>
                            { this.props.type }
                        </CardSubtitle>
                        <CardText className="project-text">
                            { this.props.description }
                            <br/>
                            Tools used:
                            <br/>
                            { this.props.tools.map((tool, i) =>
                                <span key={ i }>
                                    <Badge key={ i }>
                                        { tool }
                                    </Badge>
                                    <br/>
                                </span>
                            )}
                        </CardText>
                            <a href={ this.props.url }>
                                <Button block={ true } color="warning">
                                    See the project
                                </Button>
                            </a>
                    </CardBlock>
                </Card>
            </div>
        )
    }
}

export default ProjectItem