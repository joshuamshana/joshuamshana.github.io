import React from 'react';
import { motion } from 'framer-motion';
import { useGitHub } from '../context/GitHubContext';
import { FaGithub, FaTwitter, FaLink, FaMapMarkerAlt, FaBuilding, FaUserFriends } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const About = () => {
  const { profile, loading, error } = useGitHub();
  
  // Format the number with commas
  const formatNumber = (num) => {
    return num ? num.toLocaleString() : 0;
  };
  
  // Get the current year for experience calculation
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = profile?.created_at 
    ? currentYear - new Date(profile.created_at).getFullYear() 
    : 0;
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-4">Loading profile...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-400">
            <p>Error loading profile. Please try again later.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-800 rounded-lg p-8 mb-8">
                <div className="flex flex-col items-center text-center mb-6">
                  {profile.avatar_url && (
                    <motion.img
                      src={profile.avatar_url}
                      alt={profile.name || 'Profile'}
                      className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    />
                  )}
                  <h1 className="text-2xl font-bold">{profile.name || 'Joshua Mshana'}</h1>
                  <p className="text-blue-400 mb-2">@{profile.login || 'joshuamshana'}</p>
                  <p className="text-gray-300 mb-4">{profile.bio || 'Full Stack Developer'}</p>
                  
                  <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <a 
                      href={profile.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                    {profile.twitter_username && (
                      <a 
                        href={`https://twitter.com/${profile.twitter_username}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <FaTwitter className="mr-2" />
                        @{profile.twitter_username}
                      </a>
                    )}
                    {profile.email && (
                      <a 
                        href={`mailto:${profile.email}`}
                        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <FiMail className="mr-2" />
                        Email
                      </a>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {formatNumber(profile.public_repos || 0)}
                      </div>
                      <div className="text-xs text-gray-400">Repos</div>
                    </div>
                    <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {formatNumber(profile.followers || 0)}
                      </div>
                      <div className="text-xs text-gray-400">Followers</div>
                    </div>
                    <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {formatNumber(profile.following || 0)}
                      </div>
                      <div className="text-xs text-gray-400">Following</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 text-left">
                  {profile.company && (
                    <div className="flex items-center text-gray-300">
                      <FaBuilding className="mr-3 text-blue-400" />
                      <span>{profile.company}</span>
                    </div>
                  )}
                  {profile.location && (
                    <div className="flex items-center text-gray-300">
                      <FaMapMarkerAlt className="mr-3 text-blue-400" />
                      <span>{profile.location}</span>
                    </div>
                  )}
                  {profile.blog && (
                    <div className="flex items-center">
                      <FaLink className="mr-3 text-blue-400" />
                      <a 
                        href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {profile.blog.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
                <div className="space-y-3">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'SQL', 'Docker', 'AWS'].map((skill, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{skill}</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: '90%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java', 'Dart', 'C#'].map((lang) => (
                        <span key={lang} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Frameworks & Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Express', 'Next.js', 'Flutter', 'Laravel', 'Django', 'React Native', 'Redux', 'MobX'].map((tech) => (
                        <span key={tech} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Databases & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Docker', 'Git', 'AWS', 'Azure', 'Jira', 'Trello'].map((tool) => (
                        <span key={tool} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {profile.bio || 'Senior Software Developer with extensive experience in building scalable applications and leading development teams. Passionate about creating impactful solutions that drive business growth and improve user experiences.'}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in full-stack development with a strong focus on JavaScript/TypeScript ecosystems, and I'm dedicated to writing clean, maintainable code while staying current with emerging technologies.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-400">Senior Software Developer</h4>
                    <p className="text-gray-400 text-sm">
                      NMB Bank, Tanzania • August 2022 - Present
                    </p>
                    <p className="text-gray-300 mt-1">
                      Leading development initiatives and implementing robust software solutions to enhance banking services and customer experiences.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Founder & Lead Developer</h4>
                    <p className="text-gray-400 text-sm">
                      Mraba - SmartStock • September 2020 - Present
                    </p>
                    <p className="text-gray-300 mt-1">
                      Developed a comprehensive business management platform helping SMEs manage inventory, sales, purchases, and generate insightful reports for better decision-making.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Consultant</h4>
                    <p className="text-gray-400 text-sm">
                      Mkombozi Co.LTD • April 2022 - Present
                    </p>
                    <p className="text-gray-300 mt-1">
                      Providing expert consultation on software architecture and infrastructure to optimize business processes and system performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Full Stack Developer</h4>
                    <p className="text-gray-400 text-sm">
                      TrueBits • April 2020 - September 2020
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Full Stack Developer</h4>
                    <p className="text-gray-400 text-sm">
                      DataVision • June 2019 - January 2020
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Full Stack Developer & Project Manager</h4>
                    <p className="text-gray-400 text-sm">
                      SokoWorld • January 2019 - June 2019
                    </p>
                    <p className="text-gray-300 mt-1">
                      Led development projects and managed team workflows to deliver high-quality software solutions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-6">
                <div>
                    <h4 className="font-semibold text-blue-400">Bachelor of Science in Computer Science</h4>
                    <p className="text-gray-400 text-sm">
                      Institute of Financial Management, Tanzania • 2024 - 2027
                    </p>
                    <p className="text-gray-300 mt-1">
                      Specialized in Software Engineering
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Bachelor of Science in Computer Engineering</h4>
                    <p className="text-gray-400 text-sm">
                      University of Dar Es Salaam, Tanzania • 2016 - 2019
                    </p>
                    <p className="text-gray-300 mt-1">
                      Specialized in Software Engineering
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Advanced Certificate of Secondary Education</h4>
                    <p className="text-gray-400 text-sm">
                      Mtwara Technical Secondary School • 2015 - 2016
                    </p>
                    <p className="text-gray-300 mt-1">
                      Physics, Chemistry & Advanced Mathematics
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Swahili</span>
                      <span className="text-gray-400">Native</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">English</span>
                      <span className="text-gray-400">Fluent</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
