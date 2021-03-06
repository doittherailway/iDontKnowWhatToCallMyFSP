import React from 'react';
import CheckinUserIndexContainer from '../checkins/checkin_user_index_container';
import { countCheckins, countUniqueCheckins } from '../../reducers/selectors';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            unique: 0
        }
    };

    componentDidMount(){
        this.props.fetchUser(this.props.userId)
        .then(payload => {
            let count = countCheckins(payload.user.id, Object.values(payload.checkins));
            let uniqCount = countUniqueCheckins(payload.user.id, Object.values(payload.checkins))
            this.setState({
                count: count,
                unique: uniqCount
            })
        })
    }

    componentDidUpdate(oldProps) {
        if (this.props.userId !== oldProps.match.params.userId) {
            this.props.fetchUser(this.props.userId);
        }
    }

    // countCheckins = (userId, checkins)

    render() {
        if (this.props.user !== undefined){
        return(
            <div className="user-profile-top-level-container">
                <div className="user-profile-outer">
                    <div className="user-topbar-container"> 
                        <div className="user-profile-top-photo">
                            <div className="user-profile-circle">
                                <i className="fas fa-user-circle usr-circ"></i>
                            </div>
                        </div>
                        <div className="user-profile-details-box">
                            <div className="user-profile-title-name">
                                <p>{this.props.user.firstName} {this.props.user.lastName}</p>
                            </div>
                            <div className="user-profile-name-loc">
                                <p>{this.props.user.username}</p>
                            </div>
                            <div className="user-profile-stats">
                                <p className="user-stats-number">{this.state.count}</p> <p className="user-stats-text">TOTAL</p><p className="user-stats-number">{this.state.unique}</p> <p className="user-stats-text">UNIQUE</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CheckinUserIndexContainer userId={this.props.user.id} />
            </div>
        )} else {
            return(null);
        }
    }
}

export default UserProfile;