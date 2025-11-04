<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Separator } from '$lib/components/ui/separator';
	import type { Mail } from './data.svelte';

	interface MailDisplayProps {
		mail?: Mail;
	}

	let { mail }: MailDisplayProps = $props();
</script>

<div class="flex h-full flex-col">
	<div></div>
	<Separator />
	{#if mail}
		<div class="flex flex-1 flex-col">
			<div class="flex items-start p-4">
				<div class="flex items-start gap-4 text-sm">
					<Avatar>
						<AvatarImage alt={mail.name} />
						<AvatarFallback>
							{mail.name
								.split(' ')
								.map((chunk) => chunk[0])
								.join('')}
						</AvatarFallback>
					</Avatar>
					<div class="grid gap-1">
						<div class="font-semibold">{mail.name}</div>
						<div class="line-clamp-1 text-xs">{mail.subject}</div>
						<div class="line-clamp-1 text-xs">
							<span>Reply-To:</span>
							{mail.email}
						</div>
					</div>
				</div>
				{#if mail}{/if}
			</div>
			<Separator />
			<div></div>
			<Separator />
			<div></div>
		</div>
	{:else}
		<div class="text-muted-foreground p-8 text-center">No message selected</div>
	{/if}
</div>
