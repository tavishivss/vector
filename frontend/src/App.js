import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-header-content">
          <div className="app-brand">
            <div className="app-logo">⚡</div>
            <div>
              <h1 className="app-title">VectorShift Builder</h1>
            </div>
          </div>
        
        </div>
      </header>

      <div className="app-layout">
        <aside className="app-sidebar">
          <PipelineToolbar />
        </aside>
        <div className="app-canvas">
          <PipelineUI />
        </div>
      </div>
    </div>
  );
}

export default App;
