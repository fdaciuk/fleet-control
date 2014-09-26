/** @jsx React.DOM */

define([
    'react',
    'lodash'
],
function( React, _ ) {
    'use strict';

    var FleetForm = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            var editItemData = this.props.itemToEdit || {};

            return (
                <div className={'col-md-12 ' + this.props.showOrHide}>
                    <h2>Cadastrar novo veículo</h2>
                    <form onSubmit={ _.bind( $private.handleSubmitForm, this ) } role="form" class="form-vehicle">
                        <div className="form-group col-md-6">
                            <label htmlFor="fv-image">Imagem</label>
                            <input type="url" ref="image" id="fv-image" defaultValue={ editItemData.imagem } className="form-control" />
                            <p className="help-block">URL da imagem do automóvel.</p>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="fv-mark">Marca *</label>
                            <input type="text" required ref="mark" id="fv-mark" defaultValue={ editItemData.marca } className="form-control" />
                            <p className="help-block">&nbsp;</p>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="fv-model">Modelo *</label>
                            <input type="text" required ref="model" id="fv-model" defaultValue={ editItemData.modelo } className="form-control" />
                            <p className="help-block">&nbsp;</p>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="fv-plate">Placa *</label>
                            <input type="text" required ref="plate" id="fv-plate" defaultValue={ editItemData.placa } className="form-control" />
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="fv-color">Cor</label>
                            <input type="text" ref="color" id="fv-color" defaultValue={ editItemData.cor } className="form-control" />
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="fv-fuel">Combustível</label>
                            <select ref="fuel" id="fv-fuel" defaultValue={ editItemData.combustivel } className="form-control">
                                <option value="Gasolina">Gasolina</option>
                                <option value="Alcool">Alcool</option>
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
            var newVehicle = $private.createNewVehicle( fieldsAndValues );

            this.props.onAddNewVehicle( newVehicle );
        };

        // ------------------------------

        $private.getValue = function getValue( fields ) {
            var inputFields = [];

            for( var i = fields.length; i--; ) {
                inputFields[ fields[i] ] = this.refs[ fields[i] ].getDOMNode().value;
            }

            return inputFields.reverse();
        };

        // ------------------------------

        $private.createNewVehicle = function createNewVehicle( fieldsAndValues ) {
            return {
                combustivel : fieldsAndValues.fuel,
                imagem : fieldsAndValues.image,
                marca : fieldsAndValues.mark,
                modelo : fieldsAndValues.model,
                placa : fieldsAndValues.plate,
                cor : fieldsAndValues.color
            };
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetForm() );
});