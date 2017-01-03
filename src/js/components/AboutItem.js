/**
 * Created by joemcadams on 12/28/16.
 */
import React, { Component } from 'react'

class AboutItem extends Component {

    propTypes = {
        title: React.propTypes.string.isRequired,
        description: React.propTypes.string.isRequired,
        imagePath: React.propTypes.string.isRequired
    }

    render() {
        return (
            <div className="About-Item">
                <h1> { this.props.title} </h1>
                <img src={ this.props.imagePath } />
                <p> { this.props.description } </p>
            </div>
        )
    }
}

export default AboutItem
