import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="row paddBott">
                        <div className="col s-1 m-8-12">
                            <div className="row">
                                <div className="col">
                                    <img src='https://placeimg.com/1000/720/tech' alt="Placeholder" />
                                </div>
                            </div>
                        </div>
                        <div className="col s-1 m-4-12">
                            <div className="row">
                                <div className="col">
                                    <h3 className="header-gallary"><i className="sprite trend medium"></i> TRENDING</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col paddTop first">
                                    <div className="row">
                                        <div className="col s-5-12">
                                            <img src='https://placeimg.com/300/240/tech' alt="Placeholder" />
                                        </div>
                                        <div className="col s-7-12">
                                            <p><b>Post Title 1</b></p>
                                            <p>Some text describing the post.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col paddTop">
                                    <div className="row">
                                        <div className="col s-5-12">
                                            <img src='https://placeimg.com/300/240/tech' alt="Placeholder" />
                                        </div>
                                        <div className="col s-7-12">
                                            <p><b>Post Title 2</b></p>
                                            <p>Some text describing the post.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col paddTop">
                                    <div className="row">
                                        <div className="col s-5-12">
                                            <img src='https://placeimg.com/300/240/tech' alt="Placeholder" />
                                        </div>
                                        <div className="col s-7-12">
                                            <p><b>Post Title 3</b></p>
                                            <p>Some text describing the post.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col paddTop">
                                    <div className="row">
                                        <div className="col s-5-12">
                                            <img src='https://placeimg.com/300/240/tech' alt="Placeholder" />
                                        </div>
                                        <div className="col s-7-12">
                                            <p><b>Post Title 4</b></p>
                                            <p>Some text describing the post.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <br />
                            <h3>Mid-page Heading</h3>
                            <p className="text-center">Here is a subheader.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m-4-12">
                            <img src='https://placeimg.com/400/300/tech' alt="Placeholder" style={{height: '300px' }} /><br /><p>Title 1</p>
                        </div>
                        <div className="col m-4-12">
                            <img src='https://placeimg.com/420/320/tech' alt="Placeholder" style={{height: '300px' }} /><br /><p>Title 2</p>
                        </div>
                        <div className="col m-4-12">
                            <img src='https://placeimg.com/390/260/tech' alt="Placeholder" style={{height: '300px' }} /><br /><p>Title 3</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;