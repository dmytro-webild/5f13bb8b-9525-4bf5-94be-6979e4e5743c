import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarDropdown from "@/components/ui/NavbarDropdown";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarDropdown
        logo={
          <img
            src="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794144853094-88vtnccl.png"
            alt="Cyans Agency Logo"
            className="h-8 w-auto object-contain brightness-0 invert"
          />
        }
        navItems={[
          { name: "Services", href: "#services" },
          { name: "Process", href: "#process" },
          { name: "Work", href: "#work" },
          { name: "About", href: "#about" },
          { name: "Contact", href: "#contact" },
        ]}
        ctaButton={{ text: "Book Consultation", href: "https://calendly.com/josiabatoni/30min" }}
      />
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer data-section="footer" aria-label="Site footer" className="w-full py-10 border-t border-white/10 card bg-black text-white rounded-none">
        <div className="w-content-width mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794144853094-88vtnccl.png"
              alt="Cyans Agency Logo"
              className="h-7 w-auto object-contain brightness-0 invert"
            />
            <span className="text-lg font-bold text-cream">Cyans Agency</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/80">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a
              href="https://instagram.com/cyans.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-white font-medium"
            >
              Instagram
            </a>
          </div>

          <span className="text-xs text-foreground/60">© 2026 Cyans Agency</span>
        </div>
      </footer>
    </StyleProvider>
  );
}