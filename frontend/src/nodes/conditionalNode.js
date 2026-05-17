import { createNode, HandleConfig } from './BaseNode';

export const ConditionalNode = createNode({
  nodeType: 'conditional',
  title: 'Conditional',
  icon: '🔀',
  handles: [
    HandleConfig.targetLeft('input', '25%'),
    { ...HandleConfig.sourceRight('true', '33%'), label: 'true' },
    { ...HandleConfig.sourceRight('false', '67%'), label: 'false' },
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
        { value: 'lessThan', label: 'Less Than' },
      ],
      defaultValue: 'isNotEmpty',
    },
    {
      name: 'compareValue',
      label: 'Compare Value',
      type: 'text',
      placeholder: 'Optional comparison value...',
    },
  ],
});
