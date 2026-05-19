import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Requirement Discussion",
      description: "Deep dive into your business goals, target audience, and growth obstacles.",
      bg: "bg-primary/20",
      text: "text-primary"
    },
    {
      id: "02",
      title: "Strategic Design",
      description: "Crafting a high-fidelity glassmorphism design that aligns with your brand identity.",
      bg: "bg-secondary/20",
      text: "text-secondary"
    },
    {
      id: "03",
      title: "Rapid Development",
      description: "Turning designs into high-performance code with full automation testing.",
      bg: "bg-primary/20",
      text: "text-primary"
    },
    {
      id: "04",
      title: "Launch & Support",
      description: "Going live with monitoring and continuous support for your new platform.",
      bg: "bg-secondary/20",
      text: "text-secondary"
    }
  ];

  return (
    <section className="py-xl bg-surface-container-low/30 px-margin-mobile md:px-margin-desktop" id="process">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display-sm text-display-sm text-center mb-xl"
        >
          The Road to <span className="text-primary">Launch</span>
        </motion.h2>
        
        <div className="space-y-md">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-lg rounded-3xl flex flex-col md:flex-row gap-lg items-center"
            >
              <div className={`w-16 h-16 rounded-full ${step.bg} flex items-center justify-center font-display-sm ${step.text} shrink-0`}>
                {step.id}
              </div>
              <div>
                <h4 className="font-headline-lg text-headline-lg mb-xs">{step.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
