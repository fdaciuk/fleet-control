define(["modules/Storage"],function(a){"use strict";var e=function(){var e={},t={};return e.init=function(){t.setInitialData()},t.setInitialData=function(){a.removeItem("fleet"),a.setItem("fleet",t.getInitialData())},t.getInitialData=function(){return[{combustivel:"Flex",imagem:null,marca:"Volkswagem",modelo:"Gol",placa:"FFF­5498"},{combustivel:"Gasolina",imagem:null,marca:"Volkswagem",modelo:"Fox",placa:"FOX­4125"},{combustivel:"Alcool",imagem:"https://lh4.googleusercontent.com/­_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QM­pqL4NYaE/s48­c­k­no/photo.jpg",marca:"Volkswagen",modelo:"Fusca",placa:"PAI­4121"}]},e}();return e});