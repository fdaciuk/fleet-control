/** @jsx React.DOM */

define([
    'react',
    'lodash'
],
function( React, _ ) {
    'use strict';

    var FleetListTable = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <table className="table table-striped">
                    <thead><tr><th colSpan="2"></th></tr></thead>
                    <tfoot><tr><td colSpan="2"></td></tr></tfoot>

                    <tbody>
                        { _.map( this.props.data, _.bind( $private.createItem, this ) ) }
                    </tbody>
                </table>
            );
        };

        // ------------------------------

        $private.createItem = function createItem( itemData ) {
            return(
                <tr>
                    <td>
                        <div className="col-md-3 text-center">
                            <img
                                src={ itemData.imagem || 'http://placehold.it/1x1' }
                                width="110"
                                height="150"
                                alt={ itemData.marca + ' - ' + itemData.modelo }
                                className="img-thumbnail" />
                        </div>
                        <div className="col-md-9">
                            <h4>{itemData.modelo} - {itemData.marca}</h4>
                            <p>
                                <strong>Cor:</strong> {itemData.cor || '-'}<br />
                                <strong>Placa:</strong> {itemData.placa}<br />
                                <strong>Combustível:</strong> {itemData.combustivel}
                            </p>
                        </div>
                    </td>

                    <td className="text-right">
                        <a
                            href="#"
                            onClick={ _.bind( $private.handleClickEdit, this ) }
                            data-plate={ itemData.placa }
                            className="btn btn-primary"
                        ><span className="glyphicon glyphicon-pencil"></span></a>

                        &nbsp;

                        <a
                            href="#"
                            onClick={ _.bind( $private.handleClickRemove, this ) }
                            data-plate={ itemData.placa }
                            className="btn btn-danger"
                        ><span className="glyphicon glyphicon-remove"></span></a>
                    </td>
                </tr>
            );
        };

        // ------------------------------

        $private.handleClickEdit = function handleClickEdit( e ) {
            e.preventDefault();
            var plate = e.currentTarget.getAttribute( 'data-plate' );
            var editItem = _.filter( this.props.data, function( item ) {
                return item.placa === plate;
            });

            console.log( 'Edit car %s', plate );
            this.props.onEditItem( editItem );
        };

        // ------------------------------

        $private.handleClickRemove = function handleClickRemove( e ) {
            e.preventDefault();
            var plate = e.currentTarget.getAttribute( 'data-plate' );
            var newData = _.remove( this.props.data, function( item ) {
                return item.placa !== plate;
            });

            console.log( 'Removed plate %s', plate, newData );
            return this.props.onRemoveItem( newData );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetListTable() );
});