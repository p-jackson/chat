export default {
  componentWillMount: function() {
    this.state = this.state || {};
    this.state.hovered = false;
  },
  componentDidMount: function() {
    this.getDOMNode().addEventListener('mouseover', this.onMouseOver);
    this.getDOMNode().addEventListener('mouseout', this.onMouseOut);
  },
  componentWillUnmount: function() {
    this.getDOMNode().removeEventListener('mouseover', this.onMouseOver);
    this.getDOMNode().removeEventListener('mouseout', this.onMouseOut);
  },
  onMouseOver: function() {
    this.setState({ hovered: true });
  },
  onMouseOut: function() {
    this.setState({ hovered: false });
  }
};
