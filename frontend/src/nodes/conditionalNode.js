// conditionalNode.js
// Demonstrates: Multiple outputs (branching logic)

import { createNode, HandleConfig } from './BaseNode';

export const ConditionalNode = createNode({
  title: 'Conditional',
  handles: [
    HandleConfig.targetLeft('input', '25%'),
    HandleConfig.sourceRight('true', '33%'),
    HandleConfig.sourceRight('false', '67%')
  ],
  fields: [
    {
      name: 'condition',
      label: 'Condition',
      type: 'select',
      options: [
        { value: 'isEmpty', label: 'Is Empty' },
        { value: 'isNotEmpty', label: 'Is Not Empty' },
        { value: 'contains', label: 'Contains Text' },
        { value: 'greaterThan', label: 'Greater Than' },
        { value: 'lessThan', label: 'Less Than' }
      ],
      defaultValue: 'isNotEmpty'
    },
    {
      name: 'compareValue',
      label: 'Compare Value',
      type: 'text',
      placeholder: 'Optional comparison value...'
    }
  ],
  style: {
    background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 100%)',
    borderColor: '#ef4444',
    borderWidth: '2px'
  }
});
