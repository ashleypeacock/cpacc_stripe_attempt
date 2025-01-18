import { AppError } from './error-handler';

const attempts = new Map();
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 100;

export function rateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  
  // Clean up old attempts
  for (const [key, value] of attempts.entries()) {
    if (now - value.timestamp > WINDOW_MS) {
      attempts.delete(key);
    }
  }
  
  // Check current attempts
  const current = attempts.get(ip) || { count: 0, timestamp: now };
  
  if (current.count >= MAX_ATTEMPTS) {
    throw new AppError('Too many requests', 429, 'RATE_LIMIT_EXCEEDED');
  }
  
  // Update attempts
  attempts.set(ip, {
    count: current.count + 1,
    timestamp: now
  });
  
  next();
}