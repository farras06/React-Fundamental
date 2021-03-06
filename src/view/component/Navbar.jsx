import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div
                className="d-flex justify-content-around align-items-center"
                style={{ height: "120px" }}
            >
                <Link to='/register'> Register | Login</Link>
                <Link to="/input"> Input</Link>
                <Link to="/profile"> Profile</Link>



            </div>
        )
    }
}

export default Navbar