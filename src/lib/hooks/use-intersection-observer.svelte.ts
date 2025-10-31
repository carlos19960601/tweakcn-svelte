export function useIntersectionObserver(options: IntersectionObserverInit) {
	let element = $state<Element | null>(null);
	let isIntersecting = $state(false);
	let hasIntersected = $state(false); // 记录是否已经交叉过

	$effect(() => {
		if (!element) return;

		const observer = new IntersectionObserver(([entry]) => {
			isIntersecting = entry.isIntersecting;
			// 一旦进入视口，就标记为已交叉
			if (entry.isIntersecting) {
				hasIntersected = true;
			}

		}, options);

		observer.observe(element);

		return () => observer.disconnect();
	});

	return {
		get isIntersecting() {
			return isIntersecting;
		},
		get hasIntersected() {
			return hasIntersected;
		},
		ref: (node: Element) => {
			element = node;
		}
	}
}
