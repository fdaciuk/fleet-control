/** @jsx React.DOM */

define([
    'react'
],
function( React ) {
    'use strict';

    var FleetFilterColor = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div>
                    <h4>Cor</h4>

                    <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-info active">
                            <input type="checkbox" checked /> Preto
                        </label>
                        <label className="btn btn-info">
                            <input type="checkbox" /> Branco
                        </label>
                        <label className="btn btn-info">
                            <input type="checkbox" /> Vermelho
                        </label>
                    </div>
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetFilterColor() );
});