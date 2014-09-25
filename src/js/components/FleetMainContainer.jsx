/** @jsx React.DOM */

define([
    'react',
    'components/FleetHeader',
    'components/FleetContent'
],
function( React, FleetHeader, FleetContent ) {
    'use strict';

    var FleetMainContainer = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="container">
                    <FleetHeader />
                    <FleetContent data={this.props.data} />
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetMainContainer() );
});