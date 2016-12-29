/**
 * Created by joemcadams on 12/28/16.
 */
import React, { Component } from 'react'

class AboutItem extends Component {

    propTypes = {
        title: React.propTypes.string.isRequired,
        description: React.propTypes.string.isRequired,
        gifURL: React.propTypes.string.isRequired
    }

    componentDidMount() {
        this.setState(this.getInitialState())
    }

    getInitialState() {
        return {
            "isLoading": false
        }
    }

    handleHoverEvent(event) {
        console.log(event)
    }

    render() {

        return (
            <div>
                <h1> { this.props.title} </h1>
                <p> { this.props.description } </p>
            </div>
        )
    }

}
