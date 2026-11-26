import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

export default function SEO({
  title,
  description,
  canonicalUrl = 'https://cyansagency.com.au/',
  ogImage = 'https://cyansagency.com.au/og-image.png',
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to update meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=');
        const cleanVal = attrVal ? attrVal.replace(/['"]/g, '') : '';
        el.setAttribute(attrName, cleanVal);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Helper to update link tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMeta('meta[name="description"]', 'content', description);

    // 3. Open Graph Tags
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[property="og:type"]', 'content', 'website');

    // 4. Twitter Tags
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage);

    // 5. Canonical Link
    setLink('canonical', canonicalUrl);

    // 6. JSON-LD Scripts
    const scriptId = 'dynamic-json-ld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Clean up dynamic script when unmounting if needed
    };
  }, [title, description, canonicalUrl, ogImage, jsonLd]);

  return null;
}
