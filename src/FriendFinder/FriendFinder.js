import React, { Component } from 'react';
import Friend from '../Friend';

import './FriendFinder.scss';

export class FriendFinder extends Component {
    render() {
        const { friendPhoto } = this.props;
        return (
        <div className="friend-finder">
            <img src={friendPhoto} alt="human" />
                <Friend name='Gokhan' lastName="Ipek" />
            <div>
              kisi bilgileri
            </div>
            <button>Find a friend!</button>
            <button>Add as friend!</button>
        </div>
        )
    }
}

export default FriendFinder