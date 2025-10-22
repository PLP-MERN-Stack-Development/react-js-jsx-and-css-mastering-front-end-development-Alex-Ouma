import React from 'react';
import TaskManager from '../components/TaskManager';

/**
 * Tasks page component
 */
const Tasks = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Task Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks with our powerful task manager. Add, complete, and filter tasks with ease.
        </p>
      </div>
      
      <TaskManager />
    </div>
  );
};

export default Tasks;

