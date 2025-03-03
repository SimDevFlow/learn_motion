import React, { useState } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { span } from 'framer-motion/client'

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function App() {
  const [scope, animate] = useAnimate()
  
  
  const onBtnClick = () => {
    const sparkles = Array.from({ length: 20 });
    const sparklesAnimation = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);
    animate([
      [".letter", { y: -32 }, { duration: .2, delay:stagger(.05) }],
      ["button",{scale:.8},{duration:0.1, at:"<"}],
      ["button",{scale:1},{duration:0.1}],
      // ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: .000001, at:.5}],
    ])
  }
  return (
    <div ref={scope} className='w-screen h-screen flex items-center justify-center'>
      <button onClick={onBtnClick} className=' rounded-full border-2 border-blue-600 px-6 py-2 text-blue-600 font-bold text-2xl transition-colors hover:bg-blue-100 relative'>
        <span className='sr-only'>Motion</span>
        <span aria-hidden className='h-8 overflow-hidden flex justify-center items-center'>
          {["M", "o", "t", "i", "o", "n"].map((letter, index) => (<span data-letter={letter} className='letter inline-block relative h-8 after:h-8 leading-8 after:absolute after:left-0 after:top-full after:content-[attr(data-letter)]' key={`${letter}-${index}`}>{letter}</span>))}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 block"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <svg
              className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
              key={index}
              viewBox="0 0 122 117"
              width="10"
              height="10"
            >
              <path
                className="fill-blue-600"
                d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
              />
            </svg>
          ))}
        </span>
      </button>
    </div>
  )
}

export default App