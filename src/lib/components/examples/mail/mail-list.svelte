<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { cn } from '$lib/utils';
	import type { ComponentProps } from 'svelte';
	import { type Mail } from './data.svelte';

	interface MailListProps {
		items: Mail[];
	}

	let { items }: MailListProps = $props();

	const getBadgeVariantFromLabel = (label: string): ComponentProps<typeof Badge>['variant'] => {
		if (['work'].includes(label.toLowerCase())) {
			return 'default';
		}
		if (['personal'].includes(label.toLowerCase())) {
			return 'outline';
		}
		return 'secondary';
	};
</script>

<ScrollArea class={cn('h-screen')}>
	<div class="flex flex-col gap-2 p-4 pt-0">
		{#each items as item}
			<button
				class={cn(
					'hover:bg-accent hover:text-accent-foreground flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all'
				)}
			>
				<div class="flex w-full flex-col gap-1">
					<div></div>
					<div class="text-xs font-medium">{item.subject}</div>
				</div>

				<div class="text-muted-foreground line-clamp-2 text-xs">
					{item.text.substring(0, 300)}
				</div>
				{#if item.labels.length}
					<div class="flex items-center gap-2">
						{#each item.labels as label}
							<Badge variant={getBadgeVariantFromLabel(label)}>{label}</Badge>
						{/each}
					</div>
				{/if}
			</button>
		{/each}
	</div>
</ScrollArea>
