/** @jsx React.DOM */

define([
    'react',
    'components/FleetFilterColor',
    'components/FleetFilterMark'
],
function( React, FleetFilterColor, FleetFilterMark ) {
    'use strict';

    var FleetFilter = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="col-md-3 well">
                    <h4>Cor</h4>
                    <FleetFilterColor />

                    <h4>Marca</h4>
                    <FleetFilterMark />
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetFilter() );
});