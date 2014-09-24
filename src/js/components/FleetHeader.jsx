/** @jsx React.DOM */

define([
    'react'
],
function( React ) {
    'use strict';

    var FleetHeader = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div role="header" className="page-header">
                    <h1>Controle de Frotas</h1>
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetHeader() );
});