import { createNode, HandleConfig } from './BaseNode';

export const InputNode = createNode({
  nodeType: 'input',
  title: 'Input',
  icon: '📥',
  handles: [HandleConfig.sourceRight('value')],
  fields: [
    {
      name: 'inputName',
      label: 'Name',
      type: 'text',
      defaultValue: 'input_',
      placeholder: 'Enter input name...',
    },
    {
      name: 'inputType',
      label: 'Type',
      type: 'select',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'File' },
      ],
      defaultValue: 'Text',
    },
  ],
});
