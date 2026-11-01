import React, { useState } from 'react';
import type { Priority, Task } from '../types/task';

interface TaskFormProps {
  onAddTask: (task: Omit<Task, 'id' | 'completed'>) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Назва завдання є обовʼязковою!');
      return;
    }

    onAddTask({
      title: title.trim(),
      description: description.trim(),
      category: category.trim() || 'Загальне',
      priority,
    });

    setTitle('');
    setDescription('');
    setCategory('');
    setPriority('medium');
    setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Додати нове завдання</h2>

      {error && <div className="form-error">{error}</div>}

      <div className="form-group">
        <label htmlFor="title">Назва *</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введіть назву завдання..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Опис</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Короткий опис..."
          rows={3}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="category">Категорія</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="React, Math, English..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="priority">Пріоритет</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            <option value="low">Низький (Low)</option>
            <option value="medium">Середній (Medium)</option>
            <option value="high">Високий (High)</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        + Додати завдання
      </button>
    </form>
  );
};