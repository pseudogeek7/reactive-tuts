import React from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {
// for initial rendering and api call
  componentDidMount(){
      this.props.fetchUser(this.props.userId);
  }

  render() {
    const user = this.props.users.find(user=> user.id === this.props.userId);
    if (!user){
        return null;
    }
    return <div className="header">{user.name}</div>;
  }
}
const mapStatetoProps= (state) => {
    
    return {users: state.users};

}
//connect need to have fetchUser action creator in order to ask provider for future updates
export default connect(mapStatetoProps, {fetchUser})(UserHeader) ;
