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
                    <thead><tr><th colspan="2"></th></tr></thead>
                    <tfoot><tr><th colspan="2"></th></tr></tfoot>

                    <tbody>
                        <tr>
                            <td>
                                <div className="col-md-3 text-center">
                                    <img src="http://placehold.it/1x1" width="110" height="150" alt="" className="img-thumbnail" />
                                </div>
                                <div className="col-md-9">
                                    <h4>GOL - Volkswagen</h4>
                                    <p>
                                        <strong>Cor:</strong> Preto<br />
                                        <strong>Placa:</strong> FFF­5498<br />
                                        <strong>Combustível:</strong> Gasolina
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
                    </tbody>
                </table>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetListTable() );
});