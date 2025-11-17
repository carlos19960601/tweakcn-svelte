<script lang="ts">
	import { inViewFly } from '$lib/attachments/in-view-fly.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<div
	{@attach inViewFly({ threshold: 0.1, y: 40 })}
	class="flex flex-col items-center space-y-4 text-center mb-12"
>
	<div class="flex items-center justify-center space-y-4 text-center">
		<Badge class="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm" variant="secondary">
			<span class="text-primary mr-1">✦</span> Theme Presets
		</Badge>
	</div>
	<h2 class="text-3xl font-bold">Elevate Your Design Instantly</h2>
	<p class="text-muted-foreground max-w-[800px] md:text-lg">
		Apply theme presets with a single click. See how each option enhances the look.
	</p>
</div>
