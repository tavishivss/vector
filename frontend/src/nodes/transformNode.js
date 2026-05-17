// transformNode.js
// Demonstrates: Select options and textarea field

import { createNode, HandleConfig } from './BaseNode';

export const TransformNode = createNode({
  title: 'Transform',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('output')
  ],
  fields: [
    {
      name: 'operation',
      label: 'Operation',
      type: 'select',
      options: [
        { value: 'uppercase', label: 'To Uppercase' },
        { value: 'lowercase', label: 'To Lowercase' },
        { value: 'trim', label: 'Trim Whitespace' },
        { value: 'replace', label: 'Find & Replace' },
        { value: 'custom', label: 'Custom Script' }
      ],
      defaultValue: 'uppercase'
    },
    {
      name: 'script',
      label: 'Custom Script',
      type: 'textarea',
      placeholder: 'Enter JavaScript transformation...'
    }
  ],
  style: {
    background: 'linear-gradient(135deg, #fefce8 0%, #ffffff 100%)',
    borderColor: '#eab308',
    borderWidth: '2px',
    minHeight: 140
  }
});
