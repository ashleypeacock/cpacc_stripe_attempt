<script setup lang="ts">
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ashley-peacock-4739b93a/',
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>`
  },
  {
    name: 'X',
    url: 'https://x.com/Time_is_ticking',
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>`
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/ashleypeacock.bsky.social',
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 3L4.5 15.5c-.4.8.2 1.7 1.1 1.7h12.8c.9 0 1.5-.9 1.1-1.7L12 3zm0 4.5l4.5 7.5H7.5l4.5-7.5z"/>
    </svg>`
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/open.exploration/',
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
    </svg>`
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@avpeacock',
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>`
  }
];
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-content">
      <p class="footer-text">Connect with me:</p>
      <div class="social-links">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          :aria-label="`Follow me on ${link.name}`"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <span class="icon" v-html="link.icon"></span>
          <span class="link-text">{{ link.name }}</span>
        </a>
      </div>
      <p class="copyright">© {{ new Date().getFullYear() }} Ashley Peacock. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--white);
  box-shadow: var(--shadow);
  padding: 2rem 1rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-text {
  color: var(--text-color);
  font-size: var(--font-size-base);
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  font-size: var(--font-size-base);
}

.social-link:hover {
  color: var(--primary-color);
  background-color: rgba(37, 99, 235, 0.1);
}

.social-link:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.copyright {
  color: var(--text-light);
  font-size: calc(var(--font-size-base) * 0.875);
}

@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 1rem;
  }

  .social-links {
    gap: 1rem;
  }

  .social-link {
    padding: 0.375rem 0.75rem;
    font-size: calc(var(--font-size-base) * 0.9375);
  }
}

@media (max-width: 480px) {
  .social-links {
    flex-direction: column;
    align-items: center;
  }

  .social-link {
    width: 100%;
    justify-content: center;
  }
}
</style>