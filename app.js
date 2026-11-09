/**
 * Blue Moon Cafe & Restaurant
 * Exact UI logic & Opening Animation matching the ENZO Showcase
 */

const MENU_DATA = {
  categories: [
  {
    "name": "Soups",
    "id": "soups",
    "items": [
      {
        "name": "Chicken Clear Soup",
        "price": 100,
        "special": false
      },
      {
        "name": "Veg Hot & Sour",
        "price": 80,
        "special": false
      },
      {
        "name": "Chicken Hot & Sour",
        "price": 110,
        "special": false
      },
      {
        "name": "Egg Drop",
        "price": 80,
        "special": false
      },
      {
        "name": "Chicken Drop",
        "price": 120,
        "special": false
      },
      {
        "name": "Prawn Drop",
        "price": 140,
        "special": false
      },
      {
        "name": "Thai Soup",
        "price": 140,
        "special": false
      },
      {
        "name": "Veg Manchow",
        "price": 80,
        "special": false
      },
      {
        "name": "Chicken Manchow",
        "price": 110,
        "special": false
      },
      {
        "name": "Veg Sweet Corn",
        "price": 80,
        "special": false
      },
      {
        "name": "Chicken Sweet Corn",
        "price": 110,
        "special": false
      },
      {
        "name": "Blue Moon Special Soup",
        "price": 150,
        "special": true
      }
    ]
  },
  {
    "name": "Starters (Veg)",
    "id": "starters-veg",
    "items": [
      {
        "name": "Button Mushroom",
        "price": 150,
        "special": false
      },
      {
        "name": "Dry Chilli Paneer",
        "price": 150,
        "special": false
      },
      {
        "name": "Crispy Chilli Baby Corn",
        "price": 140,
        "special": false
      },
      {
        "name": "Button Mushroom With Cheese/Paneer",
        "price": 160,
        "special": false
      },
      {
        "name": "Chilli Mushroom",
        "price": 150,
        "special": false
      },
      {
        "name": "Apollo Paneer",
        "price": 180,
        "special": false
      },
      {
        "name": "Apollo Mushroom",
        "price": 190,
        "special": false
      },
      {
        "name": "Pan Pan Mushroom",
        "price": 180,
        "special": false
      }
    ]
  },
  {
    "name": "Starters (Chicken)",
    "id": "starters-chicken",
    "items": [
      {
        "name": "Dry Chilli Chicken (6 pcs)",
        "price": 150,
        "special": false
      },
      {
        "name": "Chicken Lollipop (5 pcs)",
        "price": 170,
        "special": false
      },
      {
        "name": "Drums of Heaven (5 pcs)",
        "price": 210,
        "special": false
      },
      {
        "name": "BBQ Wings (5 pcs)",
        "price": 180,
        "special": false
      },
      {
        "name": "Korean Sweet Chilli Chicken",
        "price": 180,
        "special": false
      },
      {
        "name": "Korean Crispy Sausages",
        "price": 180,
        "special": false
      },
      {
        "name": "Lemon Garlic Chicken (6 pcs)",
        "price": 250,
        "special": false
      },
      {
        "name": "Salt & Pepper Chicken (6 pcs)",
        "price": 150,
        "special": false
      }
    ]
  },
  {
    "name": "Starters (Fish & Prawn)",
    "id": "starters-fish-prawn",
    "items": [
      {
        "name": "Fish Finger (6 pcs)",
        "price": 170,
        "special": false
      },
      {
        "name": "Dry Chilli Fish (6 pcs)",
        "price": 180,
        "special": false
      },
      {
        "name": "Fish Cutlet (1 pc)",
        "price": 120,
        "special": false
      },
      {
        "name": "Fish Orly (1 pc)",
        "price": 100,
        "special": false
      },
      {
        "name": "Grilled Lemon Butter Fish (2 pcs)",
        "price": 250,
        "special": false
      },
      {
        "name": "Bombay Chilli Fish",
        "price": 229,
        "special": false
      },
      {
        "name": "Golden Fried Prawn (6 pcs)",
        "price": 300,
        "special": false
      },
      {
        "name": "Chilli Prawn Dry (6 pcs)",
        "price": 300,
        "special": false
      },
      {
        "name": "Apollo Prawn (6 pcs)",
        "price": 310,
        "special": false
      },
      {
        "name": "Prawn Chips (10 pcs)",
        "price": 100,
        "special": false
      }
    ]
  },
  {
    "name": "Momos (6 pcs)",
    "id": "momos-6-pcs",
    "items": [
      {
        "name": "Steam Momo",
        "price": 100,
        "special": false
      },
      {
        "name": "Fried Momo",
        "price": 110,
        "special": false
      },
      {
        "name": "Masala Fried Momo",
        "price": 120,
        "special": false
      },
      {
        "name": "Gondhoraj Momo",
        "price": 120,
        "special": false
      },
      {
        "name": "Pan Fried Momo",
        "price": 130,
        "special": false
      },
      {
        "name": "Schezwan Momo",
        "price": 130,
        "special": false
      },
      {
        "name": "Bake Chicken Cheese Momo",
        "price": 160,
        "special": true
      }
    ]
  },
  {
    "name": "Chicken Gravy (6 pcs)",
    "id": "chicken-gravy-6-pcs",
    "items": [
      {
        "name": "Chilli Chicken",
        "price": 150,
        "special": false
      },
      {
        "name": "Hot Garlic Chicken",
        "price": 150,
        "special": false
      },
      {
        "name": "Lemon Garlic Chicken",
        "price": 170,
        "special": false
      },
      {
        "name": "Korean Thai Chicken",
        "price": 170,
        "special": false
      },
      {
        "name": "Apollo Chicken",
        "price": 180,
        "special": false
      },
      {
        "name": "Chicken 65",
        "price": 180,
        "special": false
      },
      {
        "name": "Chan Chicken",
        "price": 220,
        "special": false
      },
      {
        "name": "Blue Moon Special Chicken",
        "price": 220,
        "special": true
      },
      {
        "name": "Sweet & Sour Chicken",
        "price": 250,
        "special": false
      },
      {
        "name": "Chicken Kosha (Chinese)",
        "price": 250,
        "special": false
      }
    ]
  },
  {
    "name": "Fish & Prawn Gravy",
    "id": "fish-prawn-gravy",
    "items": [
      {
        "name": "Chilli Fish",
        "price": 180,
        "special": false
      },
      {
        "name": "Fish Manchurian",
        "price": 150,
        "special": false
      },
      {
        "name": "Hot Garlic Fish",
        "price": 180,
        "special": false
      },
      {
        "name": "Apollo Fish",
        "price": 220,
        "special": false
      },
      {
        "name": "Red Thai Fish Curry",
        "price": 249,
        "special": false
      },
      {
        "name": "Sweet And Sour Fish",
        "price": 249,
        "special": false
      },
      {
        "name": "Blue Moon Special Fish",
        "price": 289,
        "special": true
      },
      {
        "name": "Chilli Prawn",
        "price": 300,
        "special": false
      },
      {
        "name": "Manchurian Prawn",
        "price": 300,
        "special": false
      },
      {
        "name": "Hot Garlic Prawn",
        "price": 300,
        "special": false
      },
      {
        "name": "Apollo Prawn",
        "price": 310,
        "special": false
      },
      {
        "name": "Lemon Garlic Prawn",
        "price": 329,
        "special": false
      },
      {
        "name": "Green Thai Prawn Curry",
        "price": 349,
        "special": false
      },
      {
        "name": "Blue Moon Special Prawn",
        "price": 369,
        "special": true
      }
    ]
  },
  {
    "name": "Fried Rice",
    "id": "fried-rice",
    "items": [
      {
        "name": "Steam Rice",
        "price": 70,
        "special": false
      },
      {
        "name": "Jeera Rice",
        "price": 90,
        "special": false
      },
      {
        "name": "Veg Fried Rice",
        "price": 120,
        "special": false
      },
      {
        "name": "Egg Fried Rice",
        "price": 140,
        "special": false
      },
      {
        "name": "Mushroom Fried Rice",
        "price": 140,
        "special": false
      },
      {
        "name": "Basanti Pulao",
        "price": 150,
        "special": false
      },
      {
        "name": "Chicken Fried Rice",
        "price": 160,
        "special": false
      },
      {
        "name": "Egg Chicken Fried Rice",
        "price": 170,
        "special": false
      },
      {
        "name": "Prawn Fried Rice",
        "price": 180,
        "special": false
      },
      {
        "name": "Mix Fried Rice",
        "price": 200,
        "special": false
      },
      {
        "name": "Blue Moon Special Fried Rice",
        "price": 210,
        "special": true
      }
    ]
  },
  {
    "name": "Noodles",
    "id": "noodles",
    "items": [
      {
        "name": "Veg Noodles",
        "price": 0,
        "special": false
      },
      {
        "name": "Egg Noodles",
        "price": 0,
        "special": false
      },
      {
        "name": "Mushroom Noodles",
        "price": 0,
        "special": false
      },
      {
        "name": "Chicken Noodles",
        "price": 0,
        "special": false
      },
      {
        "name": "Egg Chicken Noodles",
        "price": 0,
        "special": false
      },
      {
        "name": "Prawn Noodles",
        "price": 0,
        "special": false
      },
      {
        "name": "Mix Noodles",
        "price": 0,
        "special": false
      },
      {
        "name": "Blue Moon Special Noodles",
        "price": 0,
        "special": true
      }
    ]
  },
  {
    "name": "Rice Noodles",
    "id": "rice-noodles",
    "items": [
      {
        "name": "Veg Rice Noodles",
        "price": 160,
        "special": false
      },
      {
        "name": "Egg Rice Noodles",
        "price": 170,
        "special": false
      },
      {
        "name": "Mushroom Rice Noodles",
        "price": 170,
        "special": false
      },
      {
        "name": "Chicken Rice Noodles",
        "price": 200,
        "special": false
      },
      {
        "name": "Prawn Rice Noodles",
        "price": 200,
        "special": false
      },
      {
        "name": "Egg Chicken Rice Noodles",
        "price": 210,
        "special": false
      },
      {
        "name": "Mix Rice Noodles",
        "price": 220,
        "special": false
      },
      {
        "name": "Blue Moon Special Rice Noodles",
        "price": 250,
        "special": true
      }
    ]
  },
  {
    "name": "Chop Suey",
    "id": "chop-suey",
    "items": [
      {
        "name": "Hot Garlic Chop Suey",
        "price": 160,
        "special": false
      },
      {
        "name": "Chicken Manchurian Chop Suey",
        "price": 160,
        "special": false
      },
      {
        "name": "American Chop Suey",
        "price": 180,
        "special": false
      },
      {
        "name": "Korean Thai Chop Suey",
        "price": 190,
        "special": false
      },
      {
        "name": "Prawn Manchurian Chop Suey",
        "price": 190,
        "special": false
      }
    ]
  },
  {
    "name": "Biryani & Indian Rice",
    "id": "biryani-indian-rice",
    "items": [
      {
        "name": "Steam Rice",
        "price": 100,
        "special": false
      },
      {
        "name": "Chicken Biriyani",
        "price": 140,
        "special": false
      },
      {
        "name": "Peas Rice",
        "price": 150,
        "special": false
      },
      {
        "name": "Jeera Rice",
        "price": 150,
        "special": false
      },
      {
        "name": "Mix Pulao",
        "price": 180,
        "special": false
      },
      {
        "name": "Special Chicken Biriyani",
        "price": 250,
        "special": true
      },
      {
        "name": "Mutton Biriyani",
        "price": 250,
        "special": false
      },
      {
        "name": "Special Mutton Biriyani",
        "price": 450,
        "special": true
      }
    ]
  },
  {
    "name": "Tandoor & Kebabs",
    "id": "tandoor-kebabs",
    "items": [
      {
        "name": "Chicken Tikka",
        "price": 200,
        "special": false
      },
      {
        "name": "Hariyali Kabab",
        "price": 230,
        "special": false
      },
      {
        "name": "Half Tandoori Chicken",
        "price": 230,
        "special": false
      },
      {
        "name": "Pahari Kebab",
        "price": 240,
        "special": false
      },
      {
        "name": "Chicken Tengri Kabab",
        "price": 250,
        "special": false
      },
      {
        "name": "Full Tandoori Chicken",
        "price": 400,
        "special": false
      }
    ]
  },
  {
    "name": "Indian Gravies",
    "id": "indian-gravies",
    "items": [
      {
        "name": "Chicken Kasa",
        "price": 200,
        "special": false
      },
      {
        "name": "Kadai Paneer",
        "price": 200,
        "special": false
      },
      {
        "name": "Kadhai Chicken",
        "price": 220,
        "special": false
      },
      {
        "name": "Butter Chicken",
        "price": 250,
        "special": false
      },
      {
        "name": "Chicken Bharta",
        "price": 250,
        "special": false
      },
      {
        "name": "Paneer Butter Masala",
        "price": 260,
        "special": false
      },
      {
        "name": "Chicken Lababdar",
        "price": 270,
        "special": false
      },
      {
        "name": "Chicken Tikka Butter Masala",
        "price": 280,
        "special": false
      }
    ]
  },
  {
    "name": "Naan & Breads",
    "id": "naan-breads",
    "items": [
      {
        "name": "Lachha Paratha",
        "price": 40,
        "special": false
      },
      {
        "name": "Plain Naan",
        "price": 50,
        "special": false
      },
      {
        "name": "Butter Naan",
        "price": 60,
        "special": false
      },
      {
        "name": "Garlic Butter Naan",
        "price": 70,
        "special": false
      }
    ]
  },
  {
    "name": "Salad & Saute",
    "id": "salad-saute",
    "items": [
      {
        "name": "Onion Salad",
        "price": 40,
        "special": false
      },
      {
        "name": "Green Salad",
        "price": 60,
        "special": false
      },
      {
        "name": "Kimchi Salad",
        "price": 70,
        "special": false
      },
      {
        "name": "Chicken Saute",
        "price": 180,
        "special": false
      },
      {
        "name": "Egg Chicken Saute",
        "price": 200,
        "special": false
      }
    ]
  },
  {
    "name": "Shakes",
    "id": "shakes",
    "items": [
      {
        "name": "Vanilla Shake",
        "price": 120,
        "special": false
      },
      {
        "name": "Pineapple Shake",
        "price": 120,
        "special": false
      },
      {
        "name": "Watermelon Shake",
        "price": 120,
        "special": false
      },
      {
        "name": "Strawberry Shake",
        "price": 130,
        "special": false
      },
      {
        "name": "Black Currant Shake",
        "price": 130,
        "special": false
      },
      {
        "name": "Mango Shake",
        "price": 130,
        "special": false
      },
      {
        "name": "Pina Colada Shake",
        "price": 130,
        "special": false
      },
      {
        "name": "Chocolate Shake",
        "price": 150,
        "special": false
      },
      {
        "name": "Mohabbat Ka Sharbat",
        "price": 150,
        "special": true
      },
      {
        "name": "Kitkat Shake",
        "price": 160,
        "special": false
      },
      {
        "name": "Oreo Shake",
        "price": 160,
        "special": false
      }
    ]
  },
  {
    "name": "Mocktails",
    "id": "mocktails",
    "items": [
      {
        "name": "Blue Lagoon",
        "price": 100,
        "special": false
      },
      {
        "name": "White Mint Mojito",
        "price": 100,
        "special": false
      },
      {
        "name": "Green Mint Mojito",
        "price": 100,
        "special": false
      },
      {
        "name": "Fresh Lime Soda",
        "price": 100,
        "special": false
      },
      {
        "name": "Blue Hawaiian",
        "price": 120,
        "special": false
      },
      {
        "name": "Green Goddess",
        "price": 120,
        "special": false
      },
      {
        "name": "Portion of Love",
        "price": 120,
        "special": false
      },
      {
        "name": "Pina Colada",
        "price": 120,
        "special": false
      },
      {
        "name": "Cinderella",
        "price": 130,
        "special": false
      },
      {
        "name": "Green Apple Mojito",
        "price": 130,
        "special": false
      },
      {
        "name": "Sunrise",
        "price": 140,
        "special": false
      },
      {
        "name": "Butterfly",
        "price": 140,
        "special": false
      },
      {
        "name": "Blue Moon Special",
        "price": 160,
        "special": true
      },
      {
        "name": "Rainbow",
        "price": 160,
        "special": false
      },
      {
        "name": "Galaxy",
        "price": 160,
        "special": false
      },
      {
        "name": "Red Sky",
        "price": 160,
        "special": false
      }
    ]
  },
  {
    "name": "Desserts",
    "id": "desserts",
    "items": [
      {
        "name": "Mix Raita",
        "price": 100,
        "special": false
      },
      {
        "name": "Faluda",
        "price": 120,
        "special": false
      },
      {
        "name": "Sizzling Brownie",
        "price": 160,
        "special": true
      }
    ]
  },
  {
    "name": "Beverages",
    "id": "beverages",
    "items": [
      {
        "name": "Mineral Water",
        "price": 25,
        "special": false
      },
      {
        "name": "Black Coffee",
        "price": 30,
        "special": false
      },
      {
        "name": "Cold Drinks",
        "price": 35,
        "special": false
      },
      {
        "name": "Masala Cold Drinks",
        "price": 50,
        "special": false
      },
      {
        "name": "Milk Coffee",
        "price": 60,
        "special": false
      },
      {
        "name": "Lassi",
        "price": 100,
        "special": false
      },
      {
        "name": "Cold Coffee",
        "price": 150,
        "special": false
      },
      {
        "name": "Borhani",
        "price": 150,
        "special": false
      },
      {
        "name": "Hazelnut Cold Coffee",
        "price": 180,
        "special": false
      }
    ]
  }
]
};

const ALL_DISHES = [];
MENU_DATA.categories.forEach(cat => {
  cat.items.forEach(dish => {
    ALL_DISHES.push({
      ...dish,
      categoryName: cat.name,
      categoryId: cat.id
    });
  });
});

let activeCategory = "all";
let searchTerm = "";

document.addEventListener("DOMContentLoaded", () => {
  setupTransitionCurtains();
  setupInteractiveCursorRipples();
  setupStageParallax();
  setupReplayAnimation();
  setupUnifiedScrollEngine();
  setupFullMenuModal();
  setupReservationModal();
  setupMobileNav();
  loadDynamicMenu();
});

/**
 * ============================================================================
 * HIGH-PERFORMANCE UNIFIED SCROLL ENGINE (requestAnimationFrame + translate3d)
 * Zero Layout Thrashing • 60fps/120fps Smooth Sync • GPU Hardware Accelerated
 * ============================================================================
 */
let isScrollTicking = false;
let cachedElements = null;
let headerScrolled = false;

function getCachedElements() {
  if (cachedElements) return cachedElements;
  cachedElements = {
    header: document.getElementById("site-header"),
    
    // Spirit Stream
    spiritSection: document.getElementById("spirit-food-showcase"),
    spiritCol1: document.querySelector(".spirit-stream-col.col-1"),
    spiritCol2: document.querySelector(".spirit-stream-col.col-2"),
    spiritCol3: document.querySelector(".spirit-stream-col.col-3"),
    spiritCol4: document.querySelector(".spirit-stream-col.col-4"),
    spiritTitle: document.querySelector(".spirit-main-title"),
    spiritCityTitle: document.querySelector(".spirit-city-title"),

    // Panel 1: Our Table
    tavolaPanel: document.getElementById("panel-tavola"),
    tavolaItems: document.querySelectorAll("#panel-tavola .stacked-title-item"),
    tavolaMonogram: document.querySelector("#panel-tavola .media-oval-monogram"),
    tavolaImg: document.querySelector("#panel-tavola .media-tavola-right img"),

    // Panel 2: Dual Photos
    dualPanel: document.getElementById("panel-dual-photos"),
    dualLeftImg: document.querySelector("#dual-col-left img"),
    dualRightImg: document.querySelector("#dual-col-right img"),
    dualCard: document.querySelector(".dual-photo-overlay-card"),

    // Panel 3: Celestial Soul
    soulPanel: document.getElementById("panel-soul"),
    soulSvg: document.querySelector(".curved-soul-svg"),
    soulEmblem: document.querySelector(".huge-oval-emblem"),
    soulImg: document.querySelector("#panel-soul .media-soul-left img"),
    soulLabels: document.querySelector(".soul-split-labels"),

    // Panel 4: Statement
    statementPanel: document.getElementById("panel-statement"),
    statementWords: document.querySelectorAll("#panel-statement .stat-word"),
    statementRings: document.querySelector(".watermark-oval-rings"),
    statementImg: document.querySelector("#panel-statement .media-statement-left img"),

    // Panel 5: Gusto Climax
    gustoStage: document.getElementById("panel-gusto-stage"),
    gustoFork: document.getElementById("floating-steak-fork"),
    gustoLeftCard: document.getElementById("trio-card-left"),
    gustoRightCard: document.getElementById("trio-card-right"),
    gustoNapkin: document.getElementById("cutlery-napkin-dock"),

    // Panel 6: Typography Trio
    typoStage: document.getElementById("panel-typography-trio"),
    typoLeftCard: document.getElementById("typo-card-left"),
    typoCenterFrame: document.getElementById("typo-center-frame"),
    typoRightCard: document.getElementById("typo-card-right"),
  };
  return cachedElements;
}

function onScrollTick() {
  const els = getCachedElements();
  const vh = window.innerHeight;
  const scrollY = window.scrollY;
  const isDesktop = window.innerWidth > 1024;

  // 1. Sticky Header
  if (els.header) {
    if (scrollY > 50 && !headerScrolled) {
      els.header.classList.add("header-scrolled");
      headerScrolled = true;
    } else if (scrollY <= 50 && headerScrolled) {
      els.header.classList.remove("header-scrolled");
      headerScrolled = false;
    }
  }

  // Mobile optimization: Skip complex desktop-only transforms for butter-smooth mobile performance
  if (!isDesktop) {
    isScrollTicking = false;
    return;
  }

  // 2. Spirit Section Parallax (Desktop Only)
  if (els.spiritSection) {
    const rect = els.spiritSection.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      const progress = (vh - rect.top) / (vh + rect.height);
      const offset = (progress - 0.5) * 140;
      if (els.spiritCol1) els.spiritCol1.style.transform = `translate3d(0, ${40 - offset * 1.2}px, 0)`;
      if (els.spiritCol2) els.spiritCol2.style.transform = `translate3d(0, ${-80 + offset * 1.4}px, 0)`;
      if (els.spiritCol3) els.spiritCol3.style.transform = `translate3d(0, ${60 - offset * 1.1}px, 0)`;
      if (els.spiritCol4) els.spiritCol4.style.transform = `translate3d(0, ${-60 + offset * 1.3}px, 0)`;
      if (els.spiritTitle) els.spiritTitle.style.transform = `translate3d(${-(progress - 0.5) * 35}px, 0, 0)`;
      if (els.spiritCityTitle) els.spiritCityTitle.style.transform = `translate3d(${(progress - 0.5) * 35}px, 0, 0)`;
    }
  }

  // 3. Panel 1: Our Table Interactive Stagger & Parallax (Desktop Only)
  if (els.tavolaPanel) {
    const rect = els.tavolaPanel.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      const progress = (vh - rect.top) / (vh + rect.height);
      const p = Math.max(0, Math.min(1, (progress - 0.12) / 0.45));
      if (els.tavolaImg) {
        els.tavolaImg.style.transform = `translate3d(0, ${(progress - 0.5) * -50}px, 0) scale(1.05)`;
      }
      if (els.tavolaMonogram) {
        els.tavolaMonogram.style.transform = `translateY(${-50 + (progress - 0.5) * 40}%) rotate(${(progress - 0.5) * 6}deg)`;
      }
      if (els.tavolaItems && els.tavolaItems.length) {
        els.tavolaItems.forEach((item, idx) => {
          const itemDelay = idx * 0.08;
          const itemP = Math.max(0, Math.min(1, (p - itemDelay) / 0.6));
          item.style.transform = `translate3d(${(1 - itemP) * -24}px, 0, 0)`;
          item.style.opacity = Math.min(1, itemP * 1.3);
        });
      }
    }
  }

  // 4. Panel 2: Dual Photos Counter Scroll & Floating Card (Desktop Only)
  if (els.dualPanel) {
    const rect = els.dualPanel.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      const progress = (vh - rect.top) / (vh + rect.height);
      const norm = (progress - 0.5) * 2;
      if (els.dualLeftImg) els.dualLeftImg.style.transform = `translate3d(0, ${norm * -60}px, 0) scale(1.06)`;
      if (els.dualRightImg) els.dualRightImg.style.transform = `translate3d(0, ${norm * 60}px, 0) scale(1.06)`;
      if (els.dualCard) {
        els.dualCard.style.transform = `translate3d(0, ${(progress - 0.5) * -45}px, 0)`;
      }
    }
  }

  // 5. Panel 3: Celestial Soul Curved Text & BM Emblem 3D Entrance (Desktop Only)
  if (els.soulPanel) {
    const rect = els.soulPanel.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      const progress = (vh - rect.top) / (vh + rect.height);
      const p = Math.max(0, Math.min(1, (progress - 0.12) / 0.45));
      if (els.soulImg) {
        els.soulImg.style.transform = `translate3d(0, ${(progress - 0.5) * -45}px, 0) scale(1.05)`;
      }
      if (els.soulSvg) {
        els.soulSvg.style.transform = `scale(${0.92 + p * 0.08})`;
        els.soulSvg.style.opacity = Math.min(1, p * 1.5);
      }
      if (els.soulEmblem) {
        const rotY = (progress - 0.5) * 16;
        els.soulEmblem.style.transform = `perspective(800px) rotateY(${rotY}deg) scale(${0.93 + p * 0.07})`;
      }
      if (els.soulLabels) {
        els.soulLabels.style.transform = `translate3d(0, ${(1 - p) * 18}px, 0)`;
        els.soulLabels.style.opacity = Math.min(1, p * 1.4);
      }
    }
  }

  // 6. Panel 4: Statement Words & Orbiting Rings Parallax (Desktop Only)
  if (els.statementPanel) {
    const rect = els.statementPanel.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      const progress = (vh - rect.top) / (vh + rect.height);
      const p = Math.max(0, Math.min(1, (progress - 0.12) / 0.45));
      if (els.statementImg) {
        els.statementImg.style.transform = `translate3d(0, ${(progress - 0.5) * -40}px, 0) scale(1.05)`;
      }
      if (els.statementRings) {
        els.statementRings.style.transform = `translate(-50%, -50%) rotate(${(progress - 0.5) * 35}deg)`;
      }
      if (els.statementWords && els.statementWords.length) {
        els.statementWords.forEach((w, idx) => {
          const wDelay = idx * 0.08;
          const wP = Math.max(0, Math.min(1, (p - wDelay) / 0.6));
          w.style.transform = `translate3d(${(1 - wP) * 25}px, 0, 0)`;
          w.style.opacity = Math.min(1, wP * 1.4);
        });
      }
    }
  }

  // 7. Gusto Steak Climax (Desktop Only)
  if (els.gustoStage) {
    const rect = els.gustoStage.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      const progress = (vh - rect.top) / (vh + rect.height);

      if (els.gustoFork) {
        const forkProgress = Math.max(0, Math.min(1, (progress - 0.15) / 0.5));
        const translateY = (1 - forkProgress) * 160;
        const scale = 0.85 + forkProgress * 0.25;
        els.gustoFork.style.transform = `translate3d(-50%, ${translateY}px, 0) scale(${scale})`;
        els.gustoFork.style.opacity = Math.min(1, forkProgress * 1.5);
      }

      const expandProgress = Math.max(0, Math.min(1, (progress - 0.25) / 0.5));
      if (els.gustoLeftCard) {
        els.gustoLeftCard.style.transform = `translate3d(${(1 - expandProgress) * 35}px, 0, 0) scale(${0.96 + expandProgress * 0.04})`;
        els.gustoLeftCard.style.opacity = Math.min(1, expandProgress * 1.4);
      }
      if (els.gustoRightCard) {
        els.gustoRightCard.style.transform = `translate3d(${(1 - expandProgress) * -35}px, 0, 0) scale(${0.96 + expandProgress * 0.04})`;
        els.gustoRightCard.style.opacity = Math.min(1, expandProgress * 1.4);
      }

      if (els.gustoNapkin) {
        els.gustoNapkin.style.opacity = Math.max(0.08, 0.45 - progress * 0.4);
      }
    }
  }

  // 8. Typography Trio (Desktop Only)
  if (els.typoStage) {
    const rect = els.typoStage.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      const progress = (vh - rect.top) / (vh + rect.height);
      const p = Math.max(0, Math.min(1, (progress - 0.15) / 0.5));

      if (els.typoLeftCard) {
        els.typoLeftCard.style.transform = `translate3d(${(1 - p) * -40}px, 0, 0)`;
        els.typoLeftCard.style.opacity = Math.min(1, p * 1.5);
      }
      if (els.typoCenterFrame) {
        els.typoCenterFrame.style.transform = `scale(${0.93 + p * 0.07})`;
        els.typoCenterFrame.style.opacity = Math.min(1, p * 1.5);
      }
      if (els.typoRightCard) {
        els.typoRightCard.style.transform = `translate3d(${(1 - p) * 40}px, 0, 0)`;
        els.typoRightCard.style.opacity = Math.min(1, p * 1.5);
      }
    }
  }

  isScrollTicking = false;
}

function setupUnifiedScrollEngine() {
  const els = getCachedElements();

  // Initial pass
  onScrollTick();

  // Unified rAF loop
  window.addEventListener("scroll", () => {
    if (!isScrollTicking) {
      requestAnimationFrame(onScrollTick);
      isScrollTicking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (!isScrollTicking) {
      requestAnimationFrame(onScrollTick);
      isScrollTicking = true;
    }
  }, { passive: true });
}

/**
 * 3D Parallax on the 1st Screen Framed Window
 * Preserves translate(-50%, -50%) centering and engages after the shrink animation completes
 */
function setupStageParallax() {
  const stage = document.getElementById("intro-stage");
  const cardFrame = document.getElementById("interactive-card-frame");

  if (!stage || !cardFrame) return;

  let animationFinished = false;
  setTimeout(() => {
    animationFinished = true;
  }, 2000);

  stage.addEventListener("mousemove", (e) => {
    if (!animationFinished) return;
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / rect.height) * 8;
    const rotY = (x / rect.width) * 8;

    cardFrame.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.01)`;
  });

  stage.addEventListener("mouseleave", () => {
    cardFrame.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  });
}

/**
 * Replay Opening Cinematic Animation on Monogram Click
 */
function setupReplayAnimation() {
  const trigger = document.getElementById("replay-animation-trigger");
  if (!trigger) return;

  trigger.addEventListener("click", () => {
    const cardFrame = document.getElementById("interactive-card-frame");
    if (cardFrame) {
      cardFrame.style.transform = "translate(-50%, -50%)";
    }

    const animTargets = [
      { sel: ".cinematic-window-frame", cls: "animate-window-shrink" },
      { sel: ".cinematic-photo", cls: "animate-photo-zoomout" },
      { sel: ".stage-display-title", cls: "animate-title-fadein" },
      { sel: ".stage-top-center", cls: "animate-stage-monogram" },
      { sel: ".stage-below-label", cls: "animate-sub-fadein" },
      { sel: ".stage-bottom-left", cls: "animate-left-slidein" },
      { sel: ".stage-right-peek", cls: "animate-right-slidein" },
      { sel: ".enzo-top-nav", cls: "animate-header-in" },
      { sel: ".stage-scroll-hint", cls: "animate-scroll-hint" }
    ];

    animTargets.forEach(t => {
      const el = document.querySelector(t.sel);
      if (el) el.classList.remove(t.cls);
    });

    void document.body.offsetWidth; // trigger reflow

    animTargets.forEach(t => {
      const el = document.querySelector(t.sel);
      if (el) el.classList.add(t.cls);
    });
  });
}

/**
 * Full Menu Modal Handling
 */
function setupFullMenuModal() {
  const modal = document.getElementById("full-menu-modal");
  const closeBtn = document.getElementById("close-menu-modal-btn");
  const searchInput = document.getElementById("modal-menu-search");
  const openButtons = ["nav-open-menu-btn", "open-full-menu-btn", "footer-open-menu-btn", "open-menu-from-tavola", "spirit-menu-trigger"];

  if (!modal) return;

  openButtons.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", () => {
        renderModalCategories();
        renderModalDishes();
        modal.showModal();
      });
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.close());
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      renderModalDishes();
    });
  }
}

function renderModalCategories() {
  const container = document.getElementById("modal-category-tabs");
  if (!container) return;

  const categories = [
    { id: "all", name: "All Dishes" },
    ...MENU_DATA.categories.map(c => ({ id: c.id, name: c.name }))
  ];

  container.innerHTML = categories.map(c => `
    <button class="modal-tab-btn ${c.id === activeCategory ? 'active' : ''}" data-cat="${c.id}">
      ${c.name}
    </button>
  `).join("");

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".modal-tab-btn");
    if (!btn) return;

    container.querySelectorAll(".modal-tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.cat;
    renderModalDishes();
  });
}

function renderModalDishes() {
  const grid = document.getElementById("modal-dishes-grid");
  const countEl = document.getElementById("modal-item-count");
  if (!grid) return;

  const filtered = ALL_DISHES.filter(d => {
    const matchesCat = activeCategory === "all" || d.categoryId === activeCategory;
    if (!matchesCat) return false;
    if (!searchTerm) return true;
    return d.name.toLowerCase().includes(searchTerm) || d.categoryName.toLowerCase().includes(searchTerm);
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} dish${filtered.length === 1 ? '' : 'es'}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--enzo-text-muted);">No dishes found matching "${escapeHtml(searchTerm)}"</div>`;
    return;
  }

  grid.innerHTML = filtered.map(d => `
    <div class="modal-dish-box">
      <div>
        <div class="dish-box-title">${escapeHtml(d.name)}</div>
        <div class="dish-box-cat">${escapeHtml(d.categoryName)}</div>
      </div>
      <div class="dish-box-price">₹${d.price}</div>
    </div>
  `).join("");
}

/**
 * Reservation Modal & WhatsApp Integration
 */
function setupReservationModal() {
  const modal = document.getElementById("reservation-modal");
  const closeBtn = document.getElementById("close-res-modal-btn");
  const form = document.getElementById("res-booking-form");
  const occasionSelect = document.getElementById("f-occasion");

  if (!modal) return;

  const openTriggers = ["nav-reserve-btn", "hero-reserve-btn", "banner-reserve-btn", "footer-book-table-btn", "spirit-reserve-btn"];
  openTriggers.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", () => openReservationModal());
    }
  });

  document.querySelectorAll(".btn-card-ticket").forEach(btn => {
    btn.addEventListener("click", () => {
      const eventType = btn.dataset.eventType;
      if (occasionSelect && eventType) occasionSelect.value = eventType;
      openReservationModal();
    });
  });

  function openReservationModal() {
    const dateInput = document.getElementById("f-date");
    if (dateInput && !dateInput.value) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.value = today;
      dateInput.min = today;
    }
    modal.showModal();
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.close());
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.textContent : "CONFIRM & RESERVE VIA WHATSAPP";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "RECORDING RESERVATION...";
      }

      const fd = new FormData(form);
      const name = fd.get("name");
      const phone = fd.get("phone");
      const date = fd.get("date");
      const time = fd.get("time");
      const guests = fd.get("guests");
      const occasion = fd.get("occasion");
      const notes = fd.get("notes") || "None";

      const payload = {
        name,
        phone,
        date,
        timeSlot: time,
        guests: Number(guests) || 2,
        diningArea: occasion || "Main Dining Hall",
        specialRequests: notes
      };

      let waUrl = null;
      try {
        const response = await fetch("/api/reservations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (result.whatsappLink) {
          waUrl = result.whatsappLink;
        }
      } catch (err) {
        console.warn("Backend reservation endpoint offline, falling back to direct WhatsApp:", err.message);
      }

      // Fallback WhatsApp message if API didn't return one
      if (!waUrl) {
        const message = 
`🌙 *TABLE RESERVATION INQUIRY*
*Blue Moon Cafe & Restaurant*
--------------------------------
👤 *Name:* ${name}
📞 *Contact:* ${phone}
📅 *Date:* ${date}
🕒 *Time:* ${time}
👥 *Guests:* ${guests}
✨ *Occasion:* ${occasion}
📝 *Notes:* ${notes}
--------------------------------
Sent from Blue Moon Website`;
        waUrl = `https://wa.me/918420800739?text=${encodeURIComponent(message)}`;
      }

      window.open(waUrl, "_blank");
      modal.close();
      form.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    });
  }
}

/**
 * Dynamically synchronize menu with MongoDB backend
 */
async function loadDynamicMenu() {
  try {
    const res = await fetch("/api/menu");
    if (!res.ok) return;
    const data = await res.json();
    if (data.items && data.items.length >= 20) {
      ALL_DISHES.length = 0;
      const catMap = new Map();
      data.items.forEach(d => {
        const catId = d.category || (d.categoryName ? d.categoryName.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-") : "other");
        const catName = d.categoryName || d.category || "Menu";
        ALL_DISHES.push({
          id: d.itemId,
          name: d.name,
          price: d.price,
          categoryName: catName,
          categoryId: catId,
          veg: d.diet === "veg",
          spicy: Boolean(d.spicy),
          chefSpecial: Boolean(d.isChefSpecial),
          image: d.imageUrl || ""
        });
        if (!catMap.has(catId)) {
          catMap.set(catId, catName);
        }
      });
      if (catMap.size >= 5) {
        MENU_DATA.categories = Array.from(catMap.entries()).map(([id, name]) => ({ id, name }));
        renderModalCategories();
      }
      renderModalDishes();
    }
  } catch (err) {
    // Fail silently to local 171 dishes
  }
}

/**
 * Mobile Navigation
 */
function setupMobileNav() {
  const toggle = document.getElementById("hamburger-toggle");
  const nav = document.getElementById("nav-links-menu");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("mobile-open");
  });

  nav.querySelectorAll(".nav-item-link").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("mobile-open"));
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/**
 * ============================================================================
 * CINEMATIC TRANSITION CURTAINS ENGINE
 * Staggered 5-column wipe for page entrance, anchor navigation, and modals
 * ============================================================================
 */
let isCurtainAnimating = false;

function triggerCurtainTransition(onMiddleCallback) {
  if (isCurtainAnimating) return;
  const overlay = document.getElementById("bm-curtain-overlay");
  if (!overlay) {
    if (typeof onMiddleCallback === "function") onMiddleCallback();
    return;
  }

  isCurtainAnimating = true;
  overlay.classList.remove("is-leaving");
  overlay.classList.add("is-visible", "is-locked");

  // Force reflow
  void overlay.offsetWidth;

  overlay.classList.add("is-active");

  // When curtains close fully (stagger finishes around 460ms)
  setTimeout(() => {
    if (typeof onMiddleCallback === "function") {
      onMiddleCallback();
    }

    // Hold at midpoint for seamless action
    setTimeout(() => {
      overlay.classList.remove("is-active");
      overlay.classList.add("is-leaving");

      // Once exit wipe finishes (around 650ms after leaving)
      setTimeout(() => {
        overlay.classList.remove("is-visible", "is-leaving", "is-locked");
        isCurtainAnimating = false;
      }, 750);
    }, 180);
  }, 480);
}

function setupTransitionCurtains() {
  const overlay = document.getElementById("bm-curtain-overlay");
  if (!overlay) return;

  // Initial Entrance Curtain Wipe on Page Load
  overlay.classList.add("is-visible", "is-active", "is-locked");
  setTimeout(() => {
    overlay.classList.remove("is-active");
    overlay.classList.add("is-leaving");
    setTimeout(() => {
      overlay.classList.remove("is-visible", "is-leaving", "is-locked");
    }, 750);
  }, 350);

  // Intercept Navigation Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      // Close mobile nav if open
      const nav = document.getElementById("nav-links-menu");
      if (nav) nav.classList.remove("mobile-open");

      triggerCurtainTransition(() => {
        const header = document.getElementById("site-header");
        const headerH = header ? header.offsetHeight : 0;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({
          top: targetPos,
          behavior: "instant"
        });
      });
    });
  });

  // Intercept Menu Modal Button with Curtains
  const menuBtn = document.getElementById("nav-open-menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = document.getElementById("enzo-full-menu-modal");
      if (modal && !modal.open) {
        triggerCurtainTransition(() => {
          modal.showModal();
        });
      }
    });
  }

  // Intercept Reservation Buttons with Curtains
  document.querySelectorAll("#nav-reserve-btn, .btn-reserve-stage, .btn-catering-reserve, .btn-climax-reserve").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const modal = document.getElementById("enzo-reservation-dialog");
      if (modal && !modal.open) {
        e.preventDefault();
        e.stopPropagation();
        triggerCurtainTransition(() => {
          if (typeof openReservationModal === "function") {
            openReservationModal();
          } else {
            modal.showModal();
          }
        });
      }
    });
  });
}

/**
 * ============================================================================
 * INTERACTIVE CURSOR & LIQUID RIPPLE ENGINE
 * Organic fluid ripples, celestial trailing waves, and magnetic hover
 * ============================================================================
 */
function setupInteractiveCursorRipples() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const container = document.getElementById("bm-cursor-layer");
  const moonCursor = document.getElementById("bm-moon-cursor");
  const canvas = document.getElementById("bm-ripple-canvas");
  if (!container || !moonCursor || !canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  let mouseX = -100;
  let mouseY = -100;
  let moonX = -100;
  let moonY = -100;
  let isHovering = false;
  let isClicking = false;
  let isVisible = false;
  let lastMoveX = -100;
  let lastMoveY = -100;
  let distMoved = 0;

  // Pool of active ripples
  const ripples = [];

  class Ripple {
    constructor(x, y, maxRadius, speed, colorRgba, strokeWidth) {
      this.x = x;
      this.y = y;
      this.radius = 2;
      this.maxRadius = maxRadius;
      this.speed = speed;
      this.opacity = 0.85;
      this.decay = 0.955;
      this.colorRgba = colorRgba;
      this.strokeWidth = strokeWidth;
    }

    update() {
      this.radius += this.speed;
      this.speed *= 0.96;
      this.opacity *= this.decay;
      return this.opacity > 0.015 && this.radius < this.maxRadius;
    }

    draw(ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(0, this.radius), 0, Math.PI * 2);
      ctx.strokeStyle = this.colorRgba(this.opacity);
      ctx.lineWidth = this.strokeWidth;
      ctx.stroke();
      ctx.restore();
    }
  }

  function spawnRipples(x, y, isClick = false) {
    if (isClick) {
      // 3 concentric celestial lunar waves
      ripples.push(
        new Ripple(x, y, 160, 6.5, (a) => `rgba(0, 229, 255, ${a * 0.75})`, 1.8),
        new Ripple(x, y, 220, 4.2, (a) => `rgba(229, 193, 88, ${a * 0.65})`, 2),
        new Ripple(x, y, 290, 2.8, (a) => `rgba(100, 181, 246, ${a * 0.4})`, 1.2)
      );
    } else {
      // Subtle celestial movement trail ripple
      ripples.push(
        new Ripple(x, y, 36, 1.8, (a) => `rgba(100, 181, 246, ${a * 0.25})`, 1)
      );
    }
  }

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      moonX = mouseX;
      moonY = mouseY;
      lastMoveX = mouseX;
      lastMoveY = mouseY;
      container.classList.add("is-active");
    }

    const dx = mouseX - lastMoveX;
    const dy = mouseY - lastMoveY;
    distMoved += Math.sqrt(dx * dx + dy * dy);
    lastMoveX = mouseX;
    lastMoveY = mouseY;

    // Emit subtle liquid wake every 55px
    if (distMoved > 55) {
      spawnRipples(mouseX, mouseY, false);
      distMoved = 0;
    }
  }, { passive: true });

  window.addEventListener("mousedown", (e) => {
    isClicking = true;
    container.classList.add("is-clicking");
    spawnRipples(e.clientX, e.clientY, true);
  });

  window.addEventListener("mouseup", () => {
    isClicking = false;
    container.classList.remove("is-clicking");
  });

  document.addEventListener("mouseleave", () => {
    isVisible = false;
    container.classList.remove("is-active");
  });

  // Interactive Hover Targets
  const interactiveSelector = `
    a, button, input, select, textarea,
    .nav-item-link, .btn-nav-reservation, .btn-nav-order,
    .brand-logo-wrap, .stacked-title-item, .card-flavor-item,
    .dual-col-photo, .tavola-card-inner, .hamburger-toggle,
    .dish-card, .btn-all-menu, .experience-item, .contact-card
  `;

  document.addEventListener("mouseover", (e) => {
    if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
      isHovering = true;
      container.classList.add("is-hovering");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
      isHovering = false;
      container.classList.remove("is-hovering");
    }
  });

  // High-performance RAF animation loop
  function renderCursor() {
    if (isVisible) {
      // Snappy lerp physics (0.8) for immediate responsiveness with subpixel smoothness
      moonX += (mouseX - moonX) * 0.8;
      moonY += (mouseY - moonY) * 0.8;

      moonCursor.style.transform = `translate3d(${moonX}px, ${moonY}px, 0) translate(-13px, -5px)`;
    }

    // Render ripples
    if (ripples.length > 0) {
      ctx.clearRect(0, 0, width, height);
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        if (r.update()) {
          r.draw(ctx);
        } else {
          ripples.splice(i, 1);
        }
      }
    } else {
      ctx.clearRect(0, 0, width, height);
    }

    requestAnimationFrame(renderCursor);
  }

  requestAnimationFrame(renderCursor);
}
