<script lang="ts">
	import Logo from '$lib/icons/logo.svelte';
	import type { ChatMessage } from '$lib/types/ai';
	import { cn } from '$lib/utils';
	import LoadingLogo from './loading-logo.svelte';
	import StreamText from './stream-text.svelte';

	interface Props {
		message: ChatMessage;
		isLastMessageStreaming: boolean;
	}

	let { message, isLastMessageStreaming }: Props = $props();
</script>

<div class="flex items-start gap-1.5">
	{#if isLastMessageStreaming}
		<div class="relative flex size-6 items-center justify-center">
			<LoadingLogo />
		</div>
	{:else}
		<div
			class={cn(
				'border-border/50 bg-foreground relative flex size-6 items-center justify-center rounded-full border select-none'
			)}
		>
			<Logo class="text-background size-full p-0.5" />
		</div>
	{/if}
	<div class="relative flex flex-col w-full gap-3">
		{#each message.parts as part}
			{#if part.type === 'text'}
				<StreamText text={part.text} />
			{/if}
			{#if part.type === 'tool-generateTheme'}{/if}
		{/each}
	</div>
</div>
