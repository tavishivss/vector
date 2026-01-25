# Quick Start Guide

Get started creating nodes in under 5 minutes!

## Step 1: Create Your Node (2 minutes)

Create a new file in `/frontend/src/nodes/`:

```javascript
// myAwesomeNode.js
import { createNode, HandleConfig } from './BaseNode';

export const MyAwesomeNode = createNode({
  title: 'My Awesome Node',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('output')
  ],
  fields: [
    {
      name: 'myField',
      label: 'My Field',
      type: 'text',
      defaultValue: 'Hello World'
    }
  ]
});
```

**That's it! You just created a working node.**

---

## Step 2: Register Your Node (2 minutes)

### 2a. Import in `ui.js`

```javascript
// ui.js
import { MyAwesomeNode } from './nodes/myAwesomeNode';
```

### 2b. Add to nodeTypes

```javascript
// ui.js
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  myAwesome: MyAwesomeNode,  // ← Add this line
};
```

### 2c. Add to Toolbar

```javascript
// toolbar.js
<DraggableNode type='myAwesome' label='My Awesome Node' />
```

---

## Step 3: Test It! (1 minute)

1. Start the dev server: `npm start`
2. Look for "My Awesome Node" in the toolbar
3. Drag it onto the canvas
4. Connect it to other nodes
5. Test the field input

**Done! You now have a working custom node.**

---

## Common Recipes

### Recipe 1: Simple Data Processor
```javascript
export const ProcessorNode = createNode({
  title: 'Processor',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('output')
  ],
  fields: [
    {
      name: 'operation',
      label: 'Operation',
      type: 'select',
      options: [
        { value: 'clean', label: 'Clean Data' },
        { value: 'format', label: 'Format Data' }
      ]
    }
  ]
});
```

### Recipe 2: Multi-Input Combiner
```javascript
export const CombinerNode = createNode({
  title: 'Combiner',
  handles: [
    HandleConfig.targetLeft('input1', '33%'),
    HandleConfig.targetLeft('input2', '67%'),
    HandleConfig.sourceRight('output')
  ],
  fields: [
    {
      name: 'method',
      label: 'Combine Method',
      type: 'select',
      options: [
        { value: 'merge', label: 'Merge' },
        { value: 'concat', label: 'Concatenate' }
      ]
    }
  ]
});
```

### Recipe 3: Branching Logic
```javascript
export const RouterNode = createNode({
  title: 'Router',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('path1', '33%'),
    HandleConfig.sourceRight('path2', '67%')
  ],
  fields: [
    {
      name: 'route',
      label: 'Route By',
      type: 'select',
      options: [
        { value: 'type', label: 'By Type' },
        { value: 'value', label: 'By Value' }
      ]
    }
  ]
});
```

### Recipe 4: Configuration Node
```javascript
export const ConfigNode = createNode({
  title: 'Config',
  handles: [
    HandleConfig.sourceRight('output')
  ],
  fields: [
    {
      name: 'apiKey',
      label: 'API Key',
      type: 'text',
      placeholder: 'Enter API key...'
    },
    {
      name: 'timeout',
      label: 'Timeout (ms)',
      type: 'number',
      defaultValue: 5000
    },
    {
      name: 'retries',
      label: 'Retry Count',
      type: 'number',
      defaultValue: 3
    },
    {
      name: 'enableLogging',
      label: 'Enable Logging',
      type: 'checkbox',
      defaultValue: true
    }
  ],
  style: {
    minHeight: 150
  }
});
```

### Recipe 5: Custom Styled Node
```javascript
export const StyledNode = createNode({
  title: '✨ Styled',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('output')
  ],
  fields: [
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter your message...'
    }
  ],
  style: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderColor: '#667eea',
    borderWidth: '2px',
    borderRadius: '12px',
    minHeight: 120
  }
});
```

---

## Customization Options

### Handle Positions

```javascript
// Left side (inputs)
HandleConfig.targetLeft('name', '25%')  // Top quarter
HandleConfig.targetLeft('name', '50%')  // Middle (default)
HandleConfig.targetLeft('name', '75%')  // Bottom quarter

// Right side (outputs)
HandleConfig.sourceRight('name', '33%')  // Top third
HandleConfig.sourceRight('name', '67%')  // Bottom third

// Top/Bottom
HandleConfig.targetTop('name', '50%')
HandleConfig.sourceBottom('name', '50%')
```

### Field Types

```javascript
// Text input
{ name: 'text', label: 'Text', type: 'text' }

// Number input
{ name: 'number', label: 'Number', type: 'number' }

// Dropdown
{
  name: 'select',
  label: 'Select',
  type: 'select',
  options: [
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' }
  ]
}

// Multi-line text
{ name: 'textarea', label: 'Text Area', type: 'textarea' }

// Checkbox
{ name: 'checkbox', label: 'Enable', type: 'checkbox' }
```

### Styling

```javascript
style: {
  width: 250,              // Width in pixels
  minHeight: 120,          // Minimum height
  background: '#f0f8ff',   // Background color
  borderColor: '#4682b4',  // Border color
  borderWidth: '2px',      // Border thickness
  borderRadius: '8px',     // Corner radius
  padding: '15px'          // Internal padding
}
```

---

## Advanced: Custom Rendering

For complete control, use `renderContent`:

```javascript
export const CustomNode = createNode({
  title: 'Custom',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('output')
  ],
  fields: [
    { name: 'value', label: 'Value', type: 'text' }
  ],
  renderContent: ({ id, data, fieldValues, handleFieldChange }) => (
    <div>
      <p>Node ID: {id}</p>
      <input
        value={fieldValues.value}
        onChange={(e) => handleFieldChange('value', e.target.value)}
        style={{ width: '100%', padding: '5px' }}
      />
      <button onClick={() => alert(fieldValues.value)}>
        Show Value
      </button>
    </div>
  )
});
```

---

## Troubleshooting

### Problem: Node doesn't appear in toolbar
**Solution**: Check that you:
1. Exported the node from your file
2. Imported it in `ui.js`
3. Added it to `nodeTypes` object
4. Added `<DraggableNode>` in `toolbar.js`

### Problem: Field values not updating
**Solution**: Ensure field `name` matches your field configuration

### Problem: Handles not connecting
**Solution**: Check handle types:
- Outputs must be type `'source'`
- Inputs must be type `'target'`

### Problem: Node styling looks wrong
**Solution**: Use `style` prop to override defaults:
```javascript
style: {
  minHeight: 100  // Instead of height
}
```

---

## Tips & Best Practices

### ✅ DO
- Use descriptive node titles
- Provide default values for fields
- Use HandleConfig helpers for handles
- Group related fields together
- Add placeholder text to inputs
- Use meaningful handle IDs

### ❌ DON'T
- Hardcode IDs (use the `id` prop)
- Forget to register nodes in `ui.js`
- Use `height` (use `minHeight` instead)
- Create handles without IDs
- Skip default values for selects

---

## Examples in Action

### Example 1: API Call Node

```javascript
export const APINode = createNode({
  title: 'API Call',
  handles: [
    HandleConfig.targetLeft('params'),
    HandleConfig.sourceRight('response'),
    HandleConfig.sourceRight('error', '75%')
  ],
  fields: [
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      placeholder: 'https://api.example.com'
    },
    {
      name: 'method',
      label: 'Method',
      type: 'select',
      options: [
        { value: 'GET', label: 'GET' },
        { value: 'POST', label: 'POST' },
        { value: 'PUT', label: 'PUT' },
        { value: 'DELETE', label: 'DELETE' }
      ],
      defaultValue: 'GET'
    },
    {
      name: 'timeout',
      label: 'Timeout (ms)',
      type: 'number',
      defaultValue: 5000
    }
  ],
  style: {
    background: '#e8f5e9',
    borderColor: '#4caf50',
    minHeight: 130
  }
});
```

### Example 2: Validation Node

```javascript
export const ValidationNode = createNode({
  title: 'Validate',
  handles: [
    HandleConfig.targetLeft('input'),
    HandleConfig.sourceRight('valid', '33%'),
    HandleConfig.sourceRight('invalid', '67%')
  ],
  fields: [
    {
      name: 'rule',
      label: 'Validation Rule',
      type: 'select',
      options: [
        { value: 'email', label: 'Email Address' },
        { value: 'phone', label: 'Phone Number' },
        { value: 'url', label: 'URL' },
        { value: 'custom', label: 'Custom Regex' }
      ]
    },
    {
      name: 'pattern',
      label: 'Custom Pattern',
      type: 'text',
      placeholder: 'Regex pattern...'
    }
  ],
  style: {
    background: '#fff3e0',
    borderColor: '#ff9800'
  }
});
```

---

## Next Steps

1. **Read**: Check out `README.md` for full documentation
2. **Explore**: Look at existing nodes in `/nodes` folder
3. **Experiment**: Try creating different node types
4. **Share**: Show off your custom nodes!

---

## Quick Reference

### Minimal Template
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
      type: 'text'
    }
  ]
});
```

### Registration Checklist
- [ ] Create node file in `/nodes`
- [ ] Import in `ui.js`
- [ ] Add to `nodeTypes` object in `ui.js`
- [ ] Add `<DraggableNode>` in `toolbar.js`
- [ ] Test in browser

---

**You're ready to build amazing nodes! 🚀**

Need help? Check `README.md` for detailed documentation or `VISUAL_GUIDE.md` for examples.
