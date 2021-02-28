import React, { Component } from 'react'

export default class FinalPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            friends: this.props
        }
    }
    render() {
        console.warn(this.props);
        return (
            <div>
                Final Page
            </div>
        )
    }
}
