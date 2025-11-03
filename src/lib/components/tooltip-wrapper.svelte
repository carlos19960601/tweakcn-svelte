<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ComponentProps } from 'svelte';
	import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

	let {
		label,
		command,
		class: className,
		children,
		...props
	}: ComponentProps<typeof TooltipTrigger> & {
		label: string;
	} = $props();
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger class={cn(className)} {...props}>
			{@render children?.()}
		</TooltipTrigger>
		<TooltipContent>
			<span>
				{label}
				{#if command}
					<kbd class="bg-muted text-muted-foreground flex items-center">
						{command}
					</kbd>
				{/if}
			</span>
		</TooltipContent>
	</Tooltip>
</TooltipProvider>
