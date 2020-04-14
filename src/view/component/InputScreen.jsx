import React from 'react'

class InputScreen extends React.Component {
    state = {
        username: '',
        email: '',
        textbox: ''
    }

    render () {
        const {username, email, textbox } = this.state

        const inputHandler = (event, field) => {
            this.setState({ [field]: event.target.value})
        }

        return (
            <div>
                <h1>Input Handler</h1>
                <h3>Welcome {username}</h3>
                <h3>Your email : {email}</h3>

                <input onChange={(e) => inputHandler(e, 'username')} type="text" placeholder='User Name'/>
                <br/>
                <input onChange={(e) => inputHandler(e, 'email')} type="text" placeholder='User Name'/>
                <br/> <br/>
                <textarea 
                    name="" 
                    id="textbox" 
                    cols="30" 
                    rows="10"
                    onChange= {(e) => inputHandler(e, 'textbox')}>
                </textarea>
                <br/>
                <p> {textbox.lenght} /150</p>
                
            </div>
        )
    }
}

export default InputScreen