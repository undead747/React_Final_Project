import React, { Component } from "react";
import ToggleLink from "../ToggleLink";

export default class CategoryNavigation extends Component {
  render() {
    return (
      <>
        <ToggleLink to={`${this.props.baseUrl}/all`} exact={false}>
          All
        </ToggleLink>
        {this.props.categories &&
          this.props.categories.map((c) => (
            <ToggleLink key={c} to={`${this.props.baseUrl}/${c.toLowerCase()}`}>
              {c}
            </ToggleLink>
          ))}
      </>
    );
  }
}
