<script>
	import { useIntersectionObserver } from '$lib/hooks/use-intersection-observer.svelte';
	import { cn } from '$lib/utils';
	import {
		ArchiveIcon,
		ArchiveXIcon,
		FileIcon,
		InboxIcon,
		SendIcon,
		Trash2Icon
	} from '@lucide/svelte';
	import { ResizableHandle, ResizablePane } from '../ui/resizable';
	import ResizablePaneGroup from '../ui/resizable/resizable-pane-group.svelte';
	import { Separator } from '../ui/separator';
	import { TooltipProvider } from '../ui/tooltip';
	import AccountSwitcher from './mail/account-switcher.svelte';
	import { accounts } from './mail/data.svelte';
	import Nav from './mail/nav.svelte';

	const observer = useIntersectionObserver({ threshold: 0.1 });
</script>

<div
	use:observer.ref
	class={cn(
		'container mx-auto overflow-hidden border shadow-lg max-h-[60vh] md:max-h-[70px]',
		'transition-transform duration-500 delay-200',
		observer.hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
	)}
>
	<TooltipProvider delayDuration={0}>
		<ResizablePaneGroup direction="horizontal" class="min-h-[800px] h-full">
			<ResizablePane minSize={15} maxSize={20}>
				<div class="flex h-[52px] px-2">
					<AccountSwitcher {accounts} />
				</div>
				<Separator />
				<Nav
					links={[
						{
							title: 'Inbox',
							label: '128',
							icon: InboxIcon,
							variant: 'default'
						},
						{
							title: 'Drafts',
							label: '9',
							icon: FileIcon,
							variant: 'ghost'
						},
						{
							title: 'Sent',
							label: '',
							icon: SendIcon,
							variant: 'ghost'
						},
						{
							title: 'Junk',
							label: '23',
							icon: ArchiveXIcon,
							variant: 'ghost'
						},
						{
							title: 'Trash',
							label: '',
							icon: Trash2Icon,
							variant: 'ghost'
						},
						{
							title: 'Archive',
							label: '',
							icon: ArchiveIcon,
							variant: 'ghost'
						}
					]}
				/>
			</ResizablePane>
			<ResizableHandle withHandle />
			<ResizablePane></ResizablePane>
		</ResizablePaneGroup>
	</TooltipProvider>
</div>
