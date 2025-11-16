<script lang="ts">
	import { useIntersectionObserver } from '$lib/hooks/use-intersection-observer.svelte';
	import { cn } from '$lib/utils';
	import { Badge } from '../ui/badge';
	import { steps } from './how-it-works/data';
	import StepCard from './how-it-works/step-card.svelte';

	const observer = useIntersectionObserver({ threshold: 0.1 });
	const stepsObserver = useIntersectionObserver({ threshold: 0.1 });
</script>

<section class="w-full py-20 md:py-32 bg-muted/30">
	<div></div>
	<div class="container mx-auto px-4 md:px-6 relative">
		<div
			use:observer.ref
			class={cn(
				'duration-500 transition-all flex flex-col items-center justify-center space-y-4 text-center mb-16',
				observer.hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
			)}
		>
			<Badge class="rounded-full px-4 py-1.5 text-sm font-medium shadwo-sm" variant="secondary">
				<span class="mr-1 text-primary">✦</span> How It Works
			</Badge>
			<h2 class="text-3xl md:text-4xl font-bold tracking-tight">
				Simple Process, Beautiful Results
			</h2>
			<p class="max-w-[800px] text-muted-foreground md:text-lg">
				Customize your shadcn/ui components in just a few simple steps.
			</p>
		</div>
		<div class="grid md:grid-cols-3 gap-8 md:gap-12 relative">
			{#each steps as step, index}
				<div
					use:stepsObserver.ref
					class={cn(
						'duration-500',
						'flex flex-col items-center text-center space-y-4',
						stepsObserver.hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
					)}
				>
					<StepCard {step} {index} />
				</div>
			{/each}
		</div>
	</div>
</section>
