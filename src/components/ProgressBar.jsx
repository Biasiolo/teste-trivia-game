// src/components/ProgressBar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar-container w-75 my-2">
      <div
        className="progress-bar-fill bg-primary h-4 rounded"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
