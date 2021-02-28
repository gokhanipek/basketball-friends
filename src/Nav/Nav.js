import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Nav.scss'

export class Nav extends Component {
    render() {
        const { home, myProfile } = this.props;
        return (
            <div className="nav">
                <Link to="/home">{home}</Link>
                <Link to="/my-profile">{myProfile}</Link>
            </div>
        )
    }
}

export default Nav