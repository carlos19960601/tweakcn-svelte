import type { Attachment } from "svelte/attachments";

interface InViewFlyOptions extends IntersectionObserverInit {
  x?: number
  y?: number
  duration?: number;
  delay?: number;
  easing?: string;
  opacity?: number;
  scale?: number;
  rotate?: number;
}

export const inViewFly = (options?: InViewFlyOptions): Attachment<HTMLDivElement> => {
  const {
    y = 20,
    x = 0,
    scale = 1,
    rotate = 0,
    duration = 500,
    easing = "ease-out",
    delay = 0,
  } = options || {};

  let hasIntersected = $state(false); // 记录是否已经交叉过

  return (element) => {
    const observer = new IntersectionObserver(([entry]) => {
      // 一旦进入视口，就标记为已交叉
      if (entry.isIntersecting) {
        hasIntersected = true;
      }
    }, options);

    observer.observe(element);

    element.style.opacity = hasIntersected ? "1" : "0"
    element.style.transform = hasIntersected ? "translate(0, 0) scale(1) rotate(0deg)" : `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`
    element.style.transition = `all ${duration}ms ${easing} ${delay}ms`;

    return () => {
      observer.disconnect();
    }
  }
}  