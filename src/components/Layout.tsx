import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarDropdown from "@/components/ui/NavbarDropdown";
import FooterSimpleReveal from "@/components/sections/footer/FooterSimpleReveal";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarDropdown
                logo={
                  <span className="flex items-center gap-2">
                    <img
                      src="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794128875631-x65p39bt.png"
                      alt="Cyans Agency Logo"
                      className="h-7 w-auto object-contain mix-blend-screen"
                    />
                    <span className="font-semibold text-cream">Cyans Agency</span>
                  </span>
                }
                navItems={[
                  { name: "Services", href: "#services" },
                  { name: "Process", href: "#process" },
                  { name: "Work", href: "#work" },
                  { name: "About", href: "#team" },
                  { name: "Contact", href: "#contact" },
                ]}
                ctaButton={{ text: "Book Consultation", href: "#contact" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSimpleReveal
                brand="Cyans Agency"
                columns={[
                  {
                    title: "Navigation",
                    items: [
                      { label: "Services", href: "#services" },
                      { label: "Process", href: "#process" },
                      { label: "Work", href: "#work" },
                      { label: "About", href: "#team" },
                      { label: "Contact", href: "#contact" },
                    ],
                  },
                  {
                    title: "Services",
                    items: [
                      { label: "Websites", href: "#services" },
                      { label: "Google Reviews", href: "#services" },
                      { label: "Lead Follow-up & Automation", href: "#services" },
                    ],
                  },
                ]}
                copyright="© 2026 Cyans Agency. All rights reserved. Melbourne, Australia."
                links={[
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ]}
              />
    </StyleProvider>
  );
}
