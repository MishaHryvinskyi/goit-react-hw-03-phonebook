import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputFilter } from "./Filter.styled";

class Filter extends Component {
  handleChange = e => {
    this.props.onChange(e.currentTarget.value);
  }

  render() {
    const { filter } = this.props;

    return (
      <InputFilter
        type="text"
        value={filter}
        onChange={this.handleChange}
        placeholder="Find contacts by name"
      />
    );
  }
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default Filter;