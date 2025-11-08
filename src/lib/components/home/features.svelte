<script lang="ts">
	import { useIntersectionObserver } from '$lib/hooks/use-intersection-observer.svelte';
	import { cn } from '$lib/utils';
	import { Badge } from '../ui/badge';
	import { features } from './features/data';
	import FeatureCard from './features/feature-card.svelte';

	const observer = useIntersectionObserver({ threshold: 0.2 });
	const featuresObserver = useIntersectionObserver({ threshold: 0.1 });
</script>

<section class="w-full py-20 md:py-32">
	<div class="absolute inset-0"></div>
	<div class="container mx-auto px-4 md:px-6">
		<div
			use:observer.ref
			class={cn(
				'mb-12 flex flex-col px-4 py-1.5 text-sm font-medium items-center justify-center space-y-4 text-center duration-500 transition-transform',
				observer.hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
			)}
		>
			<Badge variant="secondary" class="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm">
				<span class="mr-1 text-primary">✦</span> Features
			</Badge>
			<h2 class="text-3xl md:text-4xl font-bold">Powerful Customization Tools</h2>
			<p class="text-muted-foreground max-w-[800px] md:text-lg">
				All the tools you need to customize your shadcn/ui components and make them unique.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" use:featuresObserver.ref>
			{#each features as feature, index}
				<div
					class={cn(
						'h-full transition-all duration-700 ease-out',
						featuresObserver.hasIntersected
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-8'
					)}
					style="transition-delay: {index * 100}ms;"
				>
					<FeatureCard {feature} />
				</div>
			{/each}
		</div>
	</div>
</section>
