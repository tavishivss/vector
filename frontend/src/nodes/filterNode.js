// filterNode.js
// Demonstrates: Multiple field types, custom styling

import { createNode, HandleConfig } from './BaseNode';

export const FilterNode = createNode({
  title: 'Filter',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('output')
  ],
  fields: [
    {
      name: 'filterType',
      label: 'Filter Type',
      type: 'select',
      options: [
        { value: 'contains', label: 'Contains' },
        { value: 'equals', label: 'Equals' },
        { value: 'regex', label: 'Regular Expression' },
        { value: 'length', label: 'Length Greater Than' }
      ],
      defaultValue: 'contains'
    },
    {
      name: 'filterValue',
      label: 'Filter Value',
      type: 'text',
      placeholder: 'Enter filter criteria...'
    },
    {
      name: 'caseSensitive',
      label: 'Case Sensitive',
      type: 'checkbox',
      defaultValue: false
    }
  ],
  style: {
    background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
    borderColor: '#3b82f6',
    borderWidth: '2px'
  }
});
