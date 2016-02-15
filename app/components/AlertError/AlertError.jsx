import React from 'react';

export default class AlertError extends React.Component {
  render() {
    return (<div className="AlertError">{this.props.message}</div>);
  }
}
