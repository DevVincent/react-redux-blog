import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

class UserHeader extends React.Component{
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }

    render(){
        const { user } = this.props;   
        if (!user){
            return null;
        }
        return(
            <div className="header">{user.name}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // ownProps is a reference to the class component props
    return { user: state.user.find(user => user.id === ownProps.userId) }
}; 

export default connect(mapStateToProps, { fetchUser })(UserHeader);