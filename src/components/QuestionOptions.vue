<script setup>
import { ref, onMounted, computed } from 'vue';
import MasteryBadge from './MasteryBadge.vue';
import { shuffleArray } from '../utils/arrayUtils';

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  correctAnswer: {
    type: Number,
    required: true
  },
  showExplanation: {
    type: Boolean,
    required: true
  },
  selectedAnswer: {
    type: Number,
    default: null
  },
  isMastered: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['select']);

const shuffledOptions = computed(() => {
  // Create array of option objects with original indices
  const optionsWithIndices = props.options.map((option, index) => ({
    text: option,
    originalIndex: index
  }));
  
  // Shuffle the array
  return shuffleArray(optionsWithIndices);
});

const baseWidth = ref('0px');

const calculateBaseWidth = () => {
  const tempDiv = document.createElement('div');
  tempDiv.style.visibility = 'hidden';
  tempDiv.style.position = 'absolute';
  tempDiv.style.padding = '1rem';
  tempDiv.style.fontSize = 'var(--font-size-base)';
  tempDiv.style.maxWidth = '100%';
  document.body.appendChild(tempDiv);

  let maxWidth = 0;
  shuffledOptions.value.forEach(option => {
    tempDiv.textContent = option.text;
    maxWidth = Math.max(maxWidth, tempDiv.offsetWidth);
  });

  document.body.removeChild(tempDiv);
  // Add extra padding for icons and spacing
  baseWidth.value = `${maxWidth + 80}px`;
};

onMounted(calculateBaseWidth);

const getOptionClass = (originalIndex) => {
  if (!props.showExplanation) return '';
  
  if (originalIndex === props.correctAnswer) {
    return 'correct';
  }
  
  if (originalIndex === props.selectedAnswer && originalIndex !== props.correctAnswer) {
    return 'incorrect';
  }
  
  return '';
};
</script>

<template>
  <div 
    class="options-list" 
    role="radiogroup"
    aria-required="true"
    aria-label="Answer options"
    :aria-describedby="'question-' + currentQuestion?.id"
  >
    <button
      v-for="option in shuffledOptions"
      :key="option.originalIndex"
      class="option-button"
      :class="getOptionClass(option.originalIndex)"
      :disabled="showExplanation"
      :aria-checked="selectedAnswer === option.originalIndex"
      :aria-pressed="selectedAnswer === option.originalIndex"
      :aria-disabled="showExplanation"
      :style="{ minWidth: baseWidth }"
      role="radio"
      tabindex="0"
      @click="emit('select', option.originalIndex)"
      @keydown.space.prevent="!showExplanation && emit('select', option.originalIndex)"
      @keydown.enter.prevent="!showExplanation && emit('select', option.originalIndex)"
    >
      <span class="option-text">{{ option.text }}</span>
      <MasteryBadge v-if="isMastered" :isMastered="true" />
      <span 
        v-if="showExplanation && option.originalIndex === correctAnswer" 
        class="icon correct-icon" 
        aria-label="Correct answer"
      >✓</span>
      <span 
        v-if="showExplanation && option.originalIndex === selectedAnswer && option.originalIndex !== correctAnswer" 
        class="icon incorrect-icon" 
        aria-label="Incorrect answer"
      >✕</span>
    </button>
  </div>
</template>

<style scoped>
.options-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin: var(--spacing-md) 0;
  width: 100%;
}

.option-button {
  width: 100%;
  padding: var(--spacing-sm);
  min-height: 44px;  /* Ensure touch target size */
  text-align: left;
  background: var(--white);
  border: 2px solid var(--text-light);
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: var(--font-size-base);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-sm);
  position: relative;  /* For focus outline */
  outline: none;  /* Remove default outline */
}

.option-text {
  flex: 1;
  word-break: break-word;
}

.icon {
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
}

.correct-icon {
  background-color: var(--success-color);
  color: var(--white);
}

.incorrect-icon {
  background-color: var(--error-color);
  color: var(--white);
}

.option-button:not(:disabled):hover {
  border-color: var(--primary-color);
  background-color: rgba(37, 99, 235, 0.05);
}

.option-button:focus {
  box-shadow: var(--focus-ring);
  border-color: var(--primary-color);
  z-index: 1;  /* Ensure focus ring is visible */
}

.option-button.correct {
  background-color: rgba(6, 95, 70, 0.1);
  border-color: var(--success-color);
  color: var(--success-color);
}

.option-button.incorrect {
  background-color: rgba(153, 27, 27, 0.1);
  border-color: var(--error-color);
  color: var(--error-color);
}

.option-button:disabled {
  cursor: default;
  opacity: 0.8;
  word-break: break-word;
}

@media (max-width: 768px) {
  .option-button {
    padding: var(--spacing-sm);
    font-size: calc(var(--font-size-base) * 0.9375);
    width: 100%;
  }

  .icon {
    width: 20px;
    height: 20px;
    font-size: 1rem;
  }

  .options-list {
    gap: var(--spacing-xs);
    margin: var(--spacing-sm) 0;
  }
}
</style>