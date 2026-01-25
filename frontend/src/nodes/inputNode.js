// inputNode.js

import { createNode, HandleConfig } from './BaseNode';

export const InputNode = createNode({
  title: '📥 Input',
  handles: [
    HandleConfig.sourceRight('value')
  ],
  fields: [
    {
      name: 'inputName',
      label: 'Name',
      type: 'text',
      defaultValue: 'input_',
      placeholder: 'Enter input name...'
    },
    {
      name: 'inputType',
      label: 'Type',
      type: 'select',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'File' }
      ],
      defaultValue: 'Text'
    }
  ],
  style: {
    background: 'linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%)',
    borderColor: '#10b981',
    borderWidth: '2px'
  }
});
