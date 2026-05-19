import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "For a standard business landing page, our turnaround time is typically 1 to 2 weeks. More complex web applications or e-commerce platforms can take 4 to 8 weeks depending on the requirements."
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: "Yes! We offer comprehensive hosting and maintenance packages to ensure your website remains fast, secure, and up-to-date long after launch. We handle the technical details so you can focus on your business."
  },
  {
    question: "Can you integrate our existing CRM or booking system?",
    answer: "Absolutely. We specialize in seamless API integrations, allowing your new website to talk directly to your existing CRM, booking software, or WhatsApp autoresponders without disrupting your current workflow."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Every website we build is fully responsive and optimized for all devices. We use a mobile-first design approach to ensure your site looks perfect on smartphones, tablets, and desktops alike."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-xl"
        >
          <h2 className="font-display-sm text-display-sm mb-md">
            Got Questions? <span className="text-primary">We've Got Answers</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Everything you need to know about our web design and development process.
          </p>
        </motion.div>

        <div className="space-y-sm">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center p-lg">
                <h3 className="font-headline-sm text-headline-sm text-on-surface pr-8">
                  {faq.question}
                </h3>
                <motion.span 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="material-symbols-outlined text-primary text-headline-sm"
                >
                  keyboard_arrow_down
                </motion.span>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-lg pb-lg">
                      <p className="font-body-md text-body-md text-on-surface-variant border-t border-outline-variant/30 pt-md">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
