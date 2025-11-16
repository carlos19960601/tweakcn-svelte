<script lang="ts">
	import type { ChatMessage } from '$lib/types/ai';
	import ChatImagePreview from './chat-image-preview.svelte';

	interface UserMessageProps {
		message: ChatMessage;
		isEditing: boolean;
	}

	let { message, isEditing }: UserMessageProps = $props();
	const promptData = message.metadata?.promptData;
	const images = promptData?.images ?? [];
</script>

<div>
	{#if images.length === 1}
		<div>
			<ChatImagePreview src={images[0].url} alt="Image preview" />
		</div>
	{:else if images.length > 1}
		<div>
			{#each images as image}
				<div>
					<ChatImagePreview src={image.url} alt="Image preview" />
				</div>
			{/each}
		</div>
	{/if}
</div>
