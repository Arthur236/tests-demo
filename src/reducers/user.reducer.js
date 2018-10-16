import initialState from './initialState';
import constants from '../constants';

const { USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOAD_FAILURE } = constants;

export default function(state = initialState.users, action) {
  switch(action.type) {
    case USER_LOAD_REQUEST:
      return {
        ...state,
        loading: true
      };

    case USER_LOAD_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        loading: false
      };

    case USER_LOAD_FAILURE:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}