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
                logo="Webild"
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
                brand="Webild"
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
                copyright="© 2026 Webild. All rights reserved."
                links={[
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ]}
              />
    </StyleProvider>
  );
}
