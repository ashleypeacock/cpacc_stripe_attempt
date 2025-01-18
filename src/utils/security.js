// Password strength requirements
export const PASSWORD_REQUIREMENTS = {
  minLength: 8,
  maxLength: 128,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecial: true,
  commonPasswords: [
    'password123',
    'qwerty123',
    '12345678',
    'letmein123'
  ]
};

// Rate limiting settings
export const RATE_LIMITS = {
  maxAttempts: 5,
  windowMs: 15 * 60 * 1000 // 15 minutes
};

// Validate password strength
export function validatePassword(password) {
  const errors = [];
  let strength = 0;
  
  if (password.length < PASSWORD_REQUIREMENTS.minLength) {
    errors.push(`Password must be at least ${PASSWORD_REQUIREMENTS.minLength} characters long`);
  } else {
    strength += 20;
  }
  
  if (password.length > PASSWORD_REQUIREMENTS.maxLength) {
    errors.push(`Password cannot exceed ${PASSWORD_REQUIREMENTS.maxLength} characters`);
  }
  
  if (PASSWORD_REQUIREMENTS.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  } else {
    strength += 20;
  }
  
  if (PASSWORD_REQUIREMENTS.requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  } else {
    strength += 20;
  }
  
  if (PASSWORD_REQUIREMENTS.requireNumbers && !/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  } else {
    strength += 20;
  }
  
  if (PASSWORD_REQUIREMENTS.requireSpecial && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  } else {
    strength += 20;
  }
  
  // Check for common passwords
  if (PASSWORD_REQUIREMENTS.commonPasswords.includes(password.toLowerCase())) {
    errors.push('This password is too common. Please choose a stronger password.');
    strength = 0;
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    strength
  };
}

// Sanitize and validate email
export function validateEmail(email) {
  const errors = [];
  
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Check for common disposable email domains
  const disposableDomains = ['tempmail.com', 'throwaway.com'];
  const domain = email.split('@')[1];
  if (disposableDomains.includes(domain)) {
    errors.push('Disposable email addresses are not allowed');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Track failed login attempts
const loginAttempts = new Map();

export function checkRateLimit(email) {
  const now = Date.now();
  const attempts = loginAttempts.get(email) || [];
  
  // Clean up old attempts
  const recentAttempts = attempts.filter(
    timestamp => now - timestamp < RATE_LIMITS.windowMs
  );
  
  if (recentAttempts.length >= RATE_LIMITS.maxAttempts) {
    const oldestAttempt = recentAttempts[0];
    const timeRemaining = Math.ceil(
      (RATE_LIMITS.windowMs - (now - oldestAttempt)) / 1000 / 60
    );
    
    return {
      allowed: false,
      timeRemaining
    };
  }
  
  return { allowed: true };
}

export function recordLoginAttempt(email) {
  const attempts = loginAttempts.get(email) || [];
  attempts.push(Date.now());
  loginAttempts.set(email, attempts);
}