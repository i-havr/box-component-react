import PropTypes from 'prop-types';

export const UsersList = ({ users, onDelete, onToggle, onModalOpen }) => {
  return (
    <ul>
      {users.map(({ id, name, email, avatar, hasJob }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>E-mail: {email}</p>
          <p>
            Has job: <span onClick={() => onToggle(id)}>{`${hasJob}`}</span>
          </p>
          <button
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
          <button
            type="button"
            onClick={() => onModalOpen({ src: avatar, alt: name })}
          >
            Show Poster
          </button>
        </li>
      ))}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      hasJob: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
