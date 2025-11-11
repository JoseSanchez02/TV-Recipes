# TV Recipes - Smart TV Application

A fully functional Smart TV recipe application built with HTML, CSS, and JavaScript, featuring **W3C Spatial Navigation API** for D-Pad remote control navigation.

## 🎯 Features

### W3C Spatial Navigation API ✨ NEW!
- **Native API Support**: Automatic detection and usage of native W3C Spatial Navigation API
- **Intelligent Algorithm**: Euclidean distance calculation with perpendicular alignment bonus
- **Smart Fallback**: Automatic polyfill usage when native API is unavailable
- **Visual Feedback**: Enhanced focus animations with golden borders and glow effects
- **Navigation Groups**: Organized navigation scopes for optimal UX

### D-Pad First Navigation
- **Arrow Keys Navigation**: Navigate through all UI elements using ↑ ↓ ← → keys
- **Enter Key Selection**: Activate buttons and open recipes with Enter
- **No Mouse Required**: Fully operable with remote control only

### Visual Focus Management
- Clear focus indicators with golden borders
- Scale animation (1.05x) on focused elements
- Smooth transitions for all focus changes
- Glowing effects for better visibility

### 10-Foot UI Design
- Large fonts (24px minimum, up to 72px for headers)
- Large interactive elements (200px+ cards)
- High contrast color scheme
- Suitable for viewing from 10+ feet away

### Responsive Layout
- Adapts to different TV screen sizes
- 2-column grid for smaller TVs (720p)
- 3-column grid for Full HD (1080p)
- 4-column grid for 4K TVs

## 📱 Screens

### Home Screen
- Title: "Easy Recipes for Smart TV"
- Grid of 8 recipe cards with images and names
- D-Pad navigation between cards

### Recipe Detail Screen
- Large recipe image
- Recipe title
- Ingredients list (4-6 items with checkmarks)
- "View Steps" button to view cooking instructions
- "View Video" button (available for Enchiladas Suizas)
- Back button to return to home

### Steps Screen
- One cooking step displayed at a time
- Large, easy-to-read text
- Step counter (e.g., "Step 1 of 8")
- Previous/Next buttons
- Arrow key support for step navigation
- Back button to return to recipe detail

### Video Screen (NEW!)
- Full-screen video player
- Automatic fullscreen mode
- Custom playback controls
- D-Pad navigation support

## 🍳 Included Recipes

1. **Enchiladas Suizas** - Traditional Mexican dish with green cream sauce (with video!)
2. **Fettuccine Alfredo** - Classic Italian pasta with creamy sauce
3. **Tacos de Pollo** - Mexican chicken tacos
4. **Smoothie de Mango** - Refreshing mango smoothie
5. **Sopa de Tomate Casera** - Homemade tomato soup
6. **Pizza Margarita** - Classic Italian pizza
7. **Mole Poblano** - Traditional Mexican mole with chocolate
8. **Hamburguesa Clásica** - Classic cheeseburger with all the toppings

### Test Spatial Navigation

**Quick Test Page:**
```bash
# Open test_spatial_navigation.html in your browser
# This page demonstrates the spatial navigation algorithm
# Use arrow keys to navigate between 9 test buttons
```

Each recipe includes:
- High-quality image
- 6 ingredients
- 8 detailed cooking steps

## 🚀 Getting Started

### Run Locally

1. **Simple Method** (no installation needed):
   - Open `index.html` directly in a web browser
   - Use keyboard arrow keys and Enter for navigation

2. **With HTTP Server** (recommended for testing):
   ```bash
   npm install
   npm start
   ```
   - Opens automatically at http://localhost:8080

### Testing D-Pad Navigation

Use keyboard keys to simulate TV remote:
- **↑ ↓ ← →**: Navigate between elements
- **Enter**: Select/activate
- **Backspace**: Back (browser navigation)

## 📦 Packaging for Smart TV Platforms

### For Samsung Tizen TV

1. Create `config.xml`:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <widget xmlns="http://www.w3.org/ns/widgets" id="http://yourdomain.com/TVRecipes" version="1.0.0">
       <name>TV Recipes</name>
       <description>Smart TV Recipe Application</description>
       <icon src="icon.png"/>
       <content src="index.html"/>
   </widget>
   ```

2. Install Tizen Studio
3. Package as `.wgt` file
4. Deploy to Samsung TV

### For LG webOS TV

1. Create `appinfo.json`:
   ```json
   {
       "id": "com.yourdomain.tvrecipes",
       "version": "1.0.0",
       "vendor": "Your Name",
       "type": "web",
       "main": "index.html",
       "title": "TV Recipes",
       "icon": "icon.png"
   }
   ```

2. Install webOS TV SDK
3. Package as `.ipk` file
4. Deploy to LG TV

## 🎨 Customization

### Adding New Recipes

Edit `app.js` and add to the `recipes` array:

```javascript
{
    id: 7,
    name: "Your Recipe Name",
    image: "https://your-image-url.com/image.jpg",
    ingredients: [
        "Ingredient 1",
        "Ingredient 2",
        // ... up to 6 ingredients
    ],
    steps: [
        "Step 1 instructions",
        "Step 2 instructions",
        // ... up to 8 steps
    ]
}
```

### Changing Colors

Edit `styles.css`:
- Background gradient: `body { background: ... }`
- Focus color: Change `#ffd700` to your preferred color
- Button colors: Update `.view-steps-button` background

### Adjusting Grid Layout

In `styles.css`, modify `.recipe-grid`:
```css
.recipe-grid {
    grid-template-columns: repeat(3, 1fr); /* Change number for columns */
    gap: 40px; /* Adjust spacing */
}
```

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic structure
- **CSS3**: Animations, transitions, grid layout
- **JavaScript (ES6+)**: Application logic
- **Spatial Navigation Polyfill**: D-Pad support

### Browser Compatibility
- Modern browsers with ES6 support
- Samsung Tizen 3.0+
- LG webOS 3.0+
- Android TV browsers

### Performance
- No external dependencies (except polyfill CDN)
- Lightweight (~15KB total)
- Images loaded from Unsplash CDN
- Instant navigation with no lag

## 📝 File Structure

```
TV_Recipes/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── app.js             # Application logic and data
├── package.json       # NPM configuration
└── README.md          # This file
```

## 🎮 Navigation Map

```
Home Screen:
  ↓
Recipe Card (Grid) → [Enter] → Detail Screen
  ↓                               ↓
[Back Button] ← [View Steps] → Steps Screen
                                   ↓
                           [Back to Recipe]
```

## 🐛 Known Issues & Solutions

**Issue**: Focus outline not visible on some TVs
- **Solution**: Focus uses both border and box-shadow for maximum visibility

**Issue**: Images not loading
- **Solution**: Using Unsplash CDN; replace with local images for offline use

**Issue**: Spatial navigation not working
- **Solution**: Polyfill loaded from CDN; ensure internet connection on first load

## 📄 License

MIT License - Free to use and modify

## 👥 Contributing

Feel free to:
- Add more recipes
- Improve UI/UX
- Add more languages
- Optimize for specific TV platforms

## 🌟 Future Enhancements

- [ ] Recipe search functionality
- [ ] Categories (Breakfast, Lunch, Dinner, Desserts)
- [ ] Favorites system
- [ ] Timer functionality for cooking steps
- [ ] Multiple language support
- [ ] Voice control integration
- [ ] Recipe rating system

---

**Enjoy cooking with TV Recipes! 🍳📺**

