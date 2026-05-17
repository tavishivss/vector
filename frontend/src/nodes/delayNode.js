import { createNode, HandleConfig } from './BaseNode';

export const DelayNode = createNode({
  nodeType: 'delay',
  title: 'Delay',
  icon: '⏱️',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('output'),
  ],
  fields: [
    {
      name: 'delayAmount',
      label: 'Delay Amount',
      type: 'number',
      defaultValue: '1000',
      placeholder: 'milliseconds',
    },
    {
      name: 'unit',
      label: 'Unit',
      type: 'select',
      options: [
        { value: 'ms', label: 'Milliseconds' },
        { value: 'seconds', label: 'Seconds' },
        { value: 'minutes', label: 'Minutes' },
      ],
      defaultValue: 'ms',
    },
  ],
});
