/* ==========================================================================
   HOSPITAL METROPOLITANO - PRESENTACIÓN INSTITUCIONAL 2026
   Lógica del Controlador de Presentación (Presentation Engine)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos DOM
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentSlideBadge = document.getElementById('currentSlideBadge');
  const totalSlidesBadge = document.getElementById('totalSlidesBadge');
  const progressBarFill = document.getElementById('progressBarFill');
  const speakerNotesToggle = document.getElementById('speakerNotesToggle');
  const speakerNotesDrawer = document.getElementById('speakerNotesDrawer');
  const speakerNotesContent = document.getElementById('speakerNotesContent');
  const fontScaleToggle = document.getElementById('fontScaleToggle');
  const overviewToggle = document.getElementById('overviewToggle');
  const fullscreenToggle = document.getElementById('fullscreenToggle');
  const overviewModal = document.getElementById('overviewModal');
  const overviewGrid = document.getElementById('overviewGrid');

  let currentIndex = 0;
  const totalSlides = slides.length;
  let fontScaleState = 0; // 0: Base Grande, 1: Auditorio XL, 2: Auditorio XXL
  const fontScales = [1.0, 1.35, 1.75];
  const fontScaleLabels = ['Texto Base (Grande)', 'Auditorio XL (+35%)', 'Auditorio XXL (+75%)'];

  // Inicializar Badges y Overview
  totalSlidesBadge.textContent = totalSlides;
  buildOverviewGrid();
  updateSlide(0);

  // Función Principal de Actualización de Diapositiva
  function updateSlide(index) {
    if (index < 0 || index >= totalSlides) return;

    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev-slide');
      if (i === index) {
        slide.classList.add('active');
      } else if (i < index) {
        slide.classList.add('prev-slide');
      }
    });

    currentIndex = index;
    currentSlideBadge.textContent = currentIndex + 1;

    // Actualizar Barra de Progreso
    const progressPercent = ((currentIndex + 1) / totalSlides) * 100;
    progressBarFill.style.width = `${progressPercent}%`;

    // Actualizar Estado de Botones Anterior / Siguiente
    prevBtn.disabled = (currentIndex === 0);
    nextBtn.disabled = (currentIndex === totalSlides - 1);

    // Actualizar Notas del Expositor para la lámina actual
    const currentSlide = slides[currentIndex];
    const notesData = currentSlide.getAttribute('data-speaker-notes') || 'Sin guion para esta lámina.';
    speakerNotesContent.innerHTML = notesData;

    // Actualizar tarjeta activa en el Overview Modal
    document.querySelectorAll('.overview-card').forEach((card, i) => {
      if (i === currentIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  // Navegación
  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      updateSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      updateSlide(currentIndex - 1);
    }
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Control Teclado
  document.addEventListener('keydown', (e) => {
    // Si hay un modal abierto, cerrar con ESC
    if (e.key === 'Escape') {
      closeAllModals();
      speakerNotesDrawer.classList.remove('open');
      speakerNotesToggle.classList.remove('active');
      return;
    }

    // No interceptar si el usuario está interactuando con inputs
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        updateSlide(0);
        break;
      case 'End':
        e.preventDefault();
        updateSlide(totalSlides - 1);
        break;
      case 'g':
      case 'G':
        toggleSpeakerNotes();
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
    }
  });

  // Gestos Táctiles (Swipe)
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
    }
  }

  // Modal Pop-ups Técnicos
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('open');
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('open');
    }
  };

  function closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.classList.remove('open');
    });
  }

  // Cerrar modal al hacer clic fuera del contenedor
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('open');
      }
    });
  });

  // Guion del Expositor (Speaker Notes Drawer)
  function toggleSpeakerNotes() {
    speakerNotesDrawer.classList.toggle('open');
    speakerNotesToggle.classList.toggle('active');
  }
  speakerNotesToggle.addEventListener('click', toggleSpeakerNotes);

  // Escalar Fuente Auditorio
  fontScaleToggle.addEventListener('click', () => {
    fontScaleState = (fontScaleState + 1) % fontScales.length;
    const scale = fontScales[fontScaleState];
    document.documentElement.style.setProperty('--font-scale', scale);
    fontScaleToggle.textContent = `🔍 ${fontScaleLabels[fontScaleState]}`;
  });

  // Grid Overview (Diapositivas)
  function buildOverviewGrid() {
    overviewGrid.innerHTML = '';
    slides.forEach((slide, i) => {
      const titleElem = slide.querySelector('.slide-h1');
      const titleText = titleElem ? titleElem.textContent : `Diapositiva ${i + 1}`;
      
      const card = document.createElement('div');
      card.className = `overview-card ${i === 0 ? 'active' : ''}`;
      card.innerHTML = `
        <div class="overview-num">LÁMINA ${i + 1} DE ${totalSlides}</div>
        <div class="overview-title">${titleText}</div>
      `;
      card.addEventListener('click', () => {
        updateSlide(i);
        closeModal('overviewModal');
      });
      overviewGrid.appendChild(card);
    });
  }

  overviewToggle.addEventListener('click', () => {
    openModal('overviewModal');
  });

  // Pantalla Completa
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error al activar pantalla completa: ${err.message}`);
      });
      fullscreenToggle.textContent = '🗗 Salir Pantalla Completa';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        fullscreenToggle.textContent = '⛶ Pantalla Completa';
      }
    }
  }
  fullscreenToggle.addEventListener('click', toggleFullscreen);
});
