import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ source, alt }) => {
  return <img src={source} alt={alt} />;
};

export default Image;

Image.propTypes = {
  source: PropTypes.string,
};
