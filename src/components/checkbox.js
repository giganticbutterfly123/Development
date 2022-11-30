import React, { Component } from "react";

export default class Checkbox extends Component {
  render() {
    const {name, temperature, seasonal, handleChange, checked } = this.props;

    return (
      <div>
        <input
          name={name}
          temperature={temperature}
          type="checkbox"
          seasonal={seasonal}
          onChange={handleChange}
          checked={checked}
        />
        <label htmlFor={name}>{temperature}</label>
      </div>
    );
  }
}
