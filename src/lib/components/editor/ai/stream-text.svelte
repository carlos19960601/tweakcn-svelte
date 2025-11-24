<script lang="ts">
	import { useStreamText } from '$lib/hooks/use-stream-text.svelte';
	import { Streamdown } from 'svelte-streamdown';

	interface StreamTextProps {
		text: string;
		animate?: boolean;
		markdown?: boolean;
		class?: string;
	}

	let { text, animate, markdown, class: className }: StreamTextProps = $props();
	const { stream, addPart } = useStreamText();
</script>

{#if markdown}
	<Streamdown content={text} />
{:else}
	<span class={className}>{text}</span>
{/if}
