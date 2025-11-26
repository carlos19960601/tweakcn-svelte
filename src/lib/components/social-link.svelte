<script lang="ts">
	import { cn } from '$lib/utils';
	import { ArrowUpRightIcon } from '@lucide/svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface SocialLinkProps extends HTMLAnchorAttributes {
		showIcon?: boolean;
	}

	let { href, class: className, children, showIcon = false }: SocialLinkProps = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class={cn(
		'text-foreground/60 hover:text-foreground inline-flex w-fit items-center transition-colors',
		className
	)}
>
	{@render children?.()}
	{#if showIcon}
		<ArrowUpRightIcon class="size-3 transition group-hover/link:rotate-45" />
	{/if}
</a>
