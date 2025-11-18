<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { Button } from '$lib/components/ui/button';
	import { useGithubStars } from '$lib/hooks/use-github-stars.svelte';
	import { formatCompactNumber } from '$lib/utils';
	import { ChevronRightIcon, GithubIcon } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import ThemeToggle from '../theme-toggle.svelte';

	const navbarItems = [
		{
			label: 'Examples',
			href: '#examples'
		},
		{
			label: 'Features',
			href: '#features'
		},
		{
			label: 'Pricing',
			href: '/pricing'
		},
		{
			label: 'Roadmap',
			href: '#roadmap'
		},
		{
			label: 'FAQ',
			href: '#faq'
		}
	];

	const owner = 'jnsahaj';
	const repo = 'tweakcn';

	let { isScrolled, mobileMenuOpen = $bindable() } = $props();
	let mounted = $state(false);

	let githubStars = useGithubStars(owner, repo);

	onMount(() => {
		mounted = true;
	});
</script>

<header>
	<div class="container mx-auto h-16 flex justify-between items-center px-4 md:px-6">
		<a href="/">
			<div class="flex items-center gap-2 font-bold">
				<img src={logo} class="size-6" alt="Logo" />
				<span class="hidden lg:block">tweakcn</span>
			</div>
		</a>
		<nav class="flex items-center gap-4 lg:gap-8">
			{#each navbarItems as item, i (item.label)}
				{#if mounted}
					<a
						transition:fly={{ duration: 300, opacity: 0, y: -10, delay: 100 + i * 50 }}
						href={item.href}
						class="text-muted-foreground hover:text-foreground text-xs lg:text-sm font-medium group relative"
						>{item.label}
						<span
							class="bg-primary absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
						></span>
					</a>
				{/if}
			{/each}
		</nav>
		<div class="hidden md:flex gap-4 items-center">
			{#if mounted}
				<div transition:scale={{ start: 0.9, opacity: 0, duration: 300, delay: 450 }}>
					<Button variant="ghost" class="cursor-pointer">
						<GithubIcon />
						{#if githubStars.data?.stargazers_count && githubStars.data.stargazers_count > 0}
							{formatCompactNumber(githubStars.data.stargazers_count)}
						{/if}
					</Button>
				</div>

				<div transition:scale={{ opacity: 0, start: 0.9, duration: 300, delay: 400 }}>
					<ThemeToggle
						variant="secondary"
						class="rounded-full transition-transform hover:scale-105"
					/>
				</div>

				<div transition:scale={{ opacity: 0, start: 0.9, duration: 300, delay: 500 }}>
					<a href="/editor/theme">
						<Button
							class="cursor-pointer rounded-full font-medium hover:scale-105 transition-transform"
						>
							Try It Now <ChevronRightIcon class="ml-1 size-4" />
						</Button>
					</a>
				</div>
			{/if}
		</div>
	</div>
</header>
