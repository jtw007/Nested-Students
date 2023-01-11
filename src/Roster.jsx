import React, { Component } from 'react'
import Student from './Student' 

export default class Roster extends Component {
    render() {
        const allStudents = this.props.students.map((student, idx)=>{
            return(
                <Student 
                    student={student}

                    key={`student-${idx}`}
                />
            )
        })
        return(
            <div>
                {allStudents}
                
            </div>
        )
    }
}

