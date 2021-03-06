// reducer takes in initial state and an action
const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.payload.user;
    default:
      return state
  }
}
export default userReducer;