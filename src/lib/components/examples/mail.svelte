<script lang="ts">
	import { useIntersectionObserver } from '$lib/hooks/use-intersection-observer.svelte';
	import { cn } from '$lib/utils';
	import {
		AlertCircleIcon,
		ArchiveIcon,
		ArchiveXIcon,
		FileIcon,
		InboxIcon,
		MessagesSquareIcon,
		SearchIcon,
		SendIcon,
		ShoppingCartIcon,
		Trash2Icon,
		Users2Icon
	} from '@lucide/svelte';
	import { Input } from '../ui/input';
	import { ResizableHandle, ResizablePane } from '../ui/resizable';
	import ResizablePaneGroup from '../ui/resizable/resizable-pane-group.svelte';
	import { Separator } from '../ui/separator';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
	import { TooltipProvider } from '../ui/tooltip';
	import AccountSwitcher from './mail/account-switcher.svelte';
	import { accounts, mails } from './mail/data.svelte';
	import MailDisplay from './mail/mail-display.svelte';
	import MailList from './mail/mail-list.svelte';
	import Nav from './mail/nav.svelte';

	interface MailProps {
		defaultLayout?: number[];
	}

	let { defaultLayout = [20, 32, 48] }: MailProps = $props();

	const observer = useIntersectionObserver({ threshold: 0.1 });

	let tabValue = $state('all');
</script>

<div
	use:observer.ref
	class={cn(
		'container mx-auto overflow-hidden border shadow-lg rounded-lg max-h-[60vh] md:max-h-[70vh]',
		'transition-all duration-500 delay-200',
		observer.hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
	)}
>
	<TooltipProvider delayDuration={0}>
		<ResizablePaneGroup direction="horizontal" class="max-h-[800px] h-full items-stretch">
			<ResizablePane collapsible minSize={15} maxSize={20} defaultSize={defaultLayout[0]}>
				<div class="flex h-[52px] items-center justify-center px-2">
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
				<Separator />
				<Nav
					links={[
						{
							title: 'Social',
							label: '972',
							icon: Users2Icon,
							variant: 'ghost'
						},
						{
							title: 'Updates',
							label: '342',
							icon: AlertCircleIcon,
							variant: 'ghost'
						},
						{
							title: 'Forums',
							label: '128',
							icon: MessagesSquareIcon,
							variant: 'ghost'
						},
						{
							title: 'Shopping',
							label: '8',
							icon: ShoppingCartIcon,
							variant: 'ghost'
						},
						{
							title: 'Promotions',
							label: '21',
							icon: ArchiveIcon,
							variant: 'ghost'
						}
					]}
				/>
			</ResizablePane>
			<ResizableHandle withHandle />
			<ResizablePane defaultSize={defaultLayout[1]} minSize={30}>
				<Tabs bind:value={tabValue}>
					<div class="flex items-center px-4 py-1.5">
						<h1 class="text-foreground text-xl font-bold">Inbox</h1>
						<TabsList class="ml-auto">
							<TabsTrigger value="all">All mail</TabsTrigger>
							<TabsTrigger value="unread">Unread</TabsTrigger>
						</TabsList>
					</div>
					<Separator />
					<div class="p-4 bg-background/95">
						<form>
							<div class="relative">
								<SearchIcon class="text-muted-foreground absolute top-2.5 left-2 size-4" />
								<Input placeholder="Search" class="pl-8" />
							</div>
						</form>
					</div>
					<TabsContent value="all" class="m-0 h-screen">
						<MailList items={mails} />
					</TabsContent>
					<TabsContent value="unread" class="m-0 h-screen">
						<MailList items={mails.filter((mail) => !mail.read)} />
					</TabsContent>
				</Tabs>
			</ResizablePane>
			<ResizableHandle withHandle />
			<ResizablePane defaultSize={defaultLayout[2]} minSize={30}>
				<MailDisplay mail={mails[0]} />
			</ResizablePane>
		</ResizablePaneGroup>
	</TooltipProvider>
</div>
