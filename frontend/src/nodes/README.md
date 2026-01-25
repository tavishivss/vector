# Node Abstraction System

This folder contains a flexible and maintainable abstraction for creating nodes in the React Flow pipeline.

## Overview

The `BaseNode.js` module provides a declarative API for creating nodes with minimal boilerplate. Instead of copying and pasting code, you can define a node's structure using a simple configuration object.

## Benefits

✅ **Reduced Code Duplication**: Common functionality is centralized in `BaseNode.js`
✅ **Faster Development**: Create new nodes in ~20 lines of code instead of ~50+
✅ **Consistent Styling**: All nodes share a common visual language with easy customization
✅ **Flexible Configuration**: Support for various field types, handle positions, and custom rendering
✅ **Easy Maintenance**: Update all nodes by modifying the base abstraction

## Quick Start

### Creating a Simple Node

```javascript
import { createNode, HandleConfig } from './BaseNode';

export const MyNode = createNode({
  title: 'My Node',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('output')
  ],
  fields: [
    {
      name: 'myField',
      label: 'My Field',
      type: 'text',
      defaultValue: 'default value'
    }
  ]
});
```

That's it! This creates a fully functional node with:
- Input handle on the left
- Output handle on the right
- A text input field with a label
- Automatic state management

## API Reference

### `createNode(config)`

Creates a new node component from a configuration object.

#### Configuration Options

| Property | Type | Description |
|----------|------|-------------|
| `title` | string | Node title displayed at the top |
| `handles` | Array | Handle configurations (see Handle Config) |
| `fields` | Array | Field configurations (see Field Types) |
| `renderContent` | Function | Custom content renderer (optional) |
| `style` | Object | Custom CSS styles for the node container |
| `defaultValues` | Object | Default values for fields |

### Handle Configuration

Use the `HandleConfig` helper to create handle configurations easily:

```javascript
import { HandleConfig } from './BaseNode';

// Source handle on the right (output)
HandleConfig.sourceRight('myOutput', '50%')

// Target handle on the left (input)
HandleConfig.targetLeft('myInput', '33%')

// Source handle on the bottom
HandleConfig.sourceBottom('myOutput', '50%')

// Target handle on the top
HandleConfig.targetTop('myInput', '50%')
```

#### Manual Handle Configuration

You can also manually configure handles:

```javascript
handles: [
  {
    type: 'source',          // 'source' or 'target'
    position: Position.Right, // Position enum from reactflow
    id: 'output',            // Handle ID (prefixed with node ID automatically)
    style: { top: '50%' },   // CSS positioning
    label: 'Output'          // Optional label
  }
]
```

### Field Types

The abstraction supports multiple field types:

#### Text Input
```javascript
{
  name: 'myText',
  label: 'Text Field',
  type: 'text',
  placeholder: 'Enter text...',
  defaultValue: 'default'
}
```

#### Number Input
```javascript
{
  name: 'myNumber',
  label: 'Number Field',
  type: 'number',
  defaultValue: 100
}
```

#### Select Dropdown
```javascript
{
  name: 'mySelect',
  label: 'Select Field',
  type: 'select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ],
  defaultValue: 'option1'
}
```

#### Textarea
```javascript
{
  name: 'myTextarea',
  label: 'Text Area',
  type: 'textarea',
  placeholder: 'Enter long text...'
}
```

#### Checkbox
```javascript
{
  name: 'myCheckbox',
  label: 'Enable Feature',
  type: 'checkbox',
  defaultValue: false
}
```

### Custom Rendering

For complete control over the node content, use `renderContent`:

```javascript
export const CustomNode = createNode({
  title: 'Custom',
  handles: [...],
  fields: [...], // Still define fields for state management
  renderContent: ({ id, data, fieldValues, handleFieldChange }) => (
    <div>
      <p>Node ID: {id}</p>
      <input
        value={fieldValues.myField}
        onChange={(e) => handleFieldChange('myField', e.target.value)}
      />
    </div>
  )
});
```

The `renderContent` function receives:
- `id`: Node ID
- `data`: Initial node data
- `fieldValues`: Current field values
- `handleFieldChange(fieldName, value)`: Function to update field values

### Custom Styling

Customize node appearance with the `style` property:

```javascript
export const StyledNode = createNode({
  title: 'Styled',
  // ...
  style: {
    background: '#f0f8ff',
    borderColor: '#4682b4',
    borderRadius: '8px',
    minHeight: 120,
    width: 250
  }
});
```

Default styles are:
```javascript
{
  width: 200,
  minHeight: 80,
  border: '1px solid black',
  borderRadius: '4px',
  background: 'white',
  padding: '10px'
}
```

## Example Nodes

### Example 1: Filter Node
Shows multiple field types and custom styling.

```javascript
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
        { value: 'equals', label: 'Equals' }
      ]
    },
    {
      name: 'caseSensitive',
      label: 'Case Sensitive',
      type: 'checkbox'
    }
  ],
  style: {
    background: '#f0f8ff'
  }
});
```

### Example 2: Conditional Node
Demonstrates multiple outputs (branching logic).

```javascript
export const ConditionalNode = createNode({
  title: 'Conditional',
  handles: [
    HandleConfig.targetLeft('input', '25%'),
    HandleConfig.sourceRight('true', '33%'),
    HandleConfig.sourceRight('false', '67%')
  ],
  fields: [
    {
      name: 'condition',
      label: 'Condition',
      type: 'select',
      options: [
        { value: 'isEmpty', label: 'Is Empty' },
        { value: 'contains', label: 'Contains Text' }
      ]
    }
  ]
});
```

### Example 3: Aggregator Node
Shows multiple inputs with single output.

```javascript
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
      label: 'Type',
      type: 'select',
      options: [
        { value: 'concat', label: 'Concatenate' },
        { value: 'merge', label: 'Merge Objects' }
      ]
    }
  ]
});
```

## Migrating Existing Nodes

To migrate an existing node to use the abstraction:

### Before:
```javascript
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || 'input_');
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <div style={{width: 200, height: 80, border: '1px solid black'}}>
      <div><span>Input</span></div>
      <div>
        <label>
          Name:
          <input value={currName} onChange={(e) => setCurrName(e.target.value)} />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </div>
  );
}
```

### After:
```javascript
import { createNode, HandleConfig } from './BaseNode';

export const InputNode = createNode({
  title: 'Input',
  handles: [HandleConfig.sourceRight('value')],
  fields: [
    {
      name: 'inputName',
      label: 'Name',
      type: 'text',
      defaultValue: 'input_'
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
  ]
});
```

**Result**: 47 lines reduced to 22 lines (~50% reduction) with better maintainability!

## Adding New Nodes to the Application

After creating a new node:

1. **Import the node** in `ui.js`:
```javascript
import { MyNewNode } from './nodes/myNewNode';
```

2. **Register it** in the `nodeTypes` object:
```javascript
const nodeTypes = {
  // ...existing nodes
  myNew: MyNewNode,
};
```

3. **Add to toolbar** in `toolbar.js`:
```javascript
<DraggableNode type='myNew' label='My New Node' />
```

## Best Practices

1. **Keep It Simple**: Start with the declarative API before using custom rendering
2. **Consistent Naming**: Use clear, descriptive names for fields and handles
3. **Handle Positioning**: Use percentage values for vertical positioning when multiple handles are on the same side
4. **Default Values**: Always provide sensible defaults for fields
5. **Custom Styling**: Use the `style` property for visual distinction between node types
6. **Documentation**: Add comments explaining complex configurations

## Future Enhancements

Potential improvements to the abstraction:

- [ ] Support for resizable nodes
- [ ] Built-in validation for field values
- [ ] Handle tooltips and labels
- [ ] Theme system for consistent color schemes
- [ ] Dynamic handle generation based on configuration
- [ ] Export/import node configurations
- [ ] Node templates library

## Summary

The node abstraction system dramatically reduces code duplication and speeds up development. By using declarative configuration instead of imperative code, you can:

- Create new nodes in minutes, not hours
- Maintain consistent styling across all nodes
- Update all nodes by modifying the base abstraction
- Focus on node-specific logic rather than boilerplate

Start creating new nodes today and experience the efficiency gains!
