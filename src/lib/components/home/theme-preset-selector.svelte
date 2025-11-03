<script lang="ts">
	import { defaultPresets } from '$lib/constants/theme-presets';
	import ThemePresetButtons from './theme-preset-button/theme-preset-buttons.svelte';
	import ThemePresetHeader from './theme-preset-button/theme-preset-header.svelte';

	const presetNames = Object.keys(defaultPresets);
	const mode = 'light';
</script>

<section class="w-full py-20 md:py-32">
	<div class="container mx-auto px-4 md:px-6">
		<ThemePresetHeader />

		<ThemePresetButtons {presetNames} {mode} />
	</div>
</section>
