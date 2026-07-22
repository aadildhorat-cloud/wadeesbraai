/**
 WADEE'S BRAAI - Centralized Product Data & Utilities
📁 Path: /wadeesbraai/products-wadeesbraai.js
🔄 DYNAMIC MODE: Fetches from Google Sheets API
*/
(function () {
// 🎛️ CONFIGURATION
const CONFIG = {
SHEETS_API_URL: "https://script.google.com/macros/s/AKfycbxi2MELZ3FA9g-YOk_FpNfaw2956v7as_U4aPduuDrOkgfV6GYnCb9CW9X4Gf-hXlxBkQ/exec",
basePath: "",
imageDir: "/wadeesbraai/images",
fallbackImage: "/wadeesbraai/images/wadees-logo.jpg",
businessName: "Wadee's Braai Catering",
businessLogo: "/wadeesbraai/images/wadees-logo.jpg",
resolveImage: function(src) {
    if (!src) return CONFIG.fallbackImage;
    if (src.indexOf('http://') === 0 || src.indexOf('https://') === 0) return src;
    if (src.indexOf(CONFIG.basePath) === 0) return src;
    if (src.indexOf('/') === 0) return src;
    return CONFIG.basePath + CONFIG.imageDir + "/" + src;
}
};

// 📦 STATIC FALLBACK DATA - Used if Sheets API fails
const FALLBACK_PRODUCTS = [
{
id:  "lamb-chops",
name:  "Lamb Chops",
price: 210.00,
category:  "marinated-meats",
niche:  "braai",
location:  "south-africa",
description:  "Premium marinated lamb chops - perfect for braai",
badge:  "🔥 Best Seller",
image:  "images/lamb-chops.jpg",
businessLogo:  "/wadeesbraai/images/wadees-logo.jpg"
},
{
id:  "min-steak",
name:  "Min Steak",
price: 160.00,
category:  "marinated-meats",
niche:  "braai",
location:  "south-africa",
description:  "Tender marinated min steak",
badge:  "",
image:  "images/min-steak.jpg"
},
{
id:  "t-bone-steak",
name:  "T-bone Steak",
price: 160.00,
category:  "marinated-meats",
niche:  "braai",
location:  "south-africa",
description:  "Hot marinated T-bone steak",
badge:  "🌶️ Hot",
image:  "images/t-bone-steak.jpg"
},
{
id:  "beef-rashers-500g",
name:  "Beef Rashers",
price: 80.00,
category:  "marinated-meats",
niche:  "braai",
location:  "south-africa",
description:  "Beef rashers 500g pack",
badge:  "",
image:  "images/beef-rashers.jpg"
},
{
id:  "aged-fillet-steak-500g",
name:  "Aged Fillet Steak",
price: 165.00,
category:  "marinated-meats",
niche:  "braai",
location:  "south-africa",
description:  "Premium aged fillet steak 500g",
badge:  "⭐ Premium",
image:  "images/aged-fillet.jpg"
},
{
id:  "wors-500g",
name:  "Wors",
price: 65.00,
category:  "wors",
niche:  "braai",
location:  "south-africa",
description:  "Traditional wors 500g",
badge:  " Popular",
image:  "images/wors.jpg"
},
{
id:  "chicken-tikka",
name:  "Chicken Tikka",
price: 120.00,
category:  "chicken",
niche:  "braai",
location:  "south-africa",
description:  "Marinated chicken tikka",
badge:  "",
image:  "images/chicken-tikka.jpg"
},
{
id:  "spare-ribs",
name:  "Spare Ribs",
price: 150.00,
category:  "marinated-meats",
niche:  "braai",
location:  "south-africa",
description:  "Marinated spare ribs",
badge:  "🔥 Best Seller",
image:  "images/spare-ribs.jpg"
},
{
id:  "spicy-wings",
name:  "Spicy Wings",
price: 120.00,
category:  "chicken",
niche:  "braai",
location:  "south-africa",
description:  "Hot and spicy chicken wings",
badge:  "🌶️ Hot",
image:  "images/spicy-wings.jpg"
},
{
id:  "chicken-fillet",
name:  "Chicken Fillet",
price: 120.00,
category:  "chicken",
niche:  "braai",
location:  "south-africa",
description:  "Marinated chicken fillet",
badge:  "",
image:  "images/chicken-fillet.jpg"
},
{
id:  "garlic-polony",
name:  "Garlic Polony",
price: 70.00,
category:  "sausages",
niche:  "braai",
location:  "south-africa",
description:  "Garlic polony",
badge:  "",
image:  "images/garlic-polony.jpg"
},
{
id:  "mutton-dhania-ssgs",
name:  "Mutton Dhania Ssgs",
price: 160.00,
category:  "sausages",
niche:  "braai",
location:  "south-africa",
description:  "Mutton dhania sausages",
badge:  "⭐ Value Pack",
image:  "images/mutton-dhania.jpg"
},
{
id:  "dhania-sausages-beef",
name:  "Dhania Sausages (Beef)",
price: 150.00,
category:  "sausages",
niche:  "braai",
location:  "south-africa",
description:  "Hot dhania beef sausages",
badge:  "️ Hot",
image:  "images/dhania-beef.jpg"
},
{
id:  "gourmet-chicken-kebabs",
name:  "Gourmet Chicken Kebabs",
price: 140.00,
category:  "kebabs",
niche:  "braai",
location:  "south-africa",
description:  "Gourmet marinated chicken kebabs",
badge:  "",
image:  "images/chicken-kebabs.jpg"
},
{
id:  "mutton-kebabs",
name:  "Mutton Kebabs",
price: 160.00,
category:  "kebabs",
niche:  "braai",
location:  "south-africa",
description:  "Premium mutton kebabs",
badge:  "🔥 Best Seller",
image:  "images/mutton-kebabs.jpg"
},
{
id:  "beef-kebabs",
name:  "Beef Kebabs",
price: 150.00,
category:  "kebabs",
niche:  "braai",
location:  "south-africa",
description:  "Marinated beef kebabs",
badge:  "",
image:  "images/beef-kebabs.jpg"
},
{
id:  "skewers",
name:  "Skewers",
price: 70.00,
category:  "braai-supplies",
niche:  "braai",
location:  "south-africa",
description:  "Mixed meat skewers",
badge:  "💰 Budget Friendly",
image:  "images/skewers.jpg"
},
{
id:  "beef-patties-6",
name:  "Beef Patties",
price: 80.00,
category:  "patties",
niche:  "braai",
location:  "south-africa",
description:  "Beef patties 6 in a pack",
badge:  "",
image:  "images/beef-patties.jpg"
},
{
id:  "mutton-patties-6",
name:  "Mutton Patties (6)",
price: 85.00,
category:  "patties",
niche:  "braai",
location:  "south-africa",
description:  "Mutton patties pack of 6",
badge:  "",
image:  "images/mutton-patties.jpg"
},
{
id:  "sweet-chilli-sausages",
name:  "Sweet Chilli Sausages",
price: 165.00,
category:  "sausages",
niche:  "braai",
location:  "south-africa",
description:  "Sweet chilli flavored sausages",
badge:  "⭐ Premium",
image:  "images/sweet-chilli.jpg"
}
];

// 🌐 State management
let PRODUCTS = [];
let isLoading = false;
let loadError = null;

// 🔄 Fetch products from Google Sheets
function fetchProducts() {
return new Promise(function(resolve) {
// Check if URL is still the placeholder
if (!CONFIG.SHEETS_API_URL || CONFIG.SHEETS_API_URL.indexOf("YOUR_DEPLOYMENT_ID") !== -1) {
console.warn("⚠️ Using fallback data - SHEETS_API_URL not configured");
console.warn("🔧 Fix: Edit this file and replace SHEETS_API_URL with your actual Google Apps Script Web App URL");
processProducts(FALLBACK_PRODUCTS);
return resolve(PRODUCTS);
}

    if (isLoading) {
         const checkLoaded = setInterval(function() {
             if (!isLoading) {
                 clearInterval(checkLoaded);
                 resolve(PRODUCTS);
             }
         }, 100);
         return;
     }

     isLoading = true;

     // Load as dynamic script (since Apps Script serves JS format)
     const script = document.createElement("script");
     // 📱 FIX: Add timestamp to prevent mobile browsers from caching old data
     script.src = CONFIG.SHEETS_API_URL + (CONFIG.SHEETS_API_URL.includes('?') ? '&' : '?') + 't=' + Date.now();

     script.onload = function() {
         console.log("✅ Products loaded from Google Sheets");
         isLoading = false;
         // 🔧 CRITICAL FIX: Process the loaded data into the internal PRODUCTS array
         if (window.WADEESBRAAI_PRODUCTS && Array.isArray(window.WADEESBRAAI_PRODUCTS)) {
             processProducts(window.WADEESBRAAI_PRODUCTS);
         }
         resolve(PRODUCTS);
     };

     script.onerror = function() {
         console.warn("⚠️ Failed to load from Sheets, using fallback");
         isLoading = false;
         loadError = new Error("Script load failed");
         processProducts(FALLBACK_PRODUCTS);
         resolve(PRODUCTS);
     };

     document.head.appendChild(script);
 });
}

// 🔄 Process raw product data
function processProducts(rawProducts) {
PRODUCTS = rawProducts.map(function(product) {
const resolvedImage = CONFIG.resolveImage(product.image);

    // 🖼️ FIX: Resolve popup images URLs
     const resolvedPopupImages = (product.popupImages || []).map(function(img) {
         return CONFIG.resolveImage(img);
     });

     return {
         id: product.id,
         name: product.name,
         price: product.price,
         category: product.category,
         niche: product.niche,
         location: product.location,
         description: product.description,
         badge: product.badge,
         image: resolvedImage,
         popupImages: resolvedPopupImages, // ✅ ADDED: Passes gallery to HTML
         imageFallback: CONFIG.fallbackImage,
         businessName: product.businessName || CONFIG.businessName,
         businessLogo: CONFIG.businessLogo,
         categorySlug: (product.category || "").trim().toLowerCase(),
         nicheSlug: (product.niche || "general").trim().toLowerCase(),
         locationSlug: (product.location || "south-africa").trim().toLowerCase()
     };
 });

 window.WADEESBRAAI_PRODUCTS = PRODUCTS;
 // Add this line to make it compatible with Hive Times marketplace
 window.WADEESBRAAI_DATA = PRODUCTS;
 return PRODUCTS;
}

// 🛠️ Utility API - Available globally
window.WadeesBraaiProducts = {
getAll: function() { return PRODUCTS; },
getById: function(id) { return PRODUCTS.find(function(p) { return p.id === id; }); },
getByCategory: function(category) {
return PRODUCTS.filter(function(p) { return p.categorySlug === category.toLowerCase(); });
},
getByLocation: function(location) {
return PRODUCTS.filter(function(p) { return p.locationSlug === location.toLowerCase(); });
},
getByNiche: function(niche) {
return PRODUCTS.filter(function(p) { return p.nicheSlug === niche.toLowerCase(); });
},
filter: function(filters) {
return PRODUCTS.filter(function(p) {
if (filters.category && p.categorySlug !== filters.category.toLowerCase()) return false;
if (filters.location && p.locationSlug !== filters.location.toLowerCase()) return false;
if (filters.niche && p.nicheSlug !== filters.niche.toLowerCase()) return false;
return true;
});
},
renderCard: function(p) {
return '<article class="product-card" ' +
'data-id="' + p.id + '" ' +
'data-category="' + p.categorySlug + '" ' +
'data-price="' + p.price + '" ' +
'data-name="' + p.name + '" ' +
'data-description="' + p.description + '" ' +
'data-image="' + p.image + '" ' +
'data-niche="' + p.nicheSlug + '" ' +
'data-location="' + p.locationSlug + '">' +
        '<div class="product-image-wrap">' +
             '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" class="product-image" onerror="this.src=\'' + p.imageFallback + '\'">' +
             (p.badge ? '<span class="product-badge">' + p.badge + '</span>' : '') +
         '</div>' +
         '<div class="product-info">' +
             '<h3 class="product-name">' + p.name + '</h3>' +
             '<p class="product-description">' + p.description + '</p>' +
             '<div class="product-price">R' + p.price.toFixed(2) + '</div>' +
             '<button class="add-to-cart-btn" onclick="event.stopPropagation(); openProductModal(\'' + p.id + '\'); return false;">' +
                 '<i class="fas fa-eye"></i> View Details' +
             '</button>' +
         '</div>' +
     '</article>';
},
getWhatsAppLink: function(product, phoneNumber) {
    phoneNumber = phoneNumber || "27746234239";
    const msg = encodeURIComponent(
        "Hi! I'd like to order from Wadee's Braai Catering:\n\n" +
        "🔥 *" + product.name + "*\n" +
        "💰 Price: R" + product.price.toFixed(2) + "\n" +
        "📝 " + product.description + "\n\n" +
        "Please confirm availability. Thank you!"
    );
    return "https://wa.me/" + phoneNumber + "?text=" + msg;
},
refresh: fetchProducts,
getStatus: function() {
    return {
        loaded: PRODUCTS.length > 0,
        count: PRODUCTS.length,
        error: loadError ? loadError.message : null,
        loading: isLoading
    };
}
};

// 🚀 Auto-initialize when script loads
fetchProducts().then(function() {
console.group("🔥 Wadee's Braai Products Initialized");
console.log("✅ " + PRODUCTS.length + " products ready");

if (PRODUCTS.length > 0) {
     const grouped = {};
     PRODUCTS.forEach(function(p) {
         grouped[p.categorySlug] = grouped[p.categorySlug] || [];
         grouped[p.categorySlug].push(p.name);
     });
     Object.keys(grouped).forEach(function(cat) {
         console.log("📁 " + cat + ": " + grouped[cat].length + " item(s)");
     });
 } else {
     console.warn("⚠️ No products loaded - check FALLBACK_PRODUCTS or Google Sheets connection");
 }

 console.groupEnd();

 // Dispatch event so your HTML can listen and render products
 if (typeof document !== 'undefined' && document.dispatchEvent) {
     try {
         document.dispatchEvent(new CustomEvent('wadeesbraai:products:loaded', {
             detail: { products: PRODUCTS }
         }));
     } catch(err) {
         // Fallback for older browsers
         var evt = document.createEvent('CustomEvent');
         evt.initCustomEvent('wadeesbraai:products:loaded', true, true, { products: PRODUCTS });
         document.dispatchEvent(evt);
     }
 }
});

// Listen for products loaded from Google Sheets
document.addEventListener('DOMContentLoaded', () => {
if (window.WADEESBRAAI_PRODUCTS && window.WADEESBRAAI_PRODUCTS.length > 0) {
renderDynamicCategories();
} else {
document.addEventListener('wadeesbraai:products:loaded', renderDynamicCategories);
}
});

function renderDynamicCategories() {
const products = window.WADEESBRAAI_PRODUCTS || [];
const container = document.getElementById('dynamicCategoriesContainer');
const menuContainer = document.getElementById('dynamicMenuCategories');

if (!products.length) return;

// Group by category
const categories = {};
products.forEach(p => {
    const slug = p.categorySlug || 'uncategorized';
    if (!categories[slug]) categories[slug] = { slug, name: formatCategoryName(slug), icon: getCategoryIcon(slug), products: [] };
    categories[slug].products.push(p);
});

let sectionsHTML = '', menuHTML = '';
Object.values(categories).forEach(cat => {
    sectionsHTML += `<section id="${cat.slug}"><h2 class="section-title"><i class="fas ${cat.icon}"></i>${cat.name}</h2><div class="products-grid">${cat.products.map(p => `<article class="product-card" onclick="openModal('${p.id}')"><div class="product-image-wrap"><img src="${p.image}" alt="${p.name}" loading="lazy">${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}</div><div class="product-info"><h3 class="product-name">${p.name}</h3><p class="product-description">${p.description}</p><div class="product-price">R${p.price.toFixed(2)}</div><button class="add-to-cart-btn" onclick="event.stopPropagation();openModal('${p.id}')"><i class="fas fa-eye"></i> View Details</button></div></article>`).join('')}</div></section>`;
    menuHTML += `<div class="menu-item"><a href="#${cat.slug}" class="menu-link" onclick="scrollToSection('${cat.slug}')"><i class="fas ${cat.icon}"></i><span>${cat.name}</span></a></div>`;
});

if (container) container.innerHTML = sectionsHTML;
if (menuContainer) menuContainer.innerHTML = menuHTML;
}

// Helper functions (you may need to define these in your HTML or include them)
function formatCategoryName(slug) {
return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function getCategoryIcon(slug) {
const icons = {
'marinated-meats': 'fa-drumstick-bite',
'kebabs': 'fa-utensils',
'wors': 'fa-bread-slice',
'chicken': 'fa-drumstick-bite',
'beef': 'fa-cow',
'lamb': 'fa-sheep',
'patties': 'fa-circle',
'sausages': 'fa-hotdog',
'braai-supplies': 'fa-fire'
};
return icons[slug] || 'fa-box';
}

function openModal(productId) {
// This function should be defined in your HTML
console.log('Opening modal for product:', productId);
}

function scrollToSection(sectionId) {
const element = document.getElementById(sectionId);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
}
}
})()