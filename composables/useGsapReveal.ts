export function useGsapReveal() {
  let revert: (() => void) | undefined
  onMounted(async () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ])
    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(element, { y: 28, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })
      gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
        gsap.fromTo(group.children, { y: 22, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.65, stagger: 0.09, ease: 'power2.out',
          scrollTrigger: { trigger: group, start: 'top 84%', once: true },
        })
      })
    })
    revert = () => context.revert()
  })
  onBeforeUnmount(() => revert?.())
}
