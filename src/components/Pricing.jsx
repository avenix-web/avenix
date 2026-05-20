import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop" id="pricing">
      <div className="text-center mb-lg">
        <h2 className="font-display-sm text-display-sm mb-sm">Transparent Pricing</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">No hidden fees. Just value.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md max-w-5xl mx-auto">
        {/* Starter Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-lg rounded-[40px] flex flex-col"
        >
          <div className="mb-md">
            <h3 className="font-headline-lg text-headline-lg mb-xs">Starter</h3>
            <p className="text-on-surface-variant">Perfect for new local businesses.</p>
          </div>
          <div className="mb-lg">
            <span className="font-display-lg text-display-lg">₹5,000</span>
          </div>
          <ul className="space-y-sm mb-xl flex-grow">
            <li className="flex gap-sm items-center">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span>5 Page Website</span>
            </li>
            <li className="flex gap-sm items-center">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span>Mobile Responsive</span>
            </li>
            <li className="flex gap-sm items-center">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span>Basic SEO Setup</span>
            </li>
            <li className="flex gap-sm items-center">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span>Contact Form</span>
            </li>
          </ul>
          <button className="w-full glass-card py-md rounded-xl font-label-md text-label-md hover:bg-white/10 transition-colors">
            Get Started
          </button>
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-lg rounded-[40px] flex flex-col relative border-primary/50"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 primary-gradient px-4 py-1 rounded-full font-label-md text-label-md text-white text-xs">
            Most Popular
          </div>
          <div className="mb-md">
            <h3 className="font-headline-lg text-headline-lg mb-xs text-primary">Growth</h3>
            <p className="text-on-surface-variant">For businesses scaling fast.</p>
          </div>
          <div className="mb-lg">
            <span className="font-display-lg text-display-lg">₹10,000</span>
          </div>
          <ul className="space-y-sm mb-xl flex-grow">
            <li className="flex gap-sm items-center">
              <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
              <span>Unlimited Pages (CMS)</span>
            </li>
            <li className="flex gap-sm items-center">
              <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
              <span>Advanced SEO & Analytics</span>
            </li>
            <li className="flex gap-sm items-center">
              <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
              <span>WhatsApp Bot Integration</span>
            </li>
            <li className="flex gap-sm items-center">
              <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
              <span>Priority Support</span>
            </li>
          </ul>
          <button className="w-full primary-gradient py-md rounded-xl font-label-md text-label-md text-white shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
