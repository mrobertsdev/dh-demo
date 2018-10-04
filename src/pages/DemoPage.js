import React from 'react';

const DemoPage = (props) => {

    let createHeading = '';
    if (props.location.state && props.match.params) {
        const {title} = props.location.state;
        const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo tellus finibus turpis ultricies, faucibus malesuada tellus finibus. Nam consequat dignissim magna, a luctus enim dapibus id. Proin libero magna, feugiat eu sollicitudin vel, interdum in nulla. Integer eget facilisis arcu, sit amet mollis augue. Aliquam et quam pharetra nisi faucibus sagittis et in velit. Suspendisse efficitur dui et dui consequat varius. Integer feugiat pellentesque lorem molestie sollicitudin.';

        createHeading = React.createElement('div', { className: 'col' },
                            React.createElement('h2', {}, title),
                            React.createElement('p', { className: 'text-indent' }, dummyText),
                            React.createElement('hr', {})
                        );
    }

    return (
        <div class="row collapse-all">
            <div class="col">
            { createHeading }
            <div class="row">
                <div class="col">
                    <h4>Daily Hive React Demo</h4>
                    <p className="text-center">Thanks for clicking on links and checking things out, this is a demo so a lot of content was left out and most of the links will just go to this page.</p><br />
                    <p className="text-center">With React, this is technically a "one page website" - though it certainly doesn't look or feel that way. That's because React takes advantage of JavaScript to route individual pieces of content as needed, so instead of clicking on a link and waiting for every page resources to load over again every single time, React just reloads the specific piece of content that needs to be updated on the page instead and leaves the rest of the already loaded content where it already is. This drastically improves page speed (although a live site should also be using a CDN - content delivery network - as well) and should incentivize viewers to stick around much longer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DemoPage;