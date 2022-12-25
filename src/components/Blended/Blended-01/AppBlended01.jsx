import { Component } from 'react';
import { data } from './assets/users';
import { nanoid } from 'nanoid';

import { UsersList } from './UsersList';
import { Button } from './Button';
import { Form } from './Form';
import { Modal } from './Modal';

export class AppBlended01 extends Component {
  state = {
    users: data,
    isFormOpen: false,
    currentAvatar: null,
  };

  handleDelete = id => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id),
    }));
  };

  openForm = () => {
    this.setState({ isFormOpen: true });
  };

  addUser = data => {
    const newUser = {
      id: nanoid(),
      hasJob: false,
      ...data,
    };

    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isFormOpen: false,
    }));
  };

  toggleJobStatus = id => {
    this.setState(prevState => ({
      users: prevState.users.map(user =>
        user.id !== id
          ? user
          : {
              ...user,
              hasJob: !user.hasJob,
            }
      ),
    }));
  };

  showAvatar = image => {
    this.setState({
      currentAvatar: image,
    });
  };

  closeModal = () => {
    this.setState({
      currentAvatar: null,
    });
  };

  render() {
    const { users, isFormOpen, currentAvatar } = this.state;
    return (
      <>
        <UsersList
          users={users}
          onDelete={this.handleDelete}
          onToggle={this.toggleJobStatus}
          onModalOpen={this.showAvatar}
        />

        {isFormOpen ? (
          <Form addUser={this.addUser} />
        ) : (
          <Button text="Add user" clickHandler={this.openForm} />
        )}
        {currentAvatar && (
          <Modal avatar={currentAvatar} onClose={this.closeModal} />
        )}
      </>
    );
  }
}
