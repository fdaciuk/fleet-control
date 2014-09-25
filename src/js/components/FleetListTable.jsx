/** @jsx React.DOM */

define([
    'react'
],
function( React ) {
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
                        {this.props.data.map( $private.createItem )}
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
                        <a href="" className="btn btn-primary">
                            <span className="glyphicon glyphicon-pencil"></span>
                        </a>
                        &nbsp;
                        <a href="" className="btn btn-danger">
                            <span className="glyphicon glyphicon-remove"></span>
                        </a>
                    </td>
                </tr>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetListTable() );
});