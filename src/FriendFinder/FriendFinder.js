import React, { Component } from "react";

import "./FriendFinder.scss";

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
    this.setState({ friends: [...this.state.friends, item ] })
  }

  removeFriendClickHandler= (item) => {
      this.setState({ friends: this.state.friends.filter(
          friend => {
              return friend.cell !== item.cell
          }
      ) })
  }

  render() {
    return (
      <div className="friend-finder">
        <div>
        {this.state.data.map(item => 
            <>
                <img src={item.picture.large} alt="person" />
                <h2>{item.name.first} {item.name.last}</h2>
                <h3>Nationality: {item.nat} </h3>
                <button onClick={() => this.addFriendClickHandler(item)}> Add as friend!</button>
            </>
            )}
        </div>
        <button onClick={this.fetchPeople}>Find a friend!</button>
        {this.state.friends.map(item => 
            <div className="friend">
                <img src={item.picture.large} alt="friend" />
                <span>{item.name.first} {item.name.last}</span>  
                <button onClick={() => this.removeFriendClickHandler(item)}>Remove Friend</button>
            </div>
            )
        }
      </div>
    );
  }
}

export default FriendFinder;
