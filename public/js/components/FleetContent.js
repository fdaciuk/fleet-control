define(["react","components/FleetFilter","components/FleetList"],function(e,t,n){"use strict";var r=function(){var r={};return r.render=function(){return e.DOM.div({className:"row"},t(null),n({data:this.props.data}))},r};return e.createClass(r())});