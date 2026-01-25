import { useState, useEffect } from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('vectorshift-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('vectorshift-theme', newTheme);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-header-content">
          <div>
            <h1 className="app-title">
              <span className="app-title-icon">⚡</span>
              VectorShift Pipeline Builder
            </h1>
            <p className="app-subtitle">
              Create powerful data pipelines with drag-and-drop simplicity
            </p>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>
      
      <main className="app-main">
        <div className="app-layout">
          <aside className="app-sidebar">
            <PipelineToolbar />
          </aside>
          <div className="app-canvas">
            <PipelineUI />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
