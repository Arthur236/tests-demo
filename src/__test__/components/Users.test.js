import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Users } from '../../components/Users';
import users from '../../mock/users';

let props = {
  userList: [],
  loading: false,
  loadUsers: jest.fn()
};

describe('Renders <Users /> correctly', () => {

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

  // it('calls the handlePaginate function', () => {
  //   const handlePaginateSpy = jest.spyOn(
  //     wrapper.instance(), 'handlePaginate'
  //   );
  //   const event = {
  //
  //   };
  //   const data = {};
  //
  //   wrapper.instance().handlePaginate(event, data);
  //   expect(handlePaginateSpy.mock.calls.length).toEqual(1);
  // });
});
