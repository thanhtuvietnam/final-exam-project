import { useRef, RefObject, useEffect } from 'react';

import { on, off } from '@/lib/utils/misc/misc';
const defaultEvents = ['mousedown', 'touchstart'];

const useClickOutSide = <E extends Event = Event>(
  refs: RefObject<HTMLElement | null>[],
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents,
): void => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = (event: E): void => {
      const isClickAway = refs.every((ref) => {
        const { current: el } = ref;

        return el && !el.contains(event.target as Node);
      });

      if (isClickAway) {
        savedCallback.current(event);
      }
    };

    for (const eventName of events) {
      on(document, eventName, handler as EventListener);
    }

    return (): void => {
      for (const eventName of events) {
        off(document, eventName, handler as EventListener);
      }
    };
  }, [events, refs]);
};

export default useClickOutSide;
