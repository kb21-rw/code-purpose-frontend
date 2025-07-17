import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserve, {
      rootMargin: `-${offset}px 0px 0px 0px`,
      threshold: 0.6,
    });

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
