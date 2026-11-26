export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/services/websites', label: 'Websites', pageFile: 'WebsitesPage' },
  { path: '/websites', label: 'Websites', pageFile: 'WebsitesPage' },
  { path: '/services/google-business-profile', label: 'Google Business Profile', pageFile: 'GoogleBusinessProfilePage' },
  { path: '/google-business-profile', label: 'Google Business Profile', pageFile: 'GoogleBusinessProfilePage' },
  { path: '/services/missed-call-text-back', label: 'Missed-call text-back', pageFile: 'MissedCallTextBackPage' },
  { path: '/missed-call-text-back', label: 'Missed-call text-back', pageFile: 'MissedCallTextBackPage' },
  { path: '/services/automations', label: 'Automations', pageFile: 'AutomationsPage' },
  { path: '/automations', label: 'Automations', pageFile: 'AutomationsPage' },
];

