// Spending Simulator JavaScript

// Constants
const STARTING_BUDGET = 92890510050000; // ₹92,89,05,10,05,000

// Item Data - 29 items (Indian products)
const items = [
    { id: 'vada-pav', name: 'Vada Pav', price: 15, image: 'attached_assets/generated_images/Vada_Pav_street_food_53175354.webp' },
    { id: 'pani-puri', name: 'Pani Puri', price: 20, image: 'attached_assets/generated_images/Pani_Puri_street_food_f0ff9482.webp' },
    { id: 'mc-spicy', name: 'Mc Spicy', price: 200, image: 'attached_assets/generated_images/McSpicy_burger_product_shot_bf277e1c.webp' },
    { id: 'cold-coffee', name: 'Cold Coffee', price: 350, image: 'attached_assets/generated_images/Cold_coffee_beverage_18b249a9.webp' },
    { id: 'ps5', name: 'PS5', price: 55000, image: 'attached_assets/generated_images/PlayStation_5_console_b30ee9ce.webp' },
    { id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max', price: 160000, image: 'attached_assets/generated_images/iPhone_15_Pro_Max_451e0474.webp' },
    { id: 'auto-rickshaw', name: 'Auto Rickshaw', price: 200000, image: 'attached_assets/generated_images/Auto_rickshaw_vehicle_5f5800bc.webp' },
    { id: 'macbook-pro', name: 'MacBook Pro', price: 200000, image: 'attached_assets/generated_images/MacBook_Pro_laptop_46ab2ed9.webp' },
    { id: 'classic-350', name: 'Classic 350', price: 250000, image: 'attached_assets/generated_images/Classic_350_motorcycle_5c6b576f.webp' },
    { id: 'gaming-pc-setup', name: 'Gaming PC Setup', price: 400000, image: 'attached_assets/generated_images/Gaming_PC_setup_d101efa1.webp' },
    { id: 'taj-lake-palace', name: 'Weekend Stay at Taj Lake Palace', price: 500000, image: 'attached_assets/generated_images/Taj_Lake_Palace_hotel_a8fd9e72.webp' },
    { id: 'private-jet-charter', name: 'Private Jet Charter', price: 1000000, image: 'attached_assets/generated_images/Private_jet_charter_497f1c3d.webp' },
    { id: 'rolex-watch', name: 'Rolex Watch', price: 1500000, image: 'attached_assets/generated_images/Rolex_luxury_watch_877a55be.webp' },
    { id: 'burj-al-arab', name: '7-Star Hotel Suite (Burj Al Arab)', price: 1500000, image: 'attached_assets/generated_images/Burj_Al_Arab_suite_f307e387.webp' },
    { id: 'toyota-fortuner', name: 'Toyota Fortuner', price: 5000000, image: 'attached_assets/generated_images/Toyota_Fortuner_SUV_4c268eef.webp' },
    { id: 'bitcoin', name: 'Bitcoin (1 BTC)', price: 71000000, image: 'attached_assets/generated_images/Bitcoin_cryptocurrency_symbol_683c45c8.webp' },
    { id: '1bhk-mumbai', name: '1BHK Flat in Mumbai', price: 15000000, image: 'attached_assets/generated_images/1BHK_apartment_Mumbai_fd9bf645.webp' },
    { id: 'lamborghini', name: 'Lamborghini Huracán', price: 45000000, image: 'attached_assets/generated_images/Lamborghini_Huracan_supercar_860940cd.webp' },
    { id: '3bhk-bandra', name: '3BHK Flat in Bandra', price: 60000000, image: 'attached_assets/generated_images/3BHK_Bandra_apartment_371d4d00.webp' },
    { id: 'rolls-royce', name: 'Rolls-Royce Phantom', price: 100000000, image: 'attached_assets/generated_images/Rolls-Royce_Phantom_sedan_5126e57c.webp' },
    { id: 'anant-radhika-wedding', name: 'Anant-Radhika Wedding', price: 50000000000, image: 'attached_assets/generated_images/Luxury_Indian_wedding_fe27017f.webp' },
    { id: 'make-a-movie', name: 'Make a Movie', price: 10000000000, image: 'attached_assets/generated_images/Movie_production_equipment_400e8b76.webp' },
    { id: 'private-island', name: 'Private Island', price: 10000000000, image: 'attached_assets/generated_images/Private_tropical_island_5ed3b79b.webp' },
    { id: 'boeing-747', name: 'Boeing 747', price: 332000000000, image: 'attached_assets/generated_images/Boeing_747_aircraft_08e99509.webp' },
    { id: 'srk-net-worth', name: 'Shah Rukh Khan (Net Worth)', price: 6300000000000, image: 'attached_assets/generated_images/Bollywood_celebrity_portrait_aa3629aa.webp' },
    { id: 'chennai-super-kings', name: 'Chennai Super Kings', price: 7000000000000, image: 'attached_assets/generated_images/Chennai_Super_Kings_team_c271089c.webp' },
    { id: 'mumbai-indians', name: 'Mumbai Indians', price: 8000000000000, image: 'attached_assets/generated_images/Mumbai_Indians_team_aa7b9567.webp' },
    { id: 'antilia', name: 'Antilia', price: 15000000000000, image: 'attached_assets/generated_images/Antilia_luxury_residence_f5fb635e.webp' },
    { id: 'ola', name: 'OLA (Company Valuation)', price: 54000000000000, image: 'attached_assets/generated_images/OLA_company_branding_1d77b28c.webp' }
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
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
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
    document.getElementById("totalSpent").textContent = "₹0";
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
            <img src="${item.image}" alt="${item.name} - Buy ${item.name.toLowerCase()} in billionaire spending simulator" class="item-image" loading="lazy" title="Buy ${item.name} for ${formatCurrency(item.price)}">
        </div>
        <div class="item-details">
            <h3 class="item-name">${item.name}</h3>
            <p class="item-price">${formatCurrency(item.price)}</p>
            <div class="quantity-badge-container" style="text-align: center; min-height: 28px;">
                ${quantity > 0 ? `<span class="quantity-badge">Owned: ${quantity}</span>` : ""}
            </div>
            <div class="item-buttons">
                <button class="btn btn-sell" ${quantity === 0 ? "disabled" : ""}
                        onclick="sellItem('${item.id}')"
                        aria-label="Sell ${item.name}">
                    <span>−</span> Sell
                </button>
                <button class="btn btn-buy" ${!canBuy ? "disabled" : ""}
                        onclick="buyItem('${item.id}')"
                        aria-label="Buy ${item.name}">
                    <span>+</span> Buy
                </button>
            </div>
        </div>
    `;

  // Add event listeners for image load/error handling
  const img = card.querySelector('.item-image');
  if (img) {
    // Ensure image is visible and loads correctly
    img.style.display = 'block';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.minHeight = '100px';
    img.style.backgroundColor = 'transparent';
    
    // Handle image loading errors
    img.addEventListener('error', function() {
      // Fallback: show placeholder if image fails to load
      console.warn(`Failed to load image: ${this.src}`);
      const container = this.parentElement;
      if (container && container.classList.contains('item-image-container')) {
        container.innerHTML = '<div class="image-placeholder" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--muted);color:var(--muted-foreground);font-size:2rem;">🛍️</div>';
      }
    });
    
    // Verify image loads successfully
    img.addEventListener('load', function() {
      // Image loaded successfully
      this.style.opacity = '1';
    }, { once: true });
    
    // Check if image is already loaded (cached)
    if (img.complete && img.naturalHeight !== 0 && img.naturalWidth !== 0) {
      // Image already loaded
      img.style.opacity = '1';
    } else {
      // Image is loading - show it immediately but ensure it displays when ready
      img.style.opacity = '1';
    }
  }

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

// Theme Toggle with incognito mode support
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch (e) {
    // localStorage not available (incognito mode or disabled)
    console.log("Theme preference not saved (localStorage unavailable)");
  }
  console.log(`Theme switched to ${isDark ? "dark" : "light"} mode`);
}

function initializeTheme() {
  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  } catch (e) {
    // localStorage not available (incognito mode or disabled)
    console.log("Theme preference not loaded (localStorage unavailable)");
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
  
  const allPages = [
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
      return isRoot || (currentPath.endsWith("/index.html") && !currentPath.includes("/Spend"));
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

  console.log("MoneySpender Simulator initialized with 29 items!");
  console.log(`Starting budget: ${formatCurrency(STARTING_BUDGET)}`);
});

// Make functions globally available
window.buyItem = buyItem;
window.sellItem = sellItem;
