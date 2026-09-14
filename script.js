/**
 * Faq Portfolio - Modern AI Engineer & Researcher
 * Geometry Engine for heroprototype.png, 3-Language System, Responsive Docking, & Project Carousel.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DYNAMIC SVG SHAPE GENERATOR (Pixel-Perfect Fillet Curves & Photo Clipping)
  // ==========================================================================
  const aboutCardContainer = document.querySelector('.about-card-container');
  const aboutCardSvg = document.getElementById('aboutCardSvg');
  const aboutCardPath = document.getElementById('aboutCardPath');
  const aboutCardClipPath = document.getElementById('aboutCardClipPath');

  const toolsCardContainer = document.querySelector('.tools-card-container');
  const toolsCardSvg = document.getElementById('toolsCardSvg');
  const toolsCardPath = document.getElementById('toolsCardPath');

  function renderCardShapes() {
    const isMobile = window.innerWidth <= 860;
    const R = 32; // Outer corner radius
    const r = 24; // Inner fillet curve radius

    // --- A. Left Card: Notch at Top-Left (for "About Me") & Higher Shelf on Right ---
    if (aboutCardContainer && aboutCardPath && aboutCardSvg) {
      const w = aboutCardContainer.offsetWidth;
      const h = aboutCardContainer.offsetHeight;

      if (w > 80 && h > 80) {
        aboutCardSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);

        // Responsive notch proportion
        const nw = isMobile ? Math.min(260, Math.round(w * 0.55)) : Math.min(340, Math.round(w * 0.44));
        const nh = isMobile ? 54 : 62;

        const d = [
          `M 0 ${nh + R}`,
          `A ${R} ${R} 0 0 1 ${R} ${nh}`,
          `L ${nw - r} ${nh}`,
          `A ${r} ${r} 0 0 0 ${nw} ${nh - r}`,
          `A ${r} ${r} 0 0 1 ${nw + r} 0`,
          `L ${w - R} 0`,
          `A ${R} ${R} 0 0 1 ${w} ${R}`,
          `L ${w} ${h - R}`,
          `A ${R} ${R} 0 0 1 ${w - R} ${h}`,
          `L ${R} ${h}`,
          `A ${R} ${R} 0 0 1 0 ${h - R}`,
          `Z`
        ].join(' ');

        aboutCardPath.setAttribute('d', d);
        if (aboutCardClipPath) {
          aboutCardClipPath.setAttribute('d', d);
        }
      }
    }

    // --- B. Right Card: Tab on Top-Left ("Tools & Stack") & Notch at Top-Right (3 Flags) ---
    if (toolsCardContainer && toolsCardPath && toolsCardSvg) {
      const w = toolsCardContainer.offsetWidth;
      const h = toolsCardContainer.offsetHeight;

      if (w > 80 && h > 80) {
        toolsCardSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);

        if (isMobile) {
          // Pada mobile, kartu Tools & Stack berbentuk rounded rectangle penuh yang bersih
          const d = [
            `M 0 ${R}`,
            `A ${R} ${R} 0 0 1 ${R} 0`,
            `L ${w - R} 0`,
            `A ${R} ${R} 0 0 1 ${w} ${R}`,
            `L ${w} ${h - R}`,
            `A ${R} ${R} 0 0 1 ${w - R} ${h}`,
            `L ${R} ${h}`,
            `A ${R} ${R} 0 0 1 0 ${h - R}`,
            `Z`
          ].join(' ');
          toolsCardPath.setAttribute('d', d);
        } else {
          const tw = Math.max(220, Math.round(w * 0.48)); // Width of top-left tab
          const nh = 56; // Height drop for the right notch

          const d = [
            `M 0 ${R}`,
            `A ${R} ${R} 0 0 1 ${R} 0`,
            `L ${tw - r} 0`,
            `A ${r} ${r} 0 0 1 ${tw} ${r}`,
            `A ${r} ${r} 0 0 0 ${tw + r} ${nh}`,
            `L ${w - R} ${nh}`,
            `A ${R} ${R} 0 0 1 ${w} ${nh + R}`,
            `L ${w} ${h - R}`,
            `A ${R} ${R} 0 0 1 ${w - R} ${h}`,
            `L ${R} ${h}`,
            `A ${R} ${R} 0 0 1 0 ${h - R}`,
            `Z`
          ].join(' ');

          toolsCardPath.setAttribute('d', d);
        }
      }
    }
  }

  // Initial draw & resize listener
  renderCardShapes();
  window.addEventListener('resize', renderCardShapes);


  // ==========================================================================
  // 2. SEAMLESS DOCKING: Language Switcher Capsule (Solusi 1)
  // ==========================================================================
  const langCapsule = document.getElementById('langCapsule');
  const toolsHeaderBar = document.querySelector('.tools-header-bar');
  const mobileLangAnchor = document.getElementById('mobile-lang-anchor');

  function handleLanguageDocking() {
    const isMobile = window.innerWidth <= 860;

    if (isMobile) {
      if (mobileLangAnchor && langCapsule && langCapsule.parentElement !== mobileLangAnchor) {
        mobileLangAnchor.appendChild(langCapsule);
      }
    } else {
      if (toolsHeaderBar && langCapsule && langCapsule.parentElement !== toolsHeaderBar) {
        toolsHeaderBar.appendChild(langCapsule);
      }
    }
  }

  handleLanguageDocking();
  window.addEventListener('resize', handleLanguageDocking);


  // ==========================================================================
  // 3. MULTILINGUAL DICTIONARY (ID / ENG / JP)
  // ==========================================================================
  const i18n = {
    id: {
      navAbout: "About",
      navExperience: "Experience",
      navEducation: "Education",
      navSkill: "Skill",
      navPublication: "Publication",
      aboutHeading: "About Me",
      personName: "Hi I’m Faq",
      personTagline: "Building & deploying LLM-powered applications",
      giantPortfolio: "PORTFOLIO",
      toolsTitle: "Tools & Stack",
      bannerTitle: "Sliding Banner Project",
      contactHeading: "CONTACT ME:",
      downloadResume: "Download My Resume",
      
      proj1Title: "Enterprise Multi-Hop RAG Agent",
      proj1Desc: "Sistem tanya jawab dokumen korporat skala besar dengan hybrid dense-sparse vector retrieval, cross-encoder reranking, dan routing query otonom.",
      
      proj2Title: "Domain-Adapted Instruction Model",
      proj2Desc: "Fine-tuning QLoRA parameter-efficient pada 70B parameter dengan dataset instruksi sintetik terkurasi, mencapai akselerasi throughput 4.2x via vLLM.",
      
      proj3Title: "Vision-Language Automation Agent",
      proj3Desc: "Agent AI otonom yang memproses input visual (diagram antarmuka, invoice, dokumen teknis) dan mengeksekusi aksi API terstruktur secara deterministik."
    },

    en: {
      navAbout: "About",
      navExperience: "Experience",
      navEducation: "Education",
      navSkill: "Skill",
      navPublication: "Publication",
      aboutHeading: "About Me",
      personName: "Hi I’m Faq",
      personTagline: "Building & deploying LLM-powered applications",
      giantPortfolio: "PORTFOLIO",
      toolsTitle: "Tools & Stack",
      bannerTitle: "Sliding Banner Project",
      contactHeading: "CONTACT ME:",
      downloadResume: "Download My Resume",
      
      proj1Title: "Enterprise Multi-Hop RAG Agent",
      proj1Desc: "Enterprise document intelligence system with hybrid dense-sparse vector retrieval, cross-encoder reranking, and self-corrective query synthesis.",
      
      proj2Title: "Domain-Adapted Instruction Model",
      proj2Desc: "Parameter-efficient QLoRA fine-tuning on 70B parameters using curated synthetic instruction data, achieving 4.2x throughput acceleration on vLLM.",
      
      proj3Title: "Vision-Language Automation Agent",
      proj3Desc: "Autonomous multimodal AI agent parsing complex visual inputs (UI diagrams, invoices, schematics) and deterministically executing structured API actions."
    },

    jp: {
      navAbout: "概要",
      navExperience: "経歴",
      navEducation: "学歴",
      navSkill: "技術スタック",
      navPublication: "研究業績",
      aboutHeading: "自己紹介",
      personName: "Hi I’m Faq",
      personTagline: "大規模言語モデル（LLM）を活用した次世代AIアプリケーションの開発と運用",
      giantPortfolio: "PORTFOLIO",
      toolsTitle: "技術スタック",
      bannerTitle: "主要プロジェクト",
      contactHeading: "CONTACT ME:",
      downloadResume: "履歴書をダウンロード",
      
      proj1Title: "企業向け高精度RAGエージェント",
      proj1Desc: "密ベクトルと疎ベクトルのハイブリッド検索、Cross-Encoderリランキング、自己補正クエリ生成を備えた企業向けナレッジベース推論基盤。",
      
      proj2Title: "ドメイン特化型指示追従LLM",
      proj2Desc: "合成指示データを用いた70Bモデルの効率的QLoRA微調整により、単一GPU環境における推論スループットを4.2倍に向上。",
      
      proj3Title: "マルチモーダル視覚言語自動化エージェント",
      proj3Desc: "UI画面や技術図面などの視覚データを高精度に解析し、安全かつ決定論的にAPIアクションを実行する自律型AIエージェント。"
    }
  };

  let activeLang = localStorage.getItem('faq_lang_pref') || 'id';

  function setLanguage(lang) {
    if (!i18n[lang]) lang = 'id';
    activeLang = lang;
    localStorage.setItem('faq_lang_pref', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Toggle Japanese font class
    if (lang === 'jp') {
      document.body.classList.add('lang-jp');
    } else {
      document.body.classList.remove('lang-jp');
    }

    // Replace text of all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // Update active state on flag buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Recalculate shapes just in case text length shifted layout heights
    requestAnimationFrame(renderCardShapes);
  }

  // Event listener for language buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (btn && btn.dataset.lang) {
      setLanguage(btn.dataset.lang);
    }
  });

  // Apply initial language
  setLanguage(activeLang);


  // ==========================================================================
  // 4. SLIDING BANNER PROJECT (Interactive Carousel)
  // ==========================================================================
  const slides = document.querySelectorAll('.project-slide');
  const dots = document.querySelectorAll('.carousel-indicators .c-dot');
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');
  const bannerStage = document.getElementById('bannerStage');

  let currentSlide = 0;
  const slideCount = slides.length;
  let carouselInterval = null;

  function switchSlide(idx) {
    if (idx < 0) idx = slideCount - 1;
    if (idx >= slideCount) idx = 0;

    currentSlide = idx;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      switchSlide(currentSlide - 1);
      resetCarouselTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      switchSlide(currentSlide + 1);
      resetCarouselTimer();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.dataset.idx, 10);
      switchSlide(target);
      resetCarouselTimer();
    });
  });

  function startCarouselTimer() {
    carouselInterval = setInterval(() => {
      switchSlide(currentSlide + 1);
    }, 7000);
  }

  function resetCarouselTimer() {
    clearInterval(carouselInterval);
    startCarouselTimer();
  }

  startCarouselTimer();

  // Pause on hover
  if (bannerStage) {
    bannerStage.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    bannerStage.addEventListener('mouseleave', () => startCarouselTimer());

    // Touch Swipe for mobile
    let touchXStart = 0;
    let touchXEnd = 0;

    bannerStage.addEventListener('touchstart', (e) => {
      touchXStart = e.changedTouches[0].screenX;
    }, { passive: true });

    bannerStage.addEventListener('touchend', (e) => {
      touchXEnd = e.changedTouches[0].screenX;
      if (touchXEnd < touchXStart - 40) {
        switchSlide(currentSlide + 1);
        resetCarouselTimer();
      } else if (touchXEnd > touchXStart + 40) {
        switchSlide(currentSlide - 1);
        resetCarouselTimer();
      }
    }, { passive: true });
  }


  // ==========================================================================
  // 5. VERTICAL RAIL NAVIGATION LINK INTERACTIONS
  // ==========================================================================
  const railItems = document.querySelectorAll('.rail-item');
  railItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      railItems.forEach(r => r.classList.remove('active'));
      item.classList.add('active');

      const targetId = item.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
