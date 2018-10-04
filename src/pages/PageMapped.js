import React, { Component } from 'react';
import Masonry from '../components/Masonry';

class PageMapped extends Component {
    render() {
        return (
            <div className="row collapse-all">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <Masonry cat="people" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageMapped;