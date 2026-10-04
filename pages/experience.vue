<script setup lang="ts">
import { experienceHighlights } from '~/data/portfolio'
useGsapReveal()
useSeoMeta({ title: 'Досвід — Іван Кушнерчук', description: 'Комерційний досвід роботи в Galanix над SaaS-платформою Utrigg.' })
</script>

<template>
  <div class="section-wrap page-content experience-page">
    <div class="page-intro" data-reveal><p class="eyebrow">03 — ШЛЯХ</p><h1>Досвід, що<br><span class="serif-accent">має значення.</span></h1><p class="page-lead">Рік комерційної роботи в продуктовій команді, навчання та особисті проєкти — кожен етап додавав новий погляд на frontend.</p></div>
    <section class="timeline" data-stagger><div class="timeline-entry"><div class="timeline-date">КОМЕРЦІЙНИЙ ДОСВІД · 1 РІК</div><div class="timeline-marker"><span /></div><div class="timeline-content"><p class="eyebrow">GALANIX · UTRIGG</p><h2>Frontend Intern → Junior Frontend Developer <span>· Vue.js</span></h2><p class="timeline-summary">Рік роботи над SaaS-платформою аналітики: розробляв frontend і backend функціональність, від інтерфейсів та графіків до API й бізнес-логіки.</p><ul><li v-for="item in experienceHighlights" :key="item">{{ item }}</li></ul><div class="skill-tags"><span>Vue 2</span><span>Element UI</span><span>D3.js</span><span>REST API</span><span>Symfony 5</span><span>Doctrine ORM</span><span>SQL migrations</span><span>SCSS</span><span>vue-i18n</span></div></div></div>
      <div class="timeline-entry"><div class="timeline-date">ОСОБИСТІ ПРОЄКТИ</div><div class="timeline-marker"><span /></div><div class="timeline-content"><p class="eyebrow">ПРАКТИКА ТА НАВЧАННЯ</p><h2>Vue 3 та Nuxt <span>· особисті проєкти</span></h2><p class="timeline-summary">Поглиблюю роботу з Composition API, TypeScript, управлінням станом, оптимізацією завантаження та анімацією інтерфейсів.</p><div class="skill-tags"><span>Vue.js</span><span>Nuxt.js</span><span>Angular</span><span>TypeScript</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>Pinia</span><span>Vuex</span><span>Vue Router</span><span>GSAP</span><span>Swiper</span><span>i18next</span><span>Yup</span><span>ESLint</span><span>Vite</span><span>Webpack</span><span>Lazy loading</span><span>Code splitting</span><span>Vitest</span><span>Vue Test Utils</span><span>Playwright</span><span>GraphQL</span><span>REST API</span><span>JWT</span></div></div></div>
      <div class="timeline-entry"><div class="timeline-date">ОСВІТА</div><div class="timeline-marker"><span /></div><div class="timeline-content"><p class="eyebrow">БАКАЛАВРАТ · ВИПУСК 2026</p><h2>Інженерія програмного забезпечення</h2><p class="timeline-summary">Магістратура в НТУУ «КПІ ім. Ігоря Сікорського» з 2026 року; бакалавр із комп’ютерної інженерії в Національному авіаційному університеті, випуск 2026 року.</p></div></div>
    </section>
    <section class="experience-cta" data-reveal><p class="eyebrow">НАСТУПНИЙ ЕТАП</p><h2>Можливо, це <span class="serif-accent">наша команда?</span></h2><NuxtLink class="button button-dark" to="/contact">Написати мені <span>↗</span></NuxtLink></section>
  </div>
</template>
