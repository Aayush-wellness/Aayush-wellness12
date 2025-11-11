const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-gray-100 animate-pulse">
      <div className="h-20 bg-gray-200"></div>
      <div className="h-screen bg-gray-300"></div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
        <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
        <div className="h-64 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
