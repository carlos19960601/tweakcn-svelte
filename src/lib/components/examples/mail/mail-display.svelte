<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Label } from '$lib/components/ui/label';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
	import { Separator } from '$lib/components/ui/separator';
	import { Switch } from '$lib/components/ui/switch';
	import { Textarea } from '$lib/components/ui/textarea';
	import {
		ArchiveIcon,
		ArchiveXIcon,
		ClockIcon,
		EllipsisVerticalIcon,
		ForwardIcon,
		ReplyAllIcon,
		ReplyIcon,
		Trash2Icon
	} from '@lucide/svelte';
	import { addDays, addHours, format, nextSaturday } from 'date-fns';
	import type { Mail } from './data.svelte';

	interface MailDisplayProps {
		mail?: Mail;
	}

	let { mail }: MailDisplayProps = $props();

	let selectedDate = $state(new Date());
</script>

<div class="flex h-full flex-col">
	<div class="flex items-center p-2">
		<div class="flex items-center gap-2">
			<Button variant="ghost" size="icon" disabled={!mail} title="Archive">
				<ArchiveIcon class="size-4" />
				<span class="sr-only">Archive</span>
			</Button>
			<Button variant="ghost" size="icon" disabled={!mail} title="Move to junk">
				<ArchiveXIcon class="size-4" />
				<span class="sr-only">Move to junk</span>
			</Button>
			<Button variant="ghost" size="icon" disabled={!mail} title="Move to trash">
				<Trash2Icon class="h-4 w-4" />
				<span class="sr-only">Move to trash</span>
			</Button>
			<Separator orientation="vertical" class="mx-2 h-6" />
			<Popover>
				<PopoverTrigger>
					<Button variant="ghost">
						<ClockIcon class="size-4" />
						<span class="sr-only">Snooze</span>
					</Button>
				</PopoverTrigger>
				<PopoverContent class="flex w-auto p-0">
					<div class="flex flex-col gap-2 border-r px-2 py-4">
						<div class="px-4 text-sm font-medium">Snooze until</div>
						<div class="grid min-w-[250px] gap-1">
							<Button variant="ghost" class="justify-start font-normal">
								Later today
								<span class="text-muted-foreground ml-auto">
									{format(addHours(selectedDate, 4), 'E, h:mm b')}
								</span>
							</Button>
							<Button variant="ghost" class="justify-start font-normal">
								Tomorrow
								<span class="text-muted-foreground ml-auto">
									{format(addDays(selectedDate, 1), 'E, h:mm b')}
								</span>
							</Button>
							<Button variant="ghost" class="justify-start font-normal">
								This weekend
								<span class="text-muted-foreground ml-auto">
									{format(nextSaturday(selectedDate), 'E, h:mm b')}
								</span>
							</Button>
							<Button variant="ghost" class="justify-start font-normal">
								Next week
								<span class="text-muted-foreground ml-auto">
									{format(addDays(selectedDate, 7), 'E, h:mm b')}
								</span>
							</Button>
						</div>
					</div>
					<div class="p-2"></div>
				</PopoverContent>
			</Popover>
		</div>
		<div class="ml-auto flex items-center gap-2">
			<Button variant="ghost" size="icon" disabled={!mail} title="Reply">
				<ReplyIcon class="h-4 w-4" />
				<span class="sr-only">Reply</span>
			</Button>
			<Button variant="ghost" size="icon" disabled={!mail} title="Reply all">
				<ReplyAllIcon class="h-4 w-4" />
				<span class="sr-only">Reply all</span>
			</Button>
			<Button variant="ghost" size="icon" disabled={!mail} title="Forward">
				<ForwardIcon class="h-4 w-4" />
				<span class="sr-only">Forward</span>
			</Button>
		</div>
		<Separator orientation="vertical" class="mx-2 h-6" />
		<DropdownMenu>
			<DropdownMenuTrigger>
				<EllipsisVerticalIcon class="size-4" />
				<span class="sr-only">More</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem>Mark as unread</DropdownMenuItem>
				<DropdownMenuItem>Star thread</DropdownMenuItem>
				<DropdownMenuItem>Add label</DropdownMenuItem>
				<DropdownMenuItem>Mute thread</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</div>
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
				{#if mail.date}
					<div class="text-muted-foreground ml-auto text-xs">
						{format(new Date(mail.date), 'PPpp')}
					</div>{/if}
			</div>
			<Separator />
			<div class="flex-1 p-4 text-sm whitespace-pre-wrap">{mail.text}</div>
			<Separator class="mt-auto" />
			<div class="p-4">
				<form>
					<div class="grid gap-4">
						<Textarea class="p-4" placeholder={`Reply ${mail.name}...`} />
						<div class="flex items-center">
							<Label class="flex items-center gap-2 text-xs font-normal">
								<Switch /> Mute this thread
							</Label>
							<Button class="ml-auto">Send</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	{:else}
		<div class="text-muted-foreground p-8 text-center">No message selected</div>
	{/if}
</div>
