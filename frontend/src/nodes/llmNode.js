// llmNode.js

import { createNode, HandleConfig } from './BaseNode';

export const LLMNode = createNode({
  title: '🤖 LLM',
  handles: [
    HandleConfig.targetLeft('system', '33%'),
    HandleConfig.targetLeft('prompt', '67%'),
    HandleConfig.sourceRight('response')
  ],
  renderContent: () => (
    <div style={{ 
      fontSize: '0.75rem', 
      color: 'var(--gray-600)',
      padding: 'var(--spacing-sm)',
      background: 'var(--purple-50)',
      borderRadius: 'var(--radius-md)',
      textAlign: 'center'
    }}>
      <span>AI Language Model</span>
    </div>
  ),
  style: {
    background: 'linear-gradient(135deg, #faf5ff 0%, #ffffff 100%)',
    borderColor: '#8b5cf6',
    borderWidth: '2px'
  }
});
