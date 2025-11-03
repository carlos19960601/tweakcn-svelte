<script>
	import Header from '$lib/components/home/header.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import ThemePresetSelector from '$lib/components/home/theme-preset-selector.svelte';

	let isScrolled = $state(false);
	let mobileMenuOpen = $state(false);
</script>

<div class="bg-background text-foreground flex flex-col justify-items-center">
	<Header {isScrolled} {mobileMenuOpen} />
	<main>
		<Hero />
		<ThemePresetSelector />
	</main>
</div>
