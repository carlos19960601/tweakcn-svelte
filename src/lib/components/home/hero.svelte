<script lang="ts">
	import shadcnLogo from '$lib/assets/shadcn.svg';
	import Spotlight from '$lib/components/effects/spotlight.svelte';
	import {
		ArrowRightIcon,
		CheckIcon,
		CircleIcon,
		CopyIcon,
		EyeIcon,
		PaletteIcon
	} from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Badge from '../ui/badge/badge.svelte';
	import Button from '../ui/button/button.svelte';
	import { Card, CardContent } from '../ui/card';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<section class="container mx-auto w-full relative py-20 md:py-32 lg:py-40">
	{#if mounted}
		<div transition:fade={{ duration: 500, delay: 300 }}>
			<Spotlight class="top-0 left-0 opacity-50" fill="white" />
		</div>
	{/if}
	<div class="px-4 md:px-6">
		<div class="grid lg:grid-cols-2 items-center gap-12">
			<!-- Left Column - Text Content -->
			<div class="max-w-2xl mx-auto">
				<div>
					<Badge
						class="font-medium text-sm px-4 py-1.5 mb-4 shadow-sm rounded-full"
						variant="secondary"><span class="text-primary">✦</span>Visual Theme Editor</Badge
					>
				</div>
				<h1 class="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold tracking-tight">
					Design Your <span class="font-serif font-light italic">Perfect</span>
					<span class="inline-flex items-baseline gap-1">
						<div class="bg-primary/10 rounded-full p-1 md:p-2">
							<img src={shadcnLogo} alt="shadcn logo" class="size-6 md:size-8" />
						</div>
						<span>shadcn/ui</span>
					</span> Theme
				</h1>
				<p class="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl">
					Customize colors, typography, and layouts with a real-time preview. No signup required.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<a href="/editor/theme"
						><Button size="lg" class="cursor-pointer px-8 rounded-full"
							>Start Customizing <ArrowRightIcon class="ml-2 size-4" /></Button
						></a
					>
					<a href="#example">
						<Button size="lg" variant="outline" class="cursor-pointer rounded-full px-8"
							>View Example</Button
						>
					</a>
				</div>
				<div class="mt-8 flex flex-wrap items-center gap-6">
					<div class="text-muted-foreground flex items-center gap-2 text-sm">
						<CheckIcon class="text-primary size-5" /> <span>Real-time Preview</span>
					</div>
					<div class="text-muted-foreground flex items-center gap-2 text-sm">
						<CheckIcon class="text-primary size-5" /> <span>Export to Tailwind</span>
					</div>
					<div class="text-muted-foreground flex items-center gap-2 text-sm">
						<CheckIcon class="text-primary size-5" /> <span>Beautiful Presets</span>
					</div>
				</div>
			</div>

			<!-- Right Column - Preview Card -->
			<div class="hidden lg:block">
				<Card class="shadow-xl py-0">
					<CardContent class="p-0">
						<!-- Header -->
						<div class="p-4 border-b flex items-center">
							<div class="flex gap-2">
								<div class="size-3 rounded-full bg-red-500"></div>
								<div class="size-3 rounded-full bg-yellow-500"></div>
								<div class="size-3 rounded-full bg-green-500"></div>
							</div>
						</div>

						<!-- Content -->
						<div class="space-y-6 p-6">
							<!-- Color Palette -->
							<div class="space-y-4">
								<div class="flex items-center justify-between">
									<div class="text-sm font-medium">Color Palette</div>
									<PaletteIcon class="text-muted-foreground size-4" />
								</div>
								<div class="space-y-2 text-center">
									<div
										class="from-primary via-secondary to-background h-24 max-w-full rounded-xl bg-linear-to-r"
									></div>
									<div class="text-muted-foreground grid grid-cols-5 gap-2 text-xs">
										<div>Primary</div>
										<div>Secondary</div>
										<div>Accent</div>
										<div>Muted</div>
										<div>Background</div>
									</div>
								</div>
							</div>

							<!-- Preview -->
							<div class="space-y-4">
								<div class="flex items-center justify-between">
									<div class="text-sm font-medium">Preview</div>
									<EyeIcon class="text-muted-foreground size-4" />
								</div>
								<div class="space-y-3">
									<div class="flex gap-2">
										<Button class="flex-1 shadow-sm transition-none" variant="secondary">
											<CopyIcon class="mr-2 size-4" />
											Copy Code
										</Button>
										<Button class="flex-1 shadow-sm transition-none" variant="outline">
											<CircleIcon class="mr-2 size-4" />
											oklch, hsl, rgb, hex
										</Button>
									</div>
									<Card class="w-full">
										<CardContent class="p-4">
											<div class="flex items-center gap-3">
												<div
													class="bg-primary/10 size-8 flex items-center justify-center rounded-full"
												>
													<span class="text-primary text-xs">UI</span>
												</div>
												<div class="flex-1">
													<div class="bg-foreground/90 mb-2 h-2 w-24 rounded-full"></div>
													<div class="bg-muted-foreground/60 h-2 w-16 rounded-full"></div>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</section>
