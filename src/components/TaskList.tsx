import React from 'react';
import type { Task } from '../types/task';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  totalTasksCount: number;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  totalTasksCount,
  onToggleTask,
  onDeleteTask,
}) => {
  if (totalTasksCount === 0) {
    return (
      <div className="empty-list">
        <p>Завдань поки немає.</p>
        <small>Додайте перше навчальне завдання вище.</small>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="empty-list">
        <p>За цим фільтром завдань немає.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};