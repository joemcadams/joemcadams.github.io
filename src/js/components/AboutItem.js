/**
 * Created by joemcadams on 12/28/16.
 */
import React, { Component } from 'react'


class AboutItem extends React.Component {

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
                <a onHover={(e) => this.handleHoverEvent(e).bind(this)}>
                    Something here yo
                </a>
            </div>
        )
    }

}
