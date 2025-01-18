// Centralized logging utility
const LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
};

export function logError(message, error, context = {}) {
  console.error(`[Error] ${message}:`, {
    error: error?.message || error,
    code: error?.code,
    context,
    timestamp: new Date().toISOString()
  });
}

export function logWarning(message, context = {}) {
  console.warn(`[Warning] ${message}:`, {
    context,
    timestamp: new Date().toISOString()
  });
}

export function logInfo(message, data = {}) {
  if (import.meta.env.DEV) {
    console.info(`[Info] ${message}:`, {
      ...data,
      timestamp: new Date().toISOString()
    });
  }
}