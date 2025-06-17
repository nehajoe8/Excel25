import React from 'react'
import FuzzyText from '../component/Fuzzytext'


function Errorpage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col justify-center items-center text-center px-4">
      <div className="drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-6">
        <FuzzyText
          baseIntensity={0.2} 
          hoverIntensity={0.5} 
          enableHover={true}
          fontSize="clamp(3rem, 15vw, 10rem)"
          fontWeight={900}
          color="#ffffff"
        >
          404
        </FuzzyText>
      </div>
      <h1 className="text-white text-2xl md:text-3xl font-semibold mb-2">Page Not Found</h1>
      <p className="text-[#ccc] max-w-md">
        The page you're looking for doesn’t exist. Let’s get you back home.
      </p>
    </div>
  )
}

export default Errorpage
