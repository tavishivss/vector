# 🚀 Quick Start - New Design

Get up and running with the new black & purple theme and sidebar layout!

---

## Step 1: Start the Application

```bash
# Navigate to frontend
cd /Users/tavishi/Desktop/vector/frontend

# Install dependencies (if not already)
npm install

# Start the app
npm start
```

The app will open at **http://localhost:3000** in **dark mode** by default.

---

## Step 2: Explore the New Layout

### What You'll See

```
┌─────────────────────────────────────┐
│ ⚡ VectorShift Pipeline Builder  ☀️ │ ← Header with theme toggle
├──────────┬──────────────────────────┤
│ 🎨 Node  │ 🎯 Pipeline Canvas       │
│ Palette  │                          │
│          │                          │
│ 📥 Input │  (Drag nodes here)       │
│ 📤 Output│                          │
│ 🤖 LLM   │                          │
│ 📝 Text  │                          │
│ ...      │                          │
├──────────┴──────────────────────────┤
│        [Submit Pipeline]            │ ← Bottom submit button
└─────────────────────────────────────┘
```

### Key Elements

1. **Top-Left**: VectorShift title with gradient
2. **Top-Right**: Theme toggle (☀️ or 🌙)
3. **Left Sidebar**: Vertical node palette
4. **Right Side**: Full-width canvas
5. **Bottom**: Centered submit button

---

## Step 3: Try the Theme Toggle

### Dark Mode (Default)
- Pure black background
- Purple accents
- White text
- Professional look

### Switch to Light Mode
1. Click the **☀️ button** in top-right
2. Watch the smooth transition
3. Everything adapts automatically!

### Switch Back
1. Click the **🌙 button**
2. Returns to dark mode
3. **Your preference is saved!**

---

## Step 4: Build Your First Pipeline

### Drag a Node
1. Find a node in the **left sidebar**
2. Click and drag it
3. Drop it on the **canvas**
4. Watch it appear!

### Connect Nodes
1. Hover over a node's **right side** (output)
2. Click and drag the purple handle
3. Connect to another node's **left side** (input)
4. See the purple connection line!

### Try the Text Node
1. Drag the **📝 Text** node
2. Type: `Hello, {{userName}}!`
3. Watch a handle appear on the left!
4. See the variable badge update!

### Submit Your Pipeline
1. Click **Submit Pipeline** at the bottom
2. See the themed alert modal
3. Check your node count, edge count, DAG status
4. Close the alert

---

## Step 5: Explore Features

### Node Palette (Left Sidebar)
- **9 nodes available**
- Vertical scrollable list
- Hover for purple accent
- Icon + label for each

### Canvas (Right Side)
- **Full-width workspace**
- Drag, zoom, pan
- Controls in bottom-right
- MiniMap in bottom-left

### Submit Button (Bottom)
- **Purple gradient**
- Purple glow effect
- Loading states
- Success/error feedback

---

## 🎨 Theme Colors

### Dark Mode
- Background: Pure black
- Panels: Dark gray
- Accent: Purple (`#a855f7`)
- Text: White
- Borders: Subtle gray

### Light Mode
- Background: Light gray
- Panels: White
- Accent: Dark purple (`#9333ea`)
- Text: Black
- Borders: Soft gray

---

## 💡 Tips

### Keyboard Shortcuts (React Flow)
- **Scroll**: Zoom in/out
- **Click + Drag**: Pan canvas
- **Shift + Click**: Multi-select
- **Backspace/Delete**: Delete selected

### Theme Preference
Your theme choice is **automatically saved** to localStorage and will persist when you reload the page!

### Responsive Design
- **Desktop**: Full sidebar (280px)
- **Tablet**: Compact sidebar (240px)
- **Mobile**: Horizontal node list on top

---

## 📱 Mobile/Tablet View

On smaller screens:
1. **Sidebar moves to top** (horizontal)
2. **Canvas below**
3. **2-column node grid**
4. **Everything still works!**

---

## 🎯 What to Try

### 1. Build a Simple Pipeline
```
Input → Text → LLM → Output
```

### 2. Test Variables in Text Node
```
Type: "Hello {{name}}, your email is {{email}}!"
Watch: 2 handles appear automatically
```

### 3. Create a Cycle (Tests DAG Detection)
```
A → B → C → A
Submit: See "Contains Cycles" warning
```

### 4. Switch Themes Multiple Times
```
Dark → Light → Dark → Light
Watch: Smooth transitions
Note: Theme persists!
```

---

## 🐛 Troubleshooting

### App Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Theme Not Saving
- Check browser localStorage is enabled
- Try clearing browser cache
- Theme stored as `vectorshift-theme`

### Sidebar Not Visible
- Check browser width (need > 768px for sidebar)
- On mobile, sidebar is horizontal on top
- Try zooming out (Cmd/Ctrl + -)

### Nodes Won't Drag
- Make sure you click and hold the node
- Drag onto the canvas area
- Release to drop

---

## 📚 Documentation

### Quick Reference
- **THEME_REFERENCE.md** - Color codes, variables, styling

### Complete Guide
- **NEW_LAYOUT_AND_THEME.md** - Full documentation

### Other Guides
- **START_HERE.md** - Original getting started
- **README.md** - Project overview

---

## ✅ Success Checklist

After starting the app, you should see:

- [ ] App opens in dark mode
- [ ] Black background with purple accents
- [ ] Node palette on the left
- [ ] Canvas on the right
- [ ] Submit button at bottom
- [ ] Theme toggle (☀️) in top-right
- [ ] Can drag nodes from sidebar
- [ ] Can connect nodes
- [ ] Can toggle theme smoothly
- [ ] Theme persists on reload

If all checked: **You're ready to go!** 🎉

---

## 🎊 Next Steps

### Explore More
1. Read **NEW_LAYOUT_AND_THEME.md** for details
2. Try all 9 node types
3. Build complex pipelines
4. Test backend integration
5. Experiment with both themes

### Start Backend (Optional)
```bash
cd ../backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Then test the full-stack integration!

---

## 🌟 Enjoy!

You now have a professional, modern pipeline builder with:
- ✨ Beautiful black & purple theme
- 🎨 Dark and light modes
- 📐 Clean sidebar layout
- 🚀 Production-ready design

**Happy building!** 🎉

---

**Quick Help:**
- Theme toggle: Top-right (☀️/🌙)
- Node palette: Left sidebar
- Submit: Bottom center
- Docs: NEW_LAYOUT_AND_THEME.md

**Version**: 2.0.0
**Last Updated**: January 2026
