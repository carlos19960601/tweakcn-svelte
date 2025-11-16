<script lang="ts">
	import type { Step } from './data';

	let { step, index }: { step: Step; index: number } = $props();
</script>

<div
	class="flex items-center size-16 justify-center rounded-full from-primary to-primary/70 text-xl font-bold shadow-lg relative"
>
	{step.step}
	<div
		class="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75"
		style="animation-duration: 3s;animation-delay: {index * 0.5}s;"
	></div>
</div>
<h3 class="text-xl font-bold">{step.title}</h3>
<p class="text-muted-foreground">{step.description}</p>
