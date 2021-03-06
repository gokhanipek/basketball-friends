import React, { Component } from 'react'
import './Home.scss';
import Logo from './../assets/basketball-logo.png';
import { withRouter } from 'react-router-dom';

export class Home extends Component {

    state = {
        userName: ''
    }
    
    onClickHandler = () => {
        this.props.history.push({pathname: "/friend-finder", state: {name: this.state.userName}});  //username i parametre olarak friend-finder sayfasina gonderiyoruz
    }
    
    onChangeHandler = (event) => {
        this.setState({userName: event.target.value})
    }
    render() {        
        return (
            <div className="home">
                <img className="home-logo" src={Logo} alt='logo'/>
                <h2 className="title">Basketball Friends</h2>
                <span>Find some friends!</span>
                <div className="input-wrapper">
                    <input onChange={this.onChangeHandler} placeholder="Enter your name..." />
                    <button onClick={() => this.onClickHandler()} disabled={!this.state.userName}> Enter </button>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);
