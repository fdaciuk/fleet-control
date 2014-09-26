/** @jsx React.DOM */

define([
    'react',
    'lodash'
],
function( React, _ ) {
    'use strict';

    var FleetPagination = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $private.PER_PAGE = 1;

        // ------------------------------

        $public.getInitialState = function getInitialState() {
            return {
                actualPage : 1
            };
        };

        // ------------------------------

        $public.componentDidMount = function componentDidMount() {
            console.log( 'Acabou de montar:', this.props.data );
            $private.getItemsActualPage.call( this );
        };

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="text-center">
                    <ul className="pagination">
                        <li><a href="#">&laquo;</a></li>
                        <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">&raquo;</a></li>
                    </ul>
                </div>
            );
        };

        // ------------------------------

        $private.getItemsActualPage = function getItemsActualPage() {
            var allPosts = this.props.data;
            var itemsOnThisPage = allPosts;

            this.props.onPaginatedData( itemsOnThisPage );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( FleetPagination() );
});