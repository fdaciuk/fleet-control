/** @jsx React.DOM */

define([
    'react'
],
function( React ) {
    'use strict';

    var FleetAddNewButton = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="col-md-12">
                    <a href="#" className="btn btn-success pull-right">
                        <span className="glyphicon glyphicon-plus"></span>
                        &nbsp;Adicionar
                    </a>
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetAddNewButton() );
});