import React from 'react';
import PropTypes from 'prop-types';

const CloudOff = props => {
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
      <g clipPath="url(#clip0_1_140)" fill="#000">
        <path d="M8.9 21c-3.3 0-6.3-1.8-7.9-4.6-1.2-2.1-1.4-4.5-.8-6.8.7-2.3 2.2-4.2 4.3-5.4.5-.3 1.1-.2 1.4.3.2.5.1 1.1-.4 1.4-1.6.9-2.8 2.4-3.3 4.2-.5 1.8-.3 3.7.6 5.3C4 17.7 6.4 19.1 9 19h9c.5 0 .9-.1 1.4-.2.5-.2 1.1.1 1.3.6.2.5-.1 1.1-.6 1.3-.7.2-1.3.4-2 .4H9c0-.1-.1-.1-.1-.1zm13.7-3c-.1 0-.3 0-.4-.1-.5-.2-.7-.8-.5-1.3.9-2-.1-4.4-2.1-5.2-.5-.2-1-.3-1.6-.3h-1.3c-.5 0-.9-.3-1-.8-.7-2.9-3.1-5-6.1-5.3-.6 0-1-.5-.9-1.1 0-.5.5-1 1.1-.9 3.5.3 6.5 2.7 7.7 6h.5c.8 0 1.6.2 2.3.5 3 1.3 4.5 4.8 3.2 7.9-.1.3-.5.6-.9.6z"></path>
        <path d="M23 24c-.3 0-.5-.1-.7-.3l-22-22C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l22 22c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1_140">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CloudOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudOff;
