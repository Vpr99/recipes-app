import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class AlertError extends React.Component {
    render() {
        var alertClasses = 'Alert';
        if(this.props.status == 'success') alertClasses += ' Alert-success';
        else if(this.props.status == 'error') alertClasses += ' Alert-error';

        return (<div className={alertClasses}>{this.props.message}</div>);
    }
}
