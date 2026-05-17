import { createNode, HandleConfig } from './BaseNode';

export const LLMNode = createNode({
  nodeType: 'llm',
  title: 'LLM',
  icon: '🤖',
  handles: [
    { ...HandleConfig.targetLeft('system', '33%'), label: 'system' },
    { ...HandleConfig.targetLeft('prompt', '67%'), label: 'prompt' },
    HandleConfig.sourceRight('response'),
  ],
  renderContent: () => (
    <div
      style={{
        fontSize: '0.75rem',
        color: 'var(--text-tertiary)',
        padding: 'var(--spacing-md)',
        background: 'var(--bg-surface)',
        borderRadius: 'var(--radius-md)',
        textAlign: 'center',
        border: '1px solid var(--glass-border)',
      }}
    >
      AI Language Model
    </div>
  ),
});
