import React from 'react';
import ReactModal from 'react-modal';
import ReactPlayer from 'react-player';
import { FaTimes } from 'react-icons/fa';

interface VideoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Watch Demo Video"
      className="video-modal"
      overlayClassName="video-modal-overlay"
      ariaHideApp={false}
    >
      <button className="close-button" onClick={onRequestClose}>
        <FaTimes />
      </button>
      <ReactPlayer
        url="https://youtu.be/BSUSj-LY_VA"
        controls
        playing
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { showinfo: 0, controls: 1, rel: 0 },
          },
        }}
      />
    </ReactModal>
  );
};

export default VideoModal;
