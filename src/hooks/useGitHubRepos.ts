import { useState, useEffect } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

interface UseGitHubReposReturn {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

const GITHUB_USERNAME = 'JaickerLozano';

export function useGitHubRepos(): UseGitHubReposReturn {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );

        if (!response.ok) {
          if (response.status === 403) {
            throw new Error('GitHub API rate limit exceeded');
          }
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();
        
        // Sort by stars and take top 6
        const sortedRepos = data
          .filter((repo: GitHubRepo) => !repo.fork)
          .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setRepos(sortedRepos);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
}
