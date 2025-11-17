<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { GithubIcon, TwitterIcon } from '@lucide/svelte';
</script>

<footer class="bg-background/95 w-full border-t backdrop-blur-sm">
	<div class="container mx-auto flex flex-col gap-8 px-4 py-10">
		<div class="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
			<div class="col-span-2 max-w-md space-y-4">
				<a href="/" class="flex items-center gap-2 font-bold"
					><img src={logo} class="size-6" alt="Logo" />
					<span>tweakcn</span></a
				>
				<p class="text-muted-foreground text-sm">
					A powerful visual theme editor for shadcn/ui components with Tailwind CSS support. Make
					your components stand out.
				</p>
				<div class="flex gap-4">
					<a
						href="https://github.com/jnsahaj/tweakcn"
						class="text-muted-foreground hover:text-foreground transition-colors"
					>
						<GithubIcon className="size-5" />
						<span class="sr-only">GitHub</span>
					</a>

					<a
						href="https://x.com/iamsahaj_xyz"
						class="text-muted-foreground hover:text-foreground transition-colors"
					>
						<TwitterIcon className="size-5" />
						<span class="sr-only">Twitter</span>
					</a>
				</div>
			</div>
			<div class="space-y-4">
				<h4 class="text-sm font-bold">Product</h4>
				<ul class="space-y-2 text-sm">
					<li>
						<a
							href="/#features"
							class="text-muted-foreground hover:text-foreground transition-colors"
						>
							Features
						</a>
					</li>
					<li>
						<a
							href="/#examples"
							class="text-muted-foreground hover:text-foreground transition-colors"
						>
							Examples
						</a>
					</li>
					<li>
						<a
							href="/#roadmap"
							class="text-muted-foreground hover:text-foreground transition-colors"
						>
							Roadmap
						</a>
					</li>
				</ul>
			</div>
			<div class="space-y-4">
				<h4 class="text-sm font-bold">Resources</h4>
				<ul class="space-y-2 text-sm">
					<li>
						<a
							href="https://github.com/jnsahaj/tweakcn"
							class="text-muted-foreground hover:text-foreground transition-colors"
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href="https://discord.gg/Phs4u2NM3n"
							class="text-muted-foreground hover:text-foreground transition-colors"
						>
							Discord
						</a>
					</li>
					<li>
						<a
							href="https://x.com/messages/compose?recipient_id=1426676644152889345"
							class="text-muted-foreground hover:text-foreground transition-colors"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div
			class="border-border/40 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
		>
			<p class="text-muted-foreground text-xs">
				&copy; {new Date().getFullYear()} tweakcn. All rights reserved.
			</p>
			<p class="text-muted-foreground text-xs"><a href="/privacy-policy">Privacy Policy</a></p>
		</div>
	</div>
</footer>
