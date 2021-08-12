const initState = {
  todo: [],
};

const actionType = {
  ADD_TODO: 'ADD_TODO',
};

export const actionAddTodo = (payload) => {
  return {
    type: actionType.ADD_TODO,
    payload,
  };
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      return { ...state, todo: [action.payload, ...state.todo] };
    default:
      return state;
  }
};

export default todoReducer;
