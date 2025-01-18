<script setup>
defineProps({
  progress: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="progress-container">
    <div class="progress-header">
      <span class="progress-label" id="progress-label">Progress</span>
      <span class="progress-value" aria-labelledby="progress-label">
        {{ Math.round(progress) }}%
      </span>
    </div>
    <div 
      class="progress-bar"
      role="progressbar"
      :aria-valuenow="Math.round(progress)"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="`${Math.round(progress)}% complete`"
    >
      <div 
        class="progress-fill" 
        :style="{ width: `${progress}%` }"
        aria-hidden="true"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  margin-bottom: 1.5rem;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.progress-label {
  font-weight: 600;
  color: var(--primary-color);
}

.progress-value {
  color: var(--primary-color);
  font-weight: 600;
}

.progress-bar {
  height: 0.5rem;
  background-color: #e5e7eb;
  border-radius: 0.25rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}
</style>