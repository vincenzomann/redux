
export const updateUser = (newUser) => {
  return {
    type: 'UPDATE_USER',
    payload: {
      user: newUser
    }
  }
};