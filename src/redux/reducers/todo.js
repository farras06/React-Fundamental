const init_state = {
  todoInput: "hello world",
  todoList: [],
}

export default (state = init_state, action) => {
  if (action.type === "ON_CHANGE_TODO_INPUT") {
    return { ...state, todoInput: action.payload };
  } else if (action.type === "ADD_TODO") {
    return { ...state, todoList: [...state.todoList, action.payload] }
  }
  return { ...state };
}