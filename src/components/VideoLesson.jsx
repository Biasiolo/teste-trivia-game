// src/components/VideoLesson.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function VideoLesson({ videoUrl }) {
  return (
    <div className="video-lesson my-3 d-flex justify-content-center">
      <div
        className="container text-center"
        style={{
          maxWidth: '962px', // Largura máxima maior para telas grandes
        }}
      >
        <div>
          <iframe
            src={videoUrl}
            title="Video Aula"
            allowFullScreen
            frameBorder="0"
            style={{
                maxWidth: '960px', // Largura máxima maior para desktops
                width: '80vw',
                height: '40vh', // Adapta altura automaticamente
                border: '2px solid #ddd', // Bordas mais destacadas
                borderRadius: '12px', // Bordas arredondadas mais suaves
                overflow: 'hidden',
              }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

VideoLesson.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default VideoLesson;
