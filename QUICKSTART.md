# Quick Start Guide - TV Recipes

## 🚀 Run the Application Now

### Option 1: Open Directly (Fastest)
1. Double-click on `index.html`
2. The app will open in your default browser
3. Use keyboard arrows (↑ ↓ ← →) and Enter to navigate

### Option 2: Run with HTTP Server (Recommended)
1. Open a terminal/command prompt in this folder
2. Run: `npm install` (only needed once)
3. Run: `npm start`
4. App opens automatically at http://localhost:8080

## 🎮 How to Use

### Navigation Controls
- **↑ ↓ ← →** : Move between items (simulates D-Pad on TV remote)
- **Enter** : Select/Open item
- **Backspace** : Go back (browser back button)

### App Flow
1. **Home Screen**: Browse 6 recipe cards
   - Use arrow keys to highlight different recipes
   - Press Enter to open a recipe

2. **Recipe Detail Screen**: View ingredients
   - See large recipe image
   - Read ingredient list
   - Press Enter on "Ver Pasos" button to see cooking steps

3. **Steps Screen**: Follow cooking instructions
   - One step shown at a time in large text
   - Use ← → arrows or buttons to navigate steps
   - Press Enter on "Volver" to go back

## 📝 Included Recipes

1. Enchiladas Suizas
2. Fettuccine Alfredo
3. Tacos de Pollo
4. Smoothie de Mango
5. Sopa de Tomate Casera
6. Pizza Margarita
7. Mole Poblano
8. Hamburguesa Clásica

## 🔧 Customization

### Add Your Own Recipe
Edit `app.js` around line 10, add to the `recipes` array:

```javascript
{
    id: 9,
    name: "Your Recipe",
    image: "public/Your_Recipe.jpg",
    ingredients: [
        "Ingredient 1",
        "Ingredient 2",
        "Ingredient 3"
    ],
    steps: [
        "Step 1: Do this...",
        "Step 2: Then do this...",
        "Step 3: Finally..."
    ]
}
```

### Change Colors
Edit `styles.css`:
- Line 13: Main background color
- Line 79: Focus border color (default: gold #ffd700)
- Line 189: Button colors

## 📦 Deploy to Real Smart TV

### Samsung Tizen TV
1. Install Tizen Studio: https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk.html
2. Use `config.xml` file (already included)
3. Package as .wgt file
4. Install on TV via Tizen Studio

### LG webOS TV
1. Install webOS TV SDK: https://webostv.developer.lge.com/sdk/installation/
2. Use `appinfo.json` file (already included)
3. Package as .ipk file
4. Install on TV via webOS TV CLI

## ✅ Testing Checklist

- [ ] Open index.html in browser
- [ ] Can navigate recipe cards with arrow keys
- [ ] Focus highlight (golden border) is visible
- [ ] Can open recipe with Enter key
- [ ] Back button works
- [ ] Can view cooking steps
- [ ] Can navigate steps with arrow keys
- [ ] All text is readable from distance

## 🐛 Troubleshooting

**Problem**: Arrow keys scroll the page instead of navigating
- **Solution**: Click on a recipe card first to set focus

**Problem**: Images not loading
- **Solution**: Need internet connection (images from Unsplash CDN)
- **Alternative**: Replace image URLs with local files

**Problem**: Focus not visible
- **Solution**: Use Tab key first, then arrow keys

**Problem**: npm start doesn't work
- **Solution**: Run `npm install` first

## 📞 Support

For issues or questions:
1. Check README.md for detailed documentation
2. Verify all files are present (index.html, styles.css, app.js)
3. Test in modern browser (Chrome, Firefox, Edge)

---

**Ready to cook! 🍳 Open index.html to start!**

