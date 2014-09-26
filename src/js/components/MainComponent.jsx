/** @jsx React.DOM */

define([
    'react',
    'components/FleetMainContainer',
    'data/fleet-data'
],
function( React, FleetMainContainer, data ) {
    'use strict';

    React.renderComponent(
        <FleetMainContainer data={ data } />,
        document.querySelector( '[data-js="main"]' )
    );
});