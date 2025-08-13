import { useState, useEffect, useRef } from 'react';

interface SearchResult {
  url: string;
  title: string;
  excerpt: string;
}

interface SearchProps {
  className?: string;
  placeholder?: string;
}

export default function Search({ className = '', placeholder = 'Search...' }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }
      if (event.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const performSearch = async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    try {
      // In a real implementation, this would use Pagefind
      // For now, we'll simulate search results
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const mockResults: SearchResult[] = [
        {
          url: '/posts/welcome-to-my-site',
          title: 'Welcome to My Site',
          excerpt: 'A brief introduction to what you can expect to find here...'
        },
        {
          url: '/posts/data-engineering-insights',
          title: 'Data Engineering Insights',
          excerpt: 'Lessons learned from building data pipelines at scale...'
        }
      ].filter(result => 
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(mockResults);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
    performSearch(value);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-12 pr-4 bg-medium-gray border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:ring-1 focus:ring-neon-purple focus:outline-none transition-all duration-200"
        />
        <svg 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <kbd className="px-2 py-1 text-xs bg-gray-700 rounded border border-gray-600 text-gray-400">
            ⌘K
          </kbd>
        </div>
      </div>

      {isOpen && (query.length > 0 || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-medium-gray border border-gray-600 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center">
              <div className="animate-spin w-6 h-6 border-2 border-neon-purple border-t-transparent rounded-full mx-auto"></div>
              <p className="text-gray-400 mt-2">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <a
                  key={index}
                  href={result.url}
                  className="block px-4 py-3 hover:bg-gray-700 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <h4 className="text-white font-medium mb-1">{result.title}</h4>
                  <p className="text-gray-400 text-sm">{result.excerpt}</p>
                </a>
              ))}
            </div>
          ) : query.length > 1 ? (
            <div className="p-4 text-center text-gray-400">
              No results found for "{query}"
            </div>
          ) : (
            <div className="p-4 text-center text-gray-400">
              Type to search...
            </div>
          )}
        </div>
      )}
    </div>
  );
}
