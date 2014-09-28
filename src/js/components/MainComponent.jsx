/** @jsx React.DOM */

define([
    'react',
    'components/FleetMainContainer',
    'data/InitialData'
],
function( React, FleetMainContainer, InitialData ) {
    'use strict';

    InitialData.init();

    React.renderComponent(
        <FleetMainContainer />,
        document.querySelector( '[data-js="main"]' )
    );
});