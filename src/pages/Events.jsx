import React from 'react'
import codestorm from '../assets/codestorm.png'
import EventCard from '../component/Eventcard'

  

const Events = () => {
  return (
    <div className="min-h-screen bg-[#0e0b16] px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-[#f2ecff] mb-10 font-[Orbitron]">Featured Events</h2>
      <div className="8">
        <EventCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText=""
  captionText="Kendrick Lamar - "
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text ml-5 mt-5 bg-white/50 rounded p-2">
      Kendrick Lamar -
    </p>
  }
/>
  

        <EventCard
          imageSrc={codestorm}
  altText="Codestorm"
  captionText="Codestorm"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text ml-5 mt-5 bg-white/50 rounded p-2">
      Codestorm
    </p>
  }
        />
        <EventCard
          imageSrc={codestorm}
  altText="Codestorm"
  captionText="Codestorm"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Codestorm
    </p>
  }
        />
      </div>
    </div>
  )
}

export default Events
