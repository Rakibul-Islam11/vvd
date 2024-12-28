import { useState } from 'react';
import vdo from './assets/videos/coverVideo.mp4';
import coverImg from './assets/img/Screenshot 2024-12-28 140944.png'; // কভার ইমেজ যুক্ত করুন
import './App.css';

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showCover, setShowCover] = useState(true);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);

    // 2 সেকেন্ড পর্যন্ত কভার ইমেজ দেখান (ঐচ্ছিক)
    setTimeout(() => {
      setShowCover(false);
    }, 0);
  };

  return (
    <>
      <div className="video-container" style={{ position: 'relative' }}>
        {/* কভার ইমেজ */}
        {showCover && (
          <img
            src={coverImg}
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