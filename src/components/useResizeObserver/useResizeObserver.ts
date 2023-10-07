import { useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

/**
 * Hook, that returns the current dimensions of an HTML element.
 * Doesn't play well with SVG.
 */

const useResizeObserver = (ref: React.MutableRefObject<HTMLElement | null>) => {
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        return setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget!);
    return () => {
      resizeObserver.unobserve(observeTarget!);
    };
  }, [ref]);
  return dimensions;
};

export default useResizeObserver;