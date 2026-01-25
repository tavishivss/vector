# Styling Guide - VectorShift Pipeline Builder

## Overview

This document describes the comprehensive styling system implemented for the VectorShift Pipeline Builder application. The design features a modern, professional aesthetic with smooth animations, consistent spacing, and a cohesive color palette.

## Design Philosophy

The styling follows these core principles:

1. **Consistency**: Unified color palette, spacing, and typography throughout
2. **Clarity**: Clear visual hierarchy and intuitive UI elements
3. **Responsiveness**: Adapts to different screen sizes
4. **Accessibility**: Good contrast ratios and interactive feedback
5. **Performance**: Smooth animations without sacrificing performance
6. **Modularity**: Reusable CSS variables and utility classes

## Color System

### Primary Colors
- **Primary 500**: `#0ea5e9` - Main brand color
- **Primary 600**: `#0284c7` - Darker variant for hover states
- **Primary 700**: `#0369a1` - Even darker for active states

### Node Type Colors
Each node type has its own color identity:

| Node Type | Color | Hex Code |
|-----------|-------|----------|
| Input | Green | `#10b981` |
| Output | Orange | `#f59e0b` |
| LLM | Purple | `#8b5cf6` |
| Text | Cyan | `#06b6d4` |
| Filter | Blue | `#3b82f6` |
| Transform | Yellow | `#eab308` |
| Conditional | Red | `#ef4444` |
| Aggregator | Green | `#22c55e` |
| Delay | Purple | `#a855f7` |

### Neutral Colors
- Gray scale from 50-900 for backgrounds, borders, and text
- Used for UI chrome, borders, and disabled states

## Typography

### Font Families
- **Sans-serif**: System font stack for optimal performance and native feel
- **Monospace**: For code and technical content

### Font Sizes
- `0.625rem` (10px) - Small labels, hints
- `0.75rem` (12px) - Node field labels, body text
- `0.875rem` (14px) - Regular body text, buttons
- `1rem` (16px) - Base size, important text
- `1.125rem` (18px) - Section headers
- `1.75rem` (28px) - Main title

### Font Weights
- `400` - Regular text
- `600` - Semi-bold for emphasis
- `700` - Bold for headers and important elements

## Spacing System

Based on a consistent scale using CSS variables:

```css
--spacing-xs: 0.25rem   (4px)
--spacing-sm: 0.5rem    (8px)
--spacing-md: 1rem      (16px)
--spacing-lg: 1.5rem    (24px)
--spacing-xl: 2rem      (32px)
--spacing-2xl: 3rem     (48px)
```

## Border Radius

Consistent rounding for different elements:

```css
--radius-sm: 0.25rem   (4px) - Small elements
--radius-md: 0.5rem    (8px) - Inputs, small cards
--radius-lg: 0.75rem   (12px) - Buttons, nodes
--radius-xl: 1rem      (16px) - Large cards, panels
--radius-full: 9999px  - Pills, badges, handles
```

## Shadows

Layered shadows for depth perception:

```css
--shadow-sm: Subtle shadow for slight elevation
--shadow-md: Medium shadow for cards
--shadow-lg: Large shadow for floating elements
--shadow-xl: Extra large shadow for modals, focus states
```

## Component Styling

### App Container
- Full viewport height layout
- Gradient background (gray to primary)
- Flexbox column structure

### Header
- White background with shadow
- Gradient text for title
- Icon with gradient background
- Subtle subtitle in gray

### Toolbar
- White card with rounded corners
- Grid layout for node buttons (auto-fill)
- Section header with badge
- Responsive grid (adjusts columns based on width)

### Node Buttons
- Gradient background (subtle)
- Icon with colored background matching node type
- Hover effects:
  - Lift animation (translateY)
  - Shimmer effect
  - Enhanced shadow
  - Border color change
- Active state: scale down slightly
- Cursor changes: grab → grabbing

### Canvas
- White container with large shadow
- Header bar with stats
- React Flow with customized controls
- Empty state with centered message
- Minimap with color-coded nodes

### Nodes
- Gradient backgrounds matching node type
- Bold colored borders
- Hover effects:
  - Lift animation
  - Enhanced shadow
  - Border brightening
- Smooth transitions on all properties
- Input fields with focus states
- Custom select dropdowns with arrows

### Submit Button
- Large, prominent gradient button
- Shimmer effect on hover
- Lift animation
- Icon that slides on hover
- Loading state with spinner
- Success/error states with colors
- Shake animation on error

## Animations

### Keyframe Animations

**fadeIn** - Entrance animation
```css
from: opacity 0, translateY(10px)
to: opacity 1, translateY(0)
duration: 0.3s - 0.7s (varies by element)
```

**slideIn** - Side entrance
```css
from: translateX(-20px), opacity 0
to: translateX(0), opacity 1
```

**pulse** - Attention grabber
```css
Alternates opacity: 1 → 0.8 → 1
```

**shimmer** - Shine effect
```css
Moves gradient across element
```

**spin** - Loading indicator
```css
360-degree rotation
duration: 0.8s - 1s
```

**shake** - Error indication
```css
Alternates translateX: 0 → -10px → 10px → 0
```

### Transition Timing

```css
--transition-fast: 150ms ease-in-out
--transition-base: 250ms ease-in-out
--transition-slow: 350ms ease-in-out
```

Applied to:
- Colors and backgrounds
- Transforms (position, scale, rotation)
- Shadows and borders
- Opacity changes

## React Flow Customization

### Handles
- 12px diameter circles
- White border for contrast
- Primary color background
- Expand to 16px on hover
- Glow effect when connecting
- Green when valid connection
- Smooth transitions

### Edges
- 2px stroke width
- 3px when selected
- Primary color when selected
- Smooth step connection style

### Controls
- Rounded container
- Custom hover states (primary blue)
- Shadow for depth

### Minimap
- Color-coded nodes by type
- Rounded corners
- White border
- Shadow for elevation

### Background
- Dot pattern
- Light gray color
- 20px grid spacing

## Responsive Design

### Breakpoints

**Desktop** (default)
- Grid: auto-fill with min 140px columns
- Full padding and spacing
- All animations enabled

**Tablet** (< 1024px)
- Adjusted grid columns
- Maintained spacing

**Mobile** (< 768px)
- Grid: min 120px columns
- Reduced padding
- Stacked layouts for headers
- Canvas height reduced to 60vh
- Full-width submit button

### Mobile-Specific Changes
```css
@media (max-width: 768px) {
  - Smaller title font
  - Reduced padding (lg → md)
  - Smaller icons
  - Stacked flex layouts
  - Full-width buttons
}
```

## Accessibility Features

### Focus States
- Blue outline ring (3px)
- Underline animation on labels
- Enhanced handle visibility
- Clear button states

### Color Contrast
- Text: Gray 900 on white (high contrast)
- Labels: Gray 700 on white (good contrast)
- Disabled: Reduced opacity with gray

### Interactive Feedback
- Cursor changes (pointer, grab, grabbing)
- Hover states on all interactive elements
- Loading states
- Success/error visual feedback

## Scrollbar Styling

Custom styled scrollbars for a polished look:
- Gray track
- Darker gray thumb
- Rounded thumb
- Hover darkening

Works in WebKit browsers (Chrome, Safari, Edge).

## CSS Variables Usage

All colors, spacing, and other design tokens are defined as CSS variables in `:root`, making it easy to:
- Theme the entire application
- Maintain consistency
- Make global changes quickly
- Support dark mode (future enhancement)

### Example Usage
```css
/* Instead of: */
color: #0ea5e9;

/* Use: */
color: var(--primary-500);
```

## Best Practices

### Adding New Styles

1. **Use CSS Variables**: Always prefer variables over hardcoded values
2. **Follow Naming**: Use existing conventions (kebab-case)
3. **Maintain Hierarchy**: Keep specificity low, use classes over IDs
4. **Group Related Styles**: Organize CSS by component
5. **Add Comments**: Document non-obvious styles
6. **Test Responsively**: Check mobile, tablet, desktop

### Performance Tips

1. **Use CSS Transforms**: For animations (GPU accelerated)
2. **Avoid Layout Thrashing**: Batch DOM reads/writes
3. **Limit Shadow Usage**: Shadows are expensive, use sparingly
4. **Optimize Selectors**: Keep selectors simple and flat
5. **Use Will-Change**: For elements that will animate

## File Structure

```
frontend/src/
├── index.css           # Global styles, design system variables
├── App.css            # App container, header styles
├── toolbar.css        # Toolbar and node button styles
├── ui.css             # Canvas and React Flow styles
├── submit.css         # Submit button styles
└── nodes/
    └── nodes.css      # Node-specific styles
```

## Design Tokens Reference

### Complete Color Palette

**Primary Blues**
```css
--primary-50: #f0f9ff
--primary-100: #e0f2fe
--primary-200: #bae6fd
--primary-300: #7dd3fc
--primary-400: #38bdf8
--primary-500: #0ea5e9  ← Main brand color
--primary-600: #0284c7
--primary-700: #0369a1
--primary-800: #075985
--primary-900: #0c4a6e
```

**Grays**
```css
--gray-50: #f9fafb   ← Lightest backgrounds
--gray-100: #f3f4f6
--gray-200: #e5e7eb
--gray-300: #d1d5db  ← Borders
--gray-400: #9ca3af
--gray-500: #6b7280
--gray-600: #4b5563  ← Secondary text
--gray-700: #374151  ← Labels
--gray-800: #1f2937
--gray-900: #111827  ← Primary text
```

## Future Enhancements

Potential styling improvements:

1. **Dark Mode**: Add dark theme support using CSS variables
2. **Theme Switcher**: Allow users to choose color schemes
3. **Animations Toggle**: Option to reduce motion for accessibility
4. **Custom Node Colors**: User-defined color per node instance
5. **Export Styles**: Save and share style presets
6. **Print Styles**: Optimized styles for printing pipelines
7. **High Contrast Mode**: Enhanced accessibility theme
8. **RTL Support**: Right-to-left language support

## Conclusion

The styling system provides a modern, professional, and cohesive design that enhances usability while maintaining visual appeal. The modular approach with CSS variables makes it easy to maintain and extend.

For questions or suggestions, refer to the main README or create an issue in the repository.

---

**Last Updated**: January 2026
**Version**: 1.0.0
