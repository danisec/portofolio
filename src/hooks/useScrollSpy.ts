'use client';

import { useEffect, useState } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  enabled?: boolean;
  activationRatio?: number;
  enabledRatio?: number;
}

function resolveSections(sectionIds: string[]) {
  return sectionIds
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => section !== null);
}

function useScrollSpy({
  sectionIds,
  enabled = true,
  activationRatio = 0.3,
  enabledRatio = 0.02,
}: UseScrollSpyOptions) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) {
      setActiveId('');
      return;
    }

    let sections = resolveSections(sectionIds);
    let visibleIds = new Set<string>();
    let rafId = 0;
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const isAtBottom = () => {
      const tolerance = Math.max(2, window.innerHeight * enabledRatio);
      return (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - tolerance
      );
    };

    const applyActive = () => {
      if (sections.length === 0) {
        setActiveId('');
        return;
      }

      if (isAtBottom()) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      const activationOffset = window.innerHeight * activationRatio;

      const firstVisible = sections.find((section) => visibleIds.has(section.id));
      if (firstVisible) {
        setActiveId(firstVisible.id);
        return;
      }

      let fallback = '';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationOffset) {
          fallback = section.id;
        }
      }

      setActiveId(fallback);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        applyActive();
      });
    };

    const observe = () => {
      observer?.disconnect();
      visibleIds = new Set<string>();

      if (typeof IntersectionObserver === 'undefined') {
        applyActive();
        return;
      }

      const topMargin = `${-(activationRatio * 100)}%`;
      const bottomMargin = `${-((1 - activationRatio) * 100)}%`;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = (entry.target as HTMLElement).id;
            if (entry.isIntersecting) {
              visibleIds.add(id);
            } else {
              visibleIds.delete(id);
            }
          });

          applyActive();
        },
        {
          rootMargin: `${topMargin} 0px ${bottomMargin} 0px`,
          threshold: 0,
        },
      );

      sections.forEach((section) => observer?.observe(section));
    };

    const sync = () => {
      const next = resolveSections(sectionIds);
      const changed =
        next.length !== sections.length ||
        next.some((section, index) => section !== sections[index]);

      if (!changed) {
        if (sections.length === 0) setActiveId('');
        return;
      }

      sections = next;
      observe();
      applyActive();
    };

    sync();
    observe();
    applyActive();

    window.addEventListener('scroll', onScroll, { passive: true });

    if (typeof MutationObserver !== 'undefined') {
      mutationObserver = new MutationObserver(() => sync());
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [sectionIds, enabled, activationRatio, enabledRatio]);

  return activeId;
}

export default useScrollSpy;
