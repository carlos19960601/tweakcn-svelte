<script lang="ts">
	import type { ChatMessage } from '$lib/types/ai';
	import ChatImagePreview from './chat-image-preview.svelte';

	interface UserMessageProps {
		message: ChatMessage;
		isEditing: boolean;
	}

	let { message, isEditing }: UserMessageProps = $props();
	const promptData = message.metadata?.promptData;
	const shouldDisplayMsgContent = promptData?.content?.trim() != '';
	const images = promptData?.images ?? [];
</script>

<div class="relative flex flex-col gap-1">
	{#if images.length === 1}
		<div>
			<ChatImagePreview src={images[0].url} alt="Image preview" />
		</div>
	{:else if images.length > 1}
		<div class="flex flex-row items-center justify-end gap-1 self-end">
			{#each images as image}
				<div class="aspect-square size-full max-w-32 flex-1">
					<ChatImagePreview class="size-full object-cover" src={image.url} alt="Image preview" />
				</div>
			{/each}
		</div>
	{/if}

	{#if shouldDisplayMsgContent}
		<div class="bg-card/75 text-card-foreground/90 w-fit self-end rounded-lg border p-3 text-sm">
			{#if promptData}{:else}
				{message.parts.map((part) => (part.type === 'text' ? part.text : '')).join('')}
			{/if}
		</div>
	{/if}
</div>
