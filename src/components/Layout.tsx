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
          <img
            src="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794144853094-88vtnccl.png"
            alt="Cyans Agency Logo"
            className="h-8 w-auto object-contain brightness-0 invert"
          />
        }
        navItems={[
          { name: "Services", href: "#services" },
          { name: "What's Included", href: "#whats-included" },
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
      <FooterSimpleReveal
        brand="Cyans Agency"
        columns={[
          {
            title: "Navigation",
            items: [
              { label: "Services", href: "#services" },
              { label: "What's Included", href: "#whats-included" },
              { label: "Process", href: "#process" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ],
          },
          {
            title: "Social",
            items: [
              { label: "cyans.agency", href: "https://instagram.com/cyans.agency" },
            ],
          },
        ]}
        copyright="© 2026 Cyans Agency"
        links={[]}
      />
    </StyleProvider>
  );
}
