import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios'
import { API_URL } from '../../constatnts/API'
import { loginHandler, registerHandler } from "../../redux/actions"
import { connect } from 'react-redux'

class WETregister extends React.Component {

    state = {
        username: "",
        fullName: "",
        password: "",
        role: "",
        isLoading: false

    };


    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    registerUser = () => {
        const {
            username,
            fullName,
            password,
            role
        } = this.state;

        const userData = { username, password, fullName, role }

        this.props.onRegister(userData)

        // this.setState({ isLoading: true })
        // Axios.get(`${API_URL}/user`, {

        //     params: {
        //         username: `${username}`
        //     }

        // })
        //     .then((res) => {
        //         console.log(res.data)
        //         if (res.data.length >= 0) {
        //             alert("username is alreasy exist")
        //         } else {
        //             Axios.post(`${API_URL}/user`, {
        //                 username: username,
        //                 fullName: fullName,
        //                 password: password,
        //                 role: role,
        //             })

        //                 .then((res) => {
        //                     console.log(res)
        //                     alert("New Profile is Succesfully Added")
        //                     this.setState({
        //                         username: "",
        //                         fullName: "",
        //                         password: "",
        //                         role: ""
        //                     })
        //                 })

        //                 .catch((err) => {
        //                     console.log(err)
        //                 })
        //         }

        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }

    render() {

        const {
            username,
            fullName,
            password,
            role
        } = this.state;

        return (

            <div>
                <h1>Auth Screen</h1>
                <center className="container">
                    <div className="card p-5" style={{ width: "400px" }}>
                        <h4>Register</h4>

                        <p>User Name: {this.props.user.username} </p>
                        <input
                            value={username}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Username"
                            onChange={(e) => this.inputHandler(e, "username")}
                        />
                        <input
                            value={fullName}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Full Name"
                            onChange={(e) => this.inputHandler(e, "fullName")}
                        />
                        <input
                            value={password}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Password"
                            onChange={(e) => this.inputHandler(e, "password")}


                        />

                        <input
                            value={role}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Role"
                            onChange={(e) => this.inputHandler(e, "role")}


                        />
                        <input
                            type="button"
                            value="Register"
                            className="btn btn-primary mt-3"
                            onClick={this.registerUser}
                        />
                    </div>

                </center>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

        user: state.user
    }
}

const mapDispatchToProp = {

    onRegister: registerHandler
}

export default connect(mapStateToProps, mapDispatchToProp)(WETregister)
