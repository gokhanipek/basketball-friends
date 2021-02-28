import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class FinalPage extends Component {

    render() {
        const { location } = this.props;
        // Todo bu sayfada eklenmis arkadaslari listeleyecegiz.
        return (
            <div>
                {location.state.friends.map(friend => <div>{friend.name.first}</div>)}
                Final Page
            </div>
        )
    }
}

export default withRouter(FinalPage);