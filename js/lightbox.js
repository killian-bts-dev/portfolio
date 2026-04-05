    // Sélectionne toutes les vignettes
        const sections = document.querySelectorAll('.image-section-description');
        const overlay = document.getElementById('lightbox');
        const lbImg = document.getElementById('lightboxImg');
        let lastTrigger = null;

        function extractBackgroundUrl(bg) {
            const match = bg && bg.match(/url\(["']?(.*?)["']?\)/);
            return match ? match[1] : '';
        }

        function openLightbox(triggerEl) {
            const bgUrl = extractBackgroundUrl(getComputedStyle(triggerEl).backgroundImage);
            const url = bgUrl;
            if (!url) return;

            lbImg.src = url;
            lbImg.alt = triggerEl.getAttribute('aria-label') || 'Image agrandie';
            overlay.classList.add('open');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            lastTrigger = triggerEl;
            // focus pour accessibilité
            lbImg.focus();
        }

        function closeLightbox() {
            overlay.classList.remove('open');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            lbImg.src = '';
            if (lastTrigger) lastTrigger.focus();
            lastTrigger = null;
        }

        // Attacher aux éléments existants
        sections.forEach(el => {
            el.addEventListener('click', () => openLightbox(el));
            el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(el);
            }
            });
        });

        // Fermer si clic sur l'overlay (clic hors image)
        overlay.addEventListener('click', () => {
            closeLightbox();
        });

        // Fermer avec Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('open')) closeLightbox();
        });