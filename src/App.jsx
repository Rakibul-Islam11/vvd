import { useState } from 'react';
import vdo from './assets/videos/sdsd.mp4';
import imgg from './assets/img/gg.png';
import './App.css';

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <>
      <div
        className="video-container"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '800px', // Optional, যদি একটি নির্দিষ্ট প্রস্থ দিতে চান
          aspectRatio: '16 / 9', // ভিডিওর অনুপাত ধরে রাখার জন্য
          overflow: 'hidden',
        }}
      >
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
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: isVideoLoaded ? 'block' : 'none',
          }}
        ></video>
        <p
          style={{
            marginTop: '16px',
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia nesciunt ducimus recusandae, atque accusantium. At tempore ea quod porro! Quasi eligendi corrupti asperiores nesciunt nostrum impedit sint, officiis reprehenderit.
        </p>
      </div>
    </>
  );
}

export default App;
