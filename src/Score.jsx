import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        // console.log(this.props.student.scores[0].score)
        return(
            <div>
                <p>{this.props.student.scores[0].date}</p>
            </div>
        )
    }
}