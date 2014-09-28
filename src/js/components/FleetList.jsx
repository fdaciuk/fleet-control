/** @jsx React.DOM */

define([
    'react',
    'lodash',
    'components/FleetAddNewButton',
    'components/FleetForm',
    'components/FleetListTable',
    'components/FleetPagination'
],
function( React, _, FleetAddNewButton, FleetForm, FleetListTable, FleetPagination ) {
    'use strict';

    var FleetList = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.getInitialState = function getInitialState() {
            return {
                formShowOrHide : 'hide',
                itemToEdit : ''
            };
        };

        // ------------------------------

        $public.render = function render() {
            var formShowOrHide = this.state.formShowOrHide;
            var itemEdit = this.state.itemEdit;

            return (
                <div className="col-md-9">
                    <FleetAddNewButton
                        formShowOrHide={ formShowOrHide }
                        onFormShowOrHide={ _.bind( $private.handleFormShowOrHide, this ) } />

                    <FleetForm
                        showOrHide={ formShowOrHide }
                        itemToEdit={ itemEdit }
                        onAddNewVehicle={ _.bind( $private.handleAddNewVehicle, this ) } />

                    <div className="col-md-12">
                        <FleetListTable
                            data={ this.props.data }
                            onRemoveItem={ _.bind( $private.handleRemoveItem, this ) }
                            onEditItem={ _.bind( $private.handleEditItem, this ) } />

                        {/*
                        <FleetPagination
                            data={ this.props.data } />
                        */}
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
            this.props.onUpdateData( data );
        };

        // ------------------------------

        $private.handleRemoveItem = function handleRemoveItem( data ) {
            this.props.onRemoveData( data );
        };

        // ------------------------------

        $private.handleEditItem = function handleEditItem( item ) {
            this.setState({
                formShowOrHide : '',
                itemEdit : item[0]
            });
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetList() );
});