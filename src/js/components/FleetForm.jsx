/** @jsx React.DOM */

define([
    'react'
],
function( React ) {
    'use strict';

    var FleetForm = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="col-md-12">
                    <h2>Cadastrar novo veículo</h2>
                    <form action="" role="form">
                        <div className="form-group col-md-6">
                            <label for="">Imagem</label>
                            <input type="url" className="form-control" />
                            <p className="help-block">URL da imagem do automóvel.</p>
                        </div>

                        <div className="form-group col-md-3">
                            <label for="">Marca *</label>
                            <input type="text" required className="form-control" />
                            <p className="help-block">&nbsp;</p>
                        </div>

                        <div className="form-group col-md-3">
                            <label for="">Modelo *</label>
                            <input type="text" required className="form-control" />
                            <p className="help-block">&nbsp;</p>
                        </div>

                        <div className="form-group col-md-3">
                            <label for="">Placa *</label>
                            <input type="text" required className="form-control" />
                        </div>

                        <div className="form-group col-md-3">
                            <label for="">Cor</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="form-group col-md-4">
                            <label for="">Combustível</label>
                            <select className="form-control">
                                <option value="">Gasolina</option>
                                <option value="">Álcool</option>
                                <option value="">Flex</option>
                            </select>
                        </div>

                        <div className="form-group col-md-2">
                            <label className="col-md-12">&nbsp;</label>
                            <button type="submit" className="btn btn-success pull-right">
                                Salvar&nbsp;
                                <span className="glyphicon glyphicon-ok"></span>
                            </button>
                        </div>
                    </form>
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetForm() );
});