<script>
	import { inViewFly } from '$lib/attachments/in-view-fly.svelte';
	import { ArrowRightIcon } from '@lucide/svelte';
	import { Button } from '../ui/button';
</script>

<section
	class="py-20 md:py-32 text-primary-foreground bg-linear-to-br from-primary to-primary/80 relative"
>
	<div></div>
	<div></div>
	<div class=""></div>

	<div class="container mx-auto px-4 md:px-6 relative">
		<div
			{@attach inViewFly({ threshold: 0.1 })}
			class="flex flex-col items-center justify-center space-y-6 text-center"
		>
			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
				Ready to Make Your Components Stand Out?
			</h2>
			<p>
				Start customizing your shadcn/ui components today and create a unique look for your
				application.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 mt-4">
				<a href="/editor/home">
					<Button
						variant="secondary"
						size="lg"
						class="rounded-full h-12 px-8 cursor-pointer shadow-md hover:shadow-lg"
					>
						Try It Now
						<ArrowRightIcon class="ml-2 size-4" />
					</Button>
				</a>
				<a href="/editor/home">
					<Button
						variant="outline"
						size="lg"
						class="rounded-full bg-transparent h-12 px-8 cursor-pointer shadow-md hover:shadow-lg"
					>
						View on GitHub
					</Button>
				</a>
			</div>
			<p>No login required. Free to use. Open source.</p>
		</div>
	</div>
</section>
