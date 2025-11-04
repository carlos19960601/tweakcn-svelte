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

<div class="group flex flex-col gap-4 py-2">
	<nav class="grid gap-1 px-2">
		{#each links as link}
			<button
				class={cn(
					buttonVariants({ variant: link.variant, size: 'sm' }),
					link.variant === 'default' &&
						'group dark:bg-muted dark:text-foreground dark:hover:bg-muted dark:hover:text-foreground',
					'justify-start'
				)}
			>
				<link.icon class="mr-2 size-4" />
				{link.title}
				{#if link.label}
					<span
						class={cn(
							'ml-auto',
							link.variant === 'default' && 'text-background dark:text-muted-foreground'
						)}>{link.label}</span
					>
				{/if}
			</button>
		{/each}
	</nav>
</div>
