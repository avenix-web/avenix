import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop" id="services">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-lg"
      >
        <h2 className="font-display-sm text-display-sm mb-sm">Our Expertise</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Custom digital solutions tailored for your business niche</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-lg rounded-3xl group"
        >
          <span className="material-symbols-outlined text-primary text-4xl mb-md">web</span>
          <h3 className="font-headline-lg text-headline-lg mb-sm">Business Websites</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">High-conversion landing pages and corporate sites built with speed in mind.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-lg rounded-3xl group lg:col-span-2"
        >
          <div className="flex flex-col md:flex-row gap-lg items-center">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-md">smart_toy</span>
              <h3 className="font-headline-lg text-headline-lg mb-sm">WhatsApp Chatbots</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Automate lead collection, FAQs, and appointment bookings directly on WhatsApp.</p>
            </div>
            <img 
              alt="Service Image" 
              className="w-full md:w-48 h-48 object-cover rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ-owa3ESqU4cSD_HHQ495dd1v7BvOgYO_EzD3bWmyA9ORs5vo4LIDN7PSp6k6pRA2ipDWIktfoEZGxDWCWJ4L21XyF0lnUw00EROYk9yRhNzeVT785YysOGwZ0xXYpJnabrtPL73aIpbEmKTbN8LS_M9PX9FdEBtNWkXIR92q9wGr9f8bKyQydx3G8LessWDGDhC-ZpnlYkpNCozjEgbMeHNeSUdbjhe6TrfD2-Y5swN5nnpnCxBk2CUV9RJP-7L6M-hY2K7SKG4" 
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-lg rounded-3xl group"
        >
          <span className="material-symbols-outlined text-primary text-4xl mb-md">dentistry</span>
          <h3 className="font-headline-lg text-headline-lg mb-sm">Dental Clinic Sites</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Specialized booking systems and gallery layouts for modern healthcare providers.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-lg rounded-3xl group"
        >
          <span className="material-symbols-outlined text-secondary text-4xl mb-md">restaurant</span>
          <h3 className="font-headline-lg text-headline-lg mb-sm">Restaurant Websites</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Interactive menus and table reservation systems for the food industry.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-lg rounded-3xl group"
        >
          <span className="material-symbols-outlined text-primary text-4xl mb-md">auto_awesome</span>
          <h3 className="font-headline-lg text-headline-lg mb-sm">Business Automation</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Streamline your workflow with custom API integrations and CRM setups.</p>
        </motion.div>
      </div>
    </section>
  );
}
