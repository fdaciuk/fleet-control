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
                    <a onClick={ $private.handleClickShowHideForm.bind( this ) } className="btn btn-success pull-right">
                        <span className="glyphicon glyphicon-plus"></span>
                        &nbsp;Adicionar Veículo
                    </a>
                </div>
            );
        };

        // ------------------------------

        $private.handleClickShowHideForm = function handleClickShowHideForm() {
            var cssClass = ! this.props.formShowOrHide ? 'hide' : '';
            this.props.onFormShowOrHide( cssClass );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetAddNewButton() );
});