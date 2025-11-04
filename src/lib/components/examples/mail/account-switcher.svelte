<script lang="ts">
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	import type { Account } from './data.svelte';

	let { accounts }: { accounts: Account[] } = $props();

	let selectedAccount = $state(accounts[0]?.email ?? '');
</script>

<Select type="single" bind:value={selectedAccount}>
	<SelectTrigger class="w-full">
		{#if selectedAccount}
			<div class="flex items-center gap-2">
				{@html accounts.find((account) => account.email === selectedAccount)?.icon}
				<span>{accounts.find((account) => account.email === selectedAccount)?.label}</span>
			</div>
		{:else}
			Select an account
		{/if}
	</SelectTrigger>
	<SelectContent>
		{#each accounts as account (account.email)}
			<SelectItem value={account.email}>
				<div class="flex items-center gap-3">
					{@html account.icon}
					<span>{account.label}</span>
				</div>
			</SelectItem>
		{/each}
	</SelectContent>
</Select>
