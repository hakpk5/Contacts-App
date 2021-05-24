import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import PropTypes from "prop-types";
import serializeForm from "form-serialize";
class CreateContacts extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, { hash: true });
    const { onCreateContact } = this.props;
    if (onCreateContact) {
      onCreateContact(values);
    }
  };
  static propTypes = {
    onCreateContact: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div>
        <Link className="close-create-contact" to="/">
          close
        </Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="handle" placeholder="Handle" />
            <button type="submit">Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContacts;
