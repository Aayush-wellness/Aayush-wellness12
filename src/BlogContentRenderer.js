import React from 'react';

const BlogContentRenderer = ({ content }) => {
  if (!content) return null;

  // Simple markdown-like formatter
  const formatContent = (text) => {
    let formatted = text;
    
    // Convert headers
    formatted = formatted.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">$1</h3>');
    formatted = formatted.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>');
    formatted = formatted.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">$1</h1>');
    
    // Convert bold text
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
    
    // Convert italic text
    formatted = formatted.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
    
    // Convert links
    formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Convert bullet points
    formatted = formatted.replace(/^- (.*$)/gim, '<li class="ml-4 mb-1">$1</li>');
    
    // Wrap lists
    formatted = formatted.replace(/(<li class="ml-4 mb-1">.*<\/li>)/s, '<ul class="list-disc list-inside space-y-1 mb-4">$1</ul>');
    
    // Convert line breaks
    formatted = formatted.replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">');
    formatted = formatted.replace(/\n/g, '<br />');
    
    // Wrap in paragraph if not already wrapped
    if (!formatted.startsWith('<')) {
      formatted = '<p class="mb-4 text-gray-700 leading-relaxed">' + formatted + '</p>';
    }
    
    return formatted;
  };

  return (
    <div 
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ 
        __html: formatContent(content) 
      }}
    />
  );
};

export default BlogContentRenderer;
