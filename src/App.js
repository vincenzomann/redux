import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions';

class App extends Component {

  // ES6 method authomatically binds 'this' to function without doing it manually in a constructor using 'super' or 'bind'
  onChangeUser = (event) => {    
    this.props.onUpdateUser(event.target.value);
  }

  componentDidMount = () => {
    this.props.onApiRequest();
  }

  render() {

    // console.log('props\n', this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <input onChange={this.onChangeUser} />

          {this.props.user}
          
        </header>
      </div>
    );
  }
}

// receives state of store and props passed from parent
//used to decide what props to provide to store
const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.surname}`
  }
};

// dispatch action to store from component in seperate functions
// dispatch and props as arguments
const mapActionsToProps = (dispatch) => {
  return {
    onUpdateUser: (newUser) => { 
      dispatch(updateUser(newUser)); 
    },
    onApiRequest: () => { 
      dispatch(apiRequest()); 
    }
  }
};

// // receive props from state, actions and parent
// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log('propsFromState:\n', propsFromState);
//   console.log('propsFromDispatch:\n', propsFromDispatch);
//   console.log('ownProps:\n', ownProps);
//   return {}
// };

export default connect(mapStateToProps, mapActionsToProps)(App);
