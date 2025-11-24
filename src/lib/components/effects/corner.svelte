<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SVGAttributes } from 'svelte/elements';

	let { class: className }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg width="5" height="5" viewBox="0 0 5 5" class={cn('absolute', className)}>
	<path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
</svg>
