import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PrivacyPolicy() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-background text-on-surface selection:bg-primary/30 font-body-md min-h-screen flex flex-col">
      <Navbar />
      
      {/* Background Orbs */}
      <div className="aura-glow bg-primary w-[500px] h-[500px] top-[-100px] right-[-100px]"></div>
      
      <main className="flex-grow pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full relative z-10">
        <div className="glass-card rounded-[40px] p-md md:p-xl space-y-lg">
          
          <div className="border-b border-outline-variant/30 pb-lg mb-lg">
            <h1 className="font-display-sm text-headline-lg-mobile md:text-display-sm mb-sm text-primary">Privacy Policy</h1>
            <p className="text-on-surface-variant font-label-md">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>

          <section className="space-y-sm">
            <h2 className="font-headline-sm text-headline-sm text-secondary">1. Introduction</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Welcome to Avenix Digital Agency ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="space-y-sm">
            <h2 className="font-headline-sm text-headline-sm text-secondary">2. The Data We Collect About You</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc list-inside font-body-md text-on-surface-variant space-y-xs ml-sm">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers (such as WhatsApp).</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section className="space-y-sm">
            <h2 className="font-headline-sm text-headline-sm text-secondary">3. How We Use Your Personal Data</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc list-inside font-body-md text-on-surface-variant space-y-xs ml-sm">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
              <li>To communicate with you via WhatsApp, email, or phone regarding your project inquiries.</li>
            </ul>
          </section>

          <section className="space-y-sm">
            <h2 className="font-headline-sm text-headline-sm text-secondary">4. Data Security</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section className="space-y-sm">
            <h2 className="font-headline-sm text-headline-sm text-secondary">5. Third-Party Links</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              This website may include links to third-party websites, plug-ins and applications (such as WhatsApp for communication). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <section className="space-y-sm">
            <h2 className="font-headline-sm text-headline-sm text-secondary">6. Your Legal Rights</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
          </section>

          <section className="space-y-sm">
            <h2 className="font-headline-sm text-headline-sm text-secondary">7. Contact Us</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-surface-container-low p-md rounded-xl mt-sm border border-outline-variant/30">
              <p className="font-label-md text-primary">Avenix Digital Agency</p>
              <p className="font-body-md text-on-surface-variant">Email: hi.avenix@gmail.com</p>
              <p className="font-body-md text-on-surface-variant">Phone / WhatsApp: +91 9348250968</p>
              <p className="font-body-md text-on-surface-variant">Location: Bhubaneswar, Odisha, India</p>
            </div>
          </section>

          <div className="pt-xl border-t border-outline-variant/30 mt-xl text-center">
            <a href="/" className="inline-block primary-gradient px-xl py-md rounded-xl font-label-md text-white hover:scale-105 transition-transform">
              Return to Home
            </a>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
