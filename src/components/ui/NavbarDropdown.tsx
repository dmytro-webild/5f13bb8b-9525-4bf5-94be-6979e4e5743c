import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface NavbarDropdownProps {
  logo: React.ReactNode;
  navItems: { name: string; href: string }[];
  ctaButton: { text: string; href: string };
}

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClose?: () => void) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onClose?.();
};

const NavbarDropdown = ({ logo, navItems, ctaButton }: NavbarDropdownProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav data-section="navbar" ref={navRef} className="fixed z-1000 top-3 md:top-5 left-1/2 -translate-x-1/2 w-content-width">
      <div className="flex items-center justify-between px-3.5 py-2.5 md:px-4 md:py-3 rounded-2xl md:rounded-xl backdrop-blur-xl card shadow-xl border border-white/10">
        <a href="/" className="pl-1 md:pl-2 text-base sm:text-lg md:text-xl font-medium text-foreground flex items-center gap-2 truncate max-w-[150px] sm:max-w-none">{logo}</a>

        <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4 shrink-0">
          <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} className="!px-3.5 !py-1.5 text-xs md:text-sm font-semibold rounded-xl" />

          <button
            type="button"
            className="relative flex items-center justify-center size-9 md:size-9 rounded-xl cursor-pointer primary-button shrink-0 active:scale-95 transition-transform"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={cls(
                "absolute w-4 h-0.5 bg-primary-cta-text transition-all duration-300",
                menuOpen ? "rotate-45" : "-translate-y-1"
              )}
            />
            <span
              className={cls(
                "absolute w-4 h-0.5 bg-primary-cta-text transition-all duration-300",
                menuOpen ? "-rotate-45" : "translate-y-1"
              )}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 right-0 md:left-auto md:right-0 mt-2 px-4 py-3 w-full md:w-72 rounded-2xl card shadow-2xl backdrop-blur-2xl border border-white/15 bg-card/95"
          >
            {navItems.map((item, index) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, () => setMenuOpen(false))}
                  className="group flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors w-full"
                >
                  <span className="text-base text-foreground font-medium group-hover:translate-x-1 transition-transform duration-300">
                    {item.name}
                  </span>
                  <ArrowUpRight
                    className="size-4 text-foreground/75 group-hover:text-foreground group-hover:rotate-45 transition-all duration-300"
                    strokeWidth={2}
                  />
                </a>
                {index < navItems.length - 1 && (
                  <div className="h-px bg-foreground/10 my-1" />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarDropdown;
