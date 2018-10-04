import React, { Component } from 'react';

class PageVideo extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <div className="box-flex widescreen">
                                <iframe title="my-unique-iframe-title" src="https://www.youtube-nocookie.com/embed/lFcSrYw-ARY" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageVideo;