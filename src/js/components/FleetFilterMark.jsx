/** @jsx React.DOM */

define([
    'react',
    'lodash'
],
function( React, _ ) {
    'use strict';

    var FleetFilterMark = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            var marks = _.map( this.props.data, $private.getMarks );
            marks = _.uniq( marks );

            return (
                <div>
                    <h4>Marca</h4>

                    <div className="btn-group" data-toggle="buttons">
                        { _.map( marks, _.bind( $private.createDOMItemMark, this ) ) }
                    </div>
                </div>
            );
        };

        // ------------------------------

        $private.getMarks = function getMarks( vehicle ) {
            return vehicle.marca;
        };

        // ------------------------------

        $private.createDOMItemMark = function createDOMItemMark( mark ) {
            return (
                <label className={ /*'btn btn-info ' +*/ $private.isActive.call( this, mark ) }>
                    <input
                        type="checkbox"
                        data-name={ mark }
                        name="mark"
                        onChange={ _.bind( $private.handleChange, this ) } /> { mark }
                </label>
            );
        };

        // ------------------------------

        $private.handleChange = function handleChange( e ) {
            var element = e.target;
            var mark = element.getAttribute( 'data-name' );
            var checked = element.checked;
            var checkboxes = document.querySelectorAll( '[name="mark"]' );

            this.props.onSelectFilter( checkboxes );
        };

        // ------------------------------

        $private.isActive = function isActive( mark ) {
            var filter = this.props.filter[0];
            console.log( 'MARK', this.props.filter );

            if( _.has( filter, 'name' ) ) {
                return filter.checked && filter.name === mark ? 'active' : '';
            }

            return '';
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetFilterMark() );
});