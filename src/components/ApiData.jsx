import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

/**
 * Custom hook for fetching data from API
 */
const useApiData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

/**
 * API Data component that fetches and displays data from JSONPlaceholder
 */
const ApiData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEndpoint, setSelectedEndpoint] = useState('posts');
  
  const itemsPerPage = 10;
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  
  const endpoints = [
    { key: 'posts', label: 'Posts', url: `${baseUrl}/posts` },
    { key: 'users', label: 'Users', url: `${baseUrl}/users` },
    { key: 'comments', label: 'Comments', url: `${baseUrl}/comments` },
    { key: 'albums', label: 'Albums', url: `${baseUrl}/albums` },
    { key: 'photos', label: 'Photos', url: `${baseUrl}/photos` },
  ];

  const currentEndpoint = endpoints.find(ep => ep.key === selectedEndpoint);
  const { data, loading, error } = useApiData(currentEndpoint?.url || '');

  // Filter data based on search term
  const filteredData = data.filter(item => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return Object.values(item).some(value => 
      String(value).toLowerCase().includes(searchLower)
    );
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEndpointChange = (endpoint) => {
    setSelectedEndpoint(endpoint);
    setCurrentPage(1);
    setSearchTerm('');
  };

  const renderDataItem = (item) => {
    switch (selectedEndpoint) {
      case 'posts':
        return (
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <h3 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {item.body}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              User ID: {item.userId} | Post ID: {item.id}
            </div>
          </div>
        );
      
      case 'users':
        return (
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <h3 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
              {item.name}
            </h3>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">Username:</span> {item.username}</p>
              <p><span className="font-medium">Email:</span> {item.email}</p>
              <p><span className="font-medium">Phone:</span> {item.phone}</p>
              <p><span className="font-medium">Website:</span> 
                <a href={`http://${item.website}`} target="_blank" rel="noopener noreferrer" 
                   className="text-blue-500 hover:underline ml-1">
                  {item.website}
                </a>
              </p>
              <div className="mt-2">
                <p className="font-medium">Address:</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.address.street}, {item.address.suite}<br />
                  {item.address.city}, {item.address.zipcode}
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'comments':
        return (
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <h3 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
              Comment #{item.id}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {item.body}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              Post ID: {item.postId} | Email: {item.email}
            </div>
          </div>
        );
      
      case 'albums':
        return (
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <h3 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
              {item.title}
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              User ID: {item.userId} | Album ID: {item.id}
            </div>
          </div>
        );
      
      case 'photos':
        return (
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <h3 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
              {item.title}
            </h3>
            <img 
              src={item.thumbnailUrl} 
              alt={item.title}
              className="w-20 h-20 object-cover rounded mb-2"
            />
            <div className="text-sm text-gray-500 dark:text-gray-500">
              Album ID: {item.albumId} | Photo ID: {item.id}
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <pre className="text-sm text-gray-600 dark:text-gray-400">
              {JSON.stringify(item, null, 2)}
            </pre>
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          API Data Explorer
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore data from JSONPlaceholder API with search and pagination
        </p>
      </div>

      {/* Controls */}
      <Card className="p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Endpoint Selection */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Data Type
            </label>
            <select
              value={selectedEndpoint}
              onChange={(e) => handleEndpointChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              {endpoints.map(endpoint => (
                <option key={endpoint.key} value={endpoint.key}>
                  {endpoint.label}
                </option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search in data..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </Card>

      {/* Loading State */}
      {loading && (
        <Card className="p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading data...</p>
        </Card>
      )}

      {/* Error State */}
      {error && (
        <Card className="p-8 text-center">
          <div className="text-red-600 dark:text-red-400 mb-4">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h3 className="text-lg font-semibold mb-2">Error Loading Data</h3>
            <p className="text-gray-600 dark:text-gray-400">{error}</p>
            <Button 
              variant="primary" 
              onClick={() => window.location.reload()} 
              className="mt-4"
            >
              Retry
            </Button>
          </div>
        </Card>
      )}

      {/* Data Display */}
      {!loading && !error && (
        <>
          {/* Stats */}
          <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {currentData.length} of {filteredData.length} items
            {searchTerm && ` (filtered from ${data.length} total)`}
          </div>

          {/* Data List */}
          <Card className="overflow-hidden">
            {currentData.length === 0 ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>No data found</p>
                {searchTerm && <p className="text-sm mt-2">Try adjusting your search term</p>}
              </div>
            ) : (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {currentData.map((item, index) => (
                  <div key={item.id || index} className="animate-fade-in">
                    {renderDataItem(item)}
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6 flex justify-center">
              <nav className="flex space-x-2">
                <Button
                  variant="secondary"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="secondary"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </Button>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ApiData;

