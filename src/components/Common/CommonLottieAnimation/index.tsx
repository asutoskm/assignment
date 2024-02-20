"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react'
import gridAnimation from '@/constants/lottie/gridAnimation.json'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LottieAnimation: React.FC = () => {
  const ref = useRef<any>(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.play();
      }
    }, 500); // timeout duration

    return () => clearTimeout(timer);
  }, []);
  return (
    <Lottie
      ref={ref}
      animationData={gridAnimation}
      className='absolute top-0 bottom-0 right-0 left-0'
      width={'100%'} height={'100%'}
      loop={5}
      autoPlay={false} />
  )
}

export default LottieAnimation