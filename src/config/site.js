// Get site URL from environment variables
export const SITE_URL = import.meta.env.VITE_SITE_URL;

// Environment flag for use in components
export const isDev = !import.meta.env.PROD;

// Validate URL is HTTPS in production
if (import.meta.env.PROD && !SITE_URL.startsWith('https://')) {
  throw new Error('Production site URL must use HTTPS');
}