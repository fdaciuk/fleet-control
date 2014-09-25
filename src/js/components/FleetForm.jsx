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

        $public.getInitialState = function getInitialState() {
            return {
                fields: []
            };
        };

        // ------------------------------

        $public.render = function render() {
            return (
                <div className={'col-md-12 ' + this.props.showOrHide}>
                    <h2>Cadastrar novo veículo</h2>
                    <form onSubmit={$private.handleSubmitForm.bind( this )} role="form">
                        <div className="form-group col-md-6">
                            <label for="">Imagem</label>
                            <input type="url" ref="image" className="form-control" />
                            <p className="help-block">URL da imagem do automóvel.</p>
                        </div>

                        <div className="form-group col-md-3">
                            <label for="">Marca *</label>
                            <input type="text" required ref="mark" className="form-control" />
                            <p className="help-block">&nbsp;</p>
                        </div>

                        <div className="form-group col-md-3">
                            <label for="">Modelo *</label>
                            <input type="text" required ref="model" className="form-control" />
                            <p className="help-block">&nbsp;</p>
                        </div>

                        <div className="form-group col-md-3">
                            <label for="">Placa *</label>
                            <input type="text" required ref="plate" className="form-control" />
                        </div>

                        <div className="form-group col-md-3">
                            <label for="">Cor</label>
                            <input type="text" ref="color" className="form-control" />
                        </div>

                        <div className="form-group col-md-4">
                            <label for="">Combustível</label>
                            <select ref="fuel" className="form-control">
                                <option value="Gasolina">Gasolina</option>
                                <option value="Alcool">Álcool</option>
                                <option value="Flex">Flex</option>
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

        $private.handleSubmitForm = function handleSubmitForm( e ) {
            e.preventDefault();
            var fields = [ 'image', 'mark', 'model', 'plate', 'color', 'fuel' ];
            var fieldsAndValues = $private.getValue.call( this, fields );

            this.setState({ fields : fieldsAndValues });
        };

        // ------------------------------

        $private.getValue = function getValue( fields ) {
            var inputFields = [];
            for( var i = fields.length; i--; ) {
                inputFields.push({
                    name: fields[i],
                    value : this.refs[ fields[i] ].getDOMNode().value
                });
            }

            return inputFields.reverse();
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetForm() );
});