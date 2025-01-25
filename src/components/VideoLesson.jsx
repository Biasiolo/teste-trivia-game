// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function VideoLesson({ videoUrl, moduleName }) {
  return (
    <div className="video-lesson my-3 d-flex flex-column align-items-center">
      <h3 className="text-body mb-3 text-center">{`Vídeo Aula: ${moduleName || ''}`}</h3>
      <div>
        <iframe
          src={videoUrl}
          title="Video Aula"
          allowFullScreen
          frameBorder="0"
          style={{
            maxWidth: '720px',
            width: '80vw',
            height: '42vh',
            border: '2px solid #ddd',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        ></iframe>
      </div>
    </div>
  );
}

VideoLesson.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  moduleName: PropTypes.string, // Nome do módulo opcional
};

export default VideoLesson;
