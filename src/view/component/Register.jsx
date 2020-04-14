import React from 'react'
class Ex14AprilScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            person: [],
            username: '',
            password: '',
            repeatpassword: '',
            text: 'login'
        }
    }
    render() {
        const { username, password, repeatpassword } = this.state
        const inputHandler = (event, field) => {
            this.setState({ [field]: event.target.value })
        }
        const newPerson = { 'username': username, 'password': password, 'repeatpassword': repeatpassword }
        let submit = this.state.person.concat(newPerson)
        const registerUser = () => {
            if (username && password && repeatpassword != '' && password == repeatpassword) {
                alert('Berhasil Register')
                this.setState({ person: submit })
                console.log(this.state.person)
                console.log(submit)
                console.log(newPerson)
            } else {
                alert('Username harus terisi dan Password tidak sesuai')
            }
        }
        const loginUser = () => {
            const usernameLogin = this.state.username
            const passwordLogin = this.state.password
            let findUsr = this.state.person.find(val => {
                return val.username == usernameLogin
            })
            let idxUsr = this.state.person.findIndex((val) => {
                return val.username == usernameLogin
            })
            let idxPass = this.state.person.findIndex(val => {
                return val.password == passwordLogin
            })
            console.log(this.state.person);
            { idxUsr == idxPass && findUsr ? this.setState({ teks: `hallo ${usernameLogin}` }) : alert('username atau password salah')}
        }
        return (
            <div>
                <h1>Auth Screen</h1>
                <div className='border container' style={{
                    width: '25%',
                    height: '250px'
                }}>
                    <h4 className='mt-4 mb-3'>Register</h4>
                    <div className='container'>
                        <input type="text" className='form-control form-control-sm mb-1' placeholder='Username'
                            onChange={(e) => inputHandler(e, 'username')} value={username} />
                        <input type="password" className='form-control form-control-sm mb-1 ' placeholder='Password'
                            onChange={(e) => inputHandler(e, 'password')} value={password} />
                        <input type="password" className='form-control form-control-sm mb-3 ' placeholder='Repeat Password'
                            onChange={(e) => inputHandler(e, 'repeatpassword')} />
                        <input type="button" className='btn btn-block mb-3' value='Register' onClick={registerUser} />
                    </div>
                </div>
                <div className='border container' style={{
                    width: '25%',
                    height: '250px'
                }}>
                    <h4 className='mt-4 mb-3'>Login</h4>
                    <div className='container'>
                        <input type="text" className='form-control form-control-sm mb-1' placeholder='Username'
                            onChange={(e) => inputHandler(e, 'usernameLogin')} />
                        <input type="password" className='form-control form-control-sm mb-2 ' placeholder='Password'
                            onChange={(e) => inputHandler(e, 'passwordLogin')} />
                        <input type="button" className='btn btn-block mb-3' value='Login' onClick={loginUser} />
                    </div>
                    <h5>{this.state.teks}</h5>
                </div>
            </div>
        )
    }
}
export default Ex14AprilScreen