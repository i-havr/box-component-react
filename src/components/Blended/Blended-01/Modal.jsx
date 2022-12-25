import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export const Modal = ({ avatar: { src, alt }, onClose }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <img src={src} alt={alt} />
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  avatar: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
