import React, { Component } from 'react'
import Score from './Score'

export default class Student extends Component {
    render() {
        const allScores = this.props.student.scores.map((score, idx) => {
            return(
                <Score 
                    score={score}

                    key={`score-${idx}`}
                />
            )
        })

        return(
            <div>
                <h3>{this.props.student.name}</h3>
                <p>{this.props.student.bio}</p>


                {allScores}
            </div>
        )
    }
}