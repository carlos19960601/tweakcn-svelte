<script lang="ts">
	import { cn } from '$lib/utils';
	import Message from '../editor/ai/message.svelte';
	import { ScrollArea } from '../ui/scroll-area';
	import { CHAT_PLACEHOLDER_MESSAGES } from './chat/data';

	let { class: className }: { class: string } = $props();
</script>

<div class="bg-background/50 flex w-full h-full min-w-[350px]">
	<ScrollArea class="flex-1">
		<div class={cn('', className)}>
			{#each CHAT_PLACEHOLDER_MESSAGES as message}
				<Message {message} />
			{/each}
		</div>
	</ScrollArea>
</div>
