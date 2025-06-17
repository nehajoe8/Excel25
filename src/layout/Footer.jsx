import React from 'react'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className="flex justify-center gap-6 bg-[#131118] text-[#a59db8] px-6 py-10">
      <a
        href="https://www.instagram.com/excelmec/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#ccc] transition duration-300 ease-in-out"
      >
        <Instagram size={22} />
      </a>
      <a
        href="https://x.com/excelmec"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#ccc] transition duration-300 ease-in-out"
      >
        <FaXTwitter size={22} />
      </a>
      <a
        href="https://www.facebook.com/excelmec"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#ccc] transition duration-300 ease-in-out"
      >
        <Facebook size={22} />
      </a>
      <a
        href="https://www.linkedin.com/company/excelmec"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#ccc] transition duration-300 ease-in-out"
      >
        <Linkedin size={22} />
      </a>
    </div>
  )
}

export default Footer
