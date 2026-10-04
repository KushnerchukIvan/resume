<script setup lang="ts">
import { projects } from '~/data/portfolio'
const { t } = useSiteI18n()
useGsapReveal()
useSeoMeta({ title: () => t('nav.home') + ' — Ivan Kushnerchuk · Frontend Developer', description: () => t('home.description') })
const featuredProjects = projects
let heroContext: { revert: () => void } | undefined
const projectSection = ref<HTMLElement | null>(null)
const projectViewport = ref<HTMLElement | null>(null)
const projectTrack = ref<HTMLElement | null>(null)
const projectProgress = ref<HTMLElement | null>(null)
useGsapHorizontalScroll({
  section: projectSection,
  viewport: projectViewport,
  track: projectTrack,
  progress: projectProgress,
})
onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const { gsap } = await import('gsap')
  heroContext = gsap.context(() => {
    gsap.fromTo('.hero-copy > *', { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, stagger: 0.11, ease: 'power3.out', delay: 0.1 })
    gsap.fromTo('.hero-art', { scale: 0.93, opacity: 0, rotate: 3 }, { scale: 1, opacity: 1, rotate: 0, duration: 1.1, ease: 'power3.out', delay: 0.25 })
    gsap.to('.orbit-one', { rotation: '+=360', transformOrigin: '50% 50%', duration: 34, ease: 'none', repeat: -1 })
    gsap.to('.orbit-two', { rotation: '-=360', transformOrigin: '50% 50%', duration: 49, ease: 'none', repeat: -1 })
    gsap.to('.art-core', { y: -12, rotation: 3, duration: 2.8, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    gsap.to('.art-spark', { rotation: 180, scale: 1.18, transformOrigin: '50% 50%', duration: 4.5, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  }, '.hero')
})
onBeforeUnmount(() => heroContext?.revert())
</script>

<template>
  <div>
    <section class="hero section-wrap">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-pulse" /> {{ t('home.open') }}</p>
        <h1 v-html="t('home.title')" />
        <p class="hero-description">{{ t('home.description') }}</p>
        <div class="hero-actions"><NuxtLink class="button button-dark" to="/projects">{{ t('home.projectsCta') }} <span>↗</span></NuxtLink><NuxtLink class="text-link" to="/about">{{ t('home.aboutCta') }} <span>→</span></NuxtLink></div>
        <div class="hero-meta"><span>01 / 05</span><span class="meta-line" /><span>FRONTEND DEVELOPER · KYIV</span></div>
      </div>
      <div class="hero-art" :aria-label="t('home.art')" role="img">
        <div class="art-grid" /><div class="art-orbit orbit-one" /><div class="art-orbit orbit-two" /><div class="art-core"><span>IK</span><small>FRONTEND<br>DEVELOPER</small></div>
        <span class="art-label label-top">VUE / NUXT</span><span class="art-label label-bottom">DESIGN × CODE</span><span class="art-spark">✳</span>
      </div>
    </section>

    <section class="intro-strip section-wrap" data-reveal><span class="eyebrow">{{ t('home.introLabel') }}</span><p v-html="t('home.intro')" /><NuxtLink to="/about" :aria-label="t('nav.about')">↗</NuxtLink></section>

    <section ref="projectSection" class="section-wrap projects-preview">
      <div class="section-heading" data-reveal><div><p class="eyebrow">{{ t('home.allProjects') }}</p><h2 v-html="t('home.heading')" /></div><NuxtLink class="text-link" to="/projects">{{ t('home.projectsPage') }} <span>↗</span></NuxtLink></div>
      <p class="horizontal-hint">{{ t('home.scrollHint') }} <span>↓</span></p>
      <div ref="projectViewport" class="project-strip" tabindex="0" :aria-label="t('home.trackAria')">
        <div ref="projectTrack" class="project-track" data-stagger>
          <NuxtLink v-for="project in featuredProjects" :key="project.slug" :to="`/projects/${project.slug}`" :class="['project-card', `accent-${project.accent}`]">
            <div class="project-visual"><span class="project-index">{{ project.number }} — SELECTED WORK</span><span class="project-symbol">{{ project.mark }}</span><span class="visual-caption">{{ t(`projects.${project.slug}.category`) }}</span><span class="project-open">↗</span></div>
            <div class="project-card-info"><div><h3>{{ project.name }}</h3><p>{{ t(`projects.${project.slug}.description`) }}</p></div><span class="project-arrow">↗</span></div>
          </NuxtLink>
        </div>
      </div>
      <div ref="projectProgress" class="horizontal-progress" role="progressbar" :aria-label="t('home.progressAria')" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span /></div>
    </section>

    <section class="statement-band" data-reveal><div class="section-wrap statement-inner"><span class="eyebrow">{{ t('home.philosophy') }}</span><p v-html="t('home.statement')" /><NuxtLink class="button button-light" to="/experience">{{ t('home.experience') }} <span>↗</span></NuxtLink></div></section>
  </div>
</template>
