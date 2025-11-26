<script>
	import { useGithubStars } from '$lib/hooks/use-github-stars.svelte';
	import Github from '$lib/icons/github.svelte';
	import Logo from '$lib/icons/logo.svelte';
	import { formatCompactNumber } from '$lib/utils';
	import { FigmaIcon, TwitterIcon } from '@lucide/svelte';
	import FigmaExportDialog from './figma-export-dialog.svelte';
	import GetProCta from './get-pro-cta.svelte';
	import SocialLink from './social-link.svelte';
	import { Button } from './ui/button';
	import { Separator } from './ui/separator';

	const githubStars = useGithubStars('jnsahaj', 'tweakcn');
</script>

<header class="border-b">
	<div class="flex items-center justify-between gap-2 p-4">
		<div>
			<a href="/" title="tweakcn" class="flex items-center gap-1"
				><Logo class="size-6" /><span class="hidden md:block font-bold">tweakcn</span></a
			>
		</div>
		<div class="flex items-center gap-3.5">
			<GetProCta class="h-8" />

			<SocialLink
				href="https://github.com/jnsahaj/tweakcn"
				class="flex items-center gap-2 text-sm font-bold"
			>
				<Github class="size-4" />
				{#if githubStars.data?.stargazers_count && githubStars.data.stargazers_count > 0}
					{formatCompactNumber(githubStars.data.stargazers_count)}
				{/if}
			</SocialLink>
			<Separator orientation="vertical" class="h-8" />
			<div class="flex items-center gap-3.5">
				<div class="hidden md:flex items-center">
					<!-- <SocialLink href="https://discord.gg/Phs4u2NM3n">
						<DiscordIcon className="size-5" />
					</SocialLink> -->
				</div>
				<SocialLink href="https://x.com/iamsahaj_xyz">
					<TwitterIcon className="size-4" />
				</SocialLink>
			</div>
			<Separator orientation="vertical" class="h-8" />
			<Button variant="outline" class="flex h-8 items-center gap-2">
				<FigmaIcon class="size-4" /> Export to Figma
			</Button>
		</div>
	</div>
	<FigmaExportDialog />
</header>
