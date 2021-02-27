import React, { Component } from 'react'
import './Home.scss';
import Logo from './../assets/basketball-logo.png';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <img className="home-logo" src={Logo} alt='logo'/>
                <h2 className="title">Basketball Friends</h2>
                <span>Find some friends!</span>
            </div>
        )
    }
}

export default Home
