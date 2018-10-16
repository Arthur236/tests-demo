import axios from 'axios';
import constants from '../constants';

const {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE
} = constants;

export const loadUsers = () => {
  return(
    (dispatch) => {
      dispatch(loadUsersRequest());
      return axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          dispatch(loadUsersSuccess(response.data));
        })
        .catch((error) => {
          dispatch(loadUsersFailure(error.message));
        });
    }
  );
};

export const loadUsersRequest = () => ({
    type: USER_LOAD_REQUEST
});

export const loadUsersSuccess = payload => ({
    type: USER_LOAD_SUCCESS,
    payload
});

export const loadUsersFailure = payload => ({
    type: USER_LOAD_FAILURE,
    payload
});