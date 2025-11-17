<script>
	import Footer from '$lib/components/footer.svelte';
	import AiGenerationCta from '$lib/components/home/ai-generation-cta.svelte';
	import Cta from '$lib/components/home/cta.svelte';
	import Faq from '$lib/components/home/faq.svelte';
	import Features from '$lib/components/home/features.svelte';
	import Header from '$lib/components/home/header.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import HowItWorks from '$lib/components/home/how-it-works.svelte';
	import Roadmap from '$lib/components/home/roadmap.svelte';
	import Testimonials from '$lib/components/home/testimonials.svelte';
	import ThemePresetSelector from '$lib/components/home/theme-preset-selector.svelte';

	let isScrolled = $state(false);
	let mobileMenuOpen = $state(false);
</script>

<div class="bg-background text-foreground flex flex-col justify-items-center">
	<Header {isScrolled} {mobileMenuOpen} />
	<main>
		<Hero />
		<ThemePresetSelector />
		<Testimonials />
		<Features />
		<AiGenerationCta />
		<HowItWorks />
		<Roadmap />
		<Faq />
		<Cta />
	</main>
	<Footer />
</div>
