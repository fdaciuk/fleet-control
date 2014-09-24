/** @jsx React.DOM */

define([
    'react',
    'components/FleetAddNewButton',
    'components/FleetForm',
    'components/FleetListTable',
    'components/FleetPagination'
],
function( React, FleetAddNewButton, FleetForm, FleetListTable, FleetPagination ) {
    'use strict';

    var FleetList = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="col-md-9">
                    <FleetAddNewButton />
                    <FleetForm />

                    <div className="col-md-12">
                        <FleetListTable />
                        <FleetPagination />
                    </div>


                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetList() );
});