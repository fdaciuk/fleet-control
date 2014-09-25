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

        $public.getInitialState = function getInitialState() {
            return {
                newVehicle: []
            };
        };

        // ------------------------------

        $public.render = function render() {
            var updatedData = this.props.data.concat( this.state.newVehicle );

            return (
                <div className="row">
                    <FleetFilter data={updatedData} />

                    <FleetList
                        data={updatedData}
                        updateData={$private.updateData.bind( this )} />
                </div>
            );
        };

        // ------------------------------

        $private.updateData = function updateData( newVehicle ) {
            this.setState({ newVehicle: newVehicle });
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetContent() );
});