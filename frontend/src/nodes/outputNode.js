// outputNode.js

import { createNode, HandleConfig } from './BaseNode';

export const OutputNode = createNode({
  title: '📤 Output',
  handles: [
    HandleConfig.targetLeft('value')
  ],
  fields: [
    {
      name: 'outputName',
      label: 'Name',
      type: 'text',
      defaultValue: 'output_',
      placeholder: 'Enter output name...'
    },
    {
      name: 'outputType',
      label: 'Type',
      type: 'select',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'Image', label: 'Image' }
      ],
      defaultValue: 'Text'
    }
  ],
  style: {
    background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)',
    borderColor: '#f59e0b',
    borderWidth: '2px'
  }
});
