<script>
	import Header from '$lib/components/home/header.svelte';
	import Hero from '@/components/home/hero.svelte';

	let isScrolled = $state(false);
	let mobileMenuOpen = $state(false);
</script>

<div class="flex flex-col min-h-dvh">
	<Header {isScrolled} {mobileMenuOpen} />
	<main>
		<Hero />
	</main>
</div>
