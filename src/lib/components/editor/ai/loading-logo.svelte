<script>
	import Logo from '$lib/icons/logo.svelte';
	import { SparkleIcon } from '@lucide/svelte';
</script>

<div class="bg-primary/90 absolute inset-0 -z-1 m-auto size-[65%] animate-ping rounded-full"></div>

<div
	class="bg-primary/30 absolute inset-0 -z-1 m-auto size-[85%] animate-ping rounded-full delay-100"
></div>

<div class="bg-background relative isolate mx-auto size-full rounded-full">
	<div class="absolute top-0 left-0 size-[30%]">
		<SparkleIcon class="size-full animate-pulse fill-current" />
	</div>
	<Logo class="size-full animate-pulse p-0.5 delay-150" />
	<div class="absolute right-0 bottom-0 size-[20%]">
		<SparkleIcon class="size-full animate-pulse fill-current delay-300" />
	</div>
</div>
