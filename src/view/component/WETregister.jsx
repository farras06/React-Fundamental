import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios'
import { API_URL } from '../../constatnts/API'

class WETregister extends React.Component {

    state = {
        username: "",
        fullname: "",
        password: "",
        role: ""

    };


    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    registerUser = () => {
        const {
            username,
            fullname,
            password,
            role
        } = this.state;

        Axios.get(`${API_URL}/user`, {

            params: {
                username: `${username}`
            }

        })
            .then((res) => {
                console.log(res.data)
                if (res.data.length >= 0) {
                    alert("username is alreasy exist")
                } else {
                    Axios.post(`${API_URL}/user`, {
                        username: username,
                        fullname: fullname,
                        password: password,
                        role: role,
                    })

                        .then((res) => {
                            console.log(res)
                            alert("New Profile is Succesfully Added")
                            this.setState({
                                username: "",
                                fullname: "",
                                password: "",
                                role: ""
                            })
                        })

                        .catch((err) => {
                            console.log(err)
                        })
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {

        const {
            username,
            fullname,
            password,
            role
        } = this.state;

        return (

            <div>
                <h1>Auth Screen</h1>
                <center className="container">
                    <div className="card p-5" style={{ width: "400px" }}>
                        <h4>Register</h4>
                        <input
                            value={username}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Username"
                            onChange={(e) => this.inputHandler(e, "username")}
                        />
                        <input
                            value={fullname}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Full Name"
                            onChange={(e) => this.inputHandler(e, "fullname")}
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

export default WETregister
