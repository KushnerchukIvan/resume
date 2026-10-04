<script setup lang="ts">
import { profile } from '~/data/portfolio'
const route = useRoute()
const menuOpen = ref(false)
const navigation = [
  { label: 'Головна', to: '/' },
  { label: 'Про мене', to: '/about' },
  { label: 'Проєкти', to: '/projects' },
  { label: 'Досвід', to: '/experience' },
  { label: 'Контакти', to: '/contact' },
]
watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <NuxtLink class="wordmark" to="/" aria-label="На головну"><span class="wordmark-mark">IK</span><span>ІВАН КУШНЕРЧУК<span class="wordmark-dot">.</span></span></NuxtLink>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Відкрити меню" @click="menuOpen = !menuOpen"><span /><span /></button>
      <nav :class="['main-nav', { 'is-open': menuOpen }]" aria-label="Головна навігація">
        <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to" :class="{ active: route.path === item.to || (item.to === '/projects' && route.path.startsWith('/projects/')) }">{{ item.label }}</NuxtLink>
      </nav>
      <NuxtLink class="header-cta" to="/contact">Обговорити проєкт <span>↗</span></NuxtLink>
    </header>

    <main><slot /></main>

    <footer class="site-footer">
      <div><NuxtLink class="footer-brand" to="/">IK<span>.</span></NuxtLink><p>Створюю цифровий досвід<br>із увагою до деталей.</p></div>
      <div class="footer-right"><span>Київ, Україна · {{ new Date().getFullYear() }}</span><a :href="profile.email ? `mailto:${profile.email}` : '#'">{{ profile.email }}</a></div>
    </footer>
  </div>
</template>
