<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Beautiful themes for shadcn/ui — tweakcn | Theme Editor & Generator</title>
	<meta
		name="description"
		content="Customize theme for shadcn/ui with tweakcn's interactive editor. Supports Tailwind CSS v4, Shadcn UI, and custom styles. Modify properties, preview changes, and get the code in real time."
	/>
	<meta
		name="keywords"
		content="theme editor, theme generator, shadcn, ui, components, react, tailwind, button, editor, visual editor, component editor, web development, frontend, design system, UI components, React components, Tailwind CSS, shadcn/ui themes"
	/>
</svelte:head>

<ModeWatcher />
{@render children?.()}
