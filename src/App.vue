<script setup>
import { RouterView } from 'vue-router';
import SocialFooter from './components/SocialFooter.vue';
import SeoHead from './components/SeoHead.vue';
import AuthModal from './components/AuthModal.vue';
import FeedbackButton from './components/FeedbackButton.vue';
import { useGoogleAnalytics } from './composables/useGoogleAnalytics';
import { useAuthStore } from './store/auth';
import { useQuizStore } from './store/quiz';
import { onMounted, ref, watch, computed } from 'vue';
import { testConnection, connectionStatus } from './lib/supabase';
import ErrorMessage from './components/ErrorMessage.vue';

const authStore = useAuthStore();
const quizStore = useQuizStore();
const showAuthModal = ref(false);
const authMode = ref('register');

// Initialize auth and analytics
onMounted(() => {
  authStore.initialize();
  
  // Initial connection test
  // Retry connection test periodically if it fails
  testConnection();
  
  // Add online/offline event listeners
  window.addEventListener('online', () => {
    testConnection();
  });
  
  window.addEventListener('offline', () => {
    connectionStatus.value = {
      success: false,
      message: 'No internet connection available. Please check your network.'
    };
  });
  
  // Periodic connection check
  setInterval(() => {
    if (!connectionStatus.value?.success && navigator.onLine) {
      testConnection();
    }
  }, 30000); // Retry every 30 seconds if disconnected
});

watch(() => quizStore.requiresAuth, (newValue) => {
  if (newValue) {
    showAuthModal.value = true;
    authMode.value = 'register';
  }
});
useGoogleAnalytics();
</script>

<template>
  <div class="app">
    <SeoHead />
    
    <a href="#main-content" class="skip-link">
      Skip to main content
    </a>

    <header class="header" role="banner">
      <div class="header-content">
        <div v-if="connectionStatus?.success === false" class="connection-error" role="alert">
          <ErrorMessage :error="connectionStatus.message" variant="warning" />
        </div>
        <h1><router-link to="/" class="home-link">CPACC Quiz App</router-link></h1>
        <div class="header-actions">
          <template v-if="authStore.isAuthenticated">
            <router-link to="/profile" class="profile-link">
              <span class="profile-icon">👤</span>
              Profile
            </router-link>
            <span class="welcome-text">Welcome!</span>
            <button @click="authStore.logout" class="auth-button logout-button">
              Sign Out
            </button>
          </template>
          <template v-else>
            <button 
              @click="() => { authMode = 'login'; showAuthModal = true }" 
              class="auth-button login-button"
            >
              Sign In
            </button>
            <button 
              @click="() => { authMode = 'register'; showAuthModal = true }" 
              class="auth-button register-button"
            >
              Sign Up
            </button>
          </template>
          <a 
            href="https://buymeacoffee.com/ashleypeacock" 
            target="_blank" 
            rel="noopener noreferrer"
            class="coffee-link"
            aria-label="Support me on Buy Me a Coffee (opens in new tab)"
          >
            <img 
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
              alt="Buy Me A Coffee" 
              class="coffee-image"
              width="150"
              height="40"
            />
          </a>
        </div>
      </div>
    </header>

    <main id="main-content" class="container" role="main">
      <RouterView />
    </main>

    <SocialFooter />
    
    <AuthModal
      v-if="showAuthModal"
      :mode="authMode"
      @close="showAuthModal = false"
    />
    
    <FeedbackButton />
  </div>
</template>

<style scoped>
.connection-error {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 90%;
  max-width: 600px;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary-color);
  color: var(--white);
  padding: 8px;
  z-index: 100;
  transition: top 0.2s ease;
}

.home-link {
  color: inherit;
  text-decoration: none;
}

.home-link:hover {
  color: var(--primary-color);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.welcome-text {
  color: var(--text-light);
  font-size: var(--font-size-base);
}

.auth-button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 40px;
}

.login-button {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.login-button:hover {
  background: rgba(37, 99, 235, 0.1);
}

.register-button {
  background: var(--primary-color);
  border: none;
  color: var(--white);
}

.register-button:hover {
  background: var(--primary-hover);
}

.logout-button {
  background: transparent;
  border: 2px solid var(--text-light);
  color: var(--text-color);
}

.logout-button:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.auth-button:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}

.skip-link:focus {
  top: 0;
  outline: none;
  box-shadow: var(--focus-ring);
}

.coffee-link {
  display: inline-block;
}

.coffee-image {
  height: 40px;
  width: auto;
}

.profile-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.profile-link:hover {
  color: var(--primary-color);
  background: rgba(37, 99, 235, 0.1);
}

.profile-icon {
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .header-actions {
    flex-wrap: wrap;
    justify-content: center;
  }

  .coffee-image {
    height: 36px;
  }

  .auth-button {
    font-size: calc(var(--font-size-base) * 0.9375);
    padding: 0.375rem 0.75rem;
  }
}
</style>