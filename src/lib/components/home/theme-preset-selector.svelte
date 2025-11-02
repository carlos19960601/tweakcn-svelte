<script lang="ts">
	import { defaultPresets } from '@/constants/theme-presets';
	import { useIntersectionObserver } from '@/hooks/use-intersection-observer.svelte';
	import { fly } from 'svelte/transition';
	import { Badge } from '../ui/badge';
	import ThemePresetButtons from './theme-preset-button/theme-preset-buttons.svelte';

	const presetNames = Object.keys(defaultPresets);
	const mode = 'light';

	// 使用 Intersection Observer，阈值 0.2 表示 20% 可见时触发
	const observer = useIntersectionObserver({ threshold: 0.6 });
	const demoObserver = useIntersectionObserver({ threshold: 0.2 });
</script>

<section class="w-full py-20 md:py-32" use:observer.ref>
	<div class="container mx-auto px-4 md:px-6">
		{#if observer.hasIntersected}
			<div
				transition:fly={{ y: 20, duration: 500 }}
				class="flex flex-col items-center space-y-4 text-center"
			>
				<div class="mb-4 flex items-center justify-center space-y-4 text-center">
					<Badge class="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm" variant="secondary">
						<span class="text-primary mr-1">✦</span> Theme Presets
					</Badge>
				</div>
				<h2 class="text-3xl font-bold">Elevate Your Design Instantly</h2>
				<p class="text-muted-foreground max-w-[800px] md:text-lg">
					Apply theme presets with a single click. See how each option enhances the look.
				</p>
			</div>
		{/if}

		<!-- Theme Selector Buttons -->
		<ThemePresetButtons {presetNames} {mode} />
		<!--  -->
		{#if demoObserver.hasIntersected}
			<div use:demoObserver.ref>
				<div></div>
			</div>
		{/if}
	</div>
</section>
