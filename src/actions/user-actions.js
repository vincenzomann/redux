import $ from 'jquery';

export const updateUser = (newUser) => {
  return {
    type: 'UPDATE_USER',
    payload: {
      user: newUser
    }
  }
};


export const apiRequest = () => {
  return dispatch => {
    $.ajax({
      url: 'http://google.com',
      success() {
        console.log('SUCCESS');
      },
      error(){
        console.log('ERROR - COULD NOT ACCESS API');
      }
    });
  }
};