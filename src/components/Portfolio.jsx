import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop" id="portfolio">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-end mb-lg"
      >
        <div>
          <h2 className="font-display-sm text-display-sm">Selected Work</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Successful launches for clients across the globe</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-primary font-label-md text-label-md hover:underline">
          View All Case Studies <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl aspect-[16/10]"
        >
          <img 
            alt="Apex Luxury Real Estate" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            src="/portfolio_apex.png" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
          <div className="absolute bottom-0 p-lg w-full">
            <p className="text-secondary font-label-md text-label-md mb-xs">Real Estate & Development • Bhubaneswar</p>
            <h4 className="font-headline-lg text-headline-lg">Apex Real Estate</h4>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative overflow-hidden rounded-3xl aspect-[16/10]"
        >
          <img 
            alt="Zenith Analytics SaaS" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            src="/portfolio_zenith.png" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
          <div className="absolute bottom-0 p-lg w-full">
            <p className="text-secondary font-label-md text-label-md mb-xs">SaaS & Analytics • Bangalore</p>
            <h4 className="font-headline-lg text-headline-lg">Zenith Dashboard</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
