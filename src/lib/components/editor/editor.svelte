<script>
	import { ResizableHandle, ResizablePane, ResizablePaneGroup } from '../ui/resizable';
	import ThemeControlPanel from './theme-control-panel.svelte';
</script>

<div class="flex flex-1 overflow-hidden">
	<div class="size-full">
		<ResizablePaneGroup direction="horizontal">
			<ResizablePane>
				<div>
					<ThemeControlPanel />
				</div>
			</ResizablePane>
			<ResizableHandle />
			<ResizablePane></ResizablePane>
		</ResizablePaneGroup>
	</div>
</div>
