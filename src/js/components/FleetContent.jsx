/** @jsx React.DOM */

define([
    'react',
    'components/FleetFilter',
    'components/FleetList'
],
function( React, FleetFilter, FleetList ) {
    'use strict';

    var FleetContent = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="row">
                    <FleetFilter />
                    <FleetList />
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetContent() );
});