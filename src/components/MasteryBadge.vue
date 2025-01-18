<script setup>
defineProps({
  isMastered: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <span 
    v-if="isMastered" 
    class="mastery-badge"
    role="status"
    aria-label="Question mastered"
  >
    ⭐ Mastered
  </span>
</template>

<style scoped>
.mastery-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: rgba(6, 95, 70, 0.1);
  color: var(--success-color);
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}
</style>