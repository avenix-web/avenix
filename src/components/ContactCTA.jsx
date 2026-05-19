import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const text = `*New Website Enquiry*%0A%0A*Name:* ${formData.name}%0A*Business Type:* ${formData.businessType}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/919348250968?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto glass-card rounded-[40px] p-lg md:p-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          <div>
            <h2 className="font-display-sm text-display-sm mb-md">
              Let's Build Something <span className="text-primary">Legendary</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
              Ready to take your local business to the next level? Reach out today.
            </p>

            <div className="space-y-md">
              <div className="flex items-center gap-md">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">Email Us</p>
                  <p className="font-label-md text-label-md">hi.avenix@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-md">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">call</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">WhatsApp</p>
                  <p className="font-label-md text-label-md">+91 9348250968</p>
                </div>
              </div>

              <div className="flex items-center gap-md">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">Location</p>
                  <p className="font-label-md text-label-md">Bhubaneswar, Odisha</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="space-y-xs">
                <label className="font-label-md text-label-md ml-1">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none"
                  placeholder="Aman Pattanaik"
                  type="text"
                />
              </div>
              <div className="space-y-xs">
                <label className="font-label-md text-label-md ml-1">Business Type</label>
                <input
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none"
                  placeholder="e.g. Clinic, Cafe"
                  type="text"
                />
              </div>
            </div>

            <div className="space-y-xs">
              <label className="font-label-md text-label-md ml-1">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none"
                placeholder="hi.avenix@gmail.com"
                type="email"
              />
            </div>

            <div className="space-y-xs">
              <label className="font-label-md text-label-md ml-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none resize-none"
                placeholder="Tell us about your project..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="w-full primary-gradient py-md rounded-xl font-label-md text-label-md text-white shadow-lg active:scale-95 transition-all">
              Send via WhatsApp
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
