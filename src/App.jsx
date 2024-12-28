import { useState } from 'react';
import vdo from './assets/videos/coverVideo.mp4';
import imgg from './assets/img/gg.png'
import './App.css';

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <>
      <div className="video-container" style={{ position: 'relative' }}>
        {/* কভার ইমেজ */}
        {!isVideoLoaded && (
          <img
            src={imgg}
            alt="Cover"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
        )}

        {/* ভিডিও */}
        <video
          src={vdo}
          muted
          autoPlay
          onLoadedData={handleVideoLoaded}
          style={{
            width: '100%',
            height: '100%',
            display: isVideoLoaded ? 'block' : 'none',
          }}
        ></video>
      </div>
    </>
  );
}

export default App;
