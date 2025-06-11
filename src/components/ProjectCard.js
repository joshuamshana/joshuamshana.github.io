import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index, isFeatured = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border border-gray-700"
  >
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-blue-400">{project.name}</h3>
        {!isFeatured && (
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-gray-400 text-sm">
              <FaStar className="mr-1 text-yellow-400" />
              {project.stargazers_count || 0}
            </span>
            <span className="flex items-center text-gray-400 text-sm">
              <FaCodeBranch className="mr-1" />
              {project.forks_count || 0}
            </span>
          </div>
        )}
      </div>
      
      <p className="text-gray-300 mb-4 flex-1">
        {project.description || 'No description provided.'}
      </p>
      
      {(project.topics?.length > 0 || project.technologies?.length > 0) && (
        <div className="flex flex-wrap gap-2 mb-4">
          {(project.topics?.slice(0, 3) || project.technologies || []).map((item, i) => (
            <span
              key={i}
              className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      )}
      
      <motion.a
        href={isFeatured ? project.url : project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
      >
        {isFeatured ? (
          <>
            <FaExternalLinkAlt className="mr-2" />
            View Project
          </>
        ) : (
          <>
            <FaGithub className="mr-2" />
            View on GitHub
          </>
        )}
      </motion.a>
    </div>
  </motion.div>
);

export default ProjectCard;
