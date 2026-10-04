<script setup lang="ts">
import { profile } from '~/data/portfolio'
const { t, locale } = useSiteI18n()
useGsapReveal()
useSeoMeta({ title: () => `${t('nav.contact')} — Ivan Kushnerchuk`, description: () => t('contact.lead') })
const copied = ref(false)
async function copyEmail() {
  try { await navigator.clipboard.writeText(profile.email); copied.value = true; window.setTimeout(() => { copied.value = false }, 1800) }
  catch { window.location.href = `mailto:${profile.email}` }
}
</script>

<template>
  <div class="section-wrap page-content contact-page">
    <div class="page-intro" data-reveal><p class="eyebrow">{{ t('contact.eyebrow') }}</p><h1 v-html="t('contact.title')" /><p class="page-lead">{{ t('contact.lead') }}</p></div>
    <div class="contact-layout" data-reveal><section class="contact-primary"><span class="eyebrow">{{ t('contact.best') }}</span><a class="contact-email" :href="`mailto:${profile.email}`">{{ profile.email }}<span>↗</span></a><button class="copy-email" type="button" @click="copyEmail">{{ copied ? t('contact.copied') : t('contact.copy') }}</button></section><aside class="contact-aside"><div><span class="eyebrow">{{ t('contact.social') }}</span><a :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a :href="profile.github" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div><div><span class="eyebrow">{{ t('contact.location') }}</span><p>{{ locale === 'en' ? 'Kyiv, Ukraine' : profile.location }}<br>{{ t('contact.locationText') }}</p></div><div><span class="eyebrow">{{ t('contact.phone') }}</span><a :href="`tel:${profile.phone.replaceAll(' ', '')}`">{{ profile.phone }} ↗</a></div></aside></div>
    <div class="contact-bottom" data-reveal><span>{{ t('contact.promise') }}</span><span class="contact-flower">✳</span><span>{{ t('contact.goodbye') }}</span></div>
  </div>
</template>
