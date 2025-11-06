<script lang="ts">
	import { Avatar } from '$lib/components/ui/avatar';
	import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte';
	import { Card, CardContent } from '$lib/components/ui/card';
	import type { Testimonial } from './data';

	let { testimonial }: { testimonial: Testimonial } = $props();
</script>

<Card class="max-w-[420px] min-w-[260px]">
	<a href={testimonial.href}>
		<CardContent class="flex flex-col gap-4 w-[300px] md:w-[400px]">
			<div class="flex items-center gap-3">
				<Avatar class="size-12">
					<AvatarImage src={testimonial.image} />
					<AvatarFallback>
						{testimonial.name.charAt(0)}
					</AvatarFallback>
				</Avatar>
				<div>
					<h3 class="text-foreground text-xl font-semibold">{testimonial.name}</h3>
					<p>{testimonial.tag}</p>
				</div>
			</div>
			<p class="text-foreground line-clamp-4">
				{testimonial.description}
			</p>
		</CardContent>
	</a>
</Card>
