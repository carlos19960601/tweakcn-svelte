<script lang="ts">
	import { page } from '$app/state';
	import Editor from '$lib/components/editor/editor.svelte';
	const themeId = page.params.slug;
</script>

<Editor />
