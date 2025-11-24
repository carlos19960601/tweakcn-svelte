<script lang="ts">
	import { cn } from '$lib/utils';
	import Message from '../editor/ai/message.svelte';
	import { ScrollArea } from '../ui/scroll-area';
	import { CHAT_PLACEHOLDER_MESSAGES } from './chat/data';

	let { class: className, disabled }: { class: string; disabled?: boolean } = $props();
</script>

<div class="bg-background/50 flex w-full h-full min-w-[350px]">
	<ScrollArea class="flex-1">
		<div
			class={cn(
				'flex flex-col gap-4 p-4 select-none',
				disabled && 'pointer-events-none',
				className
			)}
		>
			{#each CHAT_PLACEHOLDER_MESSAGES as message}
				<Message {message} isLastMessageStreaming={false} />
			{/each}
		</div>
	</ScrollArea>
</div>
