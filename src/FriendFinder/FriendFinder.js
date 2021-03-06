import React, { Component } from "react";

import { withRouter } from 'react-router-dom';

import "./FriendFinder.scss";


class AddOrRemoveFriend extends Component {
  render() {
    const { text, clickHandler } = this.props;
    return (
      <button onClick={clickHandler}>{text}</button>
    )
  }
}

// class RemoveFriend extends Component {
//   render(){
//     const { text, clickHandler } = this.props;
//     return (
//       <button onClick={clickHandler}>{text}</button>
//     )
//   }
// }

export class FriendFinder extends Component {

  state = {
    data: [],
    friends: []
  }

  fetchPeople = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data.results }));
  };

  addFriendClickHandler = (item) => {
    this.state.friends.some(friend => friend.cell === item.cell) ?
      this.setState({ friends: [...this.state.friends] }) :
      this.setState({ friends: [...this.state.friends, item] })

    this.fetchPeople();
  }

  removeFriendClickHandler = (item) => {
    this.setState({
      friends: this.state.friends.filter(
        friend => {
          return friend.cell !== item.cell
        }
      )
    })
  }

  goToFinalPageHandler = () => {
    this.props.history.push({ pathname: "/final-page", state: { name: this.props.location.state.name, friends: this.state.friends } }); //diger sayfaya router dom ile parametre gonderiyoruz
  }

  render() {
    const { location } = this.props; //onceki sayfadan react-router-dom ile ilettigimiz verileri almak icin location parametresine proplardan ulasiyoruz
    return (
      <>
        <div className="friend-finder">
          <div className="random-person">
            <h2>Select a buddy, {location.state.name}</h2>
            <button onClick={this.fetchPeople}>Find a friend!</button>
            {this.state.data.map(item =>
              <>
                <img className="something" src={item.picture.large} alt="person" />
                <h2>{item.name.first} {item.name.last}</h2>
                <h3>Nationality: {item.nat} </h3>
                <AddOrRemoveFriend
                  text='Add as Friend'
                  person={item}
                  clickHandler={() => this.addFriendClickHandler(item)}
                />
              </>
            )}
          </div>
          <div className="friends-wrapper">
            {this.state.friends.map(item =>
              <div className="friend">
                <img src={item.picture.large} alt="friend" />
                <span>{item.name.first} {item.name.last}</span>
                <AddOrRemoveFriend
                  text="Remove Friend"
                  clickHandler={() => this.removeFriendClickHandler(item)} />
              </div>
            )
            }
          </div>

        </div>
        <button onClick={() => this.goToFinalPageHandler()}> Go to Final Page </button>
      </>
    );
  }

}

export default withRouter(FriendFinder);
