import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 px-margin-mobile md:px-margin-desktop min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-4xl text-center z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 rounded-full glass-card text-primary font-label-md text-label-md mb-md"
        >
          Future of Digital Presence
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-md"
        >
          We Build Websites That <span className="text-gradient">Grow Local Businesses</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-2xl mx-auto"
        >
          Modern high-performance websites integrated with WhatsApp automation. Convert visitors into lifelong customers while you sleep.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-md justify-center"
        >
          <a 
            href="https://wa.me/919348250968?text=Hey%20I%20need%20your%20service"
            target="_blank"
            rel="noreferrer"
            className="primary-gradient px-xl py-md rounded-xl font-label-md text-label-md text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-105 transition-transform"
          >
            Book Free Consultation
          </a>
          <a 
            href="https://wa.me/919348250968?text=Hey%20I%20need%20your%20service"
            target="_blank"
            rel="noreferrer"
            className="glass-card px-xl py-md rounded-xl font-label-md text-label-md text-on-surface flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">chat</span> Chat on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Floating Glass Cards Decoration */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[10%] glass-card p-6 rounded-2xl w-64 hidden xl:block"
      >
        <div className="flex items-center gap-sm mb-base">
          <span className="material-symbols-outlined text-secondary">trending_up</span>
          <p className="font-label-md text-label-md">Conversion Rate</p>
        </div>
        <p className="font-headline-lg text-headline-lg">+142%</p>
      </motion.div>

      <motion.div 
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[15%] glass-card p-6 rounded-2xl w-64 hidden xl:block"
      >
        <div className="flex items-center gap-sm mb-base">
          <span className="material-symbols-outlined text-primary">forum</span>
          <p className="font-label-md text-label-md">Bot Automation</p>
        </div>
        <p className="font-label-md text-label-md text-on-surface-variant">Active 24/7</p>
      </motion.div>
    </section>
  );
}
