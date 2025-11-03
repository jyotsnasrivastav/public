// Mark Zuckerberg Money Spending Simulator JavaScript

// Constants
const STARTING_BUDGET = 115225000000; // $115.225 billion

// Item Data - 42 items from SpendZuckerbergMoney folder
const items = [
    { id: 1, name: 'CyberTruck', price: 80000, image: 'attached_assets/generated_images/CyberTruck_product_image_9bf9cc1c.webp' },
    { id: 2, name: 'iPhone 15 Gold', price: 4600, image: 'attached_assets/generated_images/iPhone_15_Gold_2c468d4a.webp' },
    { id: 3, name: 'Expensive Icecream', price: 100000, image: 'attached_assets/generated_images/Luxury_ice_cream_df9c737b.webp' },
    { id: 4, name: 'Video Game', price: 60, image: 'attached_assets/generated_images/Video_game_controller_e6bdca95.webp' },
    { id: 5, name: 'Charity', price: 100, image: 'attached_assets/generated_images/Charity_symbol_56d017d8.webp' },
    { id: 6, name: 'Headphones', price: 200, image: 'attached_assets/generated_images/Premium_headphones_cd0586c1.webp' },
    { id: 7, name: 'Air Jordans', price: 200, image: 'attached_assets/generated_images/Air_Jordan_sneakers_691c6b03.webp' },
    { id: 8, name: 'Skateboard', price: 300, image: 'attached_assets/generated_images/Skateboard_deck_bfa7478b.webp' },
    { id: 9, name: 'BitCoin', price: 41000, image: 'attached_assets/generated_images/Bitcoin_coin_2c6ed0a5.webp' },
    { id: 10, name: 'Gaming Console', price: 600, image: 'attached_assets/generated_images/Gaming_console_6a8077dd.webp' },
    { id: 11, name: 'Future Bike', price: 1000, image: 'attached_assets/generated_images/Future_electric_bike_589b3681.webp' },
    { id: 12, name: 'Drone', price: 800, image: 'attached_assets/generated_images/Camera_drone_b23a36e2.webp' },
    { id: 13, name: 'Designer Handbag', price: 1000, image: 'attached_assets/generated_images/Designer_handbag_8fa98b3e.webp' },
    { id: 14, name: 'Jet Ski', price: 8000, image: 'attached_assets/generated_images/Jet_ski_c2520515.webp' },
    { id: 15, name: '4K TV', price: 10000, image: 'attached_assets/generated_images/4K_television_458b99a4.webp' },
    { id: 16, name: 'Diamond Ring', price: 10000, image: 'attached_assets/generated_images/Diamond_ring_fca8fe1d.webp' },
    { id: 17, name: 'Rolex', price: 15000, image: 'attached_assets/generated_images/Rolex_watch_021dbbe1.webp' },
    { id: 18, name: 'Speed Boat', price: 30000, image: 'attached_assets/generated_images/Speed_boat_687ec9ae.webp' },
    { id: 19, name: 'Food Truck', price: 50000, image: 'attached_assets/generated_images/Food_truck_8b1352d2.webp' },
    { id: 20, name: 'Tesla', price: 70000, image: 'attached_assets/generated_images/Tesla_car_9a34ae10.webp' },
    { id: 21, name: 'Monster Truck', price: 150000, image: 'attached_assets/generated_images/Monster_truck_6f293834.webp' },
    { id: 22, name: 'Helicopter', price: 175000, image: 'attached_assets/generated_images/Helicopter_14d25ff3.webp' },
    { id: 23, name: 'Ferrari', price: 200000, image: 'attached_assets/generated_images/Ferrari_supercar_847a282c.webp' },
    { id: 24, name: 'Lamborghini', price: 200000, image: 'attached_assets/generated_images/Lamborghini_577144ae.webp' },
    { id: 25, name: 'Fire Truck', price: 200000, image: 'attached_assets/generated_images/Fire_truck_86d9a161.webp' },
    { id: 26, name: 'Townhouse', price: 200000, image: 'attached_assets/generated_images/Townhouse_e445c481.webp' },
    { id: 27, name: 'Bar', price: 300000, image: 'attached_assets/generated_images/Bar_establishment_1bc07767.webp' },
    { id: 28, name: 'Pizza Shop', price: 500000, image: 'attached_assets/generated_images/Pizza_shop_18605b84.webp' },
    { id: 29, name: 'Bar of Gold', price: 500000, image: 'attached_assets/generated_images/Gold_bar_47a9d18f.webp' },
    { id: 30, name: 'Superbowl Advert', price: 5000000, image: 'attached_assets/generated_images/Superbowl_advertisement_154309e7.webp' },
    { id: 31, name: 'Beach House', price: 5000000, image: 'attached_assets/generated_images/Beach_house_8a6cabe7.webp' },
    { id: 32, name: 'Yacht', price: 10000000, image: 'attached_assets/generated_images/Luxury_yacht_a32bed23.webp' },
    { id: 33, name: 'F35 Jet', price: 30000000000, image: 'attached_assets/generated_images/F35_fighter_jet_414d8d53.webp' },
    { id: 34, name: 'Skyscraper', price: 50000000, image: 'attached_assets/generated_images/Skyscraper_building_a0994b54.webp' },
    { id: 35, name: 'Mansion', price: 50000000, image: 'attached_assets/generated_images/Luxury_mansion_6dbe81b4.webp' },
    { id: 36, name: 'Rocket', price: 60000000, image: 'attached_assets/generated_images/Space_rocket_1183c6e8.webp' },
    { id: 37, name: 'Passenger Jet', price: 150000000, image: 'attached_assets/generated_images/Passenger_jet_45505e82.webp' },
    { id: 38, name: 'Mona Lisa', price: 780000000, image: 'attached_assets/generated_images/Mona_Lisa_painting_ba541821.webp' },
    { id: 39, name: 'Cruise Ship', price: 1200000000, image: 'attached_assets/generated_images/Cruise_ship_a64d1047.webp' },
    { id: 40, name: 'NBA Team', price: 1300000000, image: 'attached_assets/generated_images/NBA_team_803696f6.webp' },
    { id: 41, name: 'MLB Team', price: 1500000000, image: 'attached_assets/generated_images/MLB_team_5dbe1ba4.webp' },
    { id: 42, name: 'NFL Team', price: 2300000000, image: 'attached_assets/generated_images/NFL_team_c2521a76.webp' }
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
            <img src="${item.image}" alt="${item.name} - Spend Mark Zuckerberg money on ${item.name.toLowerCase()}" class="item-image" loading="lazy" title="Buy ${item.name} for ${formatCurrency(item.price)}">
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
      
      // Show receipt when user has scrolled past the items grid
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
  
  const allPages = [
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

  console.log("Mark Zuckerberg Spending Simulator initialized!");
  console.log(`Starting budget: ${formatCurrency(STARTING_BUDGET)}`);
});

// Make functions globally available
window.buyItem = buyItem;
window.sellItem = sellItem;
