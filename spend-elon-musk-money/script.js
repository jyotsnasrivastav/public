// Spending Simulator JavaScript

// Constants
const STARTING_BUDGET = 500000000000; // $500 billion

// Item Data - 58 items (convert PNG to WebP - image paths updated to .webp)
const items = [
    { id: 1, name: "AirPods Pro", price: 249, image: "attached_assets/generated_images/AirPods_Pro_product_shot_532df909.webp" },
    { id: 2, name: "Nintendo Switch", price: 299, image: "attached_assets/generated_images/Nintendo_Switch_console_e0724bc3.webp" },
    { id: 3, name: "PS5", price: 499, image: "attached_assets/generated_images/PlayStation_5_console_cbf6fe44.webp" },
    { id: 4, name: "Xbox Series X", price: 499, image: "attached_assets/generated_images/Xbox_Series_X_console_07330e6e.webp" },
    { id: 5, name: "iPhone 17 Pro Max - 2TB", price: 1999, image: "attached_assets/generated_images/iPhone_Pro_Max_ede6c662.webp" },
    { id: 6, name: "Samsung S25 Ultra - 1TB", price: 1499, image: "attached_assets/generated_images/Samsung_Galaxy_Ultra_8c944720.webp" },
    { id: 7, name: "MacBook Pro 14' M4 Max (128GB RAM | 8TB)", price: 7699, image: "attached_assets/generated_images/MacBook_Pro_laptop_8064e9b0.webp" },
    { id: 8, name: "Mac Studio M3 Ultra (512GB RAM | 16TB SSD)", price: 14099, image: "attached_assets/generated_images/Mac_Studio_computer_9a0b4209.webp" },
    { id: 9, name: "Pro Gaming PC (I9 14900K, RTX 5090, 64GB, 4TB SSD)", price: 6950, image: "attached_assets/generated_images/Gaming_PC_tower_48f58d06.webp" },
    { id: 10, name: "Razer Blade 14 Top spec (2025)", price: 2799, image: "attached_assets/generated_images/Razer_gaming_laptop_fc64fc04.webp" },
    { id: 11, name: "iPad Air M3 Chip (256GB)", price: 749, image: "attached_assets/generated_images/iPad_Air_tablet_a6a16fbd.webp" },
    { id: 12, name: "Tesla Bot (Available 2027)", price: 25000, image: "attached_assets/generated_images/Tesla_Bot_humanoid_34136ce6.webp" },
    { id: 13, name: "Start your own StartUp", price: 5000000, image: "attached_assets/generated_images/Startup_company_scene_0b77c80c.webp" },
    { id: 14, name: "Open Fast Food Franchise", price: 1200000, image: "attached_assets/generated_images/Fast_food_franchise_d8e05cf3.webp" },
    { id: 15, name: "Spotify for 80 years", price: 13600, image: "attached_assets/generated_images/Spotify_streaming_service_ecf15d94.webp" },
    { id: 16, name: "Entire Steam library (2025 - No discounts)", price: 1228000, image: "attached_assets/generated_images/Steam_game_library_03a6d857.webp" },
    { id: 17, name: "Launch your own satellite with your name", price: 80000000, image: "attached_assets/generated_images/Orbital_satellite_82f6d6cd.webp" },
    { id: 18, name: "Netflix for 80 Years", price: 19500, image: "attached_assets/generated_images/Netflix_streaming_service_583f4538.webp" },
    { id: 19, name: "Entire production of Nvidia RTX GPUs for 2025", price: 6100000000, image: "attached_assets/generated_images/Nvidia_RTX_GPUs_a3f75a76.webp" },
    { id: 20, name: "Influence 1 high ranking politician", price: 3000000, image: "attached_assets/generated_images/Political_influence_scene_ff294d24.webp" },
    { id: 21, name: "Private Concert with ANY Super Star", price: 1000000, image: "attached_assets/generated_images/Private_concert_performance_4c9ce4f2.webp" },
    { id: 22, name: "Give 10,000 USD to 5000 people", price: 50000000, image: "attached_assets/generated_images/Charitable_giving_scene_0359f227.webp" },
    { id: 23, name: "LG 88' OLED 8K ThinQ®", price: 19990, image: "attached_assets/generated_images/LG_OLED_TV_b1015af5.webp" },
    { id: 24, name: "Fiat 500", price: 19000, image: "attached_assets/generated_images/Fiat_500_car_e9ac7981.webp" },
    { id: 25, name: "Toyota Camry", price: 29000, image: "attached_assets/generated_images/Toyota_Camry_sedan_5c38d06c.webp" },
    { id: 26, name: "Ford F150 Raptor 2025", price: 65900, image: "attached_assets/generated_images/Ford_F150_Raptor_514b0794.webp" },
    { id: 27, name: "Tesla Model S Plaid", price: 132000, image: "attached_assets/generated_images/Tesla_Model_S_7ec99459.webp" },
    { id: 28, name: "Cybertruck (Tri Motor)", price: 70000, image: "attached_assets/generated_images/Tesla_Cybertruck_c2d467bc.webp" },
    { id: 29, name: "Tesla Roadster (available 2026)", price: 200000, image: "attached_assets/generated_images/Tesla_Roadster_supercar_b22ef79f.webp" },
    { id: 30, name: "Ferrari F8 Tributo", price: 276000, image: "attached_assets/generated_images/Ferrari_F8_Tributo_195103d3.webp" },
    { id: 31, name: "Lamborghini Aventador SVJ", price: 512000, image: "attached_assets/generated_images/Lamborghini_Aventador_SVJ_e8ffe41b.webp" },
    { id: 32, name: "Bugatti La Voiture Noire", price: 11000000, image: "attached_assets/generated_images/Bugatti_La_Voiture_cb3e7a76.webp" },
    { id: 33, name: "1000 Acres of land", price: 5100000, image: "attached_assets/generated_images/1000_acres_land_f48ef4bf.webp" },
    { id: 34, name: "Private Island, Central America (medium size)", price: 4950000, image: "attached_assets/generated_images/Private_tropical_island_c739a705.webp" },
    { id: 35, name: "Eating out for 80 years (4 meals/day)", price: 4100000, image: "attached_assets/generated_images/Fine_dining_meals_c6cb2fcd.webp" },
    { id: 36, name: "Diamond Ring (Tiffany - 1.5 carat)", price: 20000, image: "attached_assets/generated_images/Tiffany_diamond_ring_7d501b22.webp" },
    { id: 37, name: "Whisky Macallan Michael Dillon 1926", price: 1530000, image: "attached_assets/generated_images/Macallan_1926_whisky_c40b14c4.webp" },
    { id: 38, name: "Rolex Oyster 36mm", price: 14000, image: "attached_assets/generated_images/Rolex_Oyster_watch_82fe9964.webp" },
    { id: 39, name: "Rolex Day Date 40mm Gold", price: 65000, image: "attached_assets/generated_images/Rolex_Day-Date_gold_d3d40859.webp" },
    { id: 40, name: "Les Femmes d'Alger by Picasso", price: 179400000, image: "attached_assets/generated_images/Picasso_painting_art_6d2d5099.webp" },
    { id: 41, name: "Monalisa by Leonardo da Vinci (estimate)", price: 869000000, image: "attached_assets/generated_images/Mona_Lisa_painting_aee46f39.webp" },
    { id: 42, name: "Helicopter Bell 206", price: 850000, image: "attached_assets/generated_images/Bell_206_helicopter_9d34ba18.webp" },
    { id: 43, name: "10 plastic surgeries", price: 130000, image: "attached_assets/generated_images/Plastic_surgery_concept_6b7fa8b1.webp" },
    { id: 44, name: "One week in EVERY country of the planet", price: 1250000, image: "attached_assets/generated_images/World_travel_experience_5e5c24e8.webp" },
    { id: 45, name: "College Education (USA)", price: 190000, image: "attached_assets/generated_images/College_education_7e73e1c6.webp" },
    { id: 46, name: "NFL Team (Average)", price: 3000000000, image: "attached_assets/generated_images/NFL_football_team_39ff70a8.webp" },
    { id: 47, name: "NBA Team (Average)", price: 2400000000, image: "attached_assets/generated_images/NBA_basketball_team_91faba17.webp" },
    { id: 48, name: "F1 Team (Average)", price: 700000000, image: "attached_assets/generated_images/F1_racing_team_d4fe2757.webp" },
    { id: 49, name: "Jet Gulfstream G450", price: 22000000, image: "attached_assets/generated_images/Gulfstream_private_jet_9ca82d6a.webp" },
    { id: 50, name: "M1 Abrams", price: 8000000, image: "attached_assets/generated_images/M1_Abrams_tank_21e21987.webp" },
    { id: 51, name: "Produce a Hollywood Movie", price: 90000000, image: "attached_assets/generated_images/Hollywood_movie_production_7baa084b.webp" },
    { id: 52, name: "Regular Modern Apartment (2 bd, 2 ba)", price: 480000, image: "attached_assets/generated_images/Modern_apartment_interior_e68bfae4.webp" },
    { id: 53, name: "Paris Luxury Apartment (3 bd, 3 ba)", price: 3800000, image: "attached_assets/generated_images/Paris_luxury_apartment_afb278fb.webp" },
    { id: 54, name: "L.A Home (5bd, 6ba)", price: 6500000, image: "attached_assets/generated_images/LA_luxury_home_f17ac36d.webp" },
    { id: 55, name: "L.A Mega Mansion (8 bd, 20 ba)", price: 65000000, image: "attached_assets/generated_images/LA_mega_mansion_edb07ff1.webp" },
    { id: 56, name: "Modern Building (35 condos + 10 Offices)", price: 14000000, image: "attached_assets/generated_images/Modern_commercial_building_4d7024a1.webp" },
    { id: 57, name: "Sailboat", price: 130000, image: "attached_assets/generated_images/Luxury_sailboat_904c603d.webp" },
    { id: 58, name: "Mega Yacht", price: 300000000, image: "attached_assets/generated_images/Mega_yacht_8f6e8ea6.webp" }
];

// State Management
let budget = STARTING_BUDGET;
let quantities = {};

// Initialize quantities
items.forEach((item) => {
  quantities[item.id] = 0;
});

// Utility Functions
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
        minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    }).format(amount);
}

function updateBudgetDisplay() {
  const budgetElement = document.getElementById("currentBudget");
  budgetElement.textContent = formatCurrency(budget);
  budgetElement.classList.add("update");
  setTimeout(() => budgetElement.classList.remove("update"), 300);

  const percentageSpent = ((STARTING_BUDGET - budget) / STARTING_BUDGET) * 100;
  document.getElementById("percentageSpent").textContent =
    percentageSpent.toFixed(2);
}

function updateReceipt() {
  const receiptContent = document.getElementById("receiptContent");
  const purchasedItems = items.filter((item) => quantities[item.id] > 0);

  if (purchasedItems.length === 0) {
    receiptContent.innerHTML =
      '<p class="empty-receipt">No items purchased yet<br><small>Start shopping!</small></p>';
    document.getElementById("totalSpent").textContent = "$0";
    return;
  }

  let receiptHTML = "";
  let totalSpent = 0;

  purchasedItems.forEach((item) => {
    const quantity = quantities[item.id];
    const itemTotal = quantity * item.price;
    totalSpent += itemTotal;

    receiptHTML += `
            <div class="receipt-item">
                <div class="receipt-item-info">
                    <div class="receipt-item-name">${item.name}</div>
                    <div class="receipt-item-details">${quantity} × ${formatCurrency(item.price)}</div>
                </div>
                <div class="receipt-item-total">${formatCurrency(itemTotal)}</div>
            </div>
        `;
  });

  receiptContent.innerHTML = receiptHTML;
  document.getElementById("totalSpent").textContent =
    formatCurrency(totalSpent);
}

function buyItem(itemId) {
  const item = items.find((i) => i.id === itemId);
  if (!item) return;

  if (budget >= item.price) {
    budget -= item.price;
    quantities[itemId]++;
        updateBudgetDisplay();
        updateReceipt();
    updateItemCard(itemId);
    console.log(`Bought ${item.name} for ${formatCurrency(item.price)}`);
  }
}

function sellItem(itemId) {
  const item = items.find((i) => i.id === itemId);
  if (!item) return;

  if (quantities[itemId] > 0) {
    budget += item.price;
    quantities[itemId]--;
        updateBudgetDisplay();
        updateReceipt();
    updateItemCard(itemId);
    console.log(`Sold ${item.name} for ${formatCurrency(item.price)}`);
  }
}

function updateItemCard(itemId) {
  const item = items.find((i) => i.id === itemId);
  const quantity = quantities[itemId];
  const card = document.querySelector(`[data-item-id="${itemId}"]`);

  if (!card) return;

  // Update quantity badge
  const quantityBadge = card.querySelector(".quantity-badge-container");
  if (quantity > 0) {
    quantityBadge.innerHTML = `<span class="quantity-badge">Owned: ${quantity}</span>`;
  } else {
    quantityBadge.innerHTML = "";
  }

  // Update button states
  const sellBtn = card.querySelector(".btn-sell");
  const buyBtn = card.querySelector(".btn-buy");

  sellBtn.disabled = quantity === 0;
  buyBtn.disabled = budget < item.price;
}

function createItemCard(item, index) {
  const card = document.createElement("article");
  card.className = "item-card";
  card.setAttribute("data-item-id", item.id);
  card.setAttribute("role", "listitem");
  card.style.animationDelay = `${index * 0.05}s`;

  const canBuy = budget >= item.price;
  const quantity = quantities[item.id];

  card.innerHTML = `
        <div class="item-image-container">
            <img src="${item.image}" alt="${item.name} - Buy luxury ${item.name.toLowerCase()} in Elon Musk spending simulator - Spend Elon Musk money game online ${formatCurrency(item.price)}" class="item-image" loading="lazy" title="Buy ${item.name} for ${formatCurrency(item.price)}" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23ecf0f1%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2214%22 fill=%22%237f8c8d%22%3E${item.name.replace(/['"]/g, '').replace(/&/g, '&amp;')}%3C/text%3E%3C/svg%3E';">
                </div>
        <div class="item-details">
            <h3 class="item-name">${item.name}</h3>
            <p class="item-price">${formatCurrency(item.price)}</p>
            <div class="quantity-badge-container" style="text-align: center; min-height: 28px;">
                ${quantity > 0 ? `<span class="quantity-badge">Owned: ${quantity}</span>` : ""}
            </div>
            <div class="item-buttons">
                <button class="btn btn-sell" ${quantity === 0 ? "disabled" : ""}
                        onclick="sellItem(${item.id})"
                        aria-label="Sell ${item.name}">
                    <span>−</span> Sell
                </button>
                <button class="btn btn-buy" ${!canBuy ? "disabled" : ""}
                        onclick="buyItem(${item.id})"
                        aria-label="Buy ${item.name}">
                    <span>+</span> Buy
                </button>
            </div>
        </div>
    `;

  return card;
}

function renderItems() {
  const grid = document.getElementById("itemsGrid");
  grid.innerHTML = "";

  items.forEach((item, index) => {
    const card = createItemCard(item, index);
    grid.appendChild(card);
  });
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  console.log(`Theme switched to ${isDark ? "dark" : "light"} mode`);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
}

// Sticky Budget Display on Scroll
function handleStickyBudget() {
  const budgetDisplay = document.querySelector(".budget-display");
  const heroSection = document.querySelector(".hero-section");
  
  if (!budgetDisplay || !heroSection) return;
  
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - 200;
  
  if (window.scrollY > heroBottom) {
    budgetDisplay.classList.add("sticky");
  } else {
    budgetDisplay.classList.remove("sticky");
  }
}

// Mobile Receipt Toggle - Disabled since receipt is now in footer
function setupMobileReceipt() {
  // Receipt is now always visible in footer, no mobile toggle needed
  return;
}

// Dropdown Menu Toggle
function setupDropdownMenu() {
  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownWrapper = document.querySelector(".dropdown-wrapper");
  const navMenu = document.getElementById("navMenu");
  
  if (!dropdownToggle || !dropdownMenu || !dropdownWrapper || !navMenu) return;

  // Define all pages - adjust URLs based on current location
  const currentPath = window.location.pathname;
  const isRoot = currentPath.endsWith('/') || currentPath.endsWith('/index.html') || (!currentPath.includes('/Spend') && !currentPath.includes('/spend'));
  
  const allPages = isRoot ? [
    { name: "Spend Bill Gates Money", url: "index.html" },
    { name: "Spend Steve Jobs Money", url: "Spend-Steve-Jobs-Money/index.html" },
    { name: "Spend Mark Zuckerberg Money", url: "Spend-Mark-Zuckerberg-Money/index.html" },
    { name: "Spend Ambani Money", url: "Spend-Ambani-Money/index.html" },
    { name: "Spend Anitta's Money", url: "Spend-Anittas-Money/index.html" }
  ] : [
    { name: "Spend Bill Gates Money", url: "../index.html" },
    { name: "Spend Steve Jobs Money", url: "../Spend-Steve-Jobs-Money/index.html" },
    { name: "Spend Mark Zuckerberg Money", url: "../Spend-Mark-Zuckerberg-Money/index.html" },
    { name: "Spend Ambani Money", url: "../Spend-Ambani-Money/index.html" },
    { name: "Spend Anitta's Money", url: "../Spend-Anittas-Money/index.html" }
  ];

  // Helper function to check if current page matches
  function isCurrentPage(url, name) {
    if (name.includes("Anitta")) {
      return currentPath.includes("Spend-Anittas-Money");
    } else if (name.includes("Ambani")) {
      return currentPath.includes("Spend-Ambani-Money");
    } else if (name.includes("Bill Gates")) {
      return isRoot || (currentPath.endsWith("/index.html") && !currentPath.includes("/Spend") && !currentPath.includes("/spend"));
    } else if (name.includes("Steve Jobs")) {
      return currentPath.includes("Spend-Steve-Jobs-Money");
    } else if (name.includes("Mark Zuckerberg")) {
      return currentPath.includes("Spend-Mark-Zuckerberg-Money");
    }
    return false;
  }

  // Clear dropdown menu first
  dropdownMenu.innerHTML = '';

  // Populate dropdown with all pages
  allPages.forEach(page => {
    const link = document.createElement('a');
    link.href = page.url;
    link.className = 'dropdown-link';
    link.setAttribute('role', 'menuitem');
    link.textContent = page.name;
    
    // Set active class for current page
    if (isCurrentPage(page.url, page.name)) {
      link.classList.add('active');
    }
    
    dropdownMenu.appendChild(link);
  });

  // Update active state for nav links (first 4 pages)
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    const linkText = link.textContent.trim();
    
    if (isCurrentPage(href, linkText)) {
      link.classList.add('active');
    }
  });

  // Toggle dropdown on button click
  dropdownToggle.addEventListener("click", function(e) {
    e.stopPropagation();
    const isExpanded = dropdownToggle.getAttribute("aria-expanded") === "true";
    dropdownMenu.classList.toggle("show");
    dropdownToggle.setAttribute("aria-expanded", !isExpanded);
  });

  // Close dropdown when clicking on a dropdown link
  const dropdownLinks = dropdownMenu.querySelectorAll(".dropdown-link");
  dropdownLinks.forEach(link => {
    link.addEventListener("click", function() {
      dropdownMenu.classList.remove("show");
      dropdownToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function(event) {
    const isClickInsideDropdown = dropdownWrapper.contains(event.target);
    
    if (!isClickInsideDropdown && dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close dropdown on Escape key
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
      dropdownToggle.setAttribute("aria-expanded", "false");
      dropdownToggle.focus();
    }
  });
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");
  const navMenuWrapper = navMenu ? navMenu.closest(".nav-menu-wrapper") : null;
  
  if (!mobileMenuToggle || !navMenu || !navMenuWrapper) return;

  mobileMenuToggle.addEventListener("click", function() {
    const isActive = navMenu.classList.contains("active");
    navMenu.classList.toggle("active");
    navMenuWrapper.classList.toggle("active");
    mobileMenuToggle.classList.toggle("active");
    mobileMenuToggle.setAttribute("aria-expanded", !isActive);
  });

  // Close menu when clicking on a nav link
  const navLinks = navMenu.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navMenu.classList.remove("active");
      navMenuWrapper.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function(event) {
    const isClickInsideNav = navMenuWrapper.contains(event.target);
    const isClickOnToggle = mobileMenuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navMenuWrapper.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu on window resize if screen becomes large
  window.addEventListener("resize", function() {
    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navMenuWrapper.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Initialize theme
  initializeTheme();

  // Render items
  renderItems();

  // Theme toggle
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", toggleTheme);

  // Dropdown menu toggle
  setupDropdownMenu();

  // Mobile menu toggle
  setupMobileMenu();

  // Sticky budget on scroll
  window.addEventListener("scroll", handleStickyBudget);

  // Mobile receipt toggle
  setupMobileReceipt();

  // Initial display update
  updateBudgetDisplay();
  updateReceipt();

  console.log("Spending Simulator initialized with 58 items!");
  console.log(`Starting budget: ${formatCurrency(STARTING_BUDGET)}`);
});

// Make functions globally available
window.buyItem = buyItem;
window.sellItem = sellItem;
