import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <section className="py-xl bg-surface-container-lowest/50">
      <div className="px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display-sm text-display-sm mb-md">
              Why Partner with <span className="text-primary">Avenix?</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              We don't just build sites; we build growth engines. Every element is engineered to move your business forward.
            </p>
            <div className="grid grid-cols-2 gap-md">
              <div className="flex gap-base">
                <span className="material-symbols-outlined text-secondary">bolt</span>
                <div>
                  <h4 className="font-label-md text-label-md mb-xs">Fast Delivery</h4>
                  <p className="text-sm text-on-surface-variant">Launch in 7-14 days.</p>
                </div>
              </div>
              <div className="flex gap-base">
                <span className="material-symbols-outlined text-secondary">devices</span>
                <div>
                  <h4 className="font-label-md text-label-md mb-xs">Mobile First</h4>
                  <p className="text-sm text-on-surface-variant">Pixel perfect on every screen.</p>
                </div>
              </div>
              <div className="flex gap-base">
                <span className="material-symbols-outlined text-secondary">search</span>
                <div>
                  <h4 className="font-label-md text-label-md mb-xs">SEO Ready</h4>
                  <p className="text-sm text-on-surface-variant">Built to be found.</p>
                </div>
              </div>
              <div className="flex gap-base">
                <span className="material-symbols-outlined text-secondary">payments</span>
                <div>
                  <h4 className="font-label-md text-label-md mb-xs">Affordable</h4>
                  <p className="text-sm text-on-surface-variant">Premium value pricing.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              alt="Process Preview" 
              className="rounded-3xl shadow-2xl border border-white/10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWNUGxgwgk_FVzAp6kQ7gVuo2FaBruLbZBEqNJ4DHSRt4dw0HirJ_gu_ClrF8U9IsSuRzfuRGU5yAaswN5ROzKC1Szi_P_TX9MtsumOX3gFh9XtLJ2-kYG293n8ZMKdDr3-FLSj3r1OP7BPj63vibbmr9KSVK5_urTEEoDDmWh1igEMlfRzKHeMFtPD_0GEj1sb3q6eByPvXQBiC-mSYDl7UkEU8MyNAKFN4WLb3NGagBkWgxSjkTuvAtgRa3MMFU3Q_0EzrgP1jY" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 glass-card p-md rounded-2xl"
            >
              <p className="font-display-sm text-display-sm text-secondary">99.9%</p>
              <p className="font-label-md text-label-md">Uptime Guaranteed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
