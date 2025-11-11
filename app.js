// ====================================
// TV Recipes - Smart TV Application
// D-Pad Navigation with Spatial API
// ====================================

// Recipe Database
const recipes = [
    {
        id: 1,
        name: "Swiss Enchiladas",
        image: "public/enchiladas-suizas-receta-sanborns.webp",
        video: "public/Enchiladas Suizas. La Receta Secreta.webm",
        ingredients: [
            "12 corn tortillas",
            "500g cooked and shredded chicken",
            "400g sour cream",
            "300g grated Manchego cheese",
            "2 roasted poblano peppers",
            "1 white onion, chopped"
        ],
        steps: [
            "Preheat the oven to 180°C (350°F). Grease a large baking dish.",
            "Sauté the onion until translucent. Add the shredded chicken.",
            "Mix the cream with the blended poblano peppers to make the green sauce.",
            "Pass the tortillas through hot oil to soften them without browning.",
            "Fill each tortilla with chicken, roll them up and place them in the baking dish.",
            "Cover with the cream sauce and sprinkle with abundant grated cheese.",
            "Bake for 25-30 minutes until the cheese is golden and bubbly.",
            "Serve hot with refried beans and white rice."
        ]
    },
    {
        id: 2,
        name: "Fettuccine Alfredo",
        image: "public/Fettuccine_Alfredo.jpg",
        video: "public/Cómo Hacer un Buen Espagueti Alfredo.webm",
        ingredients: [
            "400g fettuccine pasta",
            "200g unsalted butter",
            "300ml heavy cream",
            "150g grated Parmesan cheese",
            "2 cloves garlic, minced",
            "Salt and black pepper to taste"
        ],
        steps: [
            "Boil abundant salted water in a large pot.",
            "Cook the fettuccine according to package instructions until al dente.",
            "Meanwhile, melt the butter in a large skillet over medium heat.",
            "Add the minced garlic and sauté for 1 minute without browning.",
            "Add the cream and let it simmer gently for 3-4 minutes.",
            "Drain the pasta and add it to the skillet with the sauce.",
            "Add the Parmesan cheese and mix well until completely melted.",
            "Serve immediately with more Parmesan cheese and freshly ground black pepper."
        ]
    },
    {
        id: 3,
        name: "Tacos",
        image: "public/Tacos_de_Pollo.jpg",
        video: "public/TACOS DE POLLO faciles - comidas rapidas de hacer.webm",
        ingredients: [
            "600g chicken breast strips",
            "12 small corn tortillas",
            "1 red onion, sliced",
            "2 large tomatoes, diced",
            "Fresh cilantro to taste",
            "Juice of 2 limes"
        ],
        steps: [
            "Season the chicken strips with salt, pepper, cumin and paprika to taste.",
            "Heat oil in a large skillet over high heat.",
            "Cook the chicken for 6-8 minutes until well browned and cooked through.",
            "Heat the tortillas on a griddle or skillet on both sides.",
            "Finely chop the cilantro and mix with the red onion.",
            "Place the chicken on the hot tortillas.",
            "Add onion, tomato and cilantro to taste on each taco.",
            "Squeeze fresh lime over the tacos and serve immediately with salsa."
        ]
    },
    {
        id: 4,
        name: "Smoothie",
        image: "public/Smoothie_de_Mango.jpg",
        video: "public/Mango Smoothie： 4 INGREDIENTS ｜ The Recipe Rebel.webm",
        ingredients: [
            "2 ripe mangoes, peeled and cut",
            "1 cup plain yogurt",
            "1/2 cup cold milk",
            "2 tablespoons honey",
            "1 cup crushed ice",
            "Fresh mint for garnish"
        ],
        steps: [
            "Wash and peel the mangoes, cut the pulp into large pieces.",
            "Place the mango pieces in the blender jar.",
            "Add the plain yogurt, milk and honey.",
            "Add the crushed ice to achieve a cold and creamy consistency.",
            "Blend on high speed for 45-60 seconds until smooth.",
            "Taste and adjust sweetness by adding more honey if needed.",
            "Serve immediately in large, cold glasses.",
            "Garnish with fresh mint leaves and enjoy immediately."
        ]
    },
    {
        id: 5,
        name: "Homemade Tomato Soup",
        image: "public/Sopa_de_Tomate_Casera.jpg",
        video: "public/Tomato Soup from Fresh Tomatoes.webm",
        ingredients: [
            "8 large ripe tomatoes",
            "1 large white onion",
            "3 cloves garlic",
            "4 cups chicken broth",
            "1/2 cup fresh cream",
            "Fresh basil and olive oil"
        ],
        steps: [
            "Make a cross cut at the base of each tomato and blanch in boiling water for 30 seconds.",
            "Remove the skin from the tomatoes and cut them into quarters, discarding the seeds.",
            "Sauté the chopped onion and garlic in olive oil until soft.",
            "Add the tomatoes and cook for 10 minutes until softened.",
            "Add the chicken broth and bring to a boil, then reduce to low heat for 20 minutes.",
            "Blend the soup until you get a completely smooth consistency.",
            "Return to heat, add the cream and heat without boiling.",
            "Serve hot with chopped fresh basil and a drizzle of olive oil."
        ]
    },
    {
        id: 6,
        name: "Margherita Pizza",
        image: "public/Pizza_Margarita.jpg",
        video: "public/How to Make Margherita Pizza at Home ｜ Gordon Ramsay.webm",
        ingredients: [
            "1 pizza dough base",
            "200g tomato sauce",
            "250g fresh mozzarella cheese",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "Salt and oregano to taste"
        ],
        steps: [
            "Preheat the oven to maximum temperature (250°C or higher) for 30 minutes.",
            "Stretch the dough on a floured surface until you get a 30cm circle.",
            "Place the dough on a floured baking sheet or pizza stone.",
            "Spread the tomato sauce evenly leaving a 2cm border.",
            "Distribute the mozzarella cheese in pieces over the sauce.",
            "Drizzle with olive oil and sprinkle with salt and oregano.",
            "Bake for 10-12 minutes until the edge is golden and crispy.",
            "Remove from oven, add fresh basil and serve immediately."
        ]
    },
    {
        id: 7,
        name: "Mole Poblano",
        image: "public/mole.jpg",
        video: "public/Mole POBLANO desde CERO.webm",
        ingredients: [
            "1kg chicken pieces",
            "250g mole poblano paste",
            "3 cups chicken broth",
            "2 tablespoons lard or oil",
            "1 tablet Mexican chocolate",
            "Toasted sesame seeds for garnish"
        ],
        steps: [
            "Cook the chicken pieces in salted water until tender, approximately 30-40 minutes.",
            "Reserve 3 cups of the chicken broth and shred the pieces if you prefer.",
            "In a large pot, heat the lard or oil over medium heat.",
            "Crumble the mole paste and fry it in the hot oil for 2-3 minutes.",
            "Gradually incorporate the chicken broth, stirring constantly to avoid lumps.",
            "Add the Mexican chocolate and let it melt completely into the sauce.",
            "Add the chicken pieces and cook over low heat for 15-20 minutes, stirring occasionally.",
            "Serve hot over white rice and sprinkle with toasted sesame seeds. Accompany with tortillas."
        ]
    },
    {
        id: 8,
        name: "Classic Burger",
        image: "public/Hamburguesa.jpg",
        video: "public/Gordon Ramsay Makes the Perfect Burger ｜ Cooking With Gordon ｜ HexClad.webm",
        ingredients: [
            "4 hamburger buns with sesame seeds",
            "600g ground beef (80/20)",
            "4 slices cheddar cheese",
            "Lettuce, tomato and red onion",
            "Pickles",
            "Special sauce, mustard and ketchup"
        ],
        steps: [
            "Divide the meat into 4 equal portions and form 1.5cm thick burgers.",
            "Season both sides generously with salt and freshly ground black pepper.",
            "Heat a griddle or skillet over high heat until very hot.",
            "Cook the burgers 3-4 minutes per side for medium doneness, without pressing.",
            "Place a slice of cheese on each burger 1 minute before removing from heat.",
            "Lightly toast the buns on the griddle until golden.",
            "Spread special sauce on the bun base, place lettuce, tomato and the cheeseburger.",
            "Add onion, pickles, mustard and ketchup. Cover with the bun top and serve immediately."
        ]
    }
];

// Application State
let currentRecipe = null;
let currentStep = 0;

// DOM Elements
const homeScreen = document.getElementById('homeScreen');
const detailScreen = document.getElementById('detailScreen');
const stepsScreen = document.getElementById('stepsScreen');
const videoScreen = document.getElementById('videoScreen');
const recipeGrid = document.getElementById('recipeGrid');

// ====================================
// Initialization
// ====================================

function init() {
    console.log('🚀 Initializing TV Recipes App...');

    // Detect navigation mode (keyboard vs mouse)
    setupNavigationModeDetection();

    renderRecipeGrid();
    setupEventListeners();
    setupKeyboardNavigation();
    setupSpatialNavigation();

    // Set initial focus on first recipe card
    setTimeout(() => {
        const firstCard = document.querySelector('.recipe-card');
        if (firstCard) {
            firstCard.focus();
            console.log('✅ Initial focus set on first recipe card');
        }
    }, 100);

    console.log('✅ TV Recipes App initialized successfully');
}

// ====================================
// Navigation Mode Detection
// ====================================

function setupNavigationModeDetection() {
    // Detect if user is using keyboard or mouse
    let isKeyboardNav = true;

    // Mouse usage detection
    document.addEventListener('mousedown', () => {
        isKeyboardNav = false;
        document.body.classList.remove('keyboard-nav');
        document.body.classList.add('mouse-nav');
    });

    // Keyboard usage detection
    document.addEventListener('keydown', (e) => {
        if (e.key.includes('Arrow') || e.key === 'Tab' || e.key === 'Enter') {
            isKeyboardNav = true;
            document.body.classList.add('keyboard-nav');
            document.body.classList.remove('mouse-nav');
        }
    });

    // Start in keyboard mode (default for TV)
    document.body.classList.add('keyboard-nav');
    console.log('✅ Navigation mode detection enabled');
}

// ====================================
// Recipe Grid Rendering
// ====================================

function renderRecipeGrid() {
    recipeGrid.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const card = document.createElement('div');
        card.className = 'recipe-card focusable';
        card.tabIndex = 0;
        card.dataset.recipeId = recipe.id;
        card.dataset.nav = 'home-nav';
        card.dataset.navGroup = 'recipes';
        card.dataset.navIndex = index;
        card.setAttribute('role', 'gridcell');
        card.setAttribute('aria-label', `Receta: ${recipe.name}`);

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-card-image">
            <div class="recipe-card-title">${recipe.name}</div>
        `;

        card.addEventListener('click', () => openRecipeDetail(recipe.id));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openRecipeDetail(recipe.id);
            }
        });

        recipeGrid.appendChild(card);
    });

    console.log(`✅ Rendered ${recipes.length} recipe cards with spatial navigation support`);
}

// ====================================
// Navigation Functions
// ====================================

function openRecipeDetail(recipeId) {
    currentRecipe = recipes.find(r => r.id === recipeId);
    if (!currentRecipe) return;

    // Update detail screen content
    document.getElementById('detailTitle').textContent = currentRecipe.name;
    document.getElementById('detailImage').src = currentRecipe.image;
    document.getElementById('detailImage').alt = currentRecipe.name;

    const ingredientsList = document.getElementById('detailIngredients');
    ingredientsList.innerHTML = '';
    currentRecipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Show or hide video button based on recipe
    const videoBtn = document.getElementById('viewVideoBtn');
    if (currentRecipe.video) {
        videoBtn.style.display = 'block';
    } else {
        videoBtn.style.display = 'none';
    }

    // Switch screens
    showScreen('detail');

    // Focus on back button
    setTimeout(() => {
        document.getElementById('backToHome').focus();
    }, 100);
}

function openStepsView() {
    if (!currentRecipe) return;

    currentStep = 0;
    document.getElementById('stepsTitle').textContent = currentRecipe.name;
    updateStepDisplay();

    showScreen('steps');

    // Focus on next button
    setTimeout(() => {
        document.getElementById('nextStepBtn').focus();
    }, 100);
}

function updateStepDisplay() {
    if (!currentRecipe) return;

    const stepCounter = document.getElementById('stepCounter');
    const stepText = document.getElementById('stepText');
    const prevBtn = document.getElementById('prevStepBtn');
    const nextBtn = document.getElementById('nextStepBtn');

    stepCounter.textContent = `Step ${currentStep + 1} of ${currentRecipe.steps.length}`;
    stepText.textContent = currentRecipe.steps[currentStep];

    // Update button states
    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === currentRecipe.steps.length - 1;
}

function nextStep() {
    if (!currentRecipe) return;

    if (currentStep < currentRecipe.steps.length - 1) {
        currentStep++;
        updateStepDisplay();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        updateStepDisplay();
    }
}

function openVideoView() {
    if (!currentRecipe || !currentRecipe.video) return;

    document.getElementById('videoTitle').textContent = currentRecipe.name;

    // Detect video format from file extension
    const videoPath = currentRecipe.video;
    const extension = videoPath.split('.').pop().toLowerCase();
    const mimeType = extension === 'webm' ? 'video/webm' : 'video/mp4';

    // Set video source with correct MIME type
    const videoSource = document.getElementById('videoSource');
    videoSource.src = videoPath;
    videoSource.type = mimeType;

    const videoElement = document.getElementById('recipeVideo');
    videoElement.load(); // Reload video with new source

    showScreen('video');

    // Enter fullscreen automatically
    setTimeout(() => {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen().catch(err => {
                console.log('Could not enter fullscreen:', err);
            });
        } else if (videoElement.webkitRequestFullscreen) {
            videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
            videoElement.msRequestFullscreen();
        }

        // Autoplay
        videoElement.play().catch(err => {
            console.log('Autoplay blocked:', err);
        });

        document.getElementById('backToDetailFromVideo').focus();
    }, 300);
}

function showScreen(screenName) {
    homeScreen.classList.remove('active');
    detailScreen.classList.remove('active');
    stepsScreen.classList.remove('active');
    videoScreen.classList.remove('active');

    switch(screenName) {
        case 'home':
            homeScreen.classList.add('active');
            break;
        case 'detail':
            detailScreen.classList.add('active');
            break;
        case 'steps':
            stepsScreen.classList.add('active');
            break;
        case 'video':
            videoScreen.classList.add('active');
            break;
    }
}

// ====================================
// Event Listeners
// ====================================

function setupEventListeners() {
    // Back to home
    document.getElementById('backToHome').addEventListener('click', () => {
        showScreen('home');
        setTimeout(() => {
            const firstCard = document.querySelector('.recipe-card');
            if (firstCard) firstCard.focus();
        }, 100);
    });

    document.getElementById('backToHome').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            showScreen('home');
            setTimeout(() => {
                const firstCard = document.querySelector('.recipe-card');
                if (firstCard) firstCard.focus();
            }, 100);
        }
    });

    // View steps button
    document.getElementById('viewStepsBtn').addEventListener('click', openStepsView);
    document.getElementById('viewStepsBtn').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            openStepsView();
        }
    });

    // Back to detail
    document.getElementById('backToDetail').addEventListener('click', () => {
        showScreen('detail');
        setTimeout(() => {
            document.getElementById('viewStepsBtn').focus();
        }, 100);
    });

    document.getElementById('backToDetail').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            showScreen('detail');
            setTimeout(() => {
                document.getElementById('viewStepsBtn').focus();
            }, 100);
        }
    });

    // Step navigation buttons
    document.getElementById('nextStepBtn').addEventListener('click', nextStep);
    document.getElementById('nextStepBtn').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            nextStep();
        }
    });

    document.getElementById('prevStepBtn').addEventListener('click', prevStep);
    document.getElementById('prevStepBtn').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            prevStep();
        }
    });

    // View video button
    document.getElementById('viewVideoBtn').addEventListener('click', openVideoView);
    document.getElementById('viewVideoBtn').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            openVideoView();
        }
    });

    // Back to detail from video
    document.getElementById('backToDetailFromVideo').addEventListener('click', () => {
        const videoElement = document.getElementById('recipeVideo');
        videoElement.pause();
        showScreen('detail');
        setTimeout(() => {
            document.getElementById('viewVideoBtn').focus();
        }, 100);
    });

    document.getElementById('backToDetailFromVideo').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const videoElement = document.getElementById('recipeVideo');
            videoElement.pause();
            showScreen('detail');
            setTimeout(() => {
                document.getElementById('viewVideoBtn').focus();
            }, 100);
        }
    });

    // Video control buttons
    document.getElementById('playPauseBtn').addEventListener('click', () => {
        const video = document.getElementById('recipeVideo');
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    document.getElementById('playPauseBtn').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const video = document.getElementById('recipeVideo');
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    });

    document.getElementById('rewindBtn').addEventListener('click', () => {
        const video = document.getElementById('recipeVideo');
        video.currentTime = Math.max(0, video.currentTime - 10);
    });

    document.getElementById('rewindBtn').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const video = document.getElementById('recipeVideo');
            video.currentTime = Math.max(0, video.currentTime - 10);
        }
    });

    document.getElementById('forwardBtn').addEventListener('click', () => {
        const video = document.getElementById('recipeVideo');
        video.currentTime = Math.min(video.duration, video.currentTime + 10);
    });

    document.getElementById('forwardBtn').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const video = document.getElementById('recipeVideo');
            video.currentTime = Math.min(video.duration, video.currentTime + 10);
        }
    });

    // Listener para cuando se sale de pantalla completa
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && videoScreen.classList.contains('active')) {
            // Si salió de fullscreen y está en video screen, regresar a detail
            const videoElement = document.getElementById('recipeVideo');
            videoElement.pause();
            showScreen('detail');
            setTimeout(() => {
                document.getElementById('viewVideoBtn').focus();
            }, 100);
        }
    });

    // También para webkit (Safari)
    document.addEventListener('webkitfullscreenchange', () => {
        if (!document.webkitFullscreenElement && videoScreen.classList.contains('active')) {
            const videoElement = document.getElementById('recipeVideo');
            videoElement.pause();
            showScreen('detail');
            setTimeout(() => {
                document.getElementById('viewVideoBtn').focus();
            }, 100);
        }
    });

    // Atajos de teclado adicionales para el video
    document.getElementById('recipeVideo').addEventListener('keydown', (e) => {
        const video = document.getElementById('recipeVideo');
        switch(e.key) {
            case ' ':
            case 'Enter':
                e.preventDefault();
                if (video.paused) video.play();
                else video.pause();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                video.currentTime = Math.max(0, video.currentTime - 10);
                break;
            case 'ArrowRight':
                e.preventDefault();
                video.currentTime = Math.min(video.duration, video.currentTime + 10);
                break;
            case 'Escape':
                e.preventDefault();
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                }
                break;
        }
    });
}

// ====================================
// W3C Spatial Navigation API Implementation
// ====================================

function setupSpatialNavigation() {
    console.log('🔧 Initializing W3C Spatial Navigation API...');

    // Check if native Spatial Navigation is supported
    const hasSpatialNav = 'spatialNavigationEnabled' in document ||
                         typeof window.navigate === 'function';

    if (hasSpatialNav) {
        console.log('✅ Native Spatial Navigation API detected');
        enableNativeSpatialNavigation();
    } else {
        console.log('⚠️ Native API not found, using polyfill + custom implementation');
        enablePolyfillSpatialNavigation();
    }

    // Setup focusable elements with spatial navigation attributes
    setupFocusableElements();

    // Setup custom navigation groups
    setupNavigationGroups();
}

// ====================================
// Native Spatial Navigation API
// ====================================

function enableNativeSpatialNavigation() {
    try {
        // Enable spatial navigation for the document
        if (document.spatialNavigationEnabled !== undefined) {
            document.spatialNavigationEnabled = true;
        }

        // Configure navigation behavior
        document.addEventListener('navigate', (e) => {
            console.log('Native navigate event:', e.direction);
            handleSpatialNavigate(e);
        });

        console.log('✅ Native Spatial Navigation enabled');
    } catch (error) {
        console.warn('⚠️ Error enabling native spatial navigation:', error);
        enablePolyfillSpatialNavigation();
    }
}

// ====================================
// Polyfill-based Spatial Navigation
// ====================================

function enablePolyfillSpatialNavigation() {
    // Map of arrow keys to directions
    const keyMap = {
        'ArrowUp': 'up',
        'ArrowDown': 'down',
        'ArrowLeft': 'left',
        'ArrowRight': 'right',
        'Up': 'up',
        'Down': 'down',
        'Left': 'left',
        'Right': 'right'
    };

    document.addEventListener('keydown', (e) => {
        const direction = keyMap[e.key];

        if (direction) {
            e.preventDefault();
            navigateInDirection(direction);
        } else if (e.key === 'Enter') {
            handleEnterKey(e);
        }
    });

    console.log('✅ Polyfill-based spatial navigation enabled');
}

// ====================================
// Navigation Logic
// ====================================

function navigateInDirection(direction) {
    const currentFocus = document.activeElement;
    const currentScreen = getActiveScreen();

    // Get all focusable elements in current screen
    const focusableElements = getFocusableElementsInScreen(currentScreen);

    if (focusableElements.length === 0) return;

    // Special handling for steps screen (left/right changes steps)
    if (currentScreen === stepsScreen) {
        if (direction === 'right') {
            nextStep();
            return;
        } else if (direction === 'left') {
            prevStep();
            return;
        }
    }

    // Find the best candidate in the specified direction
    const nextElement = findBestCandidate(currentFocus, focusableElements, direction);

    if (nextElement) {
        nextElement.focus();
        console.log('📍 Focused:', nextElement.className, direction);
    }
}

function findBestCandidate(origin, candidates, direction) {
    if (!origin || !origin.getBoundingClientRect) {
        // No origin, focus first element
        return candidates[0];
    }

    const originRect = origin.getBoundingClientRect();
    let bestCandidate = null;
    let bestDistance = Infinity;

    candidates.forEach(candidate => {
        if (candidate === origin) return;
        if (candidate.disabled) return;
        if (getComputedStyle(candidate).display === 'none') return;

        const candidateRect = candidate.getBoundingClientRect();

        // Check if candidate is in the right direction
        if (!isInDirection(originRect, candidateRect, direction)) return;

        // Calculate distance (Euclidean distance between centers)
        const distance = calculateDistance(originRect, candidateRect);

        // Prefer candidates that are more aligned in the perpendicular axis
        const alignment = calculateAlignment(originRect, candidateRect, direction);
        const weightedDistance = distance - (alignment * 100); // Bonus for alignment

        if (weightedDistance < bestDistance) {
            bestDistance = weightedDistance;
            bestCandidate = candidate;
        }
    });

    return bestCandidate;
}

function isInDirection(originRect, targetRect, direction) {
    const originCenterX = originRect.left + originRect.width / 2;
    const originCenterY = originRect.top + originRect.height / 2;
    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;

    switch (direction) {
        case 'up':
            return targetCenterY < originCenterY;
        case 'down':
            return targetCenterY > originCenterY;
        case 'left':
            return targetCenterX < originCenterX;
        case 'right':
            return targetCenterX > originCenterX;
        default:
            return false;
    }
}

function calculateDistance(rect1, rect2) {
    const center1X = rect1.left + rect1.width / 2;
    const center1Y = rect1.top + rect1.height / 2;
    const center2X = rect2.left + rect2.width / 2;
    const center2Y = rect2.top + rect2.height / 2;

    const dx = center2X - center1X;
    const dy = center2Y - center1Y;

    return Math.sqrt(dx * dx + dy * dy);
}

function calculateAlignment(rect1, rect2, direction) {
    const center1X = rect1.left + rect1.width / 2;
    const center1Y = rect1.top + rect1.height / 2;
    const center2X = rect2.left + rect2.width / 2;
    const center2Y = rect2.top + rect2.height / 2;

    // For vertical movement, alignment is based on horizontal position
    // For horizontal movement, alignment is based on vertical position
    if (direction === 'up' || direction === 'down') {
        const horizontalDiff = Math.abs(center2X - center1X);
        return 1 / (1 + horizontalDiff); // Returns value between 0 and 1
    } else {
        const verticalDiff = Math.abs(center2Y - center1Y);
        return 1 / (1 + verticalDiff);
    }
}

// ====================================
// Helper Functions
// ====================================

function getActiveScreen() {
    if (homeScreen.classList.contains('active')) return homeScreen;
    if (detailScreen.classList.contains('active')) return detailScreen;
    if (stepsScreen.classList.contains('active')) return stepsScreen;
    if (videoScreen.classList.contains('active')) return videoScreen;
    return homeScreen;
}

function getFocusableElementsInScreen(screen) {
    const focusables = screen.querySelectorAll('.focusable, .recipe-card, button, [tabindex="0"]');
    return Array.from(focusables).filter(el => {
        const style = getComputedStyle(el);
        return style.display !== 'none' &&
               style.visibility !== 'hidden' &&
               !el.disabled;
    });
}

function setupFocusableElements() {
    // Add spatial navigation attributes to all focusable elements
    const focusables = document.querySelectorAll('.focusable, .recipe-card, button');

    focusables.forEach((element) => {
        // Ensure tabindex is set
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }

        // Add spatial navigation CSS property
        element.style.setProperty('--spatial-navigation-action', 'focus');

        // Add focus event listeners for visual feedback
        element.addEventListener('focus', function() {
            console.log('🎯 Focus on:', this.textContent?.trim() || this.className);
        });
    });

    console.log(`✅ Configured ${focusables.length} focusable elements`);
}

function setupNavigationGroups() {
    // Define navigation groups for better spatial navigation

    // Home screen recipe grid
    const recipeGrid = document.getElementById('recipeGrid');
    if (recipeGrid) {
        recipeGrid.setAttribute('data-nav-group', 'recipe-grid');
    }

    // Detail screen buttons
    const detailButtons = detailScreen.querySelectorAll('button');
    detailButtons.forEach((btn, index) => {
        btn.setAttribute('data-nav-group', 'detail-buttons');
        btn.setAttribute('data-nav-index', index);
    });

    // Steps screen buttons
    const stepsButtons = stepsScreen.querySelectorAll('button');
    stepsButtons.forEach((btn, index) => {
        btn.setAttribute('data-nav-group', 'steps-buttons');
        btn.setAttribute('data-nav-index', index);
    });

    console.log('✅ Navigation groups configured');
}

function handleEnterKey(e) {
    const activeElement = document.activeElement;

    if (!activeElement) return;

    e.preventDefault();

    // Trigger click event
    if (typeof activeElement.click === 'function') {
        activeElement.click();
        console.log('✅ Enter pressed on:', activeElement.className);
    }
}

function handleSpatialNavigate(event) {
    // Handle native spatial navigation events
    console.log('Native spatial navigation:', event.direction);
    // The browser handles the actual navigation
}

// ====================================
// Keyboard Navigation (D-Pad Support)
// ====================================

function setupKeyboardNavigation() {
    // Additional keyboard shortcuts and fallbacks
    document.addEventListener('keydown', (e) => {
        // Back button support (Backspace or ESC)
        if (e.key === 'Backspace' || e.key === 'Escape') {
            handleBackButton(e);
        }

        // Number keys for quick recipe selection (1-8)
        if (e.key >= '1' && e.key <= '8' && homeScreen.classList.contains('active')) {
            const recipeIndex = parseInt(e.key) - 1;
            if (recipes[recipeIndex]) {
                e.preventDefault();
                openRecipeDetail(recipes[recipeIndex].id);
            }
        }
    });

    console.log('✅ Keyboard navigation configured');
}

function handleBackButton(e) {
    if (videoScreen.classList.contains('active')) {
        e.preventDefault();
        document.getElementById('backToDetailFromVideo').click();
    } else if (stepsScreen.classList.contains('active')) {
        e.preventDefault();
        document.getElementById('backToDetail').click();
    } else if (detailScreen.classList.contains('active')) {
        e.preventDefault();
        document.getElementById('backToHome').click();
    }
}

// ====================================
// Start Application
// ====================================

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for potential use in other modules
window.TVRecipesApp = {
    openRecipe: openRecipeDetail,
    showScreen: showScreen,
    recipes: recipes
};

