/**
 * Blue Moon Cafe & Restaurant
 * Exact UI logic & Opening Animation matching the ENZO Showcase
 */

const MENU_DATA = {
  categories: [
    {
      name: "Soups",
      id: "soups",
      items: [
        { name: "Chicken Clear Soup", price: 100 },
        { name: "Veg Hot & Sour", price: 80 },
        { name: "Chicken Hot & Sour", price: 110 },
        { name: "Egg Drop", price: 80 },
        { name: "Chicken Drop", price: 120 },
        { name: "Prawn Drop", price: 140 },
        { name: "Thai Soup", price: 140 },
        { name: "Veg Manchow", price: 80 },
        { name: "Chicken Manchow", price: 110 },
        { name: "Veg Sweet Corn", price: 80 },
        { name: "Chicken Sweet Corn", price: 110 },
        { name: "Blue Moon Special Soup", price: 150, special: true }
      ]
    },
    {
      name: "Veg Starters",
      id: "starters-veg",
      items: [
        { name: "Button Mushroom", price: 150 },
        { name: "Dry Chilli Paneer", price: 150 },
        { name: "Crispy Chilli Baby Corn", price: 140 },
        { name: "Button Mushroom With Cheese/Paneer", price: 160 },
        { name: "Chilli Mushroom", price: 150 },
        { name: "Apollo Paneer", price: 180 },
        { name: "Apollo Mushroom", price: 190 },
        { name: "Pan Pan Mushroom", price: 180 }
      ]
    },
    {
      name: "Chicken Starters",
      id: "starters-chicken",
      items: [
        { name: "Dry Chilli Chicken (6 pcs)", price: 150 },
        { name: "Chicken Lollipop (5 pcs)", price: 170 },
        { name: "Drums of Heaven (5 pcs)", price: 210, special: true },
        { name: "BBQ Wings (5 pcs)", price: 180 },
        { name: "Korean Sweet Chilli Chicken", price: 180 },
        { name: "Korean Crispy Sausages", price: 180 },
        { name: "Lemon Garlic Chicken (6 pcs)", price: 250 },
        { name: "Salt & Pepper Chicken (6 pcs)", price: 150 }
      ]
    },
    {
      name: "Fish & Prawn Starters",
      id: "starters-seafood",
      items: [
        { name: "Fish Finger (6 pcs)", price: 170 },
        { name: "Dry Chilli Fish (6 pcs)", price: 180 },
        { name: "Fish Cutlet (1 pc)", price: 120 },
        { name: "Fish Orly (1 pc)", price: 100 },
        { name: "Grilled Lemon Butter Fish (2 pcs)", price: 250 },
        { name: "Bombay Chilli Fish", price: 229 },
        { name: "Golden Fried Prawn (6 pcs)", price: 300 },
        { name: "Chilli Prawn Dry (6 pcs)", price: 300 },
        { name: "Apollo Prawn (6 pcs)", price: 310, special: true },
        { name: "Prawn Chips (10 pcs)", price: 100 }
      ]
    },
    {
      name: "Momos (6 pcs)",
      id: "momos",
      items: [
        { name: "Steam Momo", price: 100 },
        { name: "Fried Momo", price: 110 },
        { name: "Masala Fried Momo", price: 120 },
        { name: "Gondhoraj Momo", price: 120, special: true },
        { name: "Pan Fried Momo", price: 130 },
        { name: "Schezwan Momo", price: 130 },
        { name: "Bake Chicken Cheese Momo", price: 160, special: true }
      ]
    },
    {
      name: "Chicken Gravy",
      id: "chicken-gravy",
      items: [
        { name: "Chilli Chicken (6 pcs)", price: 150 },
        { name: "Hot Garlic Chicken (6 pcs)", price: 150 },
        { name: "Lemon Garlic Chicken (6 pcs)", price: 170 },
        { name: "Korean Thai Chicken", price: 170 },
        { name: "Apollo Chicken (6 pcs)", price: 180 },
        { name: "Chicken 65 (6 pcs)", price: 180 },
        { name: "Chan Chicken", price: 220 },
        { name: "Blue Moon Special Chicken", price: 220, special: true },
        { name: "Sweet & Sour Chicken", price: 250 },
        { name: "Chicken Kosha (Chinese Style)", price: 250 }
      ]
    },
    {
      name: "Fish & Prawn Gravy",
      id: "seafood-gravy",
      items: [
        { name: "Chilli Fish", price: 180 },
        { name: "Fish Manchurian", price: 150 },
        { name: "Hot Garlic Fish", price: 180 },
        { name: "Apollo Fish", price: 220 },
        { name: "Red Thai Fish Curry", price: 249 },
        { name: "Sweet And Sour Fish", price: 249 },
        { name: "Blue Moon Special Fish", price: 289, special: true },
        { name: "Chilli Prawn Gravy", price: 300 },
        { name: "Manchurian Prawn", price: 300 },
        { name: "Hot Garlic Prawn", price: 300 },
        { name: "Apollo Prawn Gravy", price: 310 },
        { name: "Lemon Garlic Prawn", price: 329 },
        { name: "Green Thai Prawn Curry", price: 349, special: true },
        { name: "Blue Moon Special Prawn", price: 369, special: true }
      ]
    },
    {
      name: "Rice & Noodles",
      id: "rice-noodles",
      items: [
        { name: "Veg Fried Rice", price: 120 },
        { name: "Egg Fried Rice", price: 140 },
        { name: "Chicken Fried Rice", price: 160 },
        { name: "Egg Chicken Fried Rice", price: 170 },
        { name: "Prawn Fried Rice", price: 180 },
        { name: "Mix Fried Rice", price: 200 },
        { name: "Blue Moon Special Fried Rice", price: 210, special: true },
        { name: "Veg Hakka Noodles", price: 120 },
        { name: "Egg Hakka Noodles", price: 140 },
        { name: "Chicken Hakka Noodles", price: 160 },
        { name: "Egg Chicken Hakka Noodles", price: 180 },
        { name: "Prawn Hakka Noodles", price: 190 },
        { name: "Blue Moon Special Noodles", price: 210, special: true },
        { name: "American Chop Suey", price: 180 },
        { name: "Korean Thai Chop Suey", price: 190 },
        { name: "Blue Moon Special Rice Noodles", price: 250, special: true }
      ]
    },
    {
      name: "Biryani & Tandoor",
      id: "biryani-tandoor",
      items: [
        { name: "Chicken Biriyani", price: 140 },
        { name: "Special Chicken Biriyani", price: 250, special: true },
        { name: "Mutton Biriyani", price: 250 },
        { name: "Special Mutton Biriyani", price: 450, special: true },
        { name: "Chicken Tikka", price: 200 },
        { name: "Hariyali Kabab", price: 230 },
        { name: "Pahari Kebab", price: 240, special: true },
        { name: "Chicken Tengri Kabab", price: 250 },
        { name: "Half Tandoori Chicken", price: 230 },
        { name: "Full Tandoori Chicken", price: 400 }
      ]
    },
    {
      name: "Indian Curries & Breads",
      id: "indian-gravies",
      items: [
        { name: "Kadai Paneer", price: 200 },
        { name: "Paneer Butter Masala", price: 260 },
        { name: "Chicken Kasa", price: 200 },
        { name: "Kadhai Chicken", price: 220 },
        { name: "Butter Chicken", price: 250, special: true },
        { name: "Chicken Bharta", price: 250 },
        { name: "Chicken Lababdar", price: 270 },
        { name: "Chicken Tikka Butter Masala", price: 280, special: true },
        { name: "Plain Naan", price: 50 },
        { name: "Butter Naan", price: 60 },
        { name: "Garlic Butter Naan", price: 70 },
        { name: "Lachha Paratha", price: 40 }
      ]
    },
    {
      name: "Mocktails, Shakes & Desserts",
      id: "mocktails-desserts",
      items: [
        { name: "Blue Moon Special Mocktail", price: 160, special: true },
        { name: "Blue Lagoon", price: 100 },
        { name: "White / Green Mint Mojito", price: 100 },
        { name: "Fresh Lime Soda", price: 100 },
        { name: "Blue Hawaiian", price: 120 },
        { name: "Green Apple Mojito", price: 130 },
        { name: "Sunrise", price: 140 },
        { name: "Rainbow", price: 160 },
        { name: "Galaxy", price: 160, special: true },
        { name: "Mohabbat Ka Sharbat", price: 150, special: true },
        { name: "Kitkat / Oreo Shake", price: 160 },
        { name: "Chocolate Shake", price: 150 },
        { name: "Strawberry Shake", price: 130 },
        { name: "Hazelnut Cold Coffee", price: 180, special: true },
        { name: "Cold Coffee", price: 150 },
        { name: "Sizzling Brownie with Ice Cream", price: 160, special: true },
        { name: "Faluda", price: 120 }
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

    // Dual Photos
    dualPanel: document.getElementById("panel-dual-photos"),
    dualLeftImg: document.querySelector("#dual-col-left img"),
    dualRightImg: document.querySelector("#dual-col-right img"),

    // Gusto Climax
    gustoStage: document.getElementById("panel-gusto-stage"),
    gustoFork: document.getElementById("floating-steak-fork"),
    gustoLeftCard: document.getElementById("trio-card-left"),
    gustoRightCard: document.getElementById("trio-card-right"),
    gustoNapkin: document.getElementById("cutlery-napkin-dock"),

    // Typography Trio
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

  // 2. Spirit Section Parallax
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

  // 3. Dual Photos Counter Scroll
  if (els.dualPanel && window.innerWidth > 768) {
    const rect = els.dualPanel.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      const progress = (vh - rect.top) / (vh + rect.height);
      const norm = (progress - 0.5) * 2;
      if (els.dualLeftImg) els.dualLeftImg.style.transform = `translate3d(0, ${norm * -50}px, 0) scale(1.04)`;
      if (els.dualRightImg) els.dualRightImg.style.transform = `translate3d(0, ${norm * 50}px, 0) scale(1.04)`;
    }
  }

  // 4. Gusto Steak Climax
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

      if (isDesktop) {
        const expandProgress = Math.max(0, Math.min(1, (progress - 0.25) / 0.5));
        if (els.gustoLeftCard) {
          els.gustoLeftCard.style.transform = `translate3d(${(1 - expandProgress) * 35}px, 0, 0) scale(${0.96 + expandProgress * 0.04})`;
          els.gustoLeftCard.style.opacity = Math.min(1, expandProgress * 1.4);
        }
        if (els.gustoRightCard) {
          els.gustoRightCard.style.transform = `translate3d(${(1 - expandProgress) * -35}px, 0, 0) scale(${0.96 + expandProgress * 0.04})`;
          els.gustoRightCard.style.opacity = Math.min(1, expandProgress * 1.4);
        }
      }

      if (els.gustoNapkin) {
        els.gustoNapkin.style.opacity = Math.max(0.08, 0.45 - progress * 0.4);
      }
    }
  }

  // 5. Typography Trio
  if (els.typoStage && isDesktop) {
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
    if (data.items && data.items.length > 0) {
      ALL_DISHES.length = 0;
      data.items.forEach(d => {
        ALL_DISHES.push({
          id: d.itemId,
          name: d.name,
          price: d.price,
          categoryName: d.categoryName,
          categoryId: d.category,
          veg: d.diet === "veg",
          spicy: Boolean(d.spicy),
          chefSpecial: Boolean(d.isChefSpecial),
          image: d.imageUrl || ""
        });
      });
      renderModalDishes();
    }
  } catch (err) {
    // Fail silently to local MENU_DATA fallback
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
