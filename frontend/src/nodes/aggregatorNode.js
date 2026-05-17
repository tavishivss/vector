// aggregatorNode.js
// Demonstrates: Multiple inputs with single output

import { createNode, HandleConfig } from './BaseNode';

export const AggregatorNode = createNode({
  title: 'Aggregator',
  handles: [
    HandleConfig.targetLeft('input1', '25%'),
    HandleConfig.targetLeft('input2', '50%'),
    HandleConfig.targetLeft('input3', '75%'),
    HandleConfig.sourceRight('output')
  ],
  fields: [
    {
      name: 'aggregationType',
      label: 'Aggregation Type',
      type: 'select',
      options: [
        { value: 'concat', label: 'Concatenate' },
        { value: 'merge', label: 'Merge Objects' },
        { value: 'sum', label: 'Sum Numbers' },
        { value: 'average', label: 'Average' }
      ],
      defaultValue: 'concat'
    },
    {
      name: 'separator',
      label: 'Separator',
      type: 'text',
      placeholder: 'e.g., comma, space...',
      defaultValue: ', '
    }
  ],
  style: {
    background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)',
    borderColor: '#22c55e',
    borderWidth: '2px',
    minHeight: 120
  }
});
