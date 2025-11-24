<script lang="ts">
	import type { ChatMessage } from '$lib/types/ai';
	import { cn } from '$lib/utils';
	import AssistantMessage from './assistant-message.svelte';
	import UserMessage from './user-message.svelte';

	interface MessageProps {
		message: ChatMessage;
		isLastMessageStreaming: boolean;
	}
	let { message, isLastMessageStreaming }: MessageProps = $props();

	const isUser = message.role === 'user';
	const isAssistant = message.role === 'assistant';
</script>

<div class={cn('w-full flex items-start gap-4', isUser ? 'justify-end' : 'justify-start')}>
	<div class={cn('flex w-full max-w-[90%] items-start')}>
		<div class="relative flex w-full flex-col gap-2">
			{#if isUser}
				<UserMessage {message} isEditing={false} />
			{/if}
			{#if isAssistant}
				<AssistantMessage {message} {isLastMessageStreaming} />
			{/if}
		</div>
	</div>
</div>
