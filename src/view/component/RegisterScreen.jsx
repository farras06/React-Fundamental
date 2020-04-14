import React from 'react'
import { queryAllByAttribute } from '@testing-library/dom'

class RegisterScreen extends React.Component {

    state = {
        username: '',
        password: '',
        repassword: '',
        usernamelogin: '',
        passwordlogin: '',
        welcome: '',
        usernameArr: [],
        passwordArr: [],
    }
    
    render () {
        const {username, password, repassword, usernamelogin, passwordlogin, usernameArr, passwordArr, welcome } = this.state
        
        const inputHandler = (event, field) => {
            this.setState({ [field]: event.target.value})
        }
        
        const register = () => {
            
            if (password == repassword){
                this.setState({usernameArr: usernameArr.concat([username])})
                this.setState({passwordArr: passwordArr.concat([password])})
                alert('Your account is created')
                document.getElementById('username').value = ''
                document.getElementById('password').value = ''
                document.getElementById('repassword').value = ''
                
            } else {
                alert('Please re-enter the password')
            }
        }
        
        const login = () => {
            
            let login  = 1
            for ( let i = 0 ; i < usernameArr.length; i ++ ){
                if ( usernameArr[i] == usernamelogin && passwordArr[i] == passwordlogin ) {
                    alert('Login Succes')
                    login = 1
                } 

                if (login != 1) {
                    alert('Incorect Username and Password')
                }

            }
        }

        return (
            <div>

                <h1>Register</h1>

                <br/>
                

                <input onChange={(e) => inputHandler(e, 'username')} type="text" placeholder='User Name' id='username'/>
                <br/> <br/>
                <input onChange={(e) => inputHandler(e, 'password')} type="text" placeholder='password'id='password'/> 
                <br/>
                <input onChange={(e) => inputHandler(e, 'repassword')} type="text" placeholder='re-enter password' id='repassword'/>
                <br/> <br/>
                <input type="button" value='Register' className="btn btn-warning" onClick={register}/>
                <br/> <br/> <br/>


                <h1>Login</h1>
                <input onChange={(e) => inputHandler(e, 'usernamelogin')} type="text" placeholder='User Name'/>
                <br/> <br/>
                <input onChange={(e) => inputHandler(e, 'passwordlogin')} type="text" placeholder='password'/>
                <br/> <br/>
                <input type="button" value='Login' className="btn btn-warning" onClick={login}/>
                <br/><br/>

                {
    
                    username == usernamelogin ? ( <h2>Welcome {username}</h2>) : null
                }



                <br/>
               
            </div>
        )
    }
}

export default RegisterScreen