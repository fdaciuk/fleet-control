define([
    'backbone'
],
function( Backbone ) {

    'use strict';

    var App = (function() {

        var $public = {};
        var $private = {};


        // --------------------------------------------------


        $public.init = function init() {
            console.log( 'carregou App.js' );

            $private.initRouter();
        };


        // --------------------------------------------------


        $private.initRouter = function initRouter() {
            console.log( 'init router' );
        };


        // --------------------------------------------------


        return $public;

    })(); // App


    return App;

});