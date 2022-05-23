import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class ToggleLink extends Component {
  render() {
    return (
      <Route path={this.props.to} exact={this.props.exact} children={routeProps => {
          const baseClasses = this.props.className || 'm-2 btn btn-block'
          const activeClasses = this.props.activeClass || 'btn-primary'
          const inActiveClasses = this.props.inActiveClass || 'btn-secondary'

          const combineClasses = `${baseClasses} ${routeProps.match ? activeClasses : inActiveClasses}`

          return <Link to={this.props.to} className={combineClasses}>
              {this.props.children}
          </Link>
      }} />
    )
  }
}
