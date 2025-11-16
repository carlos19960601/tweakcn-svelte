<script>
	import { useIntersectionObserver } from '$lib/hooks/use-intersection-observer.svelte';
	import { cn } from '$lib/utils';
	import { ArrowRightIcon, CheckIcon } from '@lucide/svelte';
	import FrameHighlight from '../effects/frame-highlight.svelte';
	import NoiseEffect from '../effects/noise-effect.svelte';
	import AiChatDemo from '../examples/ai-chat-demo.svelte';
	import { Badge } from '../ui/badge';
	import { Button } from '../ui/button';

	const observer = useIntersectionObserver({ threshold: 0.2 });
</script>

<section class="bg-muted/25 w-full py-20 md:py-32 lg:py-42">
	<div class="relative isolate">
		<div class="container mx-auto">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<!-- Left Column - Text Content  -->
				<div class="mx-auto max-w-2xl lg:mx-0">
					<div
						use:observer.ref
						class={cn(
							'duration-500 space-y-8',
							observer.hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
						)}
					>
						<div class="flex flex-col gap-4 items-center">
							<Badge
								variant="secondary"
								class="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-none"
							>
								<span class="text-primary mr-1">✦</span> Pro Features
							</Badge>
							<h2 class="text-3xl md:4xl lg:text-5xl font-bold tracking-tight">
								Generate Themes With <FrameHighlight>AI</FrameHighlight> in Seconds
							</h2>
							<p class="text-muted-foreground text-base md:text-lg leading-relaxed">
								Create stunning ready-to-use themes. Just provide an image or text prompt, and our
								AI does the rest.
							</p>
						</div>
						<div>
							<a href="/ai"
								><Button
									size="lg"
									class="h-12 cursor-pointer rounded-full text-base transition-transform duration-250 hover:-translate-y-0.5"
									>Try it Free <ArrowRightIcon class="ml-2" /></Button
								></a
							>
							<a href="/pricing"
								><Button
									size="lg"
									variant="outline"
									class="h-12 cursor-pointer rounded-full text-base transition-transform duration-250 hover:-translate-y-0.5"
									>Get Pro</Button
								>
							</a>
						</div>
						<div class="flex flex-wrap items-center gap-6">
							{#each ['Theme Preview', 'Checkpoint Restoration', 'Image Uploads'] as feature}
								<div class="text-muted-foreground flex items-center gap-2 text-sm">
									<CheckIcon class="text-primary" /> <span>{feature}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
				<!-- Right Column - Visual Preview -->
				<div>
					<div>
						<div class="h-[500px]">
							<NoiseEffect />
							<AiChatDemo class="pb-16" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--  Background effects  -->

		<!-- Top Right - Primary -->

		<!-- Bottom Left - Muted -->
	</div>
</section>
