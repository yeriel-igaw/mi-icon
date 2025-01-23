import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightCircle = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
        fill="#000"
      ></path>
      <path
        d="M12.707 7.293a1 1 0 10-1.414 1.414L13.586 11H8a1 1 0 100 2h5.586l-2.293 2.293a1 1 0 001.414 1.414l4-4a1 1 0 000-1.414l-4-4z"
        fill="#000"
      ></path>
    </svg>
  );
};

ArrowRightCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightCircle;
