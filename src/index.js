import React from 'react';
import PropTypes from 'prop-types';

class Placeholder extends React.Component {
    componentDidMount() {
        // some logic here - we only test if the method is called
    }
    render() {
        return this.props.content;
    }
}

Placeholder.propTypes = {
    placeholderKey: PropTypes.string,
    sitecoreChildren: PropTypes.string,
    children: PropTypes.oneOf([
        PropTypes.node,
        PropTypes.element
    ]),
    isDynamic: PropTypes.bool
};

Placeholder.defaultProps = {
    placeholderKey: 'not set',
    isDynamic: false,
    isSitecore: false
};

export default Placeholder;