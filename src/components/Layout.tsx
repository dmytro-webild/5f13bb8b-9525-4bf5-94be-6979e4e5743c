import { Outlet, Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarDropdown from "@/components/ui/NavbarDropdown";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarDropdown
        logo={
          <Link to="/" className="flex items-center">
            <img
              src="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794144853094-88vtnccl.png"
              alt="Cyan's Agency Logo"
              className="w-[96px] max-w-full h-auto sm:w-auto sm:h-8 object-contain brightness-0 my-auto shrink-0"
            />
          </Link>
        }
        navItems={[
          { name: "Services", href: "/#services" },
          { name: "Process", href: "/#process" },
          { name: "Work", href: "/#work" },
          { name: "About", href: "/#about" },
          { name: "Contact", href: "/#contact" },
        ]}
        ctaButton={{ text: "Book Consultation", href: "https://calendly.com/josiabatoni/30min" }}
      />
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer data-section="footer" aria-label="Site footer" className="w-full py-10 border-t border-black/10 card bg-white text-black rounded-none">
        <div className="w-content-width mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-3">
              <img
                src="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794144853094-88vtnccl.png"
                alt="Cyan's Agency Logo"
                className="h-7 w-auto object-contain brightness-0"
              />
              <span className="text-lg font-bold text-black">Cyan's Agency</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600">
              <a href="tel:0410904201" className="flex items-center gap-1.5 hover:text-[#EE3678] transition-colors">
                <Phone className="size-3.5 text-[#EE3678]" /> 0410 904 201
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-[#EE3678]" /> Templestowe Lower, VIC 3107
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600">
            <Link to="/#services" className="hover:text-[#EE3678] transition-colors">Services</Link>
            <Link to="/#process" className="hover:text-[#EE3678] transition-colors">Process</Link>
            <Link to="/#work" className="hover:text-[#EE3678] transition-colors">Work</Link>
            <Link to="/#about" className="hover:text-[#EE3678] transition-colors">About</Link>
            <Link to="/#contact" className="hover:text-[#EE3678] transition-colors">Contact</Link>
            <a
              href="https://instagram.com/cyans.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EE3678] hover:text-[#EE3678]/80 font-medium transition-colors"
            >
              Instagram
            </a>
          </div>

          <span className="text-xs text-zinc-600">© 2026 Cyan's Agency</span>
        </div>
      </footer>
    </StyleProvider>
  );
}