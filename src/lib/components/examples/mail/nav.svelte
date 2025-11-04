<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import type { Icon } from '@lucide/svelte';

	interface NavProps {
		links: {
			title: string;
			label?: string;
			icon: typeof Icon;
			variant: 'default' | 'ghost';
		}[];
	}

	let { links = [] }: NavProps = $props();
</script>

<div>
	<nav class="grid gap-1 px-2">
		{#each links as link}
			<button class={cn(buttonVariants({ variant: link.variant, size: 'sm' }))}>
				<link.icon />
				{link.title}
				{#if link.label}
					<span>{link.label}</span>
				{/if}
			</button>
		{/each}
	</nav>
</div>
