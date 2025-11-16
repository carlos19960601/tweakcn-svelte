<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Card } from '$lib/components/ui/card';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import type { Roadmap } from './data';

	let { roadmap }: { roadmap: Roadmap } = $props();
</script>

<Card class="h-full hover:-translate-y-1.5 duration-200">
	<CardContent class="flex flex-col p-6 ">
		<div
			class="bg-primary/10 text-primary mb-4 flex size-12 items-center justify-center rounded-full"
		>
			<roadmap.icon class="size-5" />
		</div>
		<div class="mb-2 flex items-center justify-between">
			<h3 class="text-xl font-bold">{roadmap.title}</h3>
			<Badge
				class="shadow-sm"
				variant={roadmap.status === 'In Process'
					? 'default'
					: roadmap.status === 'Coming Soon'
						? 'secondary'
						: 'outline'}
			>
				{roadmap.status}
			</Badge>
		</div>
		<p class="text-muted-foreground">{roadmap.description}</p>
	</CardContent>
</Card>
