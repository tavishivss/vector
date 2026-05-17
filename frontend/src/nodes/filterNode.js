import { createNode, HandleConfig } from './BaseNode';

export const FilterNode = createNode({
  nodeType: 'filter',
  title: 'Filter',
  icon: '🔍',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('output'),
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
        { value: 'length', label: 'Length Greater Than' },
      ],
      defaultValue: 'contains',
    },
    {
      name: 'filterValue',
      label: 'Filter Value',
      type: 'text',
      placeholder: 'Enter filter criteria...',
    },
    {
      name: 'caseSensitive',
      label: 'Case Sensitive',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
});
