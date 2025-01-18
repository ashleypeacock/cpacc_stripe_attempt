<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'CPACC Quiz - Free Practice Tests for IAAP Certification'
  },
  description: {
    type: String,
    default: 'Prepare for your CPACC certification with our free practice quizzes. Test your knowledge in Disabilities (40%), Accessibility (40%), and Standards (20%). Join 500+ accessibility professionals.'
  },
  keywords: {
    type: String,
    default: 'CPACC, IAAP certification, accessibility certification, CPACC practice test, CPACC exam prep, accessibility quiz, IAAP CPACC'
  }
});

// Update meta tags
const updateMetaTags = () => {
  document.title = props.title;
  
  const metaTags = {
    description: props.description,
    keywords: props.keywords,
    'og:title': props.title,
    'og:description': props.description,
    'og:type': 'website',
    'og:url': 'https://cpacc-quiz.stackblitz.io',
    'twitter:card': 'summary_large_image',
    'twitter:title': props.title,
    'twitter:description': props.description
  };

  Object.entries(metaTags).forEach(([name, content]) => {
    const selector = name.startsWith('og:') ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let tag = document.querySelector(selector);
    
    if (!tag) {
      tag = document.createElement('meta');
      if (name.startsWith('og:')) {
        tag.setAttribute('property', name);
      } else {
        tag.setAttribute('name', name);
      }
      document.head.appendChild(tag);
    }
    
    tag.setAttribute('content', content);
  });
};
</script>

<template>
  <div style="display: none;">
    <!-- This component only manages meta tags -->
  </div>
</template>