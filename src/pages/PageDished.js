import React, { Component } from 'react';
import Masonry from '../components/Masonry';

class PageDished extends Component {
    render() {
        return (
            <div className="row collapse-all">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <Masonry cat="animals" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageDished;