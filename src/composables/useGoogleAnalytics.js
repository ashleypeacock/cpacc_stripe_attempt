import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ANALYTICS_ID, ANALYTICS_CONFIG } from '../config/analytics';

export function useGoogleAnalytics() {
  const router = useRouter();
  let isScriptLoaded = false;

  function initializeGtag() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', ANALYTICS_ID, ANALYTICS_CONFIG);
  }

  onMounted(() => {
    // Add gtag script
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
    gtagScript.onload = () => {
      isScriptLoaded = true;
      initializeGtag();
    };
    document.head.appendChild(gtagScript);

    // Track page views
    router.afterEach((to) => {
      if (isScriptLoaded && window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: to.fullPath,
          page_title: document.title
        });
      }
    });
  });
}