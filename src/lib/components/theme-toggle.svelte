<script lang="ts">
	import TooltipWrapper from '$lib/components/tooltip-wrapper.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '@/utils';
	import { MoonIcon, SunIcon } from '@lucide/svelte';
	import { mode, toggleMode } from 'mode-watcher';
	import type { ComponentProps } from 'svelte';

	let { class: className, ...props }: ComponentProps<typeof Button> = $props();
</script>

<TooltipWrapper label="Toggle theme">
	<Button class={cn('cursor-pointer', className)} {...props} onclick={() => toggleMode()}>
		{#if mode.current === 'light'}
			<SunIcon />
		{:else}
			<MoonIcon />
		{/if}
	</Button>
</TooltipWrapper>
