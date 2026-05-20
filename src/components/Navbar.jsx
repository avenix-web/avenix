import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-[20px] border-b border-white/20 ${
        scrolled ? 'py-base bg-[#0b1326]/90' : 'bg-white/5'
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-full mx-auto h-20">
        <a href="/" className="text-body-lg font-display-lg tracking-tighter text-on-surface hover:opacity-90 transition-opacity">AVENIX</a>
        <div className="hidden md:flex gap-lg items-center">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="/#services">Services</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="/#portfolio">Portfolio</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="/#process">Process</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="/#pricing">Pricing</a>
        </div>
        <a 
          href="https://wa.me/919348250968?text=Hey%20I%20need%20your%20service"
          target="_blank"
          rel="noreferrer"
          className="primary-gradient px-md py-sm rounded-lg font-label-md text-label-md text-white hover:opacity-90 active:scale-95 transition-all inline-block"
        >
          Book Free Consultation
        </a>
      </div>
    </nav>
  );
}
