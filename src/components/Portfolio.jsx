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
            alt="Kalinga Dental Care" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcKKqTKCNCxvpbBIWecDl9BasMkxDgPF62XHqw1EfFh3fT3YkdWbBNkMf6qUeNAM9tUuzXjV_U-j6RE_1lnyM_tLJiTB5ZTuSOdAuYZ-3Jcs1z0RL-188nwHrdI6f9Jwhxr7iJbcAUqKKVARXw2n7uFO3gFf_V9VD9ZS6ZEtck9ZVB-q63jdv-53QpwjsjaG_gJW0uG6-7lhsDc2PSpwmt-JSq4TBXPILl5P9rfLKRIMLybX7Y6Ii593ypCd_Kf-C21cDgS0hn2XM" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
          <div className="absolute bottom-0 p-lg w-full">
            <p className="text-secondary font-label-md text-label-md mb-xs">Medical & Health • Bhubaneswar</p>
            <h4 className="font-headline-lg text-headline-lg">Kalinga Dental Care</h4>
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
            alt="Brew & Byte Cafe" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGt7FY7r13Avow4vPPvrRvq8i1ToBLIh3AWDcS6eTiRXbQiS4999vwfq6qH_CbFJUKQKc5yW72rM5_In_P_IN0godZEOoZdD-31551DD3XTDpPSNG9YB3d5vQSiXqMEWBb-5LLp9OOJHKgvvZ7J8UFXCNty55viy63BGfRKZXVpHnHDHXJ8lXKLlzGzwTD9MFCQx6hZgl-DIMGixLiz7xf4IIzUQ_F7gWAgh0eE9GCi4Z2X7C9-AnMGATkTfbB2gvqO6YlJ0drO18" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
          <div className="absolute bottom-0 p-lg w-full">
            <p className="text-secondary font-label-md text-label-md mb-xs">Hospitality • Bangalore</p>
            <h4 className="font-headline-lg text-headline-lg">Brew & Byte Cafe</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
