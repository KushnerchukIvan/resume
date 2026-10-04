<script setup lang="ts">
import { projects } from '~/data/portfolio'
const { t } = useSiteI18n()
useGsapReveal()
useSeoMeta({ title: () => `${t('nav.projects')} — Ivan Kushnerchuk`, description: () => t('projectsPage.lead') })
</script>

<template>
  <div class="section-wrap page-content projects-page">
    <div class="page-intro" data-reveal><p class="eyebrow">{{ t('projectsPage.eyebrow') }}</p><h1 v-html="t('projectsPage.title')" /><p class="page-lead">{{ t('projectsPage.lead') }}</p></div>
    <div class="project-list" data-stagger>
      <NuxtLink v-for="project in projects" :key="project.slug" :to="`/projects/${project.slug}`" :class="['project-row', `accent-${project.accent}`]">
        <div class="project-visual"><span class="project-index">{{ project.number }} — SELECTED WORK</span><span class="project-symbol">{{ project.mark }}</span><span class="visual-caption">{{ t(`projects.${project.slug}.category`) }}</span><span class="project-open">↗</span></div>
        <div class="project-row-copy"><p class="eyebrow">{{ t(`projects.${project.slug}.category`) }}</p><h2>{{ project.name }}</h2><p>{{ t(`projects.${project.slug}.description`) }}</p><div class="skill-tags"><span v-for="item in project.stack" :key="item">{{ item }}</span></div><span class="project-row-link">{{ t('projectsPage.detail') }} <b>↗</b></span></div>
      </NuxtLink>
    </div>
    <div class="project-footnote" data-reveal><span>{{ t('projectsPage.prompt') }}</span><NuxtLink to="/contact">{{ t('projectsPage.cta') }} ↗</NuxtLink></div>
  </div>
</template>
