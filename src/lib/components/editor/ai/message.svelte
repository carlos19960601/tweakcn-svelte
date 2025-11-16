<script lang="ts">
	import type { ChatMessage } from '$lib/types/ai';
	import UserMessage from './user-message.svelte';

	interface MessageProps {
		message: ChatMessage;
	}
	let { message }: MessageProps = $props();

	const isUser = message.role === 'user';
	const isAssistant = message.role === 'assistant';
</script>

<div>
	<div>
		<div>
			{#if isUser}
				<UserMessage {message} isEditing={false} />
			{/if}
			{#if isAssistant}{/if}
		</div>
	</div>
</div>
