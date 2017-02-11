import React, { Component } from 'react'

class AboutItem extends Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        imagePath: React.PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="about-item">
                <h1> { this.props.title} </h1>
                <img src={ this.props.imagePath } alt="A hilarious gif" />
                <p> { this.props.description } </p>
            </div>
        )
    }
}

export default AboutItem
