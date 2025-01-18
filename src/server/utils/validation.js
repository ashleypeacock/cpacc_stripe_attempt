export function validateWebhookPayload(payload) {
  const requiredFields = ['id', 'object', 'type'];
  
  for (const field of requiredFields) {
    if (!payload[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
  
  return true;
}

export function validateSubscriptionData(data) {
  const requiredFields = ['customer', 'status', 'current_period_start', 'current_period_end'];
  
  for (const field of requiredFields) {
    if (!data[field]) {
      throw new Error(`Missing required subscription field: ${field}`);
    }
  }
  
  return true;
}