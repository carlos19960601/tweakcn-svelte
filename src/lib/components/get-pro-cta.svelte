<script lang="ts">
	import { cn } from '$lib/utils';
	import { GemIcon } from '@lucide/svelte';
	import type { ComponentProps } from 'svelte';
	import { Button } from './ui/button';

	let { class: className, ...props }: ComponentProps<typeof Button> = $props();
</script>

<Button
	variant="ghost"
	class={cn(
		'text-primary animate-in fade-in-50 bg-primary/10 hover:bg-primary hover:text-primary-foreground shadow-none duration-300',
		className
	)}
	{...props}
>
	<a href="/pricing">
		<GemIcon />
		Get Pro
	</a>
</Button>
