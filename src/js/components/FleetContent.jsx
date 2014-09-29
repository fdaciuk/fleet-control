/** @jsx React.DOM */

define([
    'react',
    'lodash',
    'components/FleetFilter',
    'components/FleetList',
    'modules/Storage'
],
function( React, _, FleetFilter, FleetList, Storage ) {
    'use strict';

    // Storage.removeItem( 'fleet' );

    var FleetContent = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.getInitialState = function getInitialState() {
            return {
                data: Storage.getItem( 'fleet' )
            };
        };

        // ------------------------------

        $public.componentDidUpdate = function componentDidUpdate( prevProps, prevState ) {
            Storage.setItem( 'fleet', this.state.data );
        };

        // ------------------------------

        $public.render = function render() {
            var updatedData = this.state.data;

            return (
                <div className="row">
                    {/*<FleetFilter data={ updatedData } />*/}

                    <FleetList
                        data={ updatedData }
                        onUpdateData={ _.bind( $private.handleUpdateData, this ) }
                        onRemoveData={ _.bind( $private.handleRemoveData, this ) } />
                </div>
            );
        };

        // ------------------------------

        $private.handleUpdateData = function handleUpdateData( newVehicle ) {
            var removeToUpdate = _.remove( this.state.data, function( data ) {
                return data.placa === newVehicle.placa;
            });

            this.setState({
                data: [].concat( newVehicle, this.state.data )
            });
        };

        // ------------------------------

        $private.handleRemoveData = function handleRemoveData( dataRemovedVehicle ) {
            this.setState({
                data: dataRemovedVehicle
            });
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetContent() );
});