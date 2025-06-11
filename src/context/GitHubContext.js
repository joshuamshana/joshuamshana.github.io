import React, { createContext, useState, useEffect, useContext } from 'react';
import { getGitHubProfile, getGitHubRepos } from '../services/githubService';

const GitHubContext = createContext();

export const useGitHub = () => {
  return useContext(GitHubContext);
};

export const GitHubProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'joshuamshana';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [profileData, reposData] = await Promise.all([
          getGitHubProfile(GITHUB_USERNAME),
          getGitHubRepos(GITHUB_USERNAME)
        ]);
        setProfile(profileData);
        setRepos(reposData);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching GitHub data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const value = {
    profile,
    repos,
    loading,
    error
  };

  return (
    <GitHubContext.Provider value={value}>
      {children}
    </GitHubContext.Provider>
  );
};
