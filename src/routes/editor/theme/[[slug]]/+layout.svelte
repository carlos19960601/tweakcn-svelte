<script>
	import Header from '$lib/components/header.svelte';

	let { children } = $props();
</script>

<div class="relative flex h-svh flex-col overflow-hidden">
	<Header />
	<main class="flex flex-1 flex-col overflow-hidden">
		{@render children?.()}
	</main>
</div>
