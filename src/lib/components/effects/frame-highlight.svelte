<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import Corner from './corner.svelte';

	let { children, class: className }: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span class="relative h-fit text-nowrap px-1">
	<span class={cn('w-full', className)}>{@render children!()}</span>
	<span
		class="absolute inset-0 h-full px-1.5 border-primary/60 bg-primary/15 dark:border-primary/40 border border-dashed"
	>
		<Corner class="fill-primary dark:fill-primary/70 absolute -top-0.5 -left-0.5" />
		<Corner class="fill-primary dark:fill-primary/70 absolute -top-0.5 -right-0.5" />
		<Corner class="fill-primary dark:fill-primary/70 absolute -bottom-0.5 -left-0.5" />
		<Corner class="fill-primary dark:fill-primary/70 absolute -bottom-0.5 -right-0.5" />
	</span>
</span>
