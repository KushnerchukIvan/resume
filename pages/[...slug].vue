<script setup lang="ts">const { t } = useSiteI18n()</script>
<template><div class="section-wrap not-found"><p class="eyebrow">{{ t('notFound.eyebrow') }}</p><h1 v-html="t('notFound.title')" /><NuxtLink class="button button-dark" to="/">{{ t('notFound.home') }} <span>↗</span></NuxtLink></div></template>
