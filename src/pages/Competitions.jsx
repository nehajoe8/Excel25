import React from 'react'
import TiltedCard from '../component/Eventcard'


  

const Events = () => {
  return (
    <div className="min-h-screen bg-[#0e0b16] px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-[#f2ecff] mb-10 font-[Orbitron]">Competitons</h2>
      <div className="flex flex-col gap-y-20">
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-center bg-white/5 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center border border-white/10 '>
        <TiltedCard
  imageSrc='/Excel25/codestorm.png'
  altText="CODESTORM"
  captionText="Codestorm"
  containerHeight="200px"
  containerWidth="200px"
  imageHeight="200px"
  imageWidth="200px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text ml-5 mt-5 bg-white/50 rounded p-2">
      CODESTORM
    </p>
  }
/>
<p className='p-5 text-[#e6e0ff] leading-relaxed'>CodeStorm is a competitive coding event that challenges participants to solve algorithmic and logical problems under time constraints. Designed to test precision, speed, and problem-solving skills, the event fosters a spirit of innovation and technical excellence among emerging developers.</p>
  </div>
<div className='flex flex-wrap lg:flex-nowrap justify-center items-center bg-white/5 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center border border-white/10 '>
  <TiltedCard
  imageSrc='/Excel25/musicalcontest.jpg'
  altText="RIFF RIOT"
  captionText="Riff Riot"
  containerHeight="200px"
  containerWidth="200px"
  imageHeight="200px"
  imageWidth="200px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text ml-5 mt-5 bg-white/50 rounded p-2">
      RIFF RIOT
    </p>
  }
/>
<p className='p-5 text-[#e6e0ff] leading-relaxed'>Riff Riot is a Western band competition that brings together emerging and established musical talents for a celebration of sound, style, and stage presence. Bands compete live, showcasing original compositions and reinterpretations, judged on musicality, innovation, and performance.</p>
</div>
<div className='flex flex-wrap lg:flex-nowrap justify-center items-center bg-white/5 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center border border-white/10 '>
         <TiltedCard
  imageSrc='/Excel25/debate.jpg'
  altText="DEBATE"
  captionText="Debate"
  containerHeight="200px"
  containerWidth="200px"
  imageHeight="200px"
  imageWidth="200px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text ml-5 mt-5 bg-white/50 rounded p-2">
      DEBATE
    </p>
  }
/>
<p className='p-5 text-[#e6e0ff] leading-relaxed'>Debate Competition is a platform for articulate minds to engage in structured argumentation on pressing topics. Participants will be evaluated on clarity, reasoning, and persuasion as they navigate diverse viewpoints with confidence and poise.</p>
</div>
      </div>
    </div>
  )
}

export default Events
