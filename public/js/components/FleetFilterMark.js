define(["react","lodash"],function(e,t){"use strict";var a=function(){var a={},n={};return a.render=function(){var a=t.map(this.props.data,n.getMarks);return a=t.uniq(a),e.DOM.div(null,e.DOM.h4(null,"Marca"),e.DOM.div({className:"btn-group","data-toggle":"buttons"},t.map(a,t.bind(n.createDOMItemMark,this))))},n.getMarks=function(e){return e.marca},n.createDOMItemMark=function(a){return e.DOM.label({className:n.isActive.call(this,a)},e.DOM.input({type:"checkbox","data-name":a,name:"mark",onChange:t.bind(n.handleChange,this)})," ",a)},n.handleChange=function(e){var t=e.target,a=(t.getAttribute("data-name"),t.checked,document.querySelectorAll('[name="mark"]'));this.props.onSelectFilter(a)},n.isActive=function(e){var a=this.props.filter[0];return console.log("MARK",this.props.filter),t.has(a,"name")&&a.checked&&a.name===e?"active":""},a};return e.createClass(a())});