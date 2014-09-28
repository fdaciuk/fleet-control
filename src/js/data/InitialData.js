define([ 'modules/Storage' ], function( Storage ) {
    'use strict';

    var initialData = (function () {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.init = function init() {
            $private.setInitialData();
        };

        // ------------------------------

        $private.setInitialData = function setInitialData() {
            return ( Storage.getItem( 'fleet' ) || Storage.setItem( 'fleet', $private.getInitialData() ) );
        };

        // ------------------------------

        $private.getInitialData = function getInitialData() {
            return [{
                "combustivel" : "Flex",
                "imagem" : null,
                "marca" : "Volkswagem",
                "modelo" : "Gol",
                "placa" : "FFF5498"
            },{
                "combustivel" : "Gasolina",
                "imagem" : null,
                "marca" : "Volkswagem",
                "modelo" : "Fox",
                "placa" : "FOX4125"
            },{
                "combustivel" : "Alcool",
                "imagem" : "https://lh4.googleusercontent.com/_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QMpqL4NYaE/s48ckno/photo.jpg",
                "marca" : "Volkswagen",
                "modelo" : "Fusca",
                "placa" : "PAI4121"
            }];
        };

        // ------------------------------

        return $public;
    })();

    return initialData;
});