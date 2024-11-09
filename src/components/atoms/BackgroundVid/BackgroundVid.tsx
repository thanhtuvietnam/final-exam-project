'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const BackgroundVid: React.FC = () => {
  const pathName = usePathname();
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const videoElement = document.getElementById(
      'background-video'
    ) as HTMLVideoElement;

    if (videoElement) {
      if (pathName === '/login' || pathName === '/signup') {
        videoElement.play().catch((error) => {
          console.error('Failed to play video:', error);
        });
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }
  }, [isClient]);

  return (
    <>
      {isClient && (
        <video
          preload="auto"
          id="background-video"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loop
          muted
          autoPlay
          playsInline
          disablePictureInPicture
        >
          <source type="video/mp4" src="/videos/outputvideo.mp4" />
        </video>
      )}
      <div className="absolute -z-[5] h-full w-full bg-black/50" />
    </>
  );
};

export default BackgroundVid;