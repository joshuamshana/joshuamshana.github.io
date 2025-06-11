const GITHUB_API = 'https://api.github.com';

export const getGitHubProfile = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API}/users/${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub profile');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
};

export const getGitHubRepos = async (username) => {
  try {
    const response = await fetch(
      `${GITHUB_API}/users/${username}/repos?sort=updated&direction=desc`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};
