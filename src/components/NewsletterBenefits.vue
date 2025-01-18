<script setup>
const benefits = [
  {
    title: 'Early Access',
    description: 'Be the first to know about new accessibility tools and services'
  },
  {
    title: 'Special Offers',
    description: 'Receive exclusive discounts on upcoming products and services'
  }
];
</script>

<template>
  <div class="benefits-grid">
    <div v-for="(benefit, index) in benefits" 
         :key="index" 
         class="benefit-item">
      <div class="benefit-icon">✓</div>
      <div class="benefit-content">
        <h4>{{ benefit.title }}</h4>
        <p>{{ benefit.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.benefit-icon {
  background-color: var(--primary-color);
  color: var(--white);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: bold;
}

.benefit-content h4 {
  color: var(--text-color);
  font-size: var(--font-size-base);
  font-weight: 600;
  margin: 0 0 0.5rem;
}

.benefit-content p {
  color: var(--text-color); /* Updated from text-light for better contrast */
  font-size: calc(var(--font-size-base) * 0.9375);
  margin: 0;
  line-height: 1.5;
}
</style>