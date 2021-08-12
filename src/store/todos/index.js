const initState = {
  todo: [],
};

const actionType = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  GET_TODO_FROM_LOCAL_STORAGE: 'GET_TODO_FROM_LOCAL_STORAGE',
  REMOVE_TODO_FROM_LOCAL_STORAGE: 'REMOVE_TODO_FROM_LOCAL_STORAGE',
};

export const actionAddTodo = (payload) => {
  return {
    type: actionType.ADD_TODO,
    payload,
  };
};

export const actionDeleteTodo = (payload) => {
  return {
    type: actionType.DELETE_TODO,
    payload,
  };
};

export const actionEditTodo = (payload) => {
  return {
    type: actionType.EDIT_TODO,
    payload,
  };
};

export const actionGetTodoFromLocalStorage = (payload) => {
  return {
    type: actionType.GET_TODO_FROM_LOCAL_STORAGE,
    payload,
  };
};

export const actionRemoveTodoFromLocalStorage = (payload) => {
  return {
    type: actionType.REMOVE_TODO_FROM_LOCAL_STORAGE,
    payload,
  };
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      return { ...state, todo: [action.payload, ...state.todo] };
    case actionType.DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };
    case actionType.EDIT_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title, text: action.payload.text }
            : item,
        ),
      };
    case actionType.GET_TODO_FROM_LOCAL_STORAGE:
      return { ...state, todo: [...state.todo, ...action.payload] };
    case actionType.REMOVE_TODO_FROM_LOCAL_STORAGE:
      return { ...state, todo: [] };
    default:
      return state;
  }
};

export default todoReducer;
