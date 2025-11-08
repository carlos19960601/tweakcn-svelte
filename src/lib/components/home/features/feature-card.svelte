<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import { GemIcon } from '@lucide/svelte';
	import type { Feature } from './data';

	let { feature }: { feature: Feature } = $props();
</script>

<div class={cn('h-full duration-200 transition-all translate-y-0 hover:-translate-y-1.5 ease-out')}>
	<Card class="h-full group">
		<CardContent class="flex flex-col p-6">
			<div
				class="bg-primary/10 group-hover:bg-primary/20 text-primary mb-4 size-12 flex items-center justify-center rounded-full transition-colors duration-300"
			>
				<feature.icon class="size-5" />
			</div>
			<h3 class="mb-2 flex items-center gap-2 text-xl font-bold">
				{feature.title}
				{#if feature.pro}
					<span
						class="bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-semibold"
					>
						<GemIcon class="size-3" /> Pro
					</span>{/if}
			</h3>
			<p class="text-muted-foreground text-pretty">{feature.description}</p>
		</CardContent>
	</Card>
</div>
