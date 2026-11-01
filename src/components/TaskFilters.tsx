import React from 'react';
import type { FilterStatus } from '../types/task';

interface TaskFiltersProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  return (
    <div className="task-filters">
      <button
        className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
        onClick={() => onFilterChange('all')}
      >
        Усі
      </button>
      <button
        className={`filter-btn ${currentFilter === 'uncompleted' ? 'active' : ''}`}
        onClick={() => onFilterChange('uncompleted')}
      >
        Не виконані
      </button>
      <button
        className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
        onClick={() => onFilterChange('completed')}
      >
        Виконані
      </button>
    </div>
  );
};