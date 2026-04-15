// Analytics tracking utilities

export interface TrackingEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Google Analytics 4 tracking
export const trackEvent = ({ category, action, label, value }: TrackingEvent): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Affiliate link click tracking
export const trackAffiliateClick = (linkName: string, destination: string): void => {
  trackEvent({
    category: 'affiliate',
    action: 'click',
    label: `${linkName} -> ${destination}`,
  });

  // Also track with any other analytics
  if (typeof window !== 'undefined') {
    // Custom analytics endpoint
    try {
      navigator.sendBeacon?.('/api/analytics', JSON.stringify({
        event: 'affiliate_click',
        link: linkName,
        destination,
        timestamp: Date.now(),
      }));
    } catch (e) {
      // Fallback for browsers without sendBeacon
      console.debug('Analytics tracking:', { linkName, destination });
    }
  }
};

// Page view tracking
export const trackPageView = (page: string): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-XXXXXXXXXX', {
      page_path: page,
    });
  }
};

// Outbound link tracking helper
export const createOutboundLinkHandler = (
  linkName: string,
  url: string,
  timeout: number = 300
): ((e: MouseEvent) => void) => {
  return (e: MouseEvent) => {
    trackAffiliateClick(linkName, url);
    
    // For affiliate links, we don't need to prevent default
    // as the tracking happens synchronously via sendBeacon
  };
};

// Conversion tracking
export const trackConversion = (
  conversionType: 'signup' | 'purchase' | 'trial',
  value?: number
): void => {
  trackEvent({
    category: 'conversion',
    action: conversionType,
    value,
  });
};

// A/B Test tracking
export const trackABTest = (
  testName: string,
  variant: string,
  goal?: string
): void => {
  trackEvent({
    category: 'ab_test',
    action: testName,
    label: `${variant}${goal ? ` -> ${goal}` : ''}`,
  });
};
