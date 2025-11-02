<script lang="ts">
	import { colorFormatter } from '@/utils';
	import { getPresetThemeStyle } from '@/utils/theme-preset.svelte';
	import AnimatedRow from '../animated-row.svelte';
	import PresetButton from './preset-button.svelte';

	let { presetNames, mode }: { presetNames: string[]; mode: 'light' | 'dark' } = $props();

	// --- Configuration ---
	const numRows = 3;
	const buttonWidthPx = 160; // Keep consistent with previous style
	const gapPx = 16; // space-x-4 -> 1rem = 16px
	const rowGapPx = 16; // gap-y-4 -> 1rem = 16px
	const duplicationFactor = 4; // Duplicate multiple times for wider screens
	const baseDurationPerItem = 5; // Seconds per item for animation speed
	// ---------------------

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

		const duplicatedRowPresets = Array(duplicationFactor).fill(rowPresets).flat();
		const totalWidth = numPresetsInRow * (buttonWidthPx + gapPx);
		const duration = numPresetsInRow * baseDurationPerItem;

		const initialOffset = 0;

		const presets = duplicatedRowPresets.map((presetName, index) => {
			const themeStyle = getPresetThemeStyle(presetName)[mode];
			return {
				name: presetName,
				themeStyle: themeStyle,
				bgColor: colorFormatter(themeStyle.primary, 'hsl', '4')
			};
		});

		return {
			key: `row-${rowIndex}`,
			presets: presets,
			numOriginalPresets: numPresetsInRow,
			transition: {
				duration,
				ease: 'liear' as const,
				repeat: Infinity
			},
			style: {
				x: initialOffset
			}
		};
	};

	const rowsData = Array.from({ length: numRows }, (_, i) => createRowProps(i)).filter(Boolean);
</script>

<div class="flex flex-col py-2" style="gap: {rowGapPx}px;">
	{#each rowsData as rowsData}
		<AnimatedRow>
			<div class="flex" style="gap: {gapPx}px;">
				{#each rowsData!.presets as preset, index}
					<PresetButton {preset} />
				{/each}
			</div>
		</AnimatedRow>
	{/each}
</div>
