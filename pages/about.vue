<script setup lang="ts">
import { profile, skillGroups } from '~/data/portfolio'
useGsapReveal()
useSeoMeta({ title: 'Про мене — Іван Кушнерчук', description: 'Профіль, навички та освіта Івана Кушнерчука, Frontend Developer.' })
</script>

<template>
  <div class="section-wrap page-content">
    <div class="page-intro" data-reveal><p class="eyebrow">01 — ПРО МЕНЕ</p><h1>Код із характером.<br><span class="serif-accent">Людяний за духом.</span></h1><p class="page-lead">Я frontend-розробник із роком комерційного досвіду. Поєдную роботу над інтерфейсами з backend-логікою та інтеграціями.</p></div>
    <div class="about-layout">
      <aside class="about-aside" data-reveal><div class="portrait-card"><div class="portrait-monogram">IK<span>.</span></div><span class="portrait-caption">{{ profile.location }}<br>50°27′N 30°31′E</span><span class="portrait-stamp">BUILD<br>WITH CARE</span></div><div class="contact-mini"><span class="eyebrow">ЗВ’ЯЗАТИСЯ</span><a :href="`mailto:${profile.email}`">{{ profile.email }} ↗</a><a :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn ↗</a><a :href="profile.github" target="_blank" rel="noreferrer">GitHub ↗</a></div></aside>
      <div class="about-main">
        <section class="prose-block" data-reveal><p class="eyebrow">МОЯ ІСТОРІЯ</p><h2>Від бізнес-логіки<br>до виразних інтерфейсів.</h2><p>Маю рік комерційного досвіду в Galanix над Utrigg — SaaS-платформою аналітики. Працював і над клієнтською, і над серверною частинами продукту: створював інтерфейси на Vue 2, а також розробляв REST endpoints на Symfony 5 і прописував бізнес-логіку.</p><p>Працював із базою даних через Doctrine ORM: змінював сутності, готував і запускав міграції, підтримував зв’язок між API та даними застосунку. На frontend створював аналітичні віджети й графіки на D3.js, фільтри звітів і локалізацію. Цей повний цикл допоміг краще розуміти, як рішення в інтерфейсі пов’язані з API та структурою даних.</p><p>Зараз розвиваю цей досвід у Vue 3, Composition API та Nuxt 3 і створюю власні проєкти від інтерфейсу до інтеграцій.</p></section>
        <section class="skills-block" data-reveal><div class="section-heading compact"><div><p class="eyebrow">ІНСТРУМЕНТАРІЙ</p><h2>Навички, що <span class="serif-accent">працюють.</span></h2></div></div><div class="skill-groups"><div v-for="(group, index) in skillGroups" :key="group.title" class="skill-group"><span class="skill-count">0{{ index + 1 }}</span><div><h3>{{ group.title }}</h3><div class="skill-tags"><span v-for="skill in group.skills" :key="skill">{{ skill }}</span></div></div></div></div></section>
        <section class="education-block" data-reveal><p class="eyebrow">ОСВІТА</p><div class="education-item"><span class="education-year">З 2026</span><div><h3>Магістратура · Інженерія програмного забезпечення</h3><p>НТУУ «КПІ ім. Ігоря Сікорського» · заочна форма</p></div></div><div class="education-item"><span class="education-year">ВИПУСК · 2026</span><div><h3>Бакалавр · Комп’ютерна інженерія</h3><p>Національний авіаційний університет · Київ</p></div></div><div class="education-item"><span class="education-year">LANGUAGES</span><div><h3>Українська — рідна · Англійська — B2</h3></div></div></section>
      </div>
    </div>
  </div>
</template>
