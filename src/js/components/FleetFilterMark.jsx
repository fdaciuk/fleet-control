/** @jsx React.DOM */

define([
    'react'
],
function( React ) {
    'use strict';

    var FleetFilterMark = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="btn-group" data-toggle="buttons">
                    <label className="btn btn-info">
                        <input type="checkbox" /> Volkswagem
                    </label>
                    <label className="btn btn-info active">
                        <input type="checkbox" checked /> Fiat
                    </label>
                    <label className="btn btn-info">
                        <input type="checkbox" /> BMW
                    </label>
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetFilterMark() );
});