<script setup lang="ts">
import { profile, skillGroups } from '~/data/portfolio'
const { t, locale } = useSiteI18n()
useGsapReveal()
useSeoMeta({ title: () => `${t('nav.about')} — Ivan Kushnerchuk`, description: () => t('about.lead') })
</script>

<template>
  <div class="section-wrap page-content">
    <div class="page-intro" data-reveal><p class="eyebrow">{{ t('about.eyebrow') }}</p><h1 v-html="t('about.title')" /><p class="page-lead">{{ t('about.lead') }}</p></div>
    <div class="about-layout">
      <aside class="about-aside" data-reveal><div class="portrait-card"><div class="portrait-monogram">IK<span>.</span></div><span class="portrait-caption">{{ locale === 'en' ? 'Kyiv, Ukraine' : profile.location }}<br>50°27′N 30°31′E</span><span class="portrait-stamp">BUILD<br>WITH CARE</span></div><div class="contact-mini"><span class="eyebrow">{{ t('about.contact') }}</span><a :href="`mailto:${profile.email}`">{{ profile.email }} ↗</a><a :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn ↗</a><a :href="profile.github" target="_blank" rel="noreferrer">GitHub ↗</a></div></aside>
      <div class="about-main">
        <section class="prose-block" data-reveal><p class="eyebrow">{{ t('about.story') }}</p><h2 v-html="t('about.storyTitle')" /><p>{{ t('about.story1') }}</p><p>{{ t('about.story2') }}</p><p>{{ t('about.story3') }}</p></section>
        <section class="skills-block" data-reveal><div class="section-heading compact"><div><p class="eyebrow">{{ t('about.toolkit') }}</p><h2 v-html="t('about.skills')" /></div></div><div class="skill-groups"><div v-for="(group, index) in skillGroups" :key="group.title" class="skill-group"><span class="skill-count">0{{ index + 1 }}</span><div><h3>{{ t(`skills.groups.${index}`) }}</h3><div class="skill-tags"><span v-for="skill in group.skills" :key="skill">{{ locale === 'en' ? skill.replace(' · 1 рік', ` · ${t('skills.year')}`).replace(' · 6 місяців', ` · ${t('skills.halfYear')}`) : skill }}</span></div></div></div></div></section>
        <section class="education-block" data-reveal><p class="eyebrow">{{ t('about.education') }}</p><div class="education-item"><span class="education-year">{{ locale === 'en' ? 'FROM 2026' : 'З 2026' }}</span><div><h3>{{ t('about.master') }}</h3><p>{{ t('about.university') }}</p></div></div><div class="education-item"><span class="education-year">{{ locale === 'en' ? 'CLASS OF 2026' : 'ВИПУСК · 2026' }}</span><div><h3>{{ t('about.bachelor') }}</h3><p>{{ t('about.bachelorUniversity') }}</p></div></div><div class="education-item"><span class="education-year">LANGUAGES</span><div><h3>{{ t('about.languages') }}</h3></div></div></section>
      </div>
    </div>
  </div>
</template>
