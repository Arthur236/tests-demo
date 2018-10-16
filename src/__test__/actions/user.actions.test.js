import expect from 'expect';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loadUsers } from '../../actions/user.actions';
import constants from '../../constants';
import users from '../../mock/users';

const {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE
} = constants;

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe('User Action tests', () => {
  const mock = new MockAdapter(axios);
  const url = 'https://jsonplaceholder.typicode.com/users';

  store = mockStore({});

  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch USER_LOAD_REQUEST when fetching users', () => {
    mock.onGet(url).reply(200);
    return store.dispatch(loadUsers()).then(() => {
      expect(store.getActions()).toContainEqual({
        type: USER_LOAD_REQUEST
      });
    });
  });

  it('should dispatch USER_LOAD_SUCCESS when done fetching users', () => {
    mock.onGet(url).reply(200, users);
    return store.dispatch(loadUsers()).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: users,
        type: USER_LOAD_SUCCESS
      });
    });
  });

  it('should dispatch USER_LOAD_FAILURE when loadUsers is called successfully', () => {
    mock.onGet(url).reply(404, users);
    return store.dispatch(loadUsers()).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: 'Request failed with status code 404',
        type: USER_LOAD_FAILURE
      });
    });
  });
});
