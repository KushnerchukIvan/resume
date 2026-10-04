<script setup lang="ts">
import { projects } from '~/data/portfolio'
useGsapReveal()
useSeoMeta({ title: 'Проєкти — Іван Кушнерчук', description: 'Вибрані вебпроєкти: Uptowin, Flowboard та Angular-застосунки.' })
</script>

<template>
  <div class="section-wrap page-content projects-page">
    <div class="page-intro" data-reveal><p class="eyebrow">02 — ПОРТФОЛІО</p><h1>Добрі ідеї<br><span class="serif-accent">у русі.</span></h1><p class="page-lead">Роботи, в яких я досліджував інтерфейси, інструменти та способи зробити цифровий досвід виразнішим.</p></div>
    <div class="project-list" data-stagger>
      <NuxtLink v-for="project in projects" :key="project.slug" :to="`/projects/${project.slug}`" :class="['project-row', `accent-${project.accent}`]">
        <div class="project-visual"><span class="project-index">{{ project.number }} — SELECTED WORK</span><span class="project-symbol">{{ project.mark }}</span><span class="visual-caption">{{ project.category }}</span><span class="project-open">↗</span></div>
        <div class="project-row-copy"><p class="eyebrow">{{ project.category }}</p><h2>{{ project.name }}</h2><p>{{ project.description }}</p><div class="skill-tags"><span v-for="item in project.stack" :key="item">{{ item }}</span></div><span class="project-row-link">Технології та деталі <b>↗</b></span></div>
      </NuxtLink>
    </div>
    <div class="project-footnote" data-reveal><span>МАЄТЕ ЦІКАВИЙ ПРОЄКТ?</span><NuxtLink to="/contact">Давайте поговоримо ↗</NuxtLink></div>
  </div>
</template>
