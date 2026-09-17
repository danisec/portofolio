'use client';

import { useEffect, useState } from 'react';

function useElementVisible<T extends Element>(ref: React.RefObject<T | null>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}

export default useElementVisible;
