define(["react"],function(i){"use strict";var n=function(){var n={},r={};return n.render=function(){return i.DOM.div({className:"col-md-12"},i.DOM.a({onClick:r.handleClickShowHideForm.bind(this),className:"btn btn-success pull-right"},i.DOM.span({className:"glyphicon glyphicon-plus"})," Adicionar Veículo"))},r.handleClickShowHideForm=function(){var i=this.props.formShowOrHide?"":"hide";this.props.onFormShowOrHide(i)},n};return i.createClass(n())});