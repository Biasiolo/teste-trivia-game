// src/components/VideoLesson.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function VideoLesson() {
  return (
    <div className="video-lesson my-4 text-center">
      <h2 className="mb-3">Video Aula</h2>
      <div
        className=" mx-auto"
      >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lX_NDtrBPn8?si=fKk-KpNAl8MyeDHo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
}

VideoLesson.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default VideoLesson;
