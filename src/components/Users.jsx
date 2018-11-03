import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Dimmer, Loader, Menu, Segment, Table } from 'semantic-ui-react';

import { loadUsers } from '../actions/user.actions';

import '../styles/css/Users.css';

export class Users extends React.Component {
  state = {
    activeItem: 'users'
  };

  componentDidMount() {
    this.props.loadUsers();
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });

    const linkName = name === 'home' ? '/' : name;
    this.props.history.push(linkName);
  }

  userData = () => {
    const { loading, userList } = this.props;

    if (loading) {
      return (
        <Segment className='loader-segment'>
          <Dimmer active inverted>
            <Loader indeterminate>Loading users</Loader>
          </Dimmer>
        </Segment>
      )
    }

    return (
      <Table basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            userList.map((user) => {
              return (
                <Table.Row key={user.id}>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.phone}</Table.Cell>
                  <Table.Cell>{user.website}</Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>
      </Table>
    );
  }

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <Menu pointing secondary>
          <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          className='nav-link'
          />
          <Menu.Item
            name='users'
            active={activeItem === 'users'}
            onClick={this.handleItemClick}
            className='nav-link'
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
              className='nav-link'
            />
          </Menu.Menu>
        </Menu>

        <Container>
          <h1>Users</h1>
          <br/>

          {this.userData()}
        </Container>
      </React.Fragment>
    );
  }
}

Users.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired
};

Users.defaultProps = {
  userList: []
};

export const mapStateToProps = ({ users }) => {
  const { userList, loading } = users;
  return {
    userList,
    loading
  };
};

export default connect(mapStateToProps, {
  loadUsers
})(Users);
