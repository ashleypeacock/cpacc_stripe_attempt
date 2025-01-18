<script setup>
import { useRouter } from 'vue-router';
import { useQuizStore } from '../store/quiz';
import { QuizDomain, DomainPercentages } from '../constants/quizDomains';
import { ref } from 'vue';
import { logoutMessage } from '../router';
import NewsletterSignup from '../components/NewsletterSignup.vue';
import { useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const quizStore = useQuizStore();
const loading = ref(false);

const startQuiz = async (domain) => {
  loading.value = true;
  quizStore.selectDomain(domain);
  try {
    await router.push('/quiz');
  } catch (error) {
    console.error('Navigation error:', error);
  } finally {
    loading.value = false;
  }
};

const getDomainDescription = (domain) => {
  const descriptions = {
    [QuizDomain.Disabilities]: 'Learn about different types of disabilities and assistive technologies.',
    [QuizDomain.Accessibility]: 'Master the principles of accessibility and universal design.',
    [QuizDomain.Standards]: 'Understand key standards, laws, and management strategies.'
  };
  return descriptions[domain];
};
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <div v-if="logoutMessage" class="logout-message" role="alert">
          {{ logoutMessage }}
        </div>
        <div v-if="route.query.message" class="auth-message" role="alert">
          {{ route.query.message }}
        </div>
        <h1>Become a Certified Accessibility Professional</h1>
        <p class="hero-subtitle">
          Master the Certificate of Professionals in Accessibility Core Competencies (CPACC) through practical learning
        </p>
      </div>
    </section>

    <section class="intro-section">
      <h2>Prepare for Success</h2>
      <p class="intro-text">
        Test your knowledge across the three core domains of the CPACC certification. Total {{ quizStore.totalQuestions }} questions available.
      </p>
    </section>

    <div class="domain-grid">
      <button
        v-for="domain in Object.values(QuizDomain)"
        :key="domain"
        @click.prevent="startQuiz(domain)"
        class="domain-card"
        :aria-label="`Start ${domain} quiz`"
        :disabled="loading"
      >
        <div class="domain-icon" :class="`${domain.toLowerCase()}-icon`"></div>
        <div class="domain-header">
          <h3>{{ domain }}</h3>
          <span class="domain-percentage">{{ DomainPercentages[domain] }}%</span>
        </div>
        <p class="domain-description">
          {{ getDomainDescription(domain) }}
        </p>
        <span class="start-quiz">Start Quiz →</span>
      </button>
    </div>

    <NewsletterSignup />
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--primary-color), #1e40af);
  color: var(--white);
  padding: 6rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.logout-message {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  animation: fadeOut 0.3s ease-in forwards 3s;
}

.auth-message {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}

.intro-section {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
}

.intro-section h2 {
  font-size: var(--font-size-2xl);
  color: var(--text-color);
  margin-bottom: 1rem;
}

.intro-text {
  font-size: var(--font-size-lg);
  color: var(--text-light);
  line-height: 1.7;
}

.domain-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
}

.domain-card {
  background: var(--white);
  border-radius: 1rem;
  padding: 2rem;
  text-align: left;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 300px;
}

.domain-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary-color);
}

.domain-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  margin-bottom: 1rem;
  background-color: rgba(37, 99, 235, 0.1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 32px;
}

.domain-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.domain-percentage {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--primary-color);
}

.disabilities-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232563eb'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'/%3E%3C/svg%3E");
}

.accessibility-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232563eb'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'/%3E%3C/svg%3E");
}

.standards-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232563eb'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'/%3E%3C/svg%3E");
}

.domain-card h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
}

.domain-description {
  color: var(--text-light);
  line-height: 1.6;
  font-size: var(--font-size-base);
  flex-grow: 1;
}

.start-quiz {
  color: var(--primary-color);
  font-weight: 500;
  display: inline-block;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 1rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .domain-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .domain-card {
    min-height: auto;
  }

  .domain-description {
    font-size: calc(var(--font-size-base) * 1.1);
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }

  .domain-card {
    padding: 1.5rem;
  }
}
</style>