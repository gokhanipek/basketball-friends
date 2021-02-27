import React, { Component } from 'react'

class Friend extends Component {
    render(){
        const { 
          image,
          firstName,
          lastName,
          onClickHandler 
        } = this.props;
        return (
          <>
            <img src={image} alt="person" />
            <h2>{firstName} {lastName}</h2>
            <button onClick={onClickHandler}></button>
          </>
        )
    }
}  

export default Friend;