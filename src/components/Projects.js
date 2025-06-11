import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useGitHub } from '../context/GitHubContext';
import { FaGithub, FaStar, FaCodeBranch, FaBuilding, FaUser } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

// Featured projects from resume
const featuredProjects = [
  {
    name: 'Mraba - SmartStock',
    description: 'A super app for businesses to manage stocks, sales, purchases, and generate business insights.',
    url: 'https://kanida.web.app',
    technologies: ['Flutter', 'Node.js', 'PostgresDB']
  },
  {
    name: 'NMB Mkononi',
    description: 'Mobile banking experience for NMB Bank customers.',
    technologies: ['React Native', 'Flutter', 'Android'],
    url: 'https://play.google.com/store/apps/details?id=com.nmb10.eclectics&hl=en',
  },
  {
    name: 'MnadaPoa',
    description: 'Platform connecting buyers with auctions cars',
    url: 'https://play.google.com/store/apps/details?id=com.fahamutech.manadapoa&hl=en',
    technologies: ['Flutter', 'Node.js', 'PostgresDB']
  },
  {
    name: 'GSM Website',
    description: 'GSM Group is an innovation-driven conglomerate that offers a wide range of services across the African continent.',
    url: 'https://gsmgroup.africa/',
    technologies: ['React', 'Node.js', 'PostgresDB']
  }
];

const Projects = () => {
  const { repos, loading, error } = useGitHub();
  const [activeTab, setActiveTab] = useState('featured');

  // Categorize repositories
  const personalRepos = Array.isArray(repos) 
    ? repos
        .filter(repo => !repo.fork && !repo.archived && (!repo.owner || repo.owner.login === 'joshuamshana'))
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
    : [];

  const orgRepos = Array.isArray(repos)
    ? repos
        .filter(repo => !repo.fork && !repo.archived && repo.owner && repo.owner.type === 'Organization')
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
    : [];

  return (
    <div className="min-h-screen py-20 px-4" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          My Work
        </h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          A collection of my personal projects, open-source contributions, and featured work
        </p>

        <div className="mb-8">
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-700 pb-2">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'featured' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <FaStar className="inline mr-2 text-yellow-400" />
              Featured Projects
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'personal' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <FaUser className="inline mr-2" />
              Personal Projects
            </button>
            {orgRepos.length > 0 && (
              <button
                onClick={() => setActiveTab('organizations')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'organizations' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <FaBuilding className="inline mr-2" />
                Organization Work
              </button>
            )}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-4">Loading projects...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-400">
              <p>Error loading projects. Please try again later.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeTab === 'personal' && personalRepos.map((repo, index) => (
                <ProjectCard key={repo.id} project={repo} index={index} />
              ))}
              {activeTab === 'organizations' && orgRepos.map((repo, index) => (
                <ProjectCard key={repo.id} project={repo} index={index} />
              ))}
              {activeTab === 'featured' && featuredProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} isFeatured={true} />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
