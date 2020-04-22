const init_state = {
  id: 0,
  username: "Doraemon",
  password: '',
  fullName: '',
  role: '',
  testing: '',
  testing2: ''

};

export default (state = init_state, action) => {
  if (action.type === "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };

  } else if (action.type === "ON_LOGIN_SUCCESS") {

    // alert('bisa')
    const { username, fullName, role, id } = action.payload
    return { ...state, username, fullName, role, id }

  } else if (action.type === "ON_LOGIN_FAIL") {
    return { ...state, errMSG: action.payload }
  }

  return { ...state };
};
