// JavaScript for London Excellent Loft Homepage Interactivity (White Architectural Theme)

// Launch Architectural Home Preloader immediately
initPreloader();

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initLoftTabs();
  initCalculator();
  initBeforeAfterSlider();
  initModernGallery();
  initFAQ();
  initScrollTextReveal();
});

/* ========================================================
   1. MOBILE MENU
   ======================================================== */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const links = document.querySelectorAll('.mobile-link');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

/* ========================================================
   2. LOFT ARCHITECTURAL TABS (CLEAN WHITE / NAVY DESIGN)
   ======================================================== */
const loftData = {
  dormer: {
    title: "Rear Dormer Loft Conversion",
    tagline: "The most popular, cost-effective conversion across London terraced & semi-detached homes.",
    image: "loft-conversion.jpg",
    spaceGain: "+25 to 35 m² of habitable floor area",
    timeline: "6 - 8 Weeks average construction",
    planning: "Permitted Development (No full planning required in 90% of cases)",
    bestFor: "Victorian, Edwardian & 1930s terraced/semi houses",
    features: [
      "Square, vertical rear walls maximize full standing head height",
      "Easily accommodates a generous double bedroom plus luxury en-suite shower room",
      "Enables floor-to-ceiling French doors with glass Juliet balcony for garden views",
      "Fastest build timeline with minimal disruption to rooms below"
    ]
  },
  mansard: {
    title: "Mansard Loft Conversion",
    tagline: "Prestigious architectural conversion delivering absolute maximum internal floor space.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    spaceGain: "+35 to 50 m² of executive living space",
    timeline: "8 - 10 Weeks average construction",
    planning: "Requires Planning Permission (Conservation Area compliant)",
    bestFor: "Georgian & Victorian London townhouses, conservation zones",
    features: [
      "Features a 72-degree steep slope with a flat roof for majestic aesthetics",
      "Permitted in designated Conservation Areas where rear box dormers are restricted",
      "Creates sprawling master bedroom suites with separate dressing room or bath",
      "Traditional brick parapet party walls and timber-framed sash or lead dormers"
    ]
  },
  'hip-gable': {
    title: "Hip-to-Gable Loft Conversion",
    tagline: "Straightens the inward sloping side roof of end-terrace and semi-detached properties.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    spaceGain: "+30 to 42 m² of newly created area",
    timeline: "7 - 9 Weeks average construction",
    planning: "Usually Permitted Development rights apply",
    bestFor: "1930s Semi-detached and End-of-terrace London properties",
    features: [
      "Extends the sloping 'hip' roof vertically into a straight vertical gable wall",
      "Provides crucial staircase headroom directly over existing lower stairs",
      "Frequently paired with a rear dormer for substantial multi-room transformations",
      "Significantly enhances external kerb appeal and symmetry"
    ]
  },
  'l-shaped': {
    title: "L-Shaped Dormer Conversion",
    tagline: "Dual dormer structure built over the main roof plus rear two-storey outrigger.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
    spaceGain: "+45 to 60 m² (Two full bedrooms + bathroom)",
    timeline: "9 - 11 Weeks average construction",
    planning: "Permitted Development in most standard London Victorian properties",
    bestFor: "London Victorian & Edwardian properties with rear kitchen outriggers",
    features: [
      "Creates up to TWO full double bedrooms plus an independent family bathroom",
      "Allows dedicated home office/studio separate from the sleeping quarters",
      "Massive return on investment — effectively doubles top-floor footprint",
      "Unlocks penthouse luxury for growing London families without moving"
    ]
  },
  velux: {
    title: "Velux / Rooflight Conversion",
    tagline: "The fastest, most discreet conversion keeping your existing roofline intact.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    spaceGain: "+18 to 26 m² of bright atmospheric space",
    timeline: "4 - 6 Weeks average construction",
    planning: "100% Permitted Development (Rarely needs planning permission)",
    bestFor: "Homes with ample existing roof pitch height (2.4m+) or tight budgets",
    features: [
      "Preserves original roofline without altering external architectural shape",
      "Flushes rooms with natural sunshine via high-performance Velux thermal glass",
      "Ideal for serene home creative studios, guest rooms, or meditation sanctuaries",
      "Most economical entry into London attic space utilization"
    ]
  }
};

function initLoftTabs() {
  const container = document.getElementById('loftTabContent');
  const tabs = document.querySelectorAll('.loft-tab-btn');
  if (!container || !tabs.length) return;

  function renderTab(key) {
    const data = loftData[key] || loftData.dormer;
    container.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-6 space-y-5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0F3875] text-xs font-bold uppercase tracking-wider">
            ${data.bestFor}
          </div>
          <h3 class="font-serif text-2xl sm:text-3xl font-bold text-slate-900">${data.title}</h3>
          <p class="text-sm text-slate-600 leading-relaxed">${data.tagline}</p>
          
          <div class="grid grid-cols-2 gap-3 py-2">
            <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span class="text-[11px] text-slate-500 font-semibold block">Habitable Space Gain:</span>
              <span class="text-xs font-bold text-slate-900">${data.spaceGain}</span>
            </div>
            <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span class="text-[11px] text-slate-500 font-semibold block">Average Build Duration:</span>
              <span class="text-xs font-bold text-[#0F3875]">${data.timeline}</span>
            </div>
          </div>

          <div class="space-y-2.5">
            <span class="text-xs font-bold text-slate-900 uppercase tracking-wider block">Key Architectural Advantages:</span>
            <ul class="space-y-2">
              ${data.features.map(f => `
                <li class="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <span class="w-4 h-4 rounded-full bg-blue-100 text-[#0F3875] flex items-center justify-center flex-shrink-0 mt-0.5">&check;</span>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <button onclick="openQuoteModal('${data.title}')" class="px-6 py-3 rounded-xl bg-[#0F3875] hover:bg-[#0A254F] text-white font-bold text-xs uppercase tracking-wider shadow-md transition flex items-center justify-center gap-2">
              <span>Request Quote for ${data.title.split(' ')[0]}</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
            <span class="text-xs text-slate-500">
              <strong class="text-slate-900">Planning:</strong> ${data.planning.split('(')[0]}
            </span>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white h-[320px] sm:h-[380px] group">
            <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div class="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-between text-xs">
              <span class="text-slate-700 font-medium">Planning Route:</span>
              <span class="text-emerald-700 font-bold">${data.planning}</span>
            </div>
          </div>
        </div>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderTab(btn.dataset.target);
    });
  });

  // Initial render
  renderTab('dormer');
}

/* ========================================================
   3. LONDON LOFT COST & ROI ESTIMATOR
   ======================================================== */
function initCalculator() {
  const typeRadios = document.querySelectorAll('input[name="calcType"]');
  const typeCards = document.querySelectorAll('.calc-type-card');
  const ensuiteCheck = document.getElementById('calcEnsuite');
  const julietCheck = document.getElementById('calcJuliet');
  const skylightsCheck = document.getElementById('calcSkylights');
  const joineryCheck = document.getElementById('calcBespokeJoinery');
  const houseValueRange = document.getElementById('houseValueRange');
  const houseValueDisplay = document.getElementById('houseValueDisplay');
  const calcCostRange = document.getElementById('calcCostRange');
  const addedValueDisplay = document.getElementById('addedValueDisplay');
  const netProfitDisplay = document.getElementById('netProfitDisplay');

  if (!calcCostRange) return;

  const baseCosts = {
    dormer: { min: 42000, max: 48000, valBoost: 0.22 },
    mansard: { min: 56000, max: 68000, valBoost: 0.26 },
    hipGable: { min: 48000, max: 56000, valBoost: 0.23 },
    lShaped: { min: 62000, max: 76000, valBoost: 0.28 },
    velux: { min: 28000, max: 35000, valBoost: 0.16 },
    reRoof: { min: 9500, max: 15500, valBoost: 0.08 }
  };

  function calculate() {
    let selectedType = 'dormer';
    typeRadios.forEach(r => {
      if (r.checked) selectedType = r.value;
    });

    // Update active visual card styling
    typeCards.forEach(card => {
      const radio = card.querySelector('input[type="radio"]');
      if (radio && radio.checked) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    const base = baseCosts[selectedType] || baseCosts.dormer;
    let extraCost = 0;

    if (ensuiteCheck && ensuiteCheck.checked) extraCost += 5500;
    if (julietCheck && julietCheck.checked) extraCost += 1800;
    if (skylightsCheck && skylightsCheck.checked) extraCost += 2200;
    if (joineryCheck && joineryCheck.checked) extraCost += 3400;

    const totalMin = base.min + extraCost;
    const totalMax = base.max + extraCost;

    calcCostRange.textContent = `£${totalMin.toLocaleString()} - £${totalMax.toLocaleString()}`;

    // House value & ROI calculation
    const houseVal = parseInt(houseValueRange.value, 10);
    houseValueDisplay.textContent = `£${houseVal.toLocaleString()}`;

    const addedVal = Math.round(houseVal * base.valBoost);
    addedValueDisplay.textContent = `+£${addedVal.toLocaleString()}`;

    const midCost = (totalMin + totalMax) / 2;
    const netProfit = Math.round(addedVal - midCost);
    netProfitDisplay.textContent = `+£${netProfit.toLocaleString()}`;
  }

  typeRadios.forEach(r => r.addEventListener('change', calculate));
  if (ensuiteCheck) ensuiteCheck.addEventListener('change', calculate);
  if (julietCheck) julietCheck.addEventListener('change', calculate);
  if (skylightsCheck) skylightsCheck.addEventListener('change', calculate);
  if (joineryCheck) joineryCheck.addEventListener('change', calculate);
  if (houseValueRange) houseValueRange.addEventListener('input', calculate);

  // Initialize
  calculate();
}

function lockInEstimate() {
  const cost = document.getElementById('calcCostRange').textContent;
  const houseVal = document.getElementById('houseValueDisplay').textContent;
  openQuoteModal(`Custom Estimate (${cost} on ${houseVal} property)`);
}

/* ========================================================
   4. BEFORE & AFTER INTERACTIVE SLIDER
   ======================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('beforeAfterContainer');
  const beforeWrapper = document.getElementById('beforeImageWrapper');
  const handle = document.getElementById('sliderHandle');
  const beforeImg = document.getElementById('beforeImageTag');

  if (!container || !beforeWrapper || !handle || !beforeImg) return;

  function setSliderWidth() {
    const width = container.offsetWidth;
    beforeImg.style.width = width + 'px';
  }

  setSliderWidth();
  window.addEventListener('resize', setSliderWidth);

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 10) x = 10;
    if (x > rect.width - 10) x = rect.width - 10;
    const pct = (x / rect.width) * 100;
    beforeWrapper.style.width = pct + '%';
    handle.style.left = pct + '%';
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* ========================================================
   5. MODERN ARCHITECTURAL BENTO GALLERY & LIGHTBOX
   ======================================================== */
function initModernGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const cards = document.querySelectorAll('.gallery-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.classList.remove('gallery-hidden');
        } else {
          card.classList.add('gallery-hidden');
        }
      });
    });
  });
}

function openGalleryLightbox(src, title, spec) {
  const lightbox = document.getElementById('galleryLightbox');
  const img = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const specEl = document.getElementById('lightboxSpec');

  if (!lightbox) return;

  if (img) img.src = src;
  if (titleEl) titleEl.textContent = title || 'Architectural Showcase';
  if (specEl) specEl.textContent = spec || 'London Excellent Loft Portfolio';

  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
  document.body.style.overflow = 'hidden';

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function closeGalleryLightbox(e) {
  if (e && e.target && e.target.closest && e.target.closest('#galleryLightbox > div')) {
    return;
  }
  const lightbox = document.getElementById('galleryLightbox');
  if (lightbox) {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = 'auto';
    const img = document.getElementById('lightboxImg');
    if (img) img.src = '';
  }
}

/* ========================================================
   6. FAQ ACCORDION
   ======================================================== */
function initFAQ() {
  const triggers = document.querySelectorAll('.faq-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const chevron = trigger.querySelector('.faq-chevron');
      const isExpanded = !content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-chevron').forEach(ch => ch.classList.remove('rotate-180'));

      // If was not open, open this
      if (!isExpanded) {
        content.classList.remove('hidden');
        chevron.classList.add('rotate-180');
      }
    });
  });
}

/* ========================================================
   7. MODAL & TOAST HANDLERS
   ======================================================== */
function openQuoteModal(serviceName = 'Loft Conversion') {
  const modal = document.getElementById('quoteModal');
  const serviceInput = document.getElementById('modalServiceType');
  if (serviceInput) serviceInput.value = serviceName;
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuoteModal() {
  const modal = document.getElementById('quoteModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

function showToast(title, message) {
  const toast = document.getElementById('toastNotification');
  const titleEl = document.getElementById('toastTitle');
  const msgEl = document.getElementById('toastMessage');

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;

  if (toast) {
    toast.classList.remove('-translate-x-[150%]', 'pointer-events-none');
    toast.classList.add('translate-x-0', 'pointer-events-auto');
    setTimeout(() => {
      toast.classList.remove('translate-x-0', 'pointer-events-auto');
      toast.classList.add('-translate-x-[150%]', 'pointer-events-none');
    }, 6000);
  }
}

function handleHeroQuickSubmit(e) {
  e.preventDefault();
  const postcode = document.getElementById('quickPostcode').value;
  const phone = document.getElementById('quickPhone').value;
  const type = document.getElementById('quickType').value;

  showToast(
    'Survey Request Received!',
    `Thank you. Our surveyor will inspect postcode "${postcode}" for a "${type}" and call ${phone} within 2 hours.`
  );
  e.target.reset();
}

function handleMainContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value;
  const phone = document.getElementById('contactPhone').value;
  const service = document.getElementById('contactService').value;

  showToast(
    'Written Quote Requested!',
    `Thank you, ${name}. Your consultation for ${service} has been received. We will call ${phone} to arrange your site visit.`
  );
  e.target.reset();
}

function handleModalSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('modalName').value;
  const phone = document.getElementById('modalPhone').value;
  const service = document.getElementById('modalServiceType').value;

  closeQuoteModal();
  showToast(
    'Survey Consultation Confirmed!',
    `Thank you, ${name}. We have scheduled your initial assessment for ${service}. Our team will call ${phone} promptly.`
  );
  e.target.reset();
}

// Global exposure
window.openQuoteModal = openQuoteModal;
window.closeQuoteModal = closeQuoteModal;
window.openGalleryLightbox = openGalleryLightbox;
window.closeGalleryLightbox = closeGalleryLightbox;
window.handleHeroQuickSubmit = handleHeroQuickSubmit;
window.handleMainContactSubmit = handleMainContactSubmit;
window.handleModalSubmit = handleModalSubmit;
window.lockInEstimate = lockInEstimate;

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeGalleryLightbox();
    closeQuoteModal();
  }
});

/* ========================================================
   8. TEXT REVEAL SCROLL OBSERVER (FROM CRAFT-SEVEN-ALPHA)
   ======================================================== */
function initScrollTextReveal() {
  const reveals = document.querySelectorAll('.text-reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ========================================================
   9. ARCHITECTURAL HOME PRELOADER
   ======================================================== */
function initPreloader() {
  const preloader = document.getElementById('sitePreloader');
  if (!preloader) return;

  const bar = document.getElementById('loaderBar');
  const percentText = document.getElementById('loaderPercent');
  const statusText = document.getElementById('loaderStatus');

  const steps = [
    { at: 22, text: "Laying Foundation & Brickwork..." },
    { at: 48, text: "Framing Main Roof Structure..." },
    { at: 75, text: "Constructing Bespoke Loft Dormer..." },
    { at: 94, text: "Illuminating Finished Living Space..." },
    { at: 100, text: "Welcome to London Excellent Loft" }
  ];

  let progress = 0;
  let isComplete = false;
  const totalDurationMs = 2400; // 2.4 seconds for complete home drawing
  const intervalMs = 40;
  const increment = 100 / (totalDurationMs / intervalMs);

  function finishLoader() {
    if (isComplete) return;
    isComplete = true;
    progress = 100;
    if (bar) bar.style.width = '100%';
    if (percentText) percentText.textContent = '100%';
    if (statusText) statusText.textContent = 'Welcome to London Excellent Loft';

    setTimeout(() => {
      preloader.classList.add('is-hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 700);
    }, 450);
  }

  const interval = setInterval(() => {
    if (isComplete) {
      clearInterval(interval);
      return;
    }
    progress += increment;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      finishLoader();
      return;
    }

    if (bar) bar.style.width = Math.round(progress) + '%';
    if (percentText) percentText.textContent = Math.round(progress) + '%';

    const currentStep = steps.find(s => progress <= s.at);
    if (currentStep && statusText) {
      statusText.textContent = currentStep.text;
    }
  }, intervalMs);
}
