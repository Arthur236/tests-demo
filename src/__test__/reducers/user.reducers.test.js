import expect from 'expect';
import constants from '../../constants';
import usersReducer from '../../reducers/user.reducer';
import users from '../../mock/users';

const {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE
} = constants;

const initialState = {
  users: {
    userList: [],
    loading: false
  }
};

const action = { payload: {} };

describe('User Reducer test', () => {
  it('should return initial state when there is no action', () => {
    expect(usersReducer(initialState, action)).toEqual(initialState);
  });

  it('should handle USER_LOAD_REQUEST', () => {
    action.type = USER_LOAD_REQUEST;
    action.payload.results = users;
    expect(usersReducer(initialState.users, action).userList).toEqual([]);
    expect(usersReducer(initialState.users, action).loading).toEqual(true);
  });

  it('should handle USER_LOAD_SUCCESS', () => {
    action.type = USER_LOAD_SUCCESS;
    action.payload = users;
    expect(usersReducer(initialState.users, action).userList).toEqual(action.payload);
    expect(usersReducer(initialState.users, action).loading).toEqual(false);
  });

  it('should handle USER_LOAD_FAILURE', () => {
    action.type = USER_LOAD_FAILURE;
    action.payload.results = users;
    expect(usersReducer(initialState.users, action).userList).toEqual([]);
    expect(usersReducer(initialState.users, action).loading).toEqual(false);
  });
});
