<script setup>
defineProps({
  error: {
    type: [String, Error],
    required: true
  },
  variant: {
    type: String,
    default: 'error',
    validator: value => ['error', 'warning', 'info'].includes(value)
  }
});

function getErrorTitle(variant) {
  switch (variant) {
    case 'error': return 'Error';
    case 'warning': return 'Warning';
    case 'info': return 'Information';
    default: return 'Notice';
  }
}

function formatErrorMessage(message) {
  // Handle common error messages and make them more user-friendly
  if (message.includes('23505')) {
    return 'This email is already registered. For security, please use the sign in form or reset your password if needed.';
  }
  if (message.includes('auth/invalid-email')) {
    return 'Please enter a valid email address.';
  }
  if (message.includes('auth/wrong-password')) {
    return 'Incorrect password. Please try again or use the forgot password link.';
  }
  if (message.includes('auth/too-many-requests')) {
    return 'Too many attempts. Please wait a few minutes before trying again.';
  }
  if (message.includes('rate limit')) {
    return 'Too many signup attempts. Please wait 60 minutes before trying again, or contact support if you need immediate assistance.';
  }
  return message;
}
</script>

<template>
  <div 
    class="message"
    :class="variant"
    role="alert" 
    aria-live="assertive"
    tabindex="-1"
  >
    <span class="icon">
      {{ variant === 'error' ? '⚠️' : variant === 'warning' ? '⚡' : 'ℹ️' }}
    </span>
    <span class="text">
      <span class="error-title" aria-hidden="true">{{ getErrorTitle(variant) }}:</span>
      {{ formatErrorMessage(error?.message || error) }}
    </span>
  </div>
</template>

<style scoped>
.message {
  padding: 1rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem 0;
  font-size: var(--font-size-base);
  line-height: 1.5;
}

.icon {
  flex-shrink: 0;
}

.error-title {
  display: inline-block;
  margin-right: 0.5rem;
  font-weight: 600;
}

.error {
  background-color: rgba(220, 38, 38, 0.1);
  color: var(--error-color);
  border: 1px solid var(--error-color);
  font-weight: 500;
}

.warning {
  background-color: rgba(245, 158, 11, 0.1);
  color: #d97706;
  border: 1px solid #d97706;
}

.info {
  background-color: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}
</style>