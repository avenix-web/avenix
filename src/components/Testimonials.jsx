import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="py-xl bg-surface-container-highest/20 px-margin-mobile md:px-margin-desktop">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-lg"
      >
        <h2 className="font-display-sm text-display-sm mb-sm">Client Success</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-lg rounded-3xl"
        >
          <div className="flex text-secondary mb-md">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <p className="font-body-lg text-body-lg mb-lg">
            "Avenix transformed our clinic's online presence. The new automated booking system doubled our daily patient walk-ins within a month."
          </p>
          <div className="flex items-center gap-sm">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-label-md text-primary">RM</div>
            <div>
              <p className="font-label-md text-label-md">Rajesh Mohanty</p>
              <p className="text-xs text-on-surface-variant">Owner, Kalinga Dental Care, Odisha</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-lg rounded-3xl"
        >
          <div className="flex text-secondary mb-md">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <p className="font-body-lg text-body-lg mb-lg">
            "The WhatsApp bot integration is a game changer. We handle orders and reservations for our cafe 24/7 without extra staff."
          </p>
          <div className="flex items-center gap-sm">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-label-md text-secondary">PS</div>
            <div>
              <p className="font-label-md text-label-md">Priya Sharma</p>
              <p className="text-xs text-on-surface-variant">Founder, Brew & Byte, Bangalore</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-lg rounded-3xl md:col-span-2 lg:col-span-1"
        >
          <div className="flex text-secondary mb-md">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <p className="font-body-lg text-body-lg mb-lg">
            "Incredibly fast load times and a premium glassmorphism design that truly stands out in the competitive real estate market."
          </p>
          <div className="flex items-center gap-sm">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-label-md text-primary">AD</div>
            <div>
              <p className="font-label-md text-label-md">Amit Desai</p>
              <p className="text-xs text-on-surface-variant">Director, Skyline Realty, Mumbai</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
