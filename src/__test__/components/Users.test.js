import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Users, mapStateToProps } from '../../components/Users';
import users from '../../mock/users';

describe('Renders <Users /> correctly', () => {

  const props = {
    userList: [],
    loading: false,
    history: {
      push: jest.fn()
    },
    loadUsers: jest.fn(),
    handleItemClick: jest.fn(),
    userData: jest.fn(),
  };

  const wrapper = shallow(<Users {...props} />);

  it('renders Table component', () => {
    expect(wrapper.find('Table').length).toBe(1);
  });

  it('renders table cells when userList is not empty', () => {
    wrapper.setProps({
      userList: users
    });

    expect(wrapper.find('TableCell').exists()).toBe(true);
  });

  it('returns a loader when loading is true', () => {
    wrapper.setProps({ loading: true });

    expect(wrapper.find('Loader').exists()).toBe(true);
  });

  it('calls the handleItemClick function', () => {
    const handleItemClickSpy = jest.spyOn(
      wrapper.instance(), 'handleItemClick'
    );
    const event = {};
    const data = {};

    wrapper.instance().handleItemClick(event, data);
    expect(handleItemClickSpy.mock.calls.length).toEqual(1);
  });

  it('correctly maps state to props', () => {
    const state = {
      users: {
        userList: [],
        loading: false
      }
    };
    const expected = {
      loading: false,
      userList: []
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });
});
