import { fetchGithubStars } from '@/api/github';
import type { GithubStars } from '@/types/github';
import { createQuery } from '@tanstack/svelte-query';

export function useGithubStars(owner: string, repo: string) {
	let data = $state<GithubStars | null>(null);
	let error = $state<Error | null>(null);
	let loading = $state(false);

	$effect(() => {
		loading = true;

		fetchGithubStars(owner, repo)
			.then((result) => {
				data = result;
			})
			.catch((err) => {
				error = err;
			})
			.finally(() => {
				loading = false;
			});
	});

	return {
		get data() {
			return data;
		},
		get error() {
			return error;
		},
		get loading() {
			return loading;
		}
	};
}

export function useGithubStars2(owner: string, repo: string) {
	const { data, error, isLoading } = createQuery<GithubStars>(() => ({
		queryKey: [owner, repo],
		queryFn: () => fetchGithubStars(owner, repo)
	}));

	return {
		get data() {
			return data;
		},
		get error() {
			return error;
		},
		get isLoading() {
			return isLoading;
		}
	};
}
