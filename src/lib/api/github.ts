import type { GithubStars } from '$lib/types/github';

export const fetchGithubStars = async (owner: string, repo: string) => {
	return await fetch(`https://api.github.com/repos/${owner}/${repo}`)
		.then((res) => res.json())
		.then((result: GithubStars) => result)
		.catch((err) => err);
};
