import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: Handler) => {
  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    });
  }, [handler, ref]);
};
