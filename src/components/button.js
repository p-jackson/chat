import React from 'react';
import { extend } from 'lodash';
import HoverMixin from 'component-mixins/hover-mixin';

const baseStyle = {
   border: 'none',
   background: 'transparent',
   minHeight: 30,
   minWidth: 30,
   outline: 'none',
   transition: '200ms'
};

const baseHoverStyle = {
   transition: 'none',
   background: 'rgba(0, 0, 0, 0.1)'
}

export default React.createClass({
   mixins: [HoverMixin],

   render() {
      let { style, hoverStyle, ...other } = this.props;

      const finalStyle = extend({},
         baseStyle,
         this.style(),
         style,
         this.state.hovered && baseHoverStyle,
         this.state.hovered && this.hoverStyle(),
         this.state.hovered && hoverStyle
      );

      return (
         <button {...other} style={finalStyle}>
            {this.props.children}
         </button>
      );
   },

   style: function() {
      return {};
   },

   hoverStyle: function() {
      return {};
   }
});
