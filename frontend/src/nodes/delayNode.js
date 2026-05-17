// delayNode.js
// Demonstrates: Number input and custom render content

import { createNode, HandleConfig } from './BaseNode';

export const DelayNode = createNode({
  title: 'Delay',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('output')
  ],
  fields: [
    {
      name: 'delayAmount',
      label: 'Delay Amount',
      type: 'number',
      defaultValue: '1000',
      placeholder: 'milliseconds'
    },
    {
      name: 'unit',
      label: 'Unit',
      type: 'select',
      options: [
        { value: 'ms', label: 'Milliseconds' },
        { value: 'seconds', label: 'Seconds' },
        { value: 'minutes', label: 'Minutes' }
      ],
      defaultValue: 'ms'
    }
  ],
  renderContent: ({ fieldValues, handleFieldChange }) => (
    <div>
      <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>
        Delay Amount:
        <input
          type="number"
          value={fieldValues.delayAmount}
          onChange={(e) => handleFieldChange('delayAmount', e.target.value)}
          placeholder="milliseconds"
          style={{
            width: '100%',
            padding: '4px',
            fontSize: '12px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            marginBottom: '8px'
          }}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>
        Unit:
        <select
          value={fieldValues.unit}
          onChange={(e) => handleFieldChange('unit', e.target.value)}
          style={{
            width: '100%',
            padding: '4px',
            fontSize: '12px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            marginBottom: '8px'
          }}
        >
          <option value="ms">Milliseconds</option>
          <option value="seconds">Seconds</option>
          <option value="minutes">Minutes</option>
        </select>
      </label>
      <div style={{ fontSize: '10px', color: '#666', marginTop: '8px' }}>
        Delays data flow by specified time
      </div>
    </div>
  ),
  style: {
    background: 'linear-gradient(135deg, #faf5ff 0%, #ffffff 100%)',
    borderColor: '#a855f7',
    borderWidth: '2px'
  }
});
