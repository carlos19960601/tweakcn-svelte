<script>
	import { inViewFly } from '$lib/attachments/in-view-fly.svelte';
	import Marquee from '../marquee.svelte';
	import { Badge } from '../ui/badge';
	import { testimonials } from './testimonials/data';
	import TestimonialCard from './testimonials/testimonial-card.svelte';
</script>

<section id="testimonials" class="w-full py-20 md:py-32">
	<div></div>
	<div class="container mx-auto px-4 md:px-6">
		<div
			{@attach inViewFly({ threshold: 0.1 })}
			class="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
		>
			<Badge variant="secondary" class="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm">
				<span>✦</span> Testimonials
			</Badge>
			<h2
				class="from-foreground to-foreground/80 max-w-[600px] text-3xl md:text-4xl tracking-tight font-bold"
			>
				Loved by developers worldwide
			</h2>
			<p class="text-muted-foreground font-bold max-w-[500px] md:text-lg">
				See what the community is saying about tweakcn
			</p>
		</div>

		<!-- 🚀 Two Marquee Rows -->
		<div
			class="flex flex-col gap-y-4"
			style="mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
		>
			<Marquee pauseOnHover style="--duration: 50s;">
				{#each testimonials.slice(0, 5) as testimonial}
					<TestimonialCard {testimonial} />
				{/each}
			</Marquee>
			<Marquee reverse pauseOnHover style="--duration: 50s;">
				{#each testimonials.slice(5, 10) as testimonial}
					<TestimonialCard {testimonial} />
				{/each}
			</Marquee>
		</div>
	</div>
</section>
