import React from 'react';
import type { Task } from '../types/task';

interface TaskStatsProps {
  tasks: Task[];
}

export const TaskStats: React.FC<TaskStatsProps> = ({ tasks }) => {
  const totalCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
  const uncompletedCount = totalCount - completedCount;

  return (
    <div className="task-stats">
      <div className="stat-card">
        <span className="stat-value">{totalCount}</span>
        <span className="stat-label">Усього завдань</span>
      </div>
      <div className="stat-card stat-success">
        <span className="stat-value">{completedCount}</span>
        <span className="stat-label">Виконано</span>
      </div>
      <div className="stat-card stat-warning">
        <span className="stat-value">{uncompletedCount}</span>
        <span className="stat-label">У процесі</span>
      </div>
    </div>
  );
};