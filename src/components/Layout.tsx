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
                      className="h-7 w-auto object-contain"
                    />
                    <span>Cyans Agency</span>
                  </span>
                }
                navItems={[
                  { name: "Services", href: "#services" },
                  { name: "Work", href: "#work" },
                  { name: "Team", href: "#team" },
                  { name: "Contact", href: "#contact" },
                ]}
                ctaButton={{ text: "Start Project", href: "#contact" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSimpleReveal
                brand="Cyans Agency"
                columns={[
                  {
                    title: "Company",
                    items: [
                      { label: "About", href: "#" },
                      { label: "Services", href: "#services" },
                      { label: "Work", href: "#work" },
                      { label: "Contact", href: "#contact" },
                    ],
                  },
                  {
                    title: "Services",
                    items: [
                      { label: "Web Development", href: "#" },
                      { label: "SEO", href: "#" },
                      { label: "Branding", href: "#" },
                      { label: "UI/UX Design", href: "#" },
                    ],
                  },
                  {
                    title: "Connect",
                    items: [
                      { label: "Twitter", href: "#" },
                      { label: "LinkedIn", href: "#" },
                      { label: "Instagram", href: "#" },
                      { label: "Dribbble", href: "#" },
                    ],
                  },
                ]}
                copyright="© 2026 Cyans Agency. All rights reserved."
                links={[
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ]}
              />
    </StyleProvider>
  );
}
