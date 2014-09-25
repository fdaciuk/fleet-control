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

        $public.getInitialState = function getInitialState() {
            return {
                formShowOrHide : 'hide'
            };
        };

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="col-md-9">
                    <FleetAddNewButton
                        formShowOrHide={this.state.formShowOrHide}
                        onFormShowOrHide={$private.handleFormShowOrHide.bind( this )} />

                    <FleetForm
                        showOrHide={this.state.formShowOrHide}
                        onAddNewVehicle={$private.handleAddNewVehicle.bind( this )} />

                    <div className="col-md-12">
                        <FleetListTable data={this.props.data} />
                        <FleetPagination />
                    </div>


                </div>
            );
        };

        // ------------------------------

        $private.handleFormShowOrHide = function handleFormShowOrHide( cssClass ) {
            this.setState({ formShowOrHide : cssClass });
        };

        // ------------------------------

        $private.handleAddNewVehicle = function handleAddNewVehicle( data ) {
            this.props.updateData( data );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetList() );
});