define(["react","lodash"],function(a){"use strict";var t=function(){var t={},e={};return e.PER_PAGE=1,t.getInitialState=function(){return{actualPage:1}},t.componentDidMount=function(){console.log("Acabou de montar:",this.props.data),e.getItemsActualPage.call(this)},t.render=function(){return a.DOM.div({className:"text-center"},a.DOM.ul({className:"pagination"},a.DOM.li(null,a.DOM.a({href:"#"},"«")),a.DOM.li({className:"active"},a.DOM.a({href:"#"},"1 ",a.DOM.span({className:"sr-only"},"(current)"))),a.DOM.li(null,a.DOM.a({href:"#"},"2")),a.DOM.li(null,a.DOM.a({href:"#"},"»"))))},e.getItemsActualPage=function(){var a=this.props.data,t=a;this.props.onPaginatedData(t)},t};return a.createClass(t())});