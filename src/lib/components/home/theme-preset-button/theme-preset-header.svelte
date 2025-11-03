<script lang="ts">
	import Badge from '@/components/ui/badge/badge.svelte';
	import { useIntersectionObserver } from '@/hooks/use-intersection-observer.svelte';
	import { cn } from '@/utils';

	// 使用 Intersection Observer，阈值 0.2 表示 20% 可见时触发
	const observer = useIntersectionObserver({ threshold: 0.2 });

	// 添加调试
	$effect(() => {
		console.log(`ThemePresetHeader (${observer.id}) hasIntersected:`, observer.hasIntersected);
	});
</script>

<!-- transition:fly={{ y: 20, duration: 500, easing: cubicOut }} -->

<div use:observer.ref>
	<div
		class={cn(
			'flex flex-col items-center space-y-4 text-center mb-12 transition-transform duration-500 ease-out',
			observer.hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
		)}
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
</div>
