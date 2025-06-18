import React from 'react'

import TiltedCard from '../component/Eventcard'

  

const Events = () => {
  return (
    <div className="min-h-screen bg-[#0e0b16] px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-[#f2ecff] mb-10 font-[Orbitron]">Featured Events</h2>
      <div className="flex flex-col gap-y-20">
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-center bg-white/5 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center border border-white/10 '>
        <TiltedCard 
  imageSrc='/Excel25/medexpo.jpg'
  altText="MED EXPO"
  captionText="Med Expo"
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
      MED EXPO
    </p>
    
  }

/>
  <p className='p-5 text-[#e6e0ff] leading-relaxed'>Med Expo is a curated exhibition showcasing advancements in medical science and healthcare technology. The event provides a platform for professionals, researchers, and students to engage with emerging innovations, diagnostic tools, and healthcare solutions. It aims to foster collaboration, awareness, and knowledge-sharing within the medical community.</p>
</div>
<div className='flex flex-wrap lg:flex-nowrap justify-center items-center bg-white/5 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center border border-white/10 '>
  <TiltedCard
  imageSrc='/Excel25/wise.jpg'
  altText="WISE"
  captionText="Women in Science and Engineering"
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
      W.I.S.E.
    </p>
  }
/>
<p className='p-5 text-[#e6e0ff] leading-relaxed'>WISE (Women in Science and Engineering) is a national-level conference dedicated to highlighting contributions and fostering growth in scientific research and technological innovation. The event brings together students, academics, and professionals to engage in meaningful discussions, share experiences, and promote inclusive advancement in STEM fields.</p>
</div>
<div className='flex flex-wrap lg:flex-nowrap justify-center items-center bg-white/5 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center border border-white/10 '>
         <TiltedCard
  imageSrc='/Excel25/aiworkshop.jpg'
  altText="AI WORKSHOP"
  captionText="AI Workshop"
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
      AI WORKSHOP
    </p>
  }
/>
<p className='p-5 text-[#e6e0ff] leading-relaxed'>AI Workshop is a focused, hands-on session designed to introduce participants to the fundamentals and applications of Artificial Intelligence. Led by experts, the workshop covers core concepts, practical tools, and real-world use cases, offering a comprehensive learning experience for students and enthusiasts exploring the AI domain.</p>
</div>
      </div>
    </div>
  )
}

export default Events
