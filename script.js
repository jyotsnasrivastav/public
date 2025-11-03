// Spending Simulator JavaScript

// Constants
const STARTING_BUDGET = 100000000000; // $100 billion

// Item Data - 45 items
const items = [
    { id: 1, name: 'Big Mac', price: 2, image: 'images/Big_Mac_hamburger_product_photo_6d9f6f33.webp' },
    { id: 2, name: 'Flip Flops', price: 3, image: 'images/Flip_flops_product_photo_b27bf560.webp' },
    { id: 3, name: 'Coca-Cola Pack', price: 5, image: 'images/Coca-Cola_pack_product_photo_56d1d143.webp' },
    { id: 4, name: 'Movie Ticket', price: 12, image: 'images/Movie_ticket_product_photo_3fe3cec1.webp' },
    { id: 5, name: 'Book', price: 15, image: 'images/Book_product_photo_8438c3e1.webp' },
    { id: 6, name: 'Lobster Dinner', price: 45, image: 'images/Lobster_dinner_product_photo_f4c9495c.webp' },
    { id: 7, name: 'Video Game', price: 60, image: 'images/Video_game_controller_photo_2493952f.webp' },
    { id: 8, name: 'Smart Speaker', price: 99, image: 'images/Smart_speaker_product_photo_4a3dd056.webp' },
    { id: 9, name: 'Year of Netflix', price: 100, image: 'images/Netflix_card_product_photo_7da4e96c.webp' },
    { id: 10, name: 'Air Jordans', price: 125, image: 'images/Basketball_sneakers_product_photo_e1c162cc.webp' },
    { id: 11, name: 'Airpods', price: 199, image: 'images/Wireless_earbuds_product_photo_e56ce2ae.webp' },
    { id: 12, name: 'Gaming Console', price: 299, image: 'images/Gaming_console_product_photo_0f25098e.webp' },
    { id: 13, name: 'Drone', price: 350, image: 'images/Drone_product_photo_9f0250e0.webp' },
    { id: 14, name: 'Smartphone', price: 699, image: 'images/Smartphone_product_photo_54308086.webp' },
    { id: 15, name: 'Bike', price: 800, image: 'images/Bicycle_product_photo_1c0e555a.webp' },
    { id: 16, name: 'Kitten', price: 1500, image: 'images/Kitten_portrait_photo_257fb5b4.webp' },
    { id: 17, name: 'Puppy', price: 1500, image: 'images/Puppy_portrait_photo_0d59d792.webp' },
    { id: 18, name: 'Auto Rickshaw', price: 2300, image: 'images/Auto_rickshaw_photo_77e4b7fb.webp' },
    { id: 19, name: 'Horse', price: 2500, image: 'images/Horse_portrait_photo_5984b7ab.webp' },
    { id: 20, name: 'Acre of Farmland', price: 3000, image: 'images/Farmland_aerial_photo_7d2d7566.webp' },
    { id: 21, name: 'Designer Handbag', price: 5500, image: 'images/Designer_handbag_product_photo_81694171.webp' },
    { id: 22, name: 'Hot Tub', price: 6000, image: 'images/Hot_tub_product_photo_411516e8.webp' },
    { id: 23, name: 'Luxury Wine', price: 7000, image: 'images/Luxury_wine_product_photo_9728dc7a.webp' },
    { id: 24, name: 'Diamond Ring', price: 10000, image: 'images/Diamond_ring_product_photo_759f14ac.webp' },
    { id: 25, name: 'Jet Ski', price: 12000, image: 'images/Jet_ski_product_photo_51797b3e.webp' },
    { id: 26, name: 'Rolex', price: 15000, image: 'images/Luxury_watch_product_photo_3dd4b918.webp' },
    { id: 27, name: 'Ford F-150', price: 30000, image: 'images/Pickup_truck_product_photo_3993fe5c.webp' },
    { id: 28, name: 'Tesla', price: 75000, image: 'images/Electric_car_product_photo_9bd251cb.webp' },
    { id: 29, name: 'Monster Truck', price: 150000, image: 'images/Monster_truck_photo_315f7726.webp' },
    { id: 30, name: 'Ferrari', price: 250000, image: 'images/Supercar_product_photo_7c97ddab.webp' },
    { id: 31, name: 'Single Family Home', price: 300000, image: 'images/Single_family_home_photo_5e8d3a1a.webp' },
    { id: 32, name: 'Gold Bar', price: 700000, image: 'images/Gold_bar_product_photo_b5389c46.webp' },
    { id: 33, name: "McDonald's Franchise", price: 1500000, image: 'images/McDonald\'s_franchise_photo_124fa3d9.webp' },
    { id: 34, name: 'Superbowl Ad', price: 5250000, image: 'images/Super_Bowl_ad_photo_583d0954.webp' },
    { id: 35, name: 'Yacht', price: 7500000, image: 'images/Luxury_yacht_photo_f5c9bd71.webp' },
    { id: 36, name: 'M1 Abrams', price: 8000000, image: 'images/Military_tank_photo_099b9b10.webp' },
    { id: 37, name: 'Formula 1 Car', price: 15000000, image: 'images/Formula_1_car_photo_bc5b1eda.webp' },
    { id: 38, name: 'Apache Helicopter', price: 31000000, image: 'images/Apache_helicopter_photo_9d247042.webp' },
    { id: 39, name: 'Mansion', price: 45000000, image: 'images/Luxury_mansion_photo_6a2aac28.webp' },
    { id: 40, name: 'Make a Movie', price: 100000000, image: 'images/Movie_production_photo_5ae8e3ef.webp' },
    { id: 41, name: 'Boeing 747', price: 148000000, image: 'images/Commercial_airplane_photo_e12532b5.webp' },
    { id: 42, name: 'Mona Lisa', price: 780000000, image: 'images/Mona_Lisa_painting_photo_cf77e4fe.webp' },
    { id: 43, name: 'Skyscraper', price: 850000000, image: 'images/Skyscraper_building_photo_b35a0921.webp' },
    { id: 44, name: 'Cruise Ship', price: 930000000, image: 'images/Cruise_ship_photo_eb0b6a84.webp' },
    { id: 45, name: 'NBA Team', price: 2120000000, image: 'images/Basketball_arena_photo_60b1d20a.webp' }
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
            <img src="${item.image}" alt="${item.name} - Buy luxury ${item.name.toLowerCase()} in billionaire spending simulator - Spend Bill Gates money game online ${formatCurrency(item.price)}" class="item-image" loading="lazy" title="Buy ${item.name} for ${formatCurrency(item.price)}">
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

// Mobile Receipt Toggle
function setupMobileReceipt() {
  const receiptSidebar = document.querySelector(".receipt-sidebar");
  if (!receiptSidebar) return;
  
  let isExpanded = false;
  
  // Show receipt on scroll
  function handleReceiptScroll() {
    if (window.innerWidth <= 1200) {
      const itemsGrid = document.querySelector(".items-grid");
      if (!itemsGrid) return;
      
      const gridBottom = itemsGrid.offsetTop + itemsGrid.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      // Show receipt when user has scrolled past the items grid (all items visible)
      if (scrollPosition > gridBottom - 200) {
        receiptSidebar.classList.add("show");
      } else {
        receiptSidebar.classList.remove("show");
        receiptSidebar.classList.remove("expanded");
        isExpanded = false;
      }
    } else {
      receiptSidebar.classList.remove("show");
      receiptSidebar.classList.remove("expanded");
    }
  }
  
  // Toggle expand on click
  receiptSidebar.addEventListener("click", function(e) {
    if (window.innerWidth <= 1200) {
      isExpanded = !isExpanded;
      if (isExpanded) {
        receiptSidebar.classList.add("expanded");
      } else {
        receiptSidebar.classList.remove("expanded");
      }
    }
  });
  
  // Listen to scroll
  window.addEventListener("scroll", handleReceiptScroll);
  
  // Reset on window resize
  window.addEventListener("resize", function() {
    handleReceiptScroll();
    if (window.innerWidth > 1200) {
      isExpanded = false;
    }
  });
  
  // Initial check
  handleReceiptScroll();
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
  const isRoot = currentPath.endsWith('/') || currentPath.endsWith('/index.html') || (!currentPath.includes('/Spend'));
  
  const allPages = isRoot ? [
    { name: "Spend Bill Gates Money", url: "index.html" },
    { name: "Spend Steve Jobs Money", url: "Spend Steve Jobs Money/index.html" },
    { name: "Spend Mark Zuckerberg Money", url: "Spend Mark Zuckerberg Money/index.html" },
    { name: "Spend Ambani Money", url: "Spend Ambani Money/index.html" },
    { name: "Spend Anitta's Money", url: "Spend Anitta's Money/index.html" }
  ] : [
    { name: "Spend Bill Gates Money", url: "../index.html" },
    { name: "Spend Steve Jobs Money", url: "../Spend Steve Jobs Money/index.html" },
    { name: "Spend Mark Zuckerberg Money", url: "../Spend Mark Zuckerberg Money/index.html" },
    { name: "Spend Ambani Money", url: "../Spend Ambani Money/index.html" },
    { name: "Spend Anitta's Money", url: "../Spend Anitta's Money/index.html" }
  ];

  // Helper function to check if current page matches
  function isCurrentPage(url, name) {
    if (name.includes("Anitta")) {
      return currentPath.includes("Anitta's Money");
    } else if (name.includes("Ambani")) {
      return currentPath.includes("Ambani Money");
    } else if (name.includes("Bill Gates")) {
      return isRoot || (currentPath.endsWith("/index.html") && !currentPath.includes("/Spend"));
    } else if (name.includes("Steve Jobs")) {
      return currentPath.includes("Steve Jobs Money");
    } else if (name.includes("Mark Zuckerberg")) {
      return currentPath.includes("Mark Zuckerberg Money");
    }
    return false;
  }

  // Clear dropdown menu first
  dropdownMenu.innerHTML = '';

  // Populate dropdown with remaining pages (after first 3)
  allPages.slice(3).forEach(page => {
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

  // Update active state for nav links (first 3 pages)
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

  console.log("Spending Simulator initialized with 45 items!");
  console.log(`Starting budget: ${formatCurrency(STARTING_BUDGET)}`);
});

// Make functions globally available
window.buyItem = buyItem;
window.sellItem = sellItem;
