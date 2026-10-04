interface HorizontalScrollOptions {
  section: Ref<HTMLElement | null>
  viewport: Ref<HTMLElement | null>
  track: Ref<HTMLElement | null>
  progress: Ref<HTMLElement | null>
}

export function useGsapHorizontalScroll({ section, viewport, track, progress }: HorizontalScrollOptions) {
  let revert: (() => void) | undefined

  onMounted(async () => {
    if (!section.value || !viewport.value || !track.value) return

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ])
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.matchMedia().add('(min-width: 801px) and (prefers-reduced-motion: no-preference)', () => {
        const getDistance = () => Math.max(0, track.value!.scrollWidth - viewport.value!.clientWidth)

        gsap.to(track.value, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section.value,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 0.9,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => updateProgress(self.progress),
            onRefresh: (self) => updateProgress(self.progress),
          },
        })
      })
    }, section.value)

    function updateProgress(value: number) {
      if (!progress.value) return
      const fill = progress.value.firstElementChild
      if (fill) gsap.set(fill, { scaleX: value })
      progress.value.setAttribute('aria-valuenow', String(Math.round(value * 100)))
    }

    revert = () => context.revert()
    requestAnimationFrame(() => ScrollTrigger.refresh())
    void document.fonts.ready.then(() => ScrollTrigger.refresh())
  })

  onBeforeUnmount(() => revert?.())
}
