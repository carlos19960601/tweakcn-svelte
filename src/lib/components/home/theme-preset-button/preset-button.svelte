<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import ColorBox from './color-box.svelte';

	let { preset } = $props();
</script>

<div
	role="button"
	tabindex="0"
	class="shrink-0 min-w-40 hover:scale-[102%] hover:-translate-y-[3px] transition-transform duration-200 ease-out"
>
	<Button
		variant="ghost"
		class={cn(
			'flex w-full h-full items-center justify-center px-4 py-3 scroll-py-3.5 hover:shadow-lg'
		)}
		style="background-color: {preset.bgColor
			.replace('hsl', 'hsla')
			.replace(/\s+/g, ', ')
			.replace(')', ', 0.10)')}; color: {preset.themeStyle.foreground}"
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
