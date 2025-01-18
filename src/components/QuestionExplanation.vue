<script setup>
defineProps({
  explanation: {
    type: String,
    required: true
  },
  sourceLink: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="explanation">
    <h3 class="explanation-title">Explanation:</h3>
    <p class="explanation-text">{{ explanation }}</p>
    <a
      :href="sourceLink"
      target="_blank"
      rel="noopener noreferrer"
      class="explanation-link"
    >
      Learn more
    </a>
  </div>
</template>

<style scoped>
.explanation {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: rgba(37, 99, 235, 0.1);
  border-radius: 0.5rem;
}

.explanation-title {
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.explanation-text {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.explanation-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.explanation-link:hover {
  text-decoration: underline;
}

.explanation-link:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}
</style>