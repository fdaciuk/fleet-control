/** @jsx React.DOM */

define([
    'react'
],
function( React ) {
    'use strict';

    var FleetPagination = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="text-center">
                    <ul className="pagination">
                        <li><a href="#">&laquo;</a></li>
                        <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">&raquo;</a></li>
                    </ul>
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetPagination() );
});