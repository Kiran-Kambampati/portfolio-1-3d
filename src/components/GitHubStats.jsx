import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCodeBranch, FaUser } from 'react-icons/fa';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration since we can't make real API calls
  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setStats({
        public_repos: 25,
        followers: 48,
        following: 32,
        total_stars: 156
      });
      
      setRepos([
        {
          id: 1,
          name: "ChatSphere",
          description: "Real-time chat application with modern UI",
          stargazers_count: 42,
          language: "JavaScript",
          html_url: "#"
        },
        {
          id: 2,
          name: "Chatterbox",
          description: "AI-powered voice translation application",
          stargazers_count: 38,
          language: "Python",
          html_url: "#"
        },
        {
          id: 3,
          name: "Portfolio-3D",
          description: "Interactive 3D portfolio website",
          stargazers_count: 76,
          language: "JavaScript",
          html_url: "#"
        }
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f7df1e',
      Python: '#3776ab',
      TypeScript: '#007acc',
      React: '#61dafb',
      'C++': '#00599c',
      Java: '#f89820'
    };
    return colors[language] || '#6b7280';
  };

  if (loading) {
    return (
      <div className="glass p-6 rounded-xl">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-600 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-600 rounded"></div>
            <div className="h-3 bg-gray-600 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="glass p-8 rounded-2xl"
    >
      <h3 className="text-2xl font-bold text-neon-blue mb-6 flex items-center">
        <FaCodeBranch className="mr-3" />
        GitHub Stats
      </h3>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="text-center p-4 bg-white/5 rounded-lg">
          <div className="text-2xl font-bold text-neon-blue">{stats.public_repos}</div>
          <div className="text-sm text-gray-400">Repositories</div>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-lg">
          <div className="text-2xl font-bold text-neon-purple">{stats.followers}</div>
          <div className="text-sm text-gray-400">Followers</div>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-lg">
          <div className="text-2xl font-bold text-neon-pink">{stats.following}</div>
          <div className="text-sm text-gray-400">Following</div>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-lg">
          <div className="text-2xl font-bold text-yellow-400">{stats.total_stars}</div>
          <div className="text-sm text-gray-400">Total Stars</div>
        </div>
      </div>
      
      {/* Featured Repositories */}
      <h4 className="text-lg font-semibold text-neon-purple mb-4">Featured Repositories</h4>
      <div className="space-y-4">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-white/5 rounded-lg hover-white-10 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h5 className="font-semibold text-white mb-1">{repo.name}</h5>
                <p className="text-gray-400 text-sm mb-2">{repo.description}</p>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    ></div>
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <FaStar className="text-xs" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-6 text-center"
        whileHover={{ scale: 1.05 }}
      >
        <a
          href="https://github.com/KiranKambampati"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-neon-blue/20 text-neon-blue rounded-lg hover-bg-neon-blue hover-text-black transition-all duration-300 font-semibold"
        >
          View Full Profile
        </a>
      </motion.div>
    </motion.div>
  );
};

export default GitHubStats;
