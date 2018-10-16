import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Table } from 'semantic-ui-react';

import { loadUsers } from '../actions/user.actions';

export class Users extends React.Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { userList, loading } = this.props;

    return (
      <Container>
        <h1>Users</h1>

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
      </Container>
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

const mapStateToProps = ({ users }) => {
  const { userList, loading } = users;
  return {
    userList,
    loading
  };
};

export default connect(mapStateToProps, {
  loadUsers
})(Users);
