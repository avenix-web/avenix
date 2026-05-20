export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-outline-variant py-lg">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto gap-md">
        <div className="flex items-center gap-sm font-display-sm text-primary">
          <img src="/logo.png" alt="Avenix Logo" className="h-8 w-8 object-contain" />
          <span>AVENIX</span>
        </div>
        <div className="flex flex-wrap justify-center gap-lg">
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md" href="#services">Services</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md" href="#portfolio">Case Studies</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md" href="/privacy">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md" href="#contact">Contact</a>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
          © {new Date().getFullYear()} Avenix Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
