<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ComponentProps } from 'svelte';
	import { Streamdown } from 'svelte-streamdown';

	type ResponseProps = ComponentProps<typeof Streamdown>;

	let { class: className, ...props }: ResponseProps = $props();
</script>

<Streamdown class={cn('size-full', className)} {...props} />
