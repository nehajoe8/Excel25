import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.jpeg'

import GridDistortion from '../component/Griddistortion'
import About from '../component/About'
import Carousal from '../component/Carousal'

const Home = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden  bg-fixed "
      style={{
        backgroundImage: 'url(public/85814f55f5e22258e639d0f3f44662db.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px] z-0" />

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Hero Section */}
        <div className="relative w-full h-[600px]">
          <GridDistortion
            imageSrc={'public/ae57b584ca1696b7fda27d657a54a59d.jpg'}
            grid={20}
            mouse={0.25}
            strength={0.35}
            relaxation={0.85}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <h1 className="text-white text-6xl md:text-8xl font-extrabold drop-shadow-xl">
              Excel 2025
            </h1>
          </div>
        </div>

        {/* About Section */}
        <div className="relative z-10 py-20">
          <About />

          <div style={{ height: '600px', position: 'relative' }}>
            <Carousal bend={3} textColor="#ffffff" borderRadius={0.05} />
          </div>

          <div className="text-center text-white mt-20 text-2xl font-medium tracking-wide px-6 pb-20">
            The lift-off to the ultimate techno-cultural cosmos. Welcome aboard!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
