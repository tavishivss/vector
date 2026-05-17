import { createNode, HandleConfig } from './BaseNode';

export const LLMNode = createNode({
  nodeType: 'llm',
  title: 'LLM',
  icon: '🤖',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('response'),
  ],
  renderContent: () => (
    <div
      style={{
        minHeight: '54px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.75rem',
        color: 'var(--text-secondary)',
        padding: '0 12px',
        background: 'var(--bg-surface)',
        borderRadius: '6px',
        textAlign: 'center',
        border: '1px solid #484848',
      }}
    >
      AI Language Model
    </div>
  ),
});
