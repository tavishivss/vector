import { createNode, HandleConfig } from './BaseNode';

export const OutputNode = createNode({
  nodeType: 'output',
  title: 'Output',
  icon: '📤',
  handles: [HandleConfig.targetLeft('value')],
  fields: [
    {
      name: 'outputName',
      label: 'Name',
      type: 'text',
      defaultValue: 'output_',
      placeholder: 'Enter output name...',
    },
    {
      name: 'outputType',
      label: 'Type',
      type: 'select',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'Image', label: 'Image' },
      ],
      defaultValue: 'Text',
    },
  ],
});
