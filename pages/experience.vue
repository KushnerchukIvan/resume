<script setup lang="ts">
import { experienceHighlights } from '~/data/portfolio'
const { t } = useSiteI18n()
useGsapReveal()
useSeoMeta({ title: () => `${t('nav.experience')} — Ivan Kushnerchuk`, description: () => t('experience.lead') })
</script>

<template>
  <div class="section-wrap page-content experience-page">
    <div class="page-intro" data-reveal><p class="eyebrow">{{ t('experience.eyebrow') }}</p><h1 v-html="t('experience.title')" /><p class="page-lead">{{ t('experience.lead') }}</p></div>
    <section class="timeline" data-stagger><div class="timeline-entry"><div class="timeline-date">{{ t('experience.commercial') }}</div><div class="timeline-marker"><span /></div><div class="timeline-content"><p class="eyebrow">{{ t('experience.company') }}</p><h2>{{ t('experience.role') }} <span>· Vue.js</span></h2><p class="timeline-summary">{{ t('experience.summary') }}</p><ul><li v-for="(item, index) in experienceHighlights" :key="item">{{ t(`experience.highlights.${index}`) }}</li></ul><div class="skill-tags"><span>Vue 2</span><span>Element UI</span><span>D3.js</span><span>REST API</span><span>Symfony 5</span><span>Doctrine ORM</span><span>SQL migrations</span><span>SCSS</span><span>vue-i18n</span></div></div></div>
      <div class="timeline-entry"><div class="timeline-date">{{ t('experience.personal') }}</div><div class="timeline-marker"><span /></div><div class="timeline-content"><p class="eyebrow">{{ t('experience.learning') }}</p><h2>{{ t('experience.personalTitle') }} <span>· {{ t('experience.personalSuffix') }}</span></h2><p class="timeline-summary">{{ t('experience.personalSummary') }}</p><div class="skill-tags"><span>Vue.js</span><span>Nuxt.js</span><span>Angular</span><span>TypeScript</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>Pinia</span><span>Vuex</span><span>Vue Router</span><span>GSAP</span><span>Swiper</span><span>i18next</span><span>Yup</span><span>ESLint</span><span>Vite</span><span>Webpack</span><span>Lazy loading</span><span>Code splitting</span><span>Vitest</span><span>Vue Test Utils</span><span>Playwright</span><span>GraphQL</span><span>REST API</span><span>JWT</span></div></div></div>
      <div class="timeline-entry"><div class="timeline-date">{{ t('experience.education') }}</div><div class="timeline-marker"><span /></div><div class="timeline-content"><p class="eyebrow">{{ t('experience.bachelor') }}</p><h2>{{ t('experience.degree') }}</h2><p class="timeline-summary">{{ t('experience.educationSummary') }}</p></div></div>
    </section>
    <section class="experience-cta" data-reveal><p class="eyebrow">{{ t('experience.next') }}</p><h2 v-html="t('experience.team')" /><NuxtLink class="button button-dark" to="/contact">{{ t('experience.message') }} <span>↗</span></NuxtLink></section>
  </div>
</template>
