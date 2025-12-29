import React from 'react';

/**
 * SearchBar Component
 * 
 * Provides a search input field that calls onSearchChange
 * whenever the user types something
 */
type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="mb-3">
      <input 
        type="text"
        className="form-control"
        placeholder="Search products by name, SKU, or manufacturer..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}