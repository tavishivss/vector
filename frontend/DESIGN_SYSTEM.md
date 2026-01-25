# Design System - VectorShift Pipeline Builder

## Visual Design Reference

This document provides a visual overview of the design system implemented for the application.

---

## 🎨 Color Palette

### Primary Colors (Blue)

```
█ #f0f9ff  primary-50   - Lightest backgrounds
█ #e0f2fe  primary-100  - Hover backgrounds
█ #bae6fd  primary-200  - Selection backgrounds
█ #7dd3fc  primary-300  - Light accents
█ #38bdf8  primary-400  - Medium blue
█ #0ea5e9  primary-500  - ★ BRAND COLOR
█ #0284c7  primary-600  - Hover states
█ #0369a1  primary-700  - Active states
█ #075985  primary-800  - Dark blue
█ #0c4a6e  primary-900  - Darkest blue
```

### Node Type Colors

```
Input       █ #10b981  Green    - Data entry
Output      █ #f59e0b  Orange   - Data exit
LLM         █ #8b5cf6  Purple   - AI processing
Text        █ #06b6d4  Cyan     - Static content
Filter      █ #3b82f6  Blue     - Data filtering
Transform   █ #eab308  Yellow   - Data transformation
Conditional █ #ef4444  Red      - Logic branching
Aggregator  █ #22c55e  Green    - Data combining
Delay       █ #a855f7  Purple   - Timing control
```

### Neutral Grays

```
█ #f9fafb  gray-50   - Canvas, backgrounds
█ #f3f4f6  gray-100  - Input backgrounds
█ #e5e7eb  gray-200  - Subtle borders
█ #d1d5db  gray-300  - Borders
█ #9ca3af  gray-400  - Placeholders
█ #6b7280  gray-500  - Disabled text
█ #4b5563  gray-600  - Secondary text
█ #374151  gray-700  - Labels
█ #1f2937  gray-800  - Dark text
█ #111827  gray-900  - Primary text
```

---

## 📏 Spacing Scale

```
xs  ▁     4px   - Tiny gaps
sm  ▂     8px   - Small gaps
md  ▃    16px   - Standard spacing
lg  ▄    24px   - Large spacing
xl  ▅    32px   - Extra large
2xl ▆    48px   - Huge spacing
```

### Usage Examples

```
Padding inside buttons:        md (16px)
Gap between node buttons:      md (16px)
Padding inside cards:          lg (24px)
Margin between sections:       xl (32px)
Padding in main container:     2xl (48px)
```

---

## 🔤 Typography

### Font Sizes

```
Text Size    Rem      Px    Usage
─────────────────────────────────────────────
Tiny         0.625    10    Handle labels
Small        0.75     12    Node fields, hints
Base         0.875    14    Body text, buttons
Regular      1.0      16    Standard text
Medium       1.125    18    Section headers
Large        1.75     28    Page title
```

### Font Weights

```
Weight   Usage
───────────────────────────
400      Regular body text
600      Semi-bold for emphasis, labels
700      Bold for headers, titles
```

### Font Families

```
Sans-serif: System font stack
            -apple-system, BlinkMacSystemFont, 'Segoe UI', ...

Monospace:  Code font stack
            source-code-pro, Menlo, Monaco, Consolas, ...
```

---

## 🔲 Border Radius

```
sm   ▢    4px   - Small elements, badges
md   ▢    8px   - Input fields
lg   ▢    12px  - Buttons, nodes
xl   ▢    16px  - Large cards, panels
full ●    100%  - Circles, pills
```

### Examples

```
Input fields:     md (8px)
Node cards:       lg (12px)
Toolbar panel:    xl (16px)
Handle dots:      full (circle)
Badges:           full (pill)
```

---

## 🌑 Shadows

### Shadow Layers

```
sm   │    Subtle elevation
     └──  1px offset, very light

md   │    Card elevation
     └──  4px offset, light

lg   │    Floating elements
     └──  10px offset, medium

xl   │    Modals, focus states
     └──  20px offset, prominent
```

### Usage

```
Small elements:        shadow-sm
Cards, nodes:          shadow-md
Toolbar, canvas:       shadow-lg
Hover states, modals:  shadow-xl
```

---

## ⏱️ Animation Timing

### Duration

```
Fast  ━━     150ms  - Color changes, small movements
Base  ━━━    250ms  - Standard transitions
Slow  ━━━━   350ms  - Complex animations
```

### Easing

```
All animations use: ease-in-out
- Smooth acceleration and deceleration
- Natural, organic feel
```

### Animated Properties

```
✓ transform       (GPU accelerated)
✓ opacity         (GPU accelerated)
✓ color           (fast)
✓ background      (fast)
✓ box-shadow      (moderate)
✗ width/height    (avoid - causes reflow)
```

---

## 🎭 Component Showcase

### Button Styles

```
┌─────────────────────┐
│   Submit Pipeline   │  Primary Button
└─────────────────────┘  - Gradient background
                         - Shadow
Hover:                   - Lift effect
┌─────────────────────┐  - Shimmer
│   Submit Pipeline  →│
└─────────────────────┘

Active:
┌─────────────────────┐  - Slight scale down
│   Submit Pipeline   │  - Reduced shadow
└─────────────────────┘
```

### Node Button

```
  ┌─────────┐
  │   📥    │         Normal state
  │  Input  │         - Light background
  └─────────┘         - Gray border

  ┌─────────┐
  │   📥    │         Hover state
  │  Input  │         - Lifted (-4px)
  └─────────┘         - Primary border
                      - Enhanced shadow
```

### Node Card

```
┌───────────────────┐
│ 📥 Input          │  Header with icon
├───────────────────┤  Divider
│ Name:             │
│ [input_______]    │  Text input
│ Type:             │
│ [Text      ▼]     │  Select dropdown
└───────────────────┘
        ●              Handle (right)

Hover:
  ┌───────────────────┐
  │ 📥 Input          │  - Lifted
  ├───────────────────┤  - Enhanced shadow
  │ Name:             │  - Brighter border
  │ [input_______]    │
  │ Type:             │
  │ [Text      ▼]     │
  └───────────────────┘
          ●
```

### Input Field States

```
Normal:
[________________]    Gray border, light bg

Focus:
[________________]    Blue border, white bg
└────────────────┘    Blue ring (3px)

Hover:
[________________]    Slightly darker border

Disabled:
[________________]    Gray background
                      50% opacity
```

---

## 🎬 Animation Examples

### Fade In

```
Frame 1:  [  ]  opacity: 0, y: 10px
Frame 2:  [▒ ]  opacity: 0.5, y: 5px
Frame 3:  [▓▓]  opacity: 1, y: 0
Duration: 300ms
```

### Slide In

```
Frame 1:  ← [  ]  x: -20px, opacity: 0
Frame 2:  ← [▒ ]  x: -10px, opacity: 0.5
Frame 3:    [▓▓]  x: 0, opacity: 1
Duration: 400ms
```

### Lift on Hover

```
Normal:   ▂▂▂▂▂  y: 0
          [Card]

Hover:    ▃▃▃▃▃  y: -4px
          [Card]  Enhanced shadow
```

### Shimmer

```
Frame 1:  [█▒░    ]  Shine at left
Frame 2:  [  █▒░  ]  Shine moving
Frame 3:  [    █▒░]  Shine at right
Repeat: On hover only
```

---

## 📱 Responsive Breakpoints

### Desktop (Default)

```
┌────────────────────────────────────────┐
│  ⚡ VectorShift Pipeline Builder       │
├────────────────────────────────────────┤
│  🎨 Node Palette                       │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐       │
│  │ I │ │ O │ │ L │ │ T │ │ F │       │
│  └───┘ └───┘ └───┘ └───┘ └───┘       │
├────────────────────────────────────────┤
│  🎯 Pipeline Canvas                    │
│  ┌──────────────────────────────────┐ │
│  │                                  │ │
│  │         Canvas Area              │ │
│  │                                  │ │
│  └──────────────────────────────────┘ │
├────────────────────────────────────────┤
│         [ Submit Pipeline → ]          │
└────────────────────────────────────────┘
Width: > 768px
Grid: auto-fill, min 140px
```

### Mobile

```
┌──────────────────────┐
│  ⚡ VectorShift      │
│  Pipeline Builder    │
├──────────────────────┤
│  🎨 Node Palette     │
│  Nodes: 9            │
│  ┌──┐ ┌──┐ ┌──┐     │
│  │I │ │O │ │L │     │
│  └──┘ └──┘ └──┘     │
├──────────────────────┤
│  🎯 Canvas           │
│  Nodes: 0            │
│  Connections: 0      │
│  ┌────────────────┐ │
│  │                │ │
│  │    Canvas      │ │
│  │                │ │
│  └────────────────┘ │
├──────────────────────┤
│  [Submit Pipeline] │
└──────────────────────┘
Width: < 768px
Grid: auto-fill, min 120px
Canvas: 60vh
Button: 100% width
```

---

## 🎯 Visual Hierarchy

### Information Architecture

```
Level 1: App Title
         Size: 28px, Weight: 700, Color: Gradient

Level 2: Section Headers (Toolbar, Canvas)
         Size: 18px, Weight: 600, Color: Gray-900

Level 3: Node Titles
         Size: 14px, Weight: 700, Color: Gray-900

Level 4: Field Labels
         Size: 12px, Weight: 600, Color: Gray-700

Level 5: Body Text, Hints
         Size: 12px, Weight: 400, Color: Gray-600

Level 6: Handle Labels, Micro Text
         Size: 10px, Weight: 500, Color: Gray-600
```

### Z-Index Layers

```
Layer 10: Modals, Overlays
Layer 5:  Floating elements, Tooltips
Layer 2:  Dropdowns
Layer 1:  Cards, Panels
Layer 0:  Base content (default)
Layer -1: Backgrounds, Decorative
```

---

## 🔗 Component Relationships

### Layout Structure

```
App Container (flex column)
├── Header (fixed height)
│   └── Title + Subtitle
├── Main (flex-1)
│   ├── Toolbar (auto height)
│   │   └── Node Grid
│   │       ├── Node Button × 9
│   │       └── ...
│   └── Canvas Container (flex-1)
│       ├── Canvas Header
│       │   └── Stats
│       └── React Flow
│           ├── Background
│           ├── Nodes
│           ├── Edges
│           ├── Controls
│           └── Minimap
└── Submit Section (auto height)
    └── Submit Button
```

---

## ✨ Interactive States

### Node Button States

```
State       Transform  Shadow   Border
─────────────────────────────────────────
Normal      none       md       gray-200
Hover       y:-4px     xl       primary-300
Active      scale:0.98 md       primary-500
Dragging    -          -        -
```

### Submit Button States

```
State       Background    Icon      Animation
──────────────────────────────────────────────
Idle        Primary       →         -
Hover       Lighter       slide→    shimmer
Active      Darker        →         scale:0.98
Loading     Primary       ⟳         spin
Success     Green         ✓         pulse
Error       Red           ✕         shake
```

### Input Field States

```
State       Border        Background  Ring
───────────────────────────────────────────
Normal      gray-300      gray-50     -
Hover       gray-400      gray-50     -
Focus       primary-500   white       blue(3px)
Error       red-500       red-50      red(3px)
Disabled    gray-300      gray-100    -
```

---

## 🎨 Gradient Patterns

### Brand Gradient

```
linear-gradient(135deg, #0ea5e9 0%, #9333ea 100%)
Blue → Purple (used in title)
```

### Button Gradient

```
linear-gradient(135deg, #0284c7 0%, #0369a1 100%)
Primary-600 → Primary-700
```

### Background Gradient

```
linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
Light gray → Light blue
```

### Node Gradients (per type)

```
Input:       linear-gradient(135deg, #ecfdf5 0%, #fff 100%)
Output:      linear-gradient(135deg, #fffbeb 0%, #fff 100%)
LLM:         linear-gradient(135deg, #faf5ff 0%, #fff 100%)
Text:        linear-gradient(135deg, #ecfeff 0%, #fff 100%)
Filter:      linear-gradient(135deg, #eff6ff 0%, #fff 100%)
Transform:   linear-gradient(135deg, #fefce8 0%, #fff 100%)
Conditional: linear-gradient(135deg, #fef2f2 0%, #fff 100%)
Aggregator:  linear-gradient(135deg, #f0fdf4 0%, #fff 100%)
Delay:       linear-gradient(135deg, #faf5ff 0%, #fff 100%)
```

---

## 📐 Spacing Patterns

### Common Layouts

**Card Padding**
```
┌─lg──────────────────────┐
│lg                       │
│   Content area          │
│                        lg
└─────────────────────lg──┘
```

**Section Gap**
```
[Section 1]
   ↕ xl (32px)
[Section 2]
   ↕ xl (32px)
[Section 3]
```

**Grid Gap**
```
[Item] ←md→ [Item] ←md→ [Item]
  ↕md         ↕md         ↕md
[Item] ←md→ [Item] ←md→ [Item]
```

---

## 🎯 Accessibility

### Focus Indicators

```
Element          Indicator
─────────────────────────────────────
Buttons          Blue ring (3px)
Inputs           Blue ring (3px)
Node buttons     Border + shadow
Nodes            Selection ring
```

### Color Contrast Ratios

```
Combination              Ratio    WCAG
───────────────────────────────────────
Gray-900 on White        16:1     AAA ✓
Gray-700 on White        12:1     AAA ✓
Gray-600 on White        8:1      AAA ✓
Primary-600 on White     5:1      AA ✓
```

### Keyboard Navigation

```
Tab        → Next interactive element
Shift+Tab  ← Previous element
Enter      → Activate button
Space      → Toggle checkbox
Esc        → Close modal/dialog
```

---

## 🚀 Performance

### GPU-Accelerated Properties

```
✓ transform        Uses GPU
✓ opacity          Uses GPU
✗ top/left         CPU (layout)
✗ width/height     CPU (layout)
```

### Animation Budget

```
60 FPS = 16.67ms per frame

Our animations:
- Simple transforms:     <2ms  ✓
- Opacity changes:       <1ms  ✓
- Box shadows:           3-5ms ✓
- Total budget used:     <8ms  ✓ (Good!)
```

---

## 📝 Implementation Notes

### CSS Architecture

```
index.css         → Global styles, design system
App.css           → App container, header
toolbar.css       → Toolbar, node buttons
ui.css            → Canvas, React Flow
submit.css        → Submit button
nodes/nodes.css   → Node-specific styles
```

### CSS Variable Usage

Always use variables for consistency:

```css
/* ❌ Don't */
color: #0ea5e9;
padding: 16px;
border-radius: 8px;

/* ✓ Do */
color: var(--primary-500);
padding: var(--spacing-md);
border-radius: var(--radius-md);
```

---

## 🎨 Design Checklist

When adding new components:

- [ ] Uses CSS variables for colors
- [ ] Uses spacing scale for padding/margins
- [ ] Has hover state
- [ ] Has focus state (if interactive)
- [ ] Has active state (if clickable)
- [ ] Has disabled state (if applicable)
- [ ] Includes smooth transitions
- [ ] Responsive on mobile
- [ ] Accessible (keyboard, contrast)
- [ ] Documented in this guide

---

**Design System Version**: 1.0.0
**Last Updated**: January 2026
**Maintained by**: VectorShift Team
