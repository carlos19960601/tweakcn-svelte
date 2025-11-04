<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
		/**
		 * Whether to reverse the animation direction
		 * @default false
		 */
		reverse?: boolean;
		/**
		 * Whether to pause the animation on hover
		 * @default false
		 */
		pauseOnHover?: boolean;
		/**
		 * Content to be displayed in the marquee
		 */
		/**
		 * Whether to animate vertically instead of horizontally
		 * @default false
		 */
		vertical?: boolean;
		/**
		 * Number of times to repeat the content
		 * @default 4
		 */
		repeat?: number;
	}

	let {
		class: className,
		reverse = false,
		pauseOnHover = false,
		vertical = false,
		repeat = 4,
		children,
		...props
	}: MarqueeProps = $props();
</script>

<div
	{...props}
	class={cn(className, 'flex group gap-(--gap)', { 'flex-row': !vertical, 'flex-col': vertical })}
	style="--gap: 1rem;--duration: 40s;"
>
	{#each { length: repeat } as _}
		<div
			class={cn(
				'flex shrink-0 justify-around gap-(--gap)',
				vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
				{
					'group-hover:paused': pauseOnHover
				}
			)}
			style:animation-direction={reverse ? 'reverse' : 'normal'}
		>
			{@render children?.()}
		</div>
	{/each}
</div>
