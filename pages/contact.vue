<script setup lang="ts">
import { profile } from '~/data/portfolio'
useGsapReveal()
useSeoMeta({ title: 'Контакти — Іван Кушнерчук', description: 'Зв’яжіться з Іваном Кушнерчуком щодо frontend-розробки та співпраці.' })
const copied = ref(false)
async function copyEmail() {
  try { await navigator.clipboard.writeText(profile.email); copied.value = true; window.setTimeout(() => { copied.value = false }, 1800) }
  catch { window.location.href = `mailto:${profile.email}` }
}
</script>

<template>
  <div class="section-wrap page-content contact-page">
    <div class="page-intro" data-reveal><p class="eyebrow">04 — КОНТАКТИ</p><h1>Маєте ідею?<br><span class="serif-accent">Я на зв’язку.</span></h1><p class="page-lead">Відкритий до нових можливостей і цікавих команд. Напишіть — буду радий познайомитись і поговорити про ваш продукт.</p></div>
    <div class="contact-layout" data-reveal><section class="contact-primary"><span class="eyebrow">НАЙКРАЩИЙ СПОСІБ ЗВ’ЯЗАТИСЯ</span><a class="contact-email" :href="`mailto:${profile.email}`">{{ profile.email }}<span>↗</span></a><button class="copy-email" type="button" @click="copyEmail">{{ copied ? 'Адресу скопійовано ✓' : 'Скопіювати адресу +' }}</button></section><aside class="contact-aside"><div><span class="eyebrow">СОЦІАЛЬНІ МЕРЕЖІ</span><a :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a :href="profile.github" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div><div><span class="eyebrow">ЛОКАЦІЯ</span><p>{{ profile.location }}<br>Працюю з командами по всьому світу</p></div><div><span class="eyebrow">ТЕЛЕФОН</span><a :href="`tel:${profile.phone.replaceAll(' ', '')}`">{{ profile.phone }} ↗</a></div></aside></div>
    <div class="contact-bottom" data-reveal><span>ОБІЦЯЮ ВІДПОВІСТИ ЯКНАЙШВИДШЕ</span><span class="contact-flower">✳</span><span>ДО ЗУСТРІЧІ В ІНТЕРНЕТІ</span></div>
  </div>
</template>
