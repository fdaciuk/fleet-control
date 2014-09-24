/** @jsx React.DOM */

define([
    'react',
    'components/FleetMainContainer'
],
function( React, FleetMainContainer ) {
    'use strict';

    React.renderComponent(
        <FleetMainContainer />,
        document.querySelector( '[data-js="main"]' )
    );
});