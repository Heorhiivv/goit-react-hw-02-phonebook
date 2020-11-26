import React from "react";
import PropTypes from 'prop-types';

const ContactItem = ({name, number, onRemove}) => {
 return (
  <li>
  <p>{name}</p>
  <p>{number}</p>
  <section>
    <button type="button" className="ContactList-button" onClick={onRemove}>
      Delete
    </button>
  </section>
</li>
 );
};

ContactItem.propTypes = {
  onRemove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};
export default ContactItem
