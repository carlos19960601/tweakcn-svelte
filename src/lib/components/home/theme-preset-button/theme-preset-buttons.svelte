<script lang="ts">
	import { inViewFly } from '$lib/attachments/in-view-fly.svelte';
	import Marquee from '$lib/components/marquee.svelte';
	import { colorFormatter } from '$lib/utils';
	import { getPresetThemeStyle } from '$lib/utils/theme-preset';
	import PresetButton from './preset-button.svelte';

	let {
		presetNames,
		mode,
		numRows = 3,
		rowGapPx = 16,
		applyThemePreset
	}: {
		presetNames: string[];
		mode: 'light' | 'dark';
		numRows?: number;
		rowGapPx?: number;
		applyThemePreset: (presetName: string) => void;
	} = $props();

	// Use the intended slice of presets
	const presetsToShow = presetNames || [];

	// Distribute presets somewhat evenly across rows
	const presetsByRow: string[][] = Array.from({ length: numRows }, () => []);
	presetsToShow.forEach((preset, index) => {
		presetsByRow[index % numRows].push(preset);
	});

	// Function to create props for a single row
	const createRowProps = (rowIndex: number) => {
		const rowPresets = presetsByRow[rowIndex];
		const numPresetsInRow = rowPresets.length;
		if (numPresetsInRow === 0) return null;

		const presets = rowPresets.map((presetName, index) => {
			const themeStyle = getPresetThemeStyle(presetName)[mode];
			return {
				name: presetName,
				themeStyle: themeStyle,
				bgColor: colorFormatter(themeStyle.primary, 'hsl', '4')
			};
		});

		return {
			key: `row-${rowIndex}`,
			presets: presets
		};
	};

	const rowsData = Array.from({ length: numRows }, (_, i) => createRowProps(i)).filter(Boolean);
</script>

<div
	{@attach inViewFly({ y: 40 })}
	class="w-full overflow-hidden mb-8 flex flex-col py-2"
	style="gap: {rowGapPx}px;mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
>
	{#each rowsData as rowData (rowData?.key)}
		<Marquee pauseOnHover style="--duration: 20s">
			{#each rowData!.presets as preset, index}
				<PresetButton {preset} {applyThemePreset} />
			{/each}
		</Marquee>
	{/each}
</div>
