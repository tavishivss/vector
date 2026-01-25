# Theme Reference Guide

Quick reference for the new black & purple theme system.

---

## 🎨 Color Palette

### Dark Mode Colors

```
┌─────────────────────────────────────────┐
│ Background Colors                       │
├─────────────────────────────────────────┤
│ --bg-primary:    #0a0a0a  ████████████  │
│ --bg-secondary:  #1a1a1a  ████████████  │
│ --bg-tertiary:   #2a2a2a  ████████████  │
│ --bg-elevated:   #1f1f1f  ████████████  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Text Colors                             │
├─────────────────────────────────────────┤
│ --text-primary:   #ffffff  ████████████ │
│ --text-secondary: #a0a0a0  ████████████ │
│ --text-tertiary:  #707070  ████████████ │
│ --text-disabled:  #4a4a4a  ████████████ │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Accent Colors (Purple)                  │
├─────────────────────────────────────────┤
│ --accent-primary:   #a855f7 ████████████│
│ --accent-secondary: #7e22ce ████████████│
│ --accent-hover:     #c084fc ████████████│
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Border Colors                           │
├─────────────────────────────────────────┤
│ --border-color: #2a2a2a    ████████████ │
│ --border-hover: #3a3a3a    ████████████ │
│ --border-focus: #a855f7    ████████████ │
└─────────────────────────────────────────┘
```

### Light Mode Colors

```
┌─────────────────────────────────────────┐
│ Background Colors                       │
├─────────────────────────────────────────┤
│ --bg-primary:    #f5f5f5  ░░░░░░░░░░░░  │
│ --bg-secondary:  #ffffff  ░░░░░░░░░░░░  │
│ --bg-tertiary:   #e5e5e5  ░░░░░░░░░░░░  │
│ --bg-elevated:   #fafafa  ░░░░░░░░░░░░  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Text Colors                             │
├─────────────────────────────────────────┤
│ --text-primary:   #0a0a0a  ▓▓▓▓▓▓▓▓▓▓▓▓ │
│ --text-secondary: #4a4a4a  ▓▓▓▓▓▓▓▓▓▓▓▓ │
│ --text-tertiary:  #707070  ▓▓▓▓▓▓▓▓▓▓▓▓ │
│ --text-disabled:  #a0a0a0  ▓▓▓▓▓▓▓▓▓▓▓▓ │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Accent Colors (Purple)                  │
├─────────────────────────────────────────┤
│ --accent-primary:   #9333ea ████████████│
│ --accent-secondary: #7e22ce ████████████│
│ --accent-hover:     #a855f7 ████████████│
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Border Colors                           │
├─────────────────────────────────────────┤
│ --border-color: #e0e0e0    ░░░░░░░░░░░░ │
│ --border-hover: #d0d0d0    ░░░░░░░░░░░░ │
│ --border-focus: #9333ea    ████████████ │
└─────────────────────────────────────────┘
```

---

## 🎯 Layout Dimensions

```
Desktop (> 1024px):
┌────────┬────────────────────────────┐
│ 280px  │  Remaining Width           │
│        │                            │
│ Sidebar│  Canvas Area               │
│        │                            │
└────────┴────────────────────────────┘

Tablet (768px - 1024px):
┌────────┬──────────────────────┐
│ 240px  │  Remaining Width     │
│        │                      │
│ Sidebar│  Canvas Area         │
│        │                      │
└────────┴──────────────────────┘

Mobile (< 768px):
┌────────────────────────────────┐
│ Sidebar (200px height)         │
├────────────────────────────────┤
│                                │
│ Canvas Area                    │
│                                │
└────────────────────────────────┘
```

---

## 🎨 Component Styling

### Header
```css
Background: var(--bg-secondary)
Border: 2px solid var(--border-color)
Height: ~80px
Padding: 1.5rem 2rem
```

### Sidebar (Node Palette)
```css
Background: var(--bg-secondary)
Border-right: 2px solid var(--border-color)
Width: 280px (desktop)
Overflow-y: auto
Shadow: var(--shadow-lg)
```

### Node Button
```css
Background: var(--bg-tertiary)
Border: 2px solid var(--border-color)
Padding: 1rem
Border-radius: 0.75rem

Hover:
  Background: var(--bg-elevated)
  Border: 2px solid var(--accent-primary)
  Transform: translateX(4px)
```

### Canvas
```css
Background: var(--bg-primary)
Flex: 1 (takes remaining space)
```

### Submit Button
```css
Background: var(--gradient-primary)
  = linear-gradient(135deg, #a855f7, #7e22ce)
Color: white
Border-radius: 9999px (fully rounded)
Padding: 1rem 3rem
Shadow: var(--shadow-purple)
  = 0 4px 20px rgba(168, 85, 247, 0.4)

Hover:
  Transform: translateY(-2px)
  Filter: brightness(1.1)
```

### Theme Toggle
```css
Size: 48px × 48px
Border: 2px solid var(--border-color)
Background: var(--bg-tertiary)
Border-radius: 50%

Hover:
  Transform: scale(1.1) rotate(15deg)
  Border-color: var(--accent-primary)
```

---

## 🌈 Gradients

### Primary Gradient (Purple)
```css
--gradient-primary: linear-gradient(135deg, #a855f7 0%, #7e22ce 100%);
```
**Used for**: Buttons, badges, accents

### Secondary Gradient (Dark)
```css
--gradient-secondary: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
```
**Used for**: Backgrounds, panels

---

## ✨ Shadows

### Purple Glow
```css
--shadow-purple: 0 4px 20px rgba(168, 85, 247, 0.4);
```
**Used for**: Submit button, badges, accents

### Standard Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6)
--shadow-up: 0 -4px 6px -1px rgba(0, 0, 0, 0.4)
```

---

## 🎯 Status Colors

### Success (Green)
```
Dark Mode:  #22c55e
Light Mode: #16a34a
```

### Warning (Yellow)
```
Dark Mode:  #eab308
Light Mode: #ca8a04
```

### Error (Red)
```
Dark Mode:  #ef4444
Light Mode: #dc2626
```

---

## 📏 Spacing Scale

```
--spacing-xs:  0.25rem (4px)
--spacing-sm:  0.5rem  (8px)
--spacing-md:  1rem    (16px)
--spacing-lg:  1.5rem  (24px)
--spacing-xl:  2rem    (32px)
--spacing-2xl: 3rem    (48px)
```

---

## 🔄 Border Radius

```
--radius-sm:   0.25rem (4px)
--radius-md:   0.5rem  (8px)
--radius-lg:   0.75rem (12px)
--radius-xl:   1rem    (16px)
--radius-full: 9999px  (fully rounded)
```

---

## ⚡ Transitions

```
--transition-fast: 150ms ease-in-out
--transition-base: 250ms ease-in-out
--transition-slow: 350ms ease-in-out
```

---

## 🎨 React Flow Theme

### Handles (Connection Points)
```css
Size: 12px × 12px
Background: var(--accent-primary) (#a855f7)
Border: 2px solid var(--bg-secondary)

Hover:
  Size: 16px × 16px
  Background: var(--accent-hover)
  Shadow: var(--shadow-purple)
```

### Edges (Connections)
```css
Stroke-width: 2px

Selected:
  Stroke: var(--accent-primary)
  Stroke-width: 3px
```

### Controls
```css
Background: var(--bg-secondary)
Border: 2px solid var(--border-color)
Border-radius: var(--radius-lg)

Buttons:
  Background: var(--bg-secondary)
  Color: var(--text-primary)
  
  Hover:
    Background: var(--bg-tertiary)
    Color: var(--accent-primary)
```

### MiniMap
```css
Background: var(--bg-secondary)
Border: 2px solid var(--border-color)
Border-radius: var(--radius-lg)

Mask: var(--bg-tertiary)
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  .app-sidebar {
    width: 100%;
    max-height: 200px;
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .app-sidebar {
    width: 240px;
  }
}

/* Desktop */
@media (min-width: 1025px) {
  .app-sidebar {
    width: 280px;
  }
}
```

---

## 🎭 Animation Examples

### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Slide In Left
```css
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### Slide In Up
```css
@keyframes slideInUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

---

## 🔧 Quick Reference

### Switching Themes
```javascript
// Get current theme
const theme = localStorage.getItem('vectorshift-theme') || 'dark';

// Set theme
document.documentElement.setAttribute('data-theme', 'dark');
// or
document.documentElement.setAttribute('data-theme', 'light');

// Save preference
localStorage.setItem('vectorshift-theme', 'dark');
```

### Using Theme Variables
```css
.my-component {
  /* Backgrounds */
  background: var(--bg-secondary);
  
  /* Text */
  color: var(--text-primary);
  
  /* Borders */
  border: 2px solid var(--border-color);
  
  /* Accents */
  box-shadow: var(--shadow-purple);
  
  /* Transitions */
  transition: all var(--transition-base);
}

.my-component:hover {
  background: var(--bg-tertiary);
  border-color: var(--accent-primary);
}
```

---

## 🎨 Design Tokens Summary

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| Primary BG | `#0a0a0a` | `#f5f5f5` |
| Secondary BG | `#1a1a1a` | `#ffffff` |
| Accent | `#a855f7` | `#9333ea` |
| Text | `#ffffff` | `#0a0a0a` |
| Border | `#2a2a2a` | `#e0e0e0` |

---

## ✅ Usage Checklist

When styling a new component:

- [ ] Use theme variables (not hardcoded colors)
- [ ] Test in both dark and light modes
- [ ] Add smooth transitions
- [ ] Include hover states
- [ ] Consider mobile responsiveness
- [ ] Use consistent spacing scale
- [ ] Apply appropriate shadows
- [ ] Add focus states for accessibility

---

**Quick Copy-Paste Template:**

```css
.my-new-component {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);
}

.my-new-component:hover {
  background: var(--bg-tertiary);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

---

**Last Updated**: January 2026
**Version**: 2.0.0
