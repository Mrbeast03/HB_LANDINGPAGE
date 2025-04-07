import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const HeroSection = () => {
  // State for video playback control
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRefs = useRef([]);

  // Using reliable video sources with fallbacks
  const videoSources = [
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      type: "video/mp4"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.ogv",
      type: "video/ogg"
    }
  ];

  // Fallback poster image
  const videoPosterUrl = "https://peach.blender.org/wp-content/uploads/bbb-splash.png";

  // Initialize video refs and handle errors
  useEffect(() => {
    const handleVideoError = () => {
      setHasError(true);
      console.error("Failed to load video");
    };

    videoRefs.current.forEach(video => {
      if (video) {
        video.addEventListener('error', handleVideoError);
      }
    });

    return () => {
      videoRefs.current.forEach(video => {
        if (video) {
          video.removeEventListener('error', handleVideoError);
          video.pause();
          video.removeAttribute('src');
          video.load();
        }
      });
    };
  }, []);

  // Control all videos simultaneously
  const togglePlayAll = () => {
    if (hasError) return;
    
    const newPlayingState = !isPlaying;
    videoRefs.current.forEach(video => {
      if (video) {
        if (newPlayingState) {
          video.play().catch(error => {
            console.error("Error playing video:", error);
            setHasError(true);
          });
        } else {
          video.pause();
        }
      }
    });
    setIsPlaying(newPlayingState);
  };

  // Toggle mute for all videos
  const toggleMuteAll = () => {
    const newMutedState = !isMuted;
    videoRefs.current.forEach(video => {
      if (video) video.muted = newMutedState;
    });
    setIsMuted(newMutedState);
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Build The Future</span> With Next-Gen Tech
          </h1>
          <p className="hero-subtitle">
            The complete developer platform to build, test, and deploy applications at scale with cutting-edge technology.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">
              Start Building Free
            </button>
            <button 
              className="btn btn-outline" 
              onClick={togglePlayAll}
              disabled={hasError}
            >
              {isPlaying ? 'Pause Demo' : 'Watch Demo'} {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">10M+</div>
              <div className="stat-label">Developers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Integrations</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hexagon-video-wrapper">
            {hasError ? (
              <div className="video-error">
                <p>Video failed to load. Please try again later.</p>
              </div>
            ) : (
              <>
                <div className="hexagon-3d">
                  {/* Create 6 faces for the hexagon */}
                  {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
                    <div 
                      key={`face-${index}`}
                      className="hexagon-face"
                      style={{ transform: `rotateY(${rotation}deg) translateZ(250px)` }}
                    >
                      <video
                        ref={el => {
                          if (el) videoRefs.current[index] = el;
                        }}
                        className="demo-video"
                        poster={videoPosterUrl}
                        controls={false}
                        preload="metadata"
                        loop
                        muted={isMuted}
                        onClick={togglePlayAll}
                      >
                        {videoSources.map((source, i) => (
                          <source key={i} src={source.src} type={source.type} />
                        ))}
                        Your browser does not support HTML5 video.
                      </video>
                    </div>
                  ))}

                  {/* Create 6 neon edges */}
                  {[30, 90, 150, 210, 270, 330].map((rotation, index) => (
                    <div
                      key={`edge-${index}`}
                      className="hexagon-edge"
                      style={{ transform: `rotateY(${rotation}deg) translateZ(250px)` }}
                    />
                  ))}
                </div>

                <div className="play-button-overlay">
                  <button
                    className="play-button"
                    onClick={togglePlayAll}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    disabled={hasError}
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <button
                    className="mute-button"
                    onClick={toggleMuteAll}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    disabled={hasError}
                  >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          color: white;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-container {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
        }

        .hero-title {
          font-size: 3rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(90deg, #00d2ff, #3a7bd5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn {
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: linear-gradient(to right, #00d2ff, #3a7bd5);
          border: none;
          color: white;
        }

        .btn-outline {
          background: transparent;
          border: 2px solid #00d2ff;
          color: #00d2ff;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          background: linear-gradient(90deg, #00d2ff, #3a7bd5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-visual {
          flex: 1;
          position: relative;
          min-height: 500px;
        }

        .hexagon-video-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          perspective: 1000px;
        }

        .video-error {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.7);
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
        }

        .hexagon-3d {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: rotate 30s infinite linear;
          transform: rotateX(20deg);
        }

        @keyframes rotate {
          from { transform: rotateX(20deg) rotateY(0deg); }
          to { transform: rotateX(20deg) rotateY(360deg); }
        }

        .hexagon-face {
          position: absolute;
          width: 300px;
          height: 400px;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(0, 255, 255, 0.3);
          overflow: hidden;
          backface-visibility: visible;
        }

        .hexagon-face video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hexagon-edge {
          position: absolute;
          width: 10px;
          height: 400px;
          background: linear-gradient(to bottom, 
            rgba(0, 255, 255, 0) 0%, 
            rgba(0, 255, 255, 0.8) 50%, 
            rgba(0, 255, 255, 0) 100%);
          animation: pulse 2s infinite alternate;
        }

        @keyframes pulse {
          from { opacity: 0.3; }
          to { opacity: 0.8; }
        }

        .play-button-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .play-button {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(0, 255, 255, 0.3);
          border: 2px solid #0ff;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }

        .play-button:hover:not(:disabled) {
          background: rgba(0, 255, 255, 0.5);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .play-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .mute-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid #fff;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mute-button:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.3);
        }

        .mute-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-cta {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .hexagon-3d {
            position: relative;
            width: 350px;
            height: 350px;
            margin: 0 auto;
          }

          .hexagon-face {
            width: 200px;
            height: 300px;
          }

          .hexagon-edge {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;