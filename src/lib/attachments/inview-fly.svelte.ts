import type { Attachment } from "svelte/attachments";

interface InViewFlyOptions extends IntersectionObserverInit {
  duration?: number;
  delay?: number;
}

export const inViewFly = (options: InViewFlyOptions): Attachment<HTMLDivElement> => {
  let hasIntersected = $state(false); // 记录是否已经交叉过

  return (element) => {
    const observer = new IntersectionObserver(([entry]) => {
      // 一旦进入视口，就标记为已交叉
      if (entry.isIntersecting) {
        hasIntersected = true;
      }
    }, options);

    observer.observe(element);

    const transitionDuration = options.duration ? `${options.duration}ms` : "300ms";
    const transformDelay = options.delay ? `${options.delay}ms` : "300ms";

    element.style.transitionDelay = transformDelay
    element.style.transitionDuration = transitionDuration
    element.style.transitionProperty = "all"
    element.style.transitionTimingFunction = "ease-out"
    element.style.opacity = hasIntersected ? "1" : "0"
    element.style.transform = hasIntersected ? "translateY(0)" : "translateY(20px)"

    return () => {
      observer.disconnect();
    }
  }
}  