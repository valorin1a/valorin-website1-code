// Google Analytics 4 Event Tracking Utility

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

/**
 * Track a custom event to Google Analytics 4
 * @param eventName - Name of the event
 * @param properties - Additional event properties
 */
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...properties,
      timestamp: new Date().toISOString(),
    });
  }
  
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', eventName, properties);
  }
};

/**
 * Track VAT calculator usage
 */
export const trackVATCalculation = (data: {
  mode: string;
  origin: string;
  supplyType: string;
  rcFlag: boolean;
}) => {
  trackEvent('vat_calculate', {
    mode: data.mode,
    origin: data.origin,
    supply_type: data.supplyType,
    rc_flag: data.rcFlag,
  });
};

/**
 * Track Corporate Tax calculator usage
 */
export const trackCTCalculation = (data: {
  tiBucket: string;
  freezoneFlag: boolean;
  warningCount: number;
}) => {
  trackEvent('ct_calculate', {
    ti_bucket: data.tiBucket,
    freezone_flag: data.freezoneFlag,
    warning_count: data.warningCount,
  });
};

/**
 * Track form submission
 */
export const trackFormSubmission = (formType: string, data?: Record<string, unknown>) => {
  trackEvent(`${formType}_submit`, {
    form_type: formType,
    ...data,
  });
};

/**
 * Track PDF export requests
 */
export const trackPDFExport = (documentType: string) => {
  trackEvent(`${documentType}_export_pdf`, {
    document_type: documentType,
  });
};

/**
 * Track page view
 */
export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_name: pageName,
    page_path: window.location.pathname,
    page_url: window.location.href,
  });
};

/**
 * Track CTA clicks
 */
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  });
};

/**
 * Track download requests
 */
export const trackDownload = (resourceName: string, resourceType: string) => {
  trackEvent('resource_download', {
    resource_name: resourceName,
    resource_type: resourceType,
  });
};

/**
 * Track NDA requests
 */
export const trackNDARequest = (source: string) => {
  trackEvent('nda_request', {
    source: source,
  });
};

/**
 * Track service tile/card clicks
 */
export const trackServiceClick = (serviceName: string) => {
  trackEvent('service_tile_click', {
    service_name: serviceName,
  });
};

/**
 * Track lead quality score (internal use)
 */
export const trackLeadQuality = (score: number, criteria: Record<string, unknown>) => {
  trackEvent('lead_quality_score', {
    score: score,
    ...criteria,
  });
};
