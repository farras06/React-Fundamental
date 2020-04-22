import Axios from "axios";
import { API_URL } from '../../constatnts/API'

export const usernameInputHandler = (text) => {
  return {
    type: "ON_CHANGE_USERNAME",
    payload: text,
  };
};

export const loginHandler = (userData) => {
  return (dispatch) => {
    const { username, password } = userData
    Axios.get(`${API_URL}/user`, {
      params: {
        username,
        password
      }
    })
      .then(res => {
        console.log(res)
        if (res.data.length > 0) {
          // alert('bisa')

          dispatch({
            type: "ON_LOGIN_SUCCESS",
            payload: res.data[0]
          })
        } else {
          dispatch({
            type: "ON_LOGIN_FAIL",
            payload: "Username or password incorrect"
          })
        }
      })

      .catch((err) => {
        console.log(err)
      })
  };
}


export const registerHandler = (userData) => {
  return (dispatch) => {
    const { username, password, fullName, role } = userData
    Axios.get(`${API_URL}/user`, {
      params: {
        username
      }
    })

      .then((res) => {
        if (res.data.length == 0) {

          Axios.post(`${API_URL}/user`, {

            username,
            password,
            fullName,
            role
          })
            .then((res) => {

              alert('Account Created')
              dispatch({
                type: "ON_LOGIN_SUCCESS",
                payload: res.data[0]
              })


            })

            .catch((err) => {
              console.log(err)
            })


        } else {

          alert('Account already exist')
          dispatch({
            type: "ON_LOGIN_FAIL",
            payload: "Username or password incorrect"
          })
        }
      })

      .catch((err) => {
        console.log(err)
      })
  }
}
