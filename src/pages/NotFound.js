import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export const NoMatch = () => <Redirect to="/404" />;

export default class NotFound extends Component {
    render() {
        return (
            <div>
              <h2>Whoops! Page note found. (404)</h2>
            </div>
        );
    }
}
