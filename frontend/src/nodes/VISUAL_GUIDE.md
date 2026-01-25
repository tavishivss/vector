# Visual Guide: Node Gallery

This guide provides a visual overview of all available nodes and their capabilities.

## Original Nodes (Refactored)

### Input Node
```
┌─────────────────────┐
│ Input               │
├─────────────────────┤
│ Name: [input_    ]  │
│ Type: [Text ▼]      │  ───→ value
└─────────────────────┘
```
- **Purpose**: Entry point for data
- **Handles**: 1 output (right)
- **Fields**: Name (text), Type (select)
- **Use Case**: Starting node for pipelines

---

### Output Node
```
┌─────────────────────┐
value ───→ Output               │
├─────────────────────┤
│ Name: [output_   ]  │
│ Type: [Text ▼]      │
└─────────────────────┘
```
- **Purpose**: Exit point for data
- **Handles**: 1 input (left)
- **Fields**: Name (text), Type (select)
- **Use Case**: Terminal node for pipelines

---

### LLM Node
```
┌─────────────────────┐
system ───→ LLM                 │
prompt ───→                     │ ───→ response
├─────────────────────┤
│ This is a LLM.      │
└─────────────────────┘
```
- **Purpose**: Language model processing
- **Handles**: 2 inputs (left), 1 output (right)
- **Fields**: None (static content)
- **Use Case**: AI text generation/processing

---

### Text Node
```
┌─────────────────────┐
│ Text                │
├─────────────────────┤
│ Text: [{{input}}]   │  ───→ output
└─────────────────────┘
```
- **Purpose**: Static or templated text
- **Handles**: 1 output (right)
- **Fields**: Text (text input)
- **Use Case**: Constants, templates, labels

---

## New Nodes (Demonstrating Abstraction)

### 1. Filter Node
```
┌─────────────────────┐
input ───→ Filter               │
├─────────────────────┤
│ Filter Type:        │  ───→ output
│ [Contains ▼]        │
│ Filter Value:       │
│ [_____________]     │
│ ☐ Case Sensitive    │
└─────────────────────┘
```
- **Purpose**: Filter data based on criteria
- **Handles**: 1 input (left), 1 output (right)
- **Fields**: 
  - Filter Type (select): Contains, Equals, Regex, Length
  - Filter Value (text)
  - Case Sensitive (checkbox)
- **Styling**: Light blue background (#f0f8ff)
- **Use Case**: Data filtering, validation

**Example Flow**:
```
Input → Filter (contains "error") → Output
```

---

### 2. Transform Node
```
┌─────────────────────┐
input ───→ Transform            │
├─────────────────────┤
│ Operation:          │  ───→ output
│ [Uppercase ▼]       │
│ Custom Script:      │
│ ┌─────────────────┐ │
│ │                 │ │
│ └─────────────────┘ │
└─────────────────────┘
```
- **Purpose**: Transform/modify data
- **Handles**: 1 input (left), 1 output (right)
- **Fields**:
  - Operation (select): Uppercase, Lowercase, Trim, Replace, Custom
  - Custom Script (textarea)
- **Styling**: Light yellow background (#fff8dc)
- **Use Case**: Text transformation, formatting

**Example Flow**:
```
Input → Transform (uppercase) → Output
```

---

### 3. Conditional Node
```
┌─────────────────────┐
input ───→ Conditional          │
├─────────────────────┤  ───→ true
│ Condition:          │
│ [Is Not Empty ▼]    │  ───→ false
│ Compare Value:      │
│ [_____________]     │
└─────────────────────┘
```
- **Purpose**: Branch logic based on conditions
- **Handles**: 1 input (left), 2 outputs (right - true/false)
- **Fields**:
  - Condition (select): isEmpty, isNotEmpty, contains, greaterThan, lessThan
  - Compare Value (text)
- **Styling**: Light red background (#ffe4e1)
- **Use Case**: Conditional flows, routing

**Example Flow**:
```
                  ┌─→ true → Output (valid)
Input → Conditional
                  └─→ false → Output (invalid)
```

---

### 4. Aggregator Node
```
┌─────────────────────┐
input1 ───→ Aggregator          │
input2 ───→                     │  ───→ output
input3 ───→                     │
├─────────────────────┤
│ Aggregation Type:   │
│ [Concatenate ▼]     │
│ Separator:          │
│ [, ________]        │
└─────────────────────┘
```
- **Purpose**: Combine multiple inputs
- **Handles**: 3 inputs (left), 1 output (right)
- **Fields**:
  - Aggregation Type (select): Concatenate, Merge, Sum, Average
  - Separator (text)
- **Styling**: Light green background (#f0fff0)
- **Use Case**: Merging data, combining results

**Example Flow**:
```
Input1 ──┐
Input2 ──┼─→ Aggregator (concat) → Output
Input3 ──┘
```

---

### 5. Delay Node
```
┌─────────────────────┐
input ───→ Delay                │
├─────────────────────┤  ───→ output
│ Delay Amount:       │
│ [1000________]      │
│ Unit:               │
│ [Milliseconds ▼]    │
│ Delays data flow by │
│ specified time      │
└─────────────────────┘
```
- **Purpose**: Introduce timing delays
- **Handles**: 1 input (left), 1 output (right)
- **Fields**:
  - Delay Amount (number)
  - Unit (select): Milliseconds, Seconds, Minutes
- **Styling**: Light purple background (#e6e6fa)
- **Use Case**: Throttling, rate limiting, timing

**Example Flow**:
```
Input → Delay (1000ms) → Output
```

---

## Node Patterns

### Pattern 1: Linear Processing
```
Input → Transform → Filter → Output
```
Simple sequential data processing.

### Pattern 2: Branching Logic
```
           ┌─→ true → Output (A)
Input → Conditional
           └─→ false → Output (B)
```
Route data based on conditions.

### Pattern 3: Aggregation
```
Input1 ──┐
Input2 ──┼─→ Aggregator → Output
Input3 ──┘
```
Combine multiple sources.

### Pattern 4: LLM Pipeline
```
Text (system) ──┐
Text (prompt) ──┼─→ LLM → Output
                ┘
```
AI text processing.

### Pattern 5: Complex Flow
```
Input1 → Filter ──┐
                  ├─→ Aggregator → Transform → Output
Input2 → Delay ───┘
```
Multi-stage processing.

---

## Handle Position Reference

### Vertical Positioning (Left/Right Handles)

```
top: '25%'  ───→ ○
top: '33%'  ───→ ○
top: '50%'  ───→ ○  (default - middle)
top: '67%'  ───→ ○
top: '75%'  ───→ ○
```

### Horizontal Positioning (Top/Bottom Handles)

```
left: '25%'    '50%'    '75%'
    ○           ○          ○
    ↓           ↓          ↓
```

---

## Color Coding Scheme

The new nodes use color-coded backgrounds for quick identification:

| Node Type | Color | Purpose |
|-----------|-------|---------|
| Input/Output | White | Data entry/exit |
| LLM | White | AI processing |
| Text | White | Static content |
| Filter | Blue (#f0f8ff) | Data filtering |
| Transform | Yellow (#fff8dc) | Data transformation |
| Conditional | Red (#ffe4e1) | Logic/branching |
| Aggregator | Green (#f0fff0) | Data combining |
| Delay | Purple (#e6e6fa) | Timing/control |

---

## Field Type Examples

### Text Input
```
Name: [_____________]
```
Single-line text entry.

### Number Input
```
Amount: [1000_______]
```
Numeric values only.

### Select Dropdown
```
Type: [Text        ▼]
      ├─ Text
      ├─ File
      └─ Image
```
Predefined options.

### Textarea
```
Script: ┌─────────────────┐
        │                 │
        │                 │
        └─────────────────┘
```
Multi-line text entry.

### Checkbox
```
☐ Case Sensitive
☑ Enable Feature
```
Boolean toggle.

---

## Creating Custom Nodes

Use these examples as templates for your own nodes:

### Minimal Node
```javascript
export const MinimalNode = createNode({
  title: 'Minimal',
  handles: [
    HandleConfig.targetLeft('in'),
    HandleConfig.sourceRight('out')
  ]
});
```

### Full-Featured Node
```javascript
export const FullNode = createNode({
  title: 'Full Featured',
  handles: [
    HandleConfig.targetLeft('in1', '33%'),
    HandleConfig.targetLeft('in2', '67%'),
    HandleConfig.sourceRight('out')
  ],
  fields: [
    {
      name: 'text',
      label: 'Text Field',
      type: 'text',
      defaultValue: 'default'
    },
    {
      name: 'number',
      label: 'Number Field',
      type: 'number',
      defaultValue: 100
    },
    {
      name: 'select',
      label: 'Select Field',
      type: 'select',
      options: [
        { value: 'a', label: 'Option A' },
        { value: 'b', label: 'Option B' }
      ]
    }
  ],
  style: {
    background: '#ffe4e1',
    borderColor: '#ff6347'
  }
});
```

---

## Testing Your Nodes

1. **Add to UI**: Register in `ui.js` nodeTypes
2. **Add to Toolbar**: Add DraggableNode in `toolbar.js`
3. **Test Connections**: Verify handles connect properly
4. **Test Fields**: Ensure state updates work
5. **Test Styling**: Check visual appearance

---

## Quick Reference Card

### Common Handle Configurations

```javascript
// Single in/out
handles: [
  HandleConfig.targetLeft('input'),
  HandleConfig.sourceRight('output')
]

// Multiple inputs
handles: [
  HandleConfig.targetLeft('in1', '25%'),
  HandleConfig.targetLeft('in2', '50%'),
  HandleConfig.targetLeft('in3', '75%'),
  HandleConfig.sourceRight('output')
]

// Multiple outputs
handles: [
  HandleConfig.targetLeft('input'),
  HandleConfig.sourceRight('out1', '33%'),
  HandleConfig.sourceRight('out2', '67%')
]

// Bidirectional
handles: [
  HandleConfig.targetTop('in'),
  HandleConfig.sourceBottom('out')
]
```

### Common Field Configurations

```javascript
// Text
{ name: 'myText', label: 'Text', type: 'text' }

// Number
{ name: 'myNum', label: 'Number', type: 'number' }

// Select
{
  name: 'mySelect',
  label: 'Select',
  type: 'select',
  options: [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' }
  ]
}

// Textarea
{ name: 'myText', label: 'Text', type: 'textarea' }

// Checkbox
{ name: 'myCheck', label: 'Enable', type: 'checkbox' }
```

---

Happy node building! 🎨
