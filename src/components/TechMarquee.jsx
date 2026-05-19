import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', icon: 'data_object' },
  { name: 'Tailwind CSS', icon: 'palette' },
  { name: 'Node.js', icon: 'dns' },
  { name: 'Framer Motion', icon: 'animation' },
  { name: 'Next.js', icon: 'speed' },
  { name: 'TypeScript', icon: 'code_blocks' },
  { name: 'AWS', icon: 'cloud' },
  { name: 'Figma', icon: 'design_services' },
];

export default function TechMarquee() {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="py-md overflow-hidden bg-surface border-y border-outline-variant/30">
      <div className="max-w-[100vw] overflow-hidden flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex whitespace-nowrap gap-xl items-center px-xl"
        >
          {duplicatedStack.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-sm text-on-surface-variant hover:text-primary transition-colors cursor-default"
            >
              <span className="material-symbols-outlined text-display-sm opacity-50">{tech.icon}</span>
              <span className="font-headline-sm text-headline-sm font-semibold opacity-70 tracking-wider">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
