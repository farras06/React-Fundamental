import React from 'react'
import Axios from 'axios'
import { API_URL } from '../../constatnts/API'

class ProfileScreen extends React.Component {

    state = {
        userList: [],
    }

    getDataHandler = () => {
        // Axios.get("http://localhost:3001/user/1")  // get data by ID, ID = 1
        //     .then((res) => {   // res= response dari API
        //         console.log(res.data)
        //         this.setState({ userList: res.data })
        //     })

        //     .catch((err) => {  // err = error dari API
        //         console.log(err)
        //     })

        Axios.get("http://localhost:3001/user", {
            params: {
                role: "admin"
            }
        })
            .then((res) => {
                console.log(res.data)
                this.setState({ userList: res.data })
            })

            .catch((err) => {
                console.log(err)
            })
    }

    deleteDataHandler = () => {
        Axios.delete(`${API_URL}/user/1`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    postDataHandler = () => {
        Axios.post(`${API_URL}/user`, {
            username: "Will",
            password: "password",
            fullname: "Will i will",
            role: "user",
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container">
                <h1> Profile</h1>
                <h2> Welcome, {this.props.match.params.username} </h2>
                <input type="button" value='Get Data' className="btn btn-success m-4" onClick={this.getDataHandler} />

                <input type="button" value='Delete' className="btn btn-danger m-4" onClick={this.deleteDataHandler} />

                <input type="button" value='Post data' className="btn btn-warning m-4" onClick={this.postDataHandler} />
            </div>
        )
    }
}

export default ProfileScreen
