<script setup lang="ts">
import { profile } from '~/data/portfolio'
const { locale, t, setLocale } = useSiteI18n()
const route = useRoute()
const menuOpen = ref(false)
const navigation = [
  { label: 'nav.home', to: '/' },
  { label: 'nav.about', to: '/about' },
  { label: 'nav.projects', to: '/projects' },
  { label: 'nav.experience', to: '/experience' },
  { label: 'nav.contact', to: '/contact' },
]
useHead(() => ({ htmlAttrs: { lang: locale.value } }))
watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <NuxtLink class="wordmark" to="/" :aria-label="t('nav.homeAria')"><span class="wordmark-mark">IK</span><span>ІВАН КУШНЕРЧУК<span class="wordmark-dot">.</span></span></NuxtLink>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" :aria-label="t('nav.openMenu')" @click="menuOpen = !menuOpen"><span /><span /></button>
      <nav :class="['main-nav', { 'is-open': menuOpen }]" :aria-label="t('nav.main')">
        <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to" :class="{ active: route.path === item.to || (item.to === '/projects' && route.path.startsWith('/projects/')) }">{{ t(item.label) }}</NuxtLink>
      </nav>
      <div class="header-actions"><div class="locale-switch" role="group" aria-label="Language"><button v-for="option in (['uk', 'en'] as const)" :key="option" type="button" :aria-pressed="locale === option" :class="{ active: locale === option }" @click="setLocale(option)">{{ option.toUpperCase() }}</button></div><NuxtLink class="header-cta" to="/contact">{{ t('nav.discuss') }} <span>↗</span></NuxtLink></div>
    </header>

    <main><slot /></main>

    <footer class="site-footer">
      <div><NuxtLink class="footer-brand" to="/">IK<span>.</span></NuxtLink><p v-html="t('footer.tagline')" /></div>
      <div class="footer-right"><span>{{ t('footer.location') }} · {{ new Date().getFullYear() }}</span><a :href="profile.email ? `mailto:${profile.email}` : '#'">{{ profile.email }}</a></div>
    </footer>
  </div>
</template>
