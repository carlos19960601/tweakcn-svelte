<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import { cn } from '@/utils';
	import { elasticOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';
	import ColorBox from './color-box.svelte';

	let { preset } = $props();

	const scale = new Tween(100, { duration: 200, easing: elasticOut });
	const y = new Tween(0, { duration: 200, easing: elasticOut });
</script>

<div
	role="button"
	tabindex="0"
	class="min-w-40 translate-y-1"
	style="scale: {scale.current}%; transform: translateY({y.current}px)"
	onmouseenter={() => {
		scale.target = 102;
		y.target = -3;
	}}
	onmouseleave={() => {
		scale.target = 100;
		y.target = 0;
	}}
>
	<Button
		variant="ghost"
		class={cn(
			'flex w-full h-full items-center justify-center px-4 py-3 scroll-py-3.5  hover:shadow-lg'
		)}
		style="background-color: {preset.bgColor}; color: {preset.themeStyle.foreground}"
	>
		<div class="flex items-center gap-2.5">
			<div class="flex gap-1">
				<ColorBox color={preset.themeStyle.primary} />
				<ColorBox color={preset.themeStyle.secondary} />
				<ColorBox color={preset.themeStyle.accent} />
			</div>
			<span class="capitalize px-1 leading-tight">{preset.name.replace(/-/g, ' ')}</span>
		</div>
	</Button>
</div>
