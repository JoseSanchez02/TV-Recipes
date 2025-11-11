// ====================================
// TV Recipes - Smart TV Application
// D-Pad Navigation with Spatial API
// ====================================

// Recipe Database
const recipes = [
    {
        id: 1,
        name: "Enchiladas Suizas",
        image: "public/enchiladas-suizas-receta-sanborns.webp",
        ingredients: [
            "12 tortillas de maíz",
            "500g de pollo cocido y desmenuzado",
            "400g de crema ácida",
            "300g de queso manchego rallado",
            "2 chiles poblanos asados",
            "1 cebolla blanca picada"
        ],
        steps: [
            "Precalienta el horno a 180°C. Engrasa un refractario grande.",
            "Sofríe la cebolla hasta que esté transparente. Agrega el pollo desmenuzado.",
            "Mezcla la crema con los chiles poblanos licuados para hacer la salsa verde.",
            "Pasa las tortillas por aceite caliente para suavizarlas sin dorarlas.",
            "Rellena cada tortilla con pollo, enróllalas y colócalas en el refractario.",
            "Cubre con la salsa de crema y espolvorea abundante queso rallado.",
            "Hornea durante 25-30 minutos hasta que el queso esté dorado y burbujeante.",
            "Sirve caliente acompañado de frijoles refritos y arroz blanco."
        ]
    },
    {
        id: 2,
        name: "Fettuccine Alfredo",
        image: "public/Fettuccine_Alfredo.jpg",
        ingredients: [
            "400g de pasta fettuccine",
            "200g de mantequilla sin sal",
            "300ml de crema para batir",
            "150g de queso parmesano rallado",
            "2 dientes de ajo picados",
            "Sal y pimienta negra al gusto"
        ],
        steps: [
            "Hierve agua con sal abundante en una olla grande.",
            "Cocina el fettuccine según las instrucciones del paquete hasta que esté al dente.",
            "Mientras tanto, derrite la mantequilla en una sartén grande a fuego medio.",
            "Agrega el ajo picado y sofríe durante 1 minuto sin que se dore.",
            "Incorpora la crema y deja que hierva suavemente durante 3-4 minutos.",
            "Escurre la pasta y agrégala a la sartén con la salsa.",
            "Añade el queso parmesano y mezcla bien hasta que se derrita completamente.",
            "Sirve inmediatamente con más queso parmesano y pimienta negra recién molida."
        ]
    },
    {
        id: 3,
        name: "Tacos de Pollo",
        image: "public/Tacos_de_Pollo.jpg",
        ingredients: [
            "600g de pechuga de pollo en tiras",
            "12 tortillas de maíz pequeñas",
            "1 cebolla morada fileteada",
            "2 tomates grandes picados",
            "Cilantro fresco al gusto",
            "Jugo de 2 limones"
        ],
        steps: [
            "Sazona las tiras de pollo con sal, pimienta, comino y paprika al gusto.",
            "Calienta aceite en una sartén grande a fuego alto.",
            "Cocina el pollo durante 6-8 minutos hasta que esté bien dorado y cocido.",
            "Calienta las tortillas en un comal o sartén por ambos lados.",
            "Pica finamente el cilantro y mezcla con la cebolla morada.",
            "Coloca el pollo sobre las tortillas calientes.",
            "Agrega cebolla, tomate y cilantro al gusto sobre cada taco.",
            "Exprime limón fresco sobre los tacos y sirve inmediatamente con salsa."
        ]
    },
    {
        id: 4,
        name: "Smoothie de Mango",
        image: "public/Smoothie_de_Mango.jpg",
        ingredients: [
            "2 mangos maduros pelados y cortados",
            "1 taza de yogurt natural",
            "1/2 taza de leche fría",
            "2 cucharadas de miel",
            "1 taza de hielo picado",
            "Menta fresca para decorar"
        ],
        steps: [
            "Lava y pela los mangos, corta la pulpa en trozos grandes.",
            "Coloca los trozos de mango en el vaso de la licuadora.",
            "Agrega el yogurt natural, la leche y la miel.",
            "Añade el hielo picado para lograr una consistencia fría y cremosa.",
            "Licua a alta velocidad durante 45-60 segundos hasta obtener una mezcla suave.",
            "Prueba y ajusta la dulzura agregando más miel si es necesario.",
            "Sirve inmediatamente en vasos grandes y fríos.",
            "Decora con hojas de menta fresca y disfruta de inmediato."
        ]
    },
    {
        id: 5,
        name: "Sopa de Tomate Casera",
        image: "public/Sopa_de_Tomate_Casera.jpg",
        ingredients: [
            "8 tomates grandes maduros",
            "1 cebolla blanca grande",
            "3 dientes de ajo",
            "4 tazas de caldo de pollo",
            "1/2 taza de crema fresca",
            "Albahaca fresca y aceite de oliva"
        ],
        steps: [
            "Haz un corte en cruz en la base de cada tomate y escalda en agua hirviendo 30 segundos.",
            "Retira la piel de los tomates y córtalos en cuartos, desechando las semillas.",
            "Sofríe la cebolla y el ajo picados en aceite de oliva hasta que estén suaves.",
            "Agrega los tomates y cocina durante 10 minutos hasta que se ablanden.",
            "Añade el caldo de pollo y deja hervir, luego reduce a fuego lento por 20 minutos.",
            "Licua la sopa hasta obtener una consistencia completamente suave.",
            "Regresa al fuego, incorpora la crema y calienta sin hervir.",
            "Sirve caliente con albahaca fresca picada y un chorrito de aceite de oliva."
        ]
    },
    {
        id: 6,
        name: "Pizza Margarita",
        image: "public/Pizza_Margarita.jpg",
        ingredients: [
            "1 base de masa para pizza",
            "200g de salsa de tomate",
            "250g de queso mozzarella fresco",
            "Hojas de albahaca fresca",
            "2 cucharadas de aceite de oliva",
            "Sal y orégano al gusto"
        ],
        steps: [
            "Precalienta el horno a la temperatura máxima (250°C o más) durante 30 minutos.",
            "Estira la masa sobre una superficie enharinada hasta obtener un círculo de 30cm.",
            "Coloca la masa sobre una bandeja o piedra para pizza enharinada.",
            "Extiende la salsa de tomate uniformemente dejando 2cm de borde.",
            "Distribuye el queso mozzarella en trozos sobre la salsa.",
            "Rocía con aceite de oliva y espolvorea sal y orégano.",
            "Hornea durante 10-12 minutos hasta que el borde esté dorado y crujiente.",
            "Retira del horno, añade albahaca fresca y sirve inmediatamente."
        ]
    },
    {
        id: 7,
        name: "Mole Poblano",
        image: "public/mole.jpg",
        ingredients: [
            "1kg de pollo en piezas",
            "250g de pasta de mole poblano",
            "3 tazas de caldo de pollo",
            "2 cucharadas de manteca o aceite",
            "1 tablilla de chocolate mexicano",
            "Ajonjolí tostado para decorar"
        ],
        steps: [
            "Cocina las piezas de pollo en agua con sal hasta que estén tiernas, aproximadamente 30-40 minutos.",
            "Reserva 3 tazas del caldo de pollo y deshebra las piezas si lo prefieres.",
            "En una olla grande, calienta la manteca o aceite a fuego medio.",
            "Desmenuza la pasta de mole y fríela en el aceite caliente durante 2-3 minutos.",
            "Incorpora gradualmente el caldo de pollo, mezclando constantemente para evitar grumos.",
            "Añade el chocolate mexicano y deja que se derrita completamente en la salsa.",
            "Agrega las piezas de pollo y cocina a fuego lento durante 15-20 minutos, moviendo ocasionalmente.",
            "Sirve caliente sobre arroz blanco y espolvorea con ajonjolí tostado. Acompaña con tortillas."
        ]
    },
    {
        id: 8,
        name: "Hamburguesa Clásica",
        image: "public/Hamburguesa.jpg",
        ingredients: [
            "4 panes para hamburguesa con ajonjolí",
            "600g de carne molida de res (80/20)",
            "4 rebanadas de queso cheddar",
            "Lechuga, tomate y cebolla morada",
            "Pepinillos en vinagre",
            "Salsa especial, mostaza y ketchup"
        ],
        steps: [
            "Divide la carne en 4 porciones iguales y forma hamburguesas de 1.5cm de grosor.",
            "Sazona ambos lados generosamente con sal y pimienta negra recién molida.",
            "Calienta una plancha o sartén a fuego alto hasta que esté bien caliente.",
            "Cocina las hamburguesas 3-4 minutos por lado para término medio, sin presionar.",
            "Coloca una rebanada de queso sobre cada hamburguesa 1 minuto antes de retirar del fuego.",
            "Tuesta ligeramente los panes en la plancha hasta que estén dorados.",
            "Unta la salsa especial en la base del pan, coloca lechuga, tomate y la hamburguesa con queso.",
            "Agrega cebolla, pepinillos, mostaza y ketchup. Cubre con la tapa del pan y sirve inmediatamente."
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

    stepCounter.textContent = `Paso ${currentStep + 1} de ${currentRecipe.steps.length}`;
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

function showScreen(screenName) {
    homeScreen.classList.remove('active');
    detailScreen.classList.remove('active');
    stepsScreen.classList.remove('active');

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
    if (stepsScreen.classList.contains('active')) {
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

