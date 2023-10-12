import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.state = { name: '', timezone: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  static get propTypes() {
    return {
        onFormSubmit: PropTypes.func
    };
  }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    this.setState(prevForm => ({ ...prevForm, [name]: value }));
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          this.props.onFormSubmit(this.state);
          this.setState({ name: '', timezone: '' });
          this.nameRef.current.focus();
        }}
      >
        <div className="form-input">
          <label htmlFor="name">Название</label>
          <input
            className="form-input-name"
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            ref={this.nameRef}
            autoComplete="off"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="timezone">Временная зона</label>
          <input
            className="form-input-timezone"
            type="number"
            id="timezone"
            name="timezone"
            min="-12"
            max="14"
            value={this.state.timezone}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <button
          className="form-input-add-button"
          type="submit"
        >
          Добавить
        </button>
      </form>
    );
  }
}

export default Form;