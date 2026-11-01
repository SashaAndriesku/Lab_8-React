import React from 'react';
import type { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleTask,
  onDeleteTask,
}) => {
  const priorityLabels = {
    low: 'Низький',
    medium: 'Середній',
    high: 'Високий',
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-badges">
          <span className="badge category-badge">{task.category}</span>
          <span className={`badge priority-badge priority-${task.priority}`}>
            {priorityLabels[task.priority]}
          </span>
        </div>
      </div>

      {task.description && <p className="task-description">{task.description}</p>}

      <div className="task-footer">
        <button
          className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'}`}
          onClick={() => onToggleTask(task.id)}
        >
          {task.completed ? '↩ Повернути в роботу' : '✓ Виконано'}
        </button>

        <button className="btn btn-danger" onClick={() => onDeleteTask(task.id)}>
          🗑 Видалити
        </button>
      </div>
    </div>
  );
};