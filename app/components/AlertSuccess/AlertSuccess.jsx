import React from 'react';

export default class AlertSuccess extends React.Component {
  render() {
    return (<div className="AlertSuccess">{this.props.message}</div>);
  }
}
