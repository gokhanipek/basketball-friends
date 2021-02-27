import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        const { home, myProfile } = this.props;
        return (
            <div className="nav">
                <span>{home}</span>
                <span>{myProfile}</span>
            </div>
        )
    }
}

export default Nav