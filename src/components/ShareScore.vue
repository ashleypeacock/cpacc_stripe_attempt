<script setup>
import { ref } from 'vue';
import { trackShare } from '../utils/analytics';

const props = defineProps({
  score: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  domain: {
    type: String,
    required: true
  }
});

const showCopied = ref(false);
const percentage = Math.round((props.score/props.totalQuestions) * 100);

const shareText = `Want to test your accessibility knowledge? Try the free CPACC practice quiz:`;

const shareUrl = 'https://a11yconsultant.com';

const shareToLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(shareText)}`;
  window.open(url, '_blank', 'width=600,height=600');
  trackShare('LinkedIn', props.score);
};

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
    showCopied.value = true;
    setTimeout(() => {
      showCopied.value = false;
    }, 2000);
    trackShare('Copy', props.score);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};
</script>

<template>
  <div class="share-container">
    <h3>Share Your Achievement!</h3>
    <div class="share-preview">
      <div class="preview-content">
        <p class="preview-text">{{ shareText }}</p>
        <p class="preview-url">{{ shareUrl }}</p>
      </div>
    </div>
    <div class="share-buttons">
      <button @click="shareToLinkedIn" class="share-button linkedin">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
        Share on LinkedIn
      </button>
      <button @click="copyToClipboard" class="share-button copy" :class="{ copied: showCopied }">
        <svg v-if="!showCopied" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
        </svg>
        <svg v-else viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        {{ showCopied ? 'Copied!' : 'Copy Text' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.share-container {
  margin-top: 2rem;
  text-align: center;
}

.share-container h3 {
  font-size: var(--font-size-lg);
  margin-bottom: 1rem;
  color: var(--text-color);
}

.share-preview {
  background: var(--background-color);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
  text-align: left;
  border: 1px solid #e5e7eb;
}

.preview-content {
  font-size: calc(var(--font-size-base) * 0.9375);
  white-space: pre-line;
}

.preview-text {
  margin-bottom: 1rem;
  color: var(--text-color);
  line-height: 1.6;
}

.preview-url {
  color: var(--primary-color);
  font-weight: 500;
}

.share-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.share-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  min-width: 160px;
}

.linkedin {
  background-color: #0077b5;
  color: white;
}

.linkedin:hover {
  background-color: #006396;
}

.copy {
  background-color: var(--background-color);
  color: var(--text-color);
  border: 2px solid var(--text-light);
}

.copy:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.copy.copied {
  background-color: var(--success-color);
  color: white;
  border-color: var(--success-color);
}

.share-button:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}

@media (max-width: 640px) {
  .share-preview {
    padding: 1rem;
  }

  .share-buttons {
    flex-direction: column;
  }

  .share-button {
    width: 100%;
    justify-content: center;
  }
}
</style>