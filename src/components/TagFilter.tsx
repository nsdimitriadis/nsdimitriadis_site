import { useState, useEffect } from 'react';

interface TagFilterProps {
  tags: string[];
  onTagChange: (selectedTags: string[]) => void;
  className?: string;
}

export default function TagFilter({ tags, onTagChange, className = '' }: TagFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newSelectedTags);
    onTagChange(newSelectedTags);
  };

  const clearAllTags = () => {
    setSelectedTags([]);
    onTagChange([]);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Filter by Tags</h3>
        {selectedTags.length > 0 && (
          <button
            onClick={clearAllTags}
            className="text-sm text-gray-400 hover:text-neon-purple transition-colors duration-200"
          >
            Clear all
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-2 text-sm rounded-lg border transition-all duration-200 hover:scale-105 ${
              selectedTags.includes(tag)
                ? 'bg-neon-purple text-white border-neon-purple shadow-lg shadow-neon-purple/25'
                : 'bg-medium-gray text-gray-300 border-gray-600 hover:border-gray-500 hover:text-white'
            }`}
          >
            #{tag}
            {selectedTags.includes(tag) && (
              <span className="ml-1">×</span>
            )}
          </button>
        ))}
      </div>
      
      {selectedTags.length > 0 && (
        <div className="text-sm text-gray-400">
          {selectedTags.length} tag{selectedTags.length !== 1 ? 's' : ''} selected
        </div>
      )}
    </div>
  );
}
