import React, { Component } from 'react'
import './MyProfile.scss';

export class MyProfile extends Component {

    state = {
        targetValue: ''
    }
    render() {
        const focusHandler = (event) => {
            this.setState({ targetValue: event.target.value })
        }
        return (
        <div className="my-profile">
            <div>My info</div>
            <div>My friends</div>
            <input onChange={focusHandler} placeholder="Your Name" />
        </div>
        )
    }
}

export default MyProfile
