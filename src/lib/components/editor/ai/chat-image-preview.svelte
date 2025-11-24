<script lang="ts">
	import {
		Dialog,
		DialogContent,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { ImageIcon } from '@lucide/svelte';
	import type { HTMLImgAttributes } from 'svelte/elements';

	interface ChatImagePreviewProps extends HTMLImgAttributes {
		name?: string;
	}

	let { name, alt, src, ...props }: ChatImagePreviewProps = $props();
</script>

<Dialog>
	<DialogTrigger>
		<div class="relative size-full cursor-pointer rounded-lg border">
			<img
				{src}
				class="h-auto max-h-[250px] w-auto max-w-[250px] object-cover object-center"
				alt={alt || 'Image preview'}
				{...props}
			/>

			<div
				class="bg-accent/75 text-accent-foreground border-border/50 absolute right-2 bottom-2 flex items-center justify-end rounded-lg border p-1 opacity-0"
			>
				<ImageIcon class="size-3.5" />
			</div>
		</div>
	</DialogTrigger>
	<DialogContent>
		<DialogHeader class="sr-only">
			<DialogTitle>Image Preview</DialogTitle>
		</DialogHeader>
		<img
			{src}
			class="size-[500px] max-h-[80vh] max-w-[80vw] object-contain"
			alt="Full Image Preview"
		/>
	</DialogContent>
</Dialog>
