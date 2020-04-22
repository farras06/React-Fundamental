import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios'
import { API_URL } from '../../constatnts/API'

class WETprofile extends React.Component {

    state = {
        user: []
    }

    componentDidMount() {

        Axios.get(`${API_URL}/user`, {
            params: {
                username: `${this.props.match.params.username}`
            }
        })

            .then((res) => {
                this.setState({ user: res.data[0] })
            })

            .catch((err) => {
                console.log(err)
            })
    }

    render() {

        const { user } = this.state

        return (

            <div>
                <h1>Profile Screen</h1>
                <center className="container">
                    <div className="card p-5" style={{ width: "400px" }}>
                        <h4>Profile</h4>
                        <li>
                            <ul>
                                User Name: {user.username}
                            </ul>

                            <ul>
                                Full Name: {user.fullName}
                            </ul>

                            <ul>
                                Role: {user.role}
                            </ul>
                        </li>
                    </div>

                </center>

            </div>

        )
    }
}

export default WETprofile