/** @jsx React.DOM */

define([
    'react',
    'lodash',
    'components/FleetFilter',
    'components/FleetList'
],
function( React, _, FleetFilter, FleetList ) {
    'use strict';

    var FleetContent = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.getInitialState = function getInitialState() {
            return {
                data: this.props.data.reverse()
            };
        };

        // ------------------------------

        $public.render = function render() {
            var updatedData = this.state.data;

            return (
                <div className="row">
                    <FleetFilter data={ updatedData } />

                    <FleetList
                        data={ updatedData }
                        updateData={ _.bind( $private.updateData, this ) } />
                </div>
            );
        };

        // ------------------------------

        $private.updateData = function updateData( newVehicle ) {
            var removeToUpdate = _.remove( this.state.data, function( data ) {
                return data.placa === newVehicle.placa;
            });

            this.setState({
                data: [].concat( newVehicle, this.state.data )
            });
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetContent() );
});