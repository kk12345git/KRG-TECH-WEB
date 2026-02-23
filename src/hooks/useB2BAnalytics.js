/**
 * KRG Launch Analytics Hook
 * Tracks high-value B2B interactions: Quote Requests, Sample Requests, and Spec Downloads.
 */

export const useB2BAnalytics = () => {
    const trackConversion = (type, details) => {

        // In production, this would trigger GTM, Meta Pixel, or LinkedIn Insight tags.
        if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'b2b_conversion', {
                'event_category': 'Lead Generation',
                'event_label': type,
                'value': details?.value || 0
            });
        }
    };

    const trackLead = (formName, industry) => {
        trackConversion('FORM_SUBMIT', { form: formName, industry });
        // Trigger lead-save automation notification
    };

    return { trackLead, trackConversion };
};
