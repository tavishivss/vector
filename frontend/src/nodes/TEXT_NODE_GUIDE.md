# Advanced Text Node - User Guide

## Overview

The Text Node is an advanced component that supports dynamic sizing and variable detection for creating dynamic, template-based text with multiple input handles.

---

## Features

### 1. Dynamic Sizing 📏

The Text Node automatically adjusts its width and height based on the content you enter:

- **Width**: Expands from 220px to 500px as you type more text
- **Height**: Grows automatically to fit all content (no scrolling needed)
- **Smooth Transitions**: All size changes are animated smoothly

#### How It Works

The node continuously monitors the textarea content and adjusts dimensions:
- Minimum size: 220px × 100px
- Maximum width: 500px
- Height: Adjusts based on line count (minimum 60px for textarea)

### 2. Variable Detection 🔍

Create dynamic input handles by using JavaScript variable syntax in your text.

#### Syntax

Use double curly brackets to define variables:

```
{{variableName}}
```

#### Rules

Variables must follow JavaScript naming conventions:
- Start with a letter, underscore (_), or dollar sign ($)
- Contain only letters, numbers, underscores, or dollar signs
- No spaces (spaces are trimmed automatically)

#### Valid Examples

```
{{input}}
{{userName}}
{{user_name}}
{{$value}}
{{item1}}
{{DATA}}
```

#### Invalid Examples

```
{{123abc}}         ❌ Starts with number
{{user-name}}      ❌ Contains hyphen
{{user name}}      ⚠️  Will be trimmed to "username"
{{@value}}         ❌ Invalid character
```

### 3. Automatic Handle Creation 🔗

For each unique variable detected, the node automatically creates:

**Left Side (Input Handles)**
- One handle per unique variable
- Labeled with the variable name
- Positioned evenly along the left edge
- Color: Cyan (#06b6d4)

**Right Side (Output Handle)**
- One output handle (always present)
- Positioned at center right
- Returns processed text with variables replaced

---

## Usage Examples

### Example 1: Simple Greeting

**Input Text:**
```
Hello, {{userName}}! Welcome to our platform.
```

**Result:**
- Creates 1 input handle labeled "userName" on the left
- Node width adjusts to fit the text
- Connect a data source to the "userName" handle

### Example 2: Email Template

**Input Text:**
```
Dear {{firstName}} {{lastName}},

Your order #{{orderId}} has been shipped!

Expected delivery: {{deliveryDate}}

Thank you for shopping with us!
```

**Result:**
- Creates 4 input handles:
  - firstName
  - lastName
  - orderId
  - deliveryDate
- Node expands vertically to show all text
- Each variable can receive data from different sources

### Example 3: Dynamic Message

**Input Text:**
```
{{greeting}} {{name}},

{{message}}

Best regards,
{{sender}}
```

**Result:**
- Creates 4 input handles
- Fully customizable message template
- All parts can be dynamically replaced

### Example 4: Reusing Variables

**Input Text:**
```
Hello {{user}}, your username is {{user}}. 
Welcome back {{user}}!
```

**Result:**
- Creates only 1 input handle (variables are deduplicated)
- All instances of {{user}} will be replaced with the same value

---

## Visual Indicators

### Variable Badge

When variables are detected, a badge appears in the header:

```
📝 Text  [2 variables]
```

### Handle Labels

Each input handle shows its variable name:

```
userName ● (handle)
```

### Variable Preview

Below the textarea, detected variables are displayed:

```
Detected Variables:
[userName] [email] [age]
```

### Helper Hint

When no variables are present, a helpful tip is shown:

```
Tip: Use {{ variableName }} to create input handles
```

---

## Advanced Features

### Real-Time Updates

- Variables are detected as you type
- Handles are created/removed automatically
- No need to save or refresh
- Immediate visual feedback

### Smart Positioning

With multiple variables, handles are positioned intelligently:

- 1 variable: Center (50%)
- 2 variables: 33%, 66%
- 3 variables: 25%, 50%, 75%
- 4+ variables: Evenly spaced

### Duplicate Handling

If you use the same variable multiple times:

```
{{name}} loves {{name}}!
```

Only one handle is created, and the value is applied to all instances.

### Whitespace Handling

Spaces inside variable names are automatically trimmed:

```
{{ userName }}  →  userName
{{  input  }}   →  input
```

---

## Styling

### Node Appearance

- **Background**: Cyan gradient (light to white)
- **Border**: 2px solid cyan
- **Shadow**: Medium elevation
- **Transitions**: Smooth size changes

### Textarea

- **Font**: Monospace for code-like appearance
- **Auto-resize**: No manual scrolling needed
- **Focus State**: Blue ring and white background
- **Placeholder**: Helpful instruction text

### Variable Labels

- **Background**: White with border
- **Font**: Small, bold
- **Color**: Dark gray for readability
- **Shadow**: Subtle elevation

---

## Technical Details

### Variable Detection Pattern

The node uses this regular expression:

```javascript
/\{\{(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*)\}\}/g
```

This matches:
- Opening `{{`
- Optional whitespace
- Valid JavaScript identifier
- Optional whitespace
- Closing `}}`

### Dynamic Sizing Algorithm

```javascript
// Width calculation
const contentWidth = Math.max(
  220,                           // Minimum width
  Math.min(500, textLength * 8 + 40)  // Max 500px
);

// Height calculation
const contentHeight = Math.max(
  60,                            // Minimum height
  textarea.scrollHeight          // Actual content height
);
```

### Performance

- **Debouncing**: Not currently implemented (instant updates)
- **Re-renders**: Only when text changes
- **Handle Updates**: Efficient diff-based updates
- **Memory**: Minimal state (text + variables array)

---

## Best Practices

### ✅ Do

- Use descriptive variable names (`userName` not `u`)
- Test with different data sources
- Keep templates readable
- Use consistent naming conventions

### ❌ Don't

- Use very long variable names (affects label readability)
- Create too many variables (>10 can be hard to manage)
- Use special characters in variable names
- Forget to connect input handles

---

## Troubleshooting

### Problem: Variable not detected

**Symptoms:**
- Typed `{{variable}}` but no handle appears

**Solutions:**
1. Check for typos in the brackets (must be `{{` and `}}`)
2. Verify variable name follows JavaScript rules
3. Ensure no invalid characters
4. Try removing and retyping

### Problem: Handle position looks wrong

**Symptoms:**
- Handles overlap or are poorly positioned

**Solutions:**
1. This is automatic - positions adjust based on variable count
2. With many variables (>5), consider splitting into multiple nodes
3. Try resizing the node by changing text length

### Problem: Node too wide/narrow

**Symptoms:**
- Node doesn't size properly

**Solutions:**
1. Width is calculated based on text length
2. Minimum: 220px, Maximum: 500px
3. Add/remove text to adjust width
4. Node will never exceed 500px wide

### Problem: Text gets cut off

**Symptoms:**
- Can't see all text in textarea

**Solutions:**
1. This shouldn't happen - textarea auto-expands
2. Try clicking in the textarea to refresh
3. Check browser console for errors

---

## Keyboard Shortcuts

While focused in textarea:

- **Tab**: Insert tab character (doesn't move focus)
- **Enter**: New line (node expands automatically)
- **Ctrl+A / Cmd+A**: Select all text
- **Ctrl+Z / Cmd+Z**: Undo
- **Ctrl+Y / Cmd+Shift+Z**: Redo

---

## Integration Examples

### With Input Node

```
[Input Node: userName] ──→ {{userName}} ──→ [Text Node] ──→ [Output Node]
```

Connect user input directly to the Text Node's variable handle.

### With LLM Node

```
[Text: "Analyze {{data}}"] ──→ [LLM Node] ──→ [Output]
          ↑
    [Input: data]
```

Use Text Node to format prompts for LLM processing.

### With Multiple Sources

```
[Input: firstName] ──→ {{firstName}}
[Input: lastName]  ──→ {{lastName}}     [Text Node] ──→ [Output]
[Input: email]     ──→ {{email}}
```

Combine multiple data sources into a single formatted text.

---

## API Reference

### Props

| Prop | Type | Description |
|------|------|-------------|
| `id` | string | Unique node identifier (required) |
| `data` | object | Initial data (optional) |
| `data.text` | string | Initial text content |

### State

| State | Type | Description |
|-------|------|-------------|
| `text` | string | Current textarea content |
| `variables` | string[] | Array of detected variable names |
| `dimensions` | object | Current width and height |

### Handles

| ID | Type | Position | Description |
|----|------|----------|-------------|
| `{id}-{variableName}` | target | Left | Input handle for each variable |
| `{id}-output` | source | Right | Output handle for processed text |

---

## Comparison with Basic Text Node

| Feature | Basic Node | Advanced Node |
|---------|------------|---------------|
| Dynamic sizing | ❌ | ✅ |
| Variable detection | ❌ | ✅ |
| Multiple inputs | ❌ | ✅ Auto-generated |
| Auto-expanding textarea | ❌ | ✅ |
| Variable preview | ❌ | ✅ |
| Handle labels | ❌ | ✅ |
| Real-time updates | ❌ | ✅ |

---

## Performance Notes

### Optimization

The Text Node is optimized for:
- Fast variable detection (regex-based)
- Efficient re-renders (React hooks)
- Smooth animations (CSS transitions)

### Limitations

- Maximum width: 500px (prevents overly wide nodes)
- Variable count: Works well with up to 10 variables
- Text length: No hard limit, but very long text (>1000 chars) may impact performance

---

## Future Enhancements

Potential improvements:

- [ ] Syntax highlighting for variables
- [ ] Variable validation (type checking)
- [ ] Default values for variables
- [ ] Variable autocomplete
- [ ] Export template as JSON
- [ ] Import template from JSON
- [ ] Variable renaming (rename all at once)
- [ ] Variable deletion (remove all occurrences)
- [ ] Template library/presets

---

## Examples Gallery

### Personal Letter
```
Dear {{recipientName}},

I hope this letter finds you well. I wanted to reach out regarding {{topic}}.

{{mainContent}}

Looking forward to hearing from you.

Best regards,
{{senderName}}
```
Creates: 4 variables (recipientName, topic, mainContent, senderName)

### Product Description
```
The {{productName}} is {{description}}. 
Priced at ${{price}}, it's available in {{color}}.

Features:
- {{feature1}}
- {{feature2}}
- {{feature3}}
```
Creates: 6 variables

### API Response Format
```
{
  "status": "{{status}}",
  "message": "{{message}}",
  "data": {{data}},
  "timestamp": "{{timestamp}}"
}
```
Creates: 4 variables (great for formatting API responses)

---

## Tips & Tricks

### 💡 Tip 1: Testing Variables
Use the variable preview to ensure all variables are detected correctly before connecting inputs.

### 💡 Tip 2: Organizing Complex Templates
For templates with many variables, group related variables together in the text for clarity.

### 💡 Tip 3: Reusable Templates
Save common templates by copying the text content and pasting into new Text Nodes.

### 💡 Tip 4: Debugging
The variable count badge helps quickly see how many inputs your template expects.

### 💡 Tip 5: Performance
Keep variable names short for better label readability on the node.

---

**Version**: 1.0.0
**Last Updated**: January 2026
**Component**: Advanced Text Node
