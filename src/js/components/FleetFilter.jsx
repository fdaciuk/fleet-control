/** @jsx React.DOM */

define([
    'react',
    'lodash',
    'components/FleetFilterColor',
    'components/FleetFilterMark'
],
function( React, _, FleetFilterColor, FleetFilterMark ) {
    'use strict';

    var FleetFilter = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.getInitialState = function getInitialState() {
            return {
                filter : {
                    mark : [],
                    color: []
                }
            }
        };

        // ------------------------------

        $public.render = function render() {

            return (
                <div className="col-md-3 well">
                    <FleetFilterColor
                        data={ this.props.data }
                        onSelectFilter={ $private.handleSelectFilter } />

                    <FleetFilterMark
                        data={ this.props.data }
                        filter={ this.state.filter.mark }
                        onSelectFilter={ _.bind( $private.handleSelectFilter, this ) } />

                </div>
            );
        };

        // ------------------------------

        $private.handleSelectFilter = function handleSelectFilter( items ) {
            var inputs = _.map( items, function( item ) {
                return {
                    name : item.getAttribute( 'data-name' ),
                    checked: item.checked
                }
            });

            console.log( 'INPUTS', inputs );
            this.setState({
                filter: {
                    mark: inputs
                }
            });
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetFilter() );
});