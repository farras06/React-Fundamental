import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import Cookie from 'universal-cookie'
import { LogoutHandler } from '../../redux/actions/index'

const Cookieobject = new Cookie()


class Navbar extends React.Component {

    logoutHandler = () => {
        this.props.onLogout()
        Cookieobject.remove("authData")
    }

    render() {
        return (
            <div
                className="d-flex justify-content-around align-items-center"
                style={{ height: "120px" }}
            >
                <Link to='/register'> Register</Link>
                <Link to="/login"> Login</Link>
                <Link to="/profile"> Profile</Link>
                {this.props.user.username}
                <input type="button" className='btn btn-danger' value='Log out' onclick={this.logoutHandler} />
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    onLogout: LogoutHandler,

}

export default connect(mapStatetoProps, mapDispatchToProps)(Navbar);