<script lang="ts">
	import { inViewFly } from '$lib/attachments/in-view-fly.svelte';
	import { cn } from '$lib/utils';
	import { Badge } from '../ui/badge';
	import { roadmapItems } from './roadmap/data';
	import RoadmapCard from './roadmap/roadmap-card.svelte';
</script>

<section class="py-20 md:py-32">
	<div></div>
	<div {@attach inViewFly()} class={cn('container mx-auto px-4 md:px-6')}>
		<div class="flex flex-col items-center justify-center space-y-4 text-center mb-16">
			<Badge class="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm" variant="secondary">
				<span class="text-primary mr-1">✦</span> Roadmap
			</Badge>
			<h2 class="text-3xl md:text-4xl font-bold tracking-tight">What&apos;s Coming Next</h2>
			<p class="text-muted-foreground max-w-[800px] md:text-lg">
				We&apos;re constantly working to improve tweakcn and add new features. Here&apos;s
				what&apos;s on our roadmap.
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each roadmapItems as roadmap, index}
				<div
					{@attach inViewFly({
						threshold: 0.1,
						duration: 500,
						delay: index * 100
					})}
				>
					<RoadmapCard {roadmap} />
				</div>
			{/each}
		</div>
	</div>
</section>
