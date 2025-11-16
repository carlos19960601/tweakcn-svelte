<script>
	import { inViewFly } from '$lib/attachments/inview-fly.svelte';
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
	import { Badge } from '../ui/badge';
	import { faqs } from './faq/data';
</script>

<section>
	<div class="container mx-auto px-4 md:px-6">
		<div class="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
			<Badge variant="secondary" class="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm">
				<span class="text-primary mr-1">✦</span> FAQ
			</Badge>
			<h2 class="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
			<p class="text-muted-foreground max-w-[800px] md:text-lg">
				Find answers to common questions about tweakcn.
			</p>
		</div>
		<div class="mx-auto max-w-3xl">
			<Accordion type="single">
				{#each faqs as faq, index}
					<div {@attach inViewFly({ threshold: 0.1, delay: index * 50 })}>
						<AccordionItem value={`item-${index}`} class="border-border/40 border-b py-2 group">
							<AccordionTrigger
								class="group-hover:text-primary text-left font-medium transition-colors hover:no-underline"
							>
								{faq.question}
							</AccordionTrigger>
							<AccordionContent class="text-muted-foreground">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					</div>
				{/each}
			</Accordion>
		</div>
	</div>
</section>
