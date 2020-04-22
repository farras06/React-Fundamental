import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios'
import { API_URL } from '../../constatnts/API'
import { loginHandler } from "../../redux/actions"
import { connect } from 'react-redux'


class WETlogin extends React.Component {

    state = {
        username: "",
        password: "",
        isLogin: false
    };


    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    userlogin = () => {

        const {
            username,
            password,
        } = this.state

        const userData = { username, password }

        this.props.onLogin(userData)

        // Axios.get(`${API_URL}/user`, {
        //     params: {
        //         username: `${username}`,
        //         password: `${password}`
        //     }
        // })
        //     .then((res) => {
        //         if (res.data.length >= 1) {

        //             this.props.onChangeUsername(username)
        //             return (
        //                 this.setState({ isLogin: true })

        //             )

        //         } else {
        //             alert("Username and Password is in Correct")

        //         }

        //     })

        //     .catch((err) => {
        //         console.log(err.data)
        //     })

    }

    render() {

        const {
            username,
            password,
            isLogin = false
        } = this.state

        if (!isLogin) {
            return (

                <div>
                    <h1>Auth Screen</h1>
                    <center className="container">
                        <div className="card p-5" style={{ width: "400px" }}>
                            <h4>Login</h4>
                            <p>User Name: {this.props.user.username}</p>
                            <input
                                value={username}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Username"
                                onChange={(e) => this.inputHandler(e, "username")}
                            />

                            <input
                                value={password}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Password"
                                onChange={(e) => this.inputHandler(e, "password")}


                            />
                            <input
                                type="button"
                                value="Login"
                                className="btn btn-primary mt-3"
                                onClick={this.userlogin}
                            />
                        </div>

                    </center>

                </div>

            )

        } else {

            return (

                <Redirect to={`profile/${username}`}></Redirect>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    onLogin: loginHandler

}

// export default LoginScreen;
export default connect(mapStateToProps, mapDispatchToProps)(WETlogin)