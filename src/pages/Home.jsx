import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

/**
 * Home page component
 */
const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, edit, and organize your tasks with our intuitive task manager.',
      icon: '📝',
      link: '/tasks'
    },
    {
      title: 'API Integration',
      description: 'Explore data from various APIs with search and pagination features.',
      icon: '🔗',
      link: '/api-data'
    },
    {
      title: 'Responsive Design',
      description: 'Beautiful, responsive design that works on all devices.',
      icon: '📱',
      link: '#'
    },
    {
      title: 'Dark Mode',
      description: 'Switch between light and dark themes for comfortable viewing.',
      icon: '🌙',
      link: '#'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to{' '}
          <span className="text-blue-600 dark:text-blue-400">PLP Task Manager</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          A modern React application built with Tailwind CSS that demonstrates component architecture, 
          state management, hooks usage, and API integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Get Started with Tasks
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore API Data
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={index} hover className="p-6 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {feature.description}
            </p>
            {feature.link !== '#' && (
              <Link to={feature.link}>
                <Button variant="primary" size="sm" className="w-full">
                  Learn More
                </Button>
              </Link>
            )}
          </Card>
        ))}
      </div>

      {/* Technology Stack */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Built with Modern Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'React', description: 'UI Library', color: 'text-blue-500' },
            { name: 'Tailwind CSS', description: 'Styling', color: 'text-cyan-500' },
            { name: 'Vite', description: 'Build Tool', color: 'text-purple-500' },
            { name: 'React Router', description: 'Navigation', color: 'text-red-500' }
          ].map((tech, index) => (
            <div key={index} className="text-center">
              <div className={`text-2xl font-bold ${tech.color} mb-2`}>
                {tech.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {tech.description}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Explore the features and see how modern React development works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tasks">
              <Button variant="primary" size="lg">
                Start Managing Tasks
              </Button>
            </Link>
            <Link to="/api-data">
              <Button variant="secondary" size="lg">
                View API Data
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;

