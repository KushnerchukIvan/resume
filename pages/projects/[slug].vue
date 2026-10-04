<script setup lang="ts">
import { projects } from '~/data/portfolio'
const route = useRoute()
const { t } = useSiteI18n()
const project = computed(() => projects.find(item => item.slug === route.params.slug))
if (!project.value) throw createError({ statusCode: 404, statusMessage: 'Проєкт не знайдено' })
useGsapReveal()
useSeoMeta({ title: () => `${project.value?.name} — Ivan Kushnerchuk`, description: () => project.value ? t(`projects.${project.value.slug}.description`) : '' })
const currentIndex = computed(() => projects.findIndex(item => item.slug === project.value?.slug))
</script>

<template>
  <div v-if="project" class="section-wrap page-content project-detail">
    <NuxtLink class="back-link" to="/projects">{{ t('detail.back') }}</NuxtLink>
    <div class="detail-heading" data-reveal><p class="eyebrow">{{ project.number }} / 0{{ projects.length }} · {{ t(`projects.${project.slug}.category`) }}</p><h1>{{ project.name }}<span class="serif-accent">.</span></h1><p class="page-lead">{{ t(`projects.${project.slug}.description`) }}</p></div>
    <div :class="['detail-art', `accent-${project.accent}`]" data-reveal><span class="project-symbol">{{ project.mark }}</span><span class="detail-art-note" v-html="t('detail.note')" /></div>
    <div class="detail-columns"><section data-reveal><p class="eyebrow">{{ t('detail.about') }}</p><h2 v-html="t('detail.title')" /><p>{{ t(`projects.${project.slug}.longDescription`) }}</p><a v-if="project.liveUrl" class="button button-dark" :href="project.liveUrl" target="_blank" rel="noreferrer">{{ t('detail.live') }} <span>↗</span></a><a v-else-if="project.repoUrl" class="button button-dark" :href="project.repoUrl" target="_blank" rel="noreferrer">{{ t('detail.repo') }} <span>↗</span></a></section><aside data-reveal><p class="eyebrow">{{ t('detail.stack') }}</p><div class="detail-stack"><span v-for="item in project.stack" :key="item">{{ item }}</span></div><div v-if="project.liveUrl" class="detail-external"><span>LIVE PROJECT</span><a :href="project.liveUrl" target="_blank" rel="noreferrer">{{ project.liveUrl.replace('https://', '').replace(/\/$/, '') }} ↗</a></div><div v-if="project.repoUrl" class="detail-external"><span>GITHUB REPOSITORY</span><a :href="project.repoUrl" target="_blank" rel="noreferrer">{{ project.repoUrl.replace('https://', '') }} ↗</a></div></aside></div>
    <div class="detail-next"><span>{{ t('detail.next') }}</span><NuxtLink :to="`/projects/${projects[(currentIndex + 1) % projects.length]?.slug}`">{{ projects[(currentIndex + 1) % projects.length]?.name }} <b>↗</b></NuxtLink></div>
  </div>
</template>
