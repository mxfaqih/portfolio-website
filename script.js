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
    const R = 32; // Corner radius (squircle curvature)
    const kCorner = R * 0.45; // Squircle continuous curvature control distance

    // --- A. Left Card: Notch at Top-Left (for "About Me") & Higher Shelf on Right ---
    if (aboutCardContainer && aboutCardPath && aboutCardSvg) {
      const w = aboutCardContainer.offsetWidth;
      const h = aboutCardContainer.offsetHeight;

      if (w > 80 && h > 80) {
        aboutCardSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);

        // Responsive notch proportion
        const nw = isMobile ? Math.min(260, Math.round(w * 0.56)) : Math.min(335, Math.round(w * 0.43));
        const nh = isMobile ? 54 : 58;
        const s = isMobile ? 24 : 32; // Smooth S-curve half-span

        // Buttery-smooth cubic Bézier squircle path (zero kinks, continuous curvature)
        const d = [
          // 1. Mulai dari sisi kiri notch di bawah lengkungan sudut notch
          `M 0 ${nh + R}`,
          // 2. Sudut dalam kiri notch (squircle melengkung anggun ke lantai notch)
          `C 0 ${nh + kCorner}, ${kCorner} ${nh}, ${R} ${nh}`,
          // 3. Lantai notch horizontal menuju awal transisi S-curve
          `L ${nw - s} ${nh}`,
          // 4. Transisi S-Curve ultra-mulus dari lantai notch (nh) naik ke rak atas (0)
          // Bagian bawah: dari horizontal perlahan meluncur vertikal di titik tengah (nw, nh/2)
          `C ${nw - s * 0.45} ${nh}, ${nw} ${nh * 0.76}, ${nw} ${nh * 0.5}`,
          // Bagian atas: dari vertikal perlahan mendarat mulus horizontal di rak atas (0)
          `C ${nw} ${nh * 0.24}, ${nw + s * 0.45} 0, ${nw + s} 0`,
          // 5. Garis lurus horizontal rak atas menuju sudut kanan atas
          `L ${w - R} 0`,
          // 6. Sudut kanan atas (squircle)
          `C ${w - kCorner} 0, ${w} ${kCorner}, ${w} ${R}`,
          // 7. Sisi kanan kartu menuju sudut bawah
          `L ${w} ${h - R}`,
          // 8. Sudut kanan bawah (squircle)
          `C ${w} ${h - kCorner}, ${w - kCorner} ${h}, ${w - R} ${h}`,
          // 9. Sisi bawah kartu
          `L ${R} ${h}`,
          // 10. Sudut kiri bawah (squircle)
          `C ${kCorner} ${h}, 0 ${h - kCorner}, 0 ${h - R}`,
          // 11. Sisi kiri kartu naik kembali ke notch
          `L 0 ${nh + R}`,
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
          // Pada mobile, bentuk squircle rounded rectangle mulus penuh
          const d = [
            `M 0 ${R}`,
            `C 0 ${kCorner}, ${kCorner} 0, ${R} 0`,
            `L ${w - R} 0`,
            `C ${w - kCorner} 0, ${w} ${kCorner}, ${w} ${R}`,
            `L ${w} ${h - R}`,
            `C ${w} ${h - kCorner}, ${w - kCorner} ${h}, ${w - R} ${h}`,
            `L ${R} ${h}`,
            `C ${kCorner} ${h}, 0 ${h - kCorner}, 0 ${h - R}`,
            `Z`
          ].join(' ');
          toolsCardPath.setAttribute('d', d);
        } else {
          // Tab "Tools & Stack" di kiri (tinggi 0) dan notch bendera di kanan (turun ke nh)
          const tw = Math.max(190, Math.min(Math.round(w * 0.44), w - 240));
          const nh = 50; // Tinggi turunan notch untuk kapsul bahasa
          const s = 30;  // Smooth S-curve half-span

          const d = [
            // 1. Mulai dari sisi kiri
            `M 0 ${R}`,
            // 2. Sudut kiri atas tab (squircle)
            `C 0 ${kCorner}, ${kCorner} 0, ${R} 0`,
            // 3. Atas tab menuju awal transisi S-curve
            `L ${tw - s} 0`,
            // 4. Transisi S-Curve ultra-mulus dari tab atas (0) turun ke rak notch (nh)
            // Bagian atas: dari horizontal perlahan meluncur vertikal di titik tengah (tw, nh/2)
            `C ${tw - s * 0.45} 0, ${tw} ${nh * 0.24}, ${tw} ${nh * 0.5}`,
            // Bagian bawah: dari vertikal perlahan mendarat mulus horizontal di lantai notch (nh)
            `C ${tw} ${nh * 0.76}, ${tw + s * 0.45} ${nh}, ${tw + s} ${nh}`,
            // 5. Lantai notch horizontal menuju sudut kanan atas
            `L ${w - R} ${nh}`,
            // 6. Sudut kanan atas pada rak notch (squircle)
            `C ${w - kCorner} ${nh}, ${w} ${nh + kCorner}, ${w} ${nh + R}`,
            // 7. Sisi kanan kartu
            `L ${w} ${h - R}`,
            // 8. Sudut kanan bawah (squircle)
            `C ${w} ${h - kCorner}, ${w - kCorner} ${h}, ${w - R} ${h}`,
            // 9. Sisi bawah kartu
            `L ${R} ${h}`,
            // 10. Sudut kiri bawah (squircle)
            `C ${kCorner} ${h}, 0 ${h - kCorner}, 0 ${h - R}`,
            // 11. Sisi kiri kartu naik kembali ke awal
            `L 0 ${R}`,
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
      downloadResume: "Download Resume",
      resumeDropdownTitle: "Pilih Format Dokumen:",
      resumeEnTitle: "English ATS Resume",
      resumeEnDesc: "Format ringkas 1-2 lembar internasional (.pdf)",
      resumeRirekishoTitle: "履歴書 (Rirekisho)",
      resumeRirekishoDesc: "Format standar Jepang (Biodata & Pendidikan) (.pdf)",
      resumeShokumuTitle: "職務経歴書 (Shokumu Keirekisho)",
      resumeShokumuDesc: "Riwayat proyek AI & pengalaman kerja rinci (.pdf)",
      langLabel: "Bahasa:",
      
      proj1Title: "Enterprise Multi-Hop RAG Agent",
      proj1Desc: "Sistem tanya jawab dokumen korporat skala besar dengan hybrid dense-sparse vector retrieval, cross-encoder reranking, dan routing query otonom.",
      
      proj2Title: "Domain-Adapted Instruction Model",
      proj2Desc: "Fine-tuning QLoRA parameter-efficient pada 70B parameter dengan dataset instruksi sintetik terkurasi, mencapai akselerasi throughput 4.2x via vLLM.",
      
      proj3Title: "Vision-Language Automation Agent",
      proj3Desc: "Agent AI otonom yang memproses input visual (diagram antarmuka, invoice, dokumen teknis) dan mengeksekusi aksi API terstruktur secara deterministik.",

      timelineEyebrow: "CAREER & ACADEMIC PATH",
      timelineHeading: "Experience & Education",
      timelineSubheading: "Perjalanan rekayasa sistem AI, riset model bahasa besar (LLM), dan fondasi akademis ilmu komputer.",
      phaseExperience: "Experience",
      exp1Status: "Currently Working Here",
      exp1Date: "Jan 2024 — Present",
      exp1Title: "AI & LLM Systems Engineer",
      exp1Company: "Autonomous AI Labs",
      exp1Summary: "Merancang arsitektur agen AI otonom tingkat korporat, pipeline retrieval terdistribusi (RAG), serta optimasi inferensi throughput tinggi pada GPU cluster.",
      exp1Bullet1: "Merancang & mendeploy Multi-Hop Agentic RAG dengan hybrid dense-sparse retrieval (Qdrant & BM25), memangkas failure rate halusinasi sebesar 78%.",
      exp1Bullet2: "Mengoptimasi cluster vLLM dengan PagedAttention & chunked prefill, melipatgandakan throughput pemrosesan 4.2x pada model LLM 70B.",
      exp1Bullet3: "Melakukan fine-tuning QLoRA pada model open-weights untuk tugas penalaran khusus dengan dataset instruksi sintetik terkurasi.",
      exp2Status: "Contract / Project",
      exp2Date: "2023 — 2024",
      exp2Title: "Machine Learning Researcher & Engineer",
      exp2Company: "Cognitive Data Solutions",
      exp2Summary: "Riset dan implementasi model Vision-Language (VLM) untuk ekstraksi dokumen terstruktur dan klasifikasi representasi multimodal skala menengah.",
      exp2Bullet1: "Membangun pipeline ekstraksi informasi semi-otonom memproses 50.000+ lembar dokumen teknis per bulan dengan akurasi parsing 96.2%.",
      exp2Bullet2: "Mengembangkan adapter LoRA khusus untuk segmentasi semantik teks multibahasa pada domain teknis.",
      transitionBridgeText: "↓ Transition: Academic Foundation to Production Engineering",
      phaseEducation: "Education",
      edu1Honor: "Bachelor's Degree • Cum Laude",
      edu1Degree: "Bachelor of Computer Science (S.Kom)",
      edu1Institution: "Universitas / Institute of Technology",
      edu1ThesisLabel: "Undergraduate Research & Thesis:",
      edu1ThesisTopic: "Implementasi Deep Learning & Sparse-Dense Hybrid Embeddings untuk Peningkatan Akurasi Semantic Information Retrieval pada Korpus Bahasa Indonesia",
      edu1Bullet1: "Meraih IPK 3.8+ / predikat Cum Laude dengan fokus riset pada Natural Language Processing dan Deep Learning.",
      edu1Bullet2: "Lulusan Bangkit Academy (Google, GoTo, Traveloka) Machine Learning Cohort dengan predikat Top Graduate (Distinction).",
      edu1Bullet3: "Asisten Laboratorium Artificial Intelligence & Struktur Data algoritma.",
      edu2Badge: "Verified Specialization",
      edu2Title: "Deep Learning & LLM Systems Specialization",
      edu2Desc: "Penguasaan mendalam arsitektur Transformer, mekanisme self-attention, optimasi konvergensi gradien, distributed training, dan RLHF (Reinforcement Learning from Human Feedback)."
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
      downloadResume: "Download Resume",
      resumeDropdownTitle: "Select Document Format:",
      resumeEnTitle: "English ATS Resume",
      resumeEnDesc: "Standard 1-2 page international format (.pdf)",
      resumeRirekishoTitle: "履歴書 (Rirekisho)",
      resumeRirekishoDesc: "Standard Japanese Bio & Education (.pdf)",
      resumeShokumuTitle: "職務経歴書 (Shokumu Keirekisho)",
      resumeShokumuDesc: "Detailed AI projects & tech career history (.pdf)",
      langLabel: "Language:",
      
      proj1Title: "Enterprise Multi-Hop RAG Agent",
      proj1Desc: "Enterprise document intelligence system with hybrid dense-sparse vector retrieval, cross-encoder reranking, and self-corrective query synthesis.",
      
      proj2Title: "Domain-Adapted Instruction Model",
      proj2Desc: "Parameter-efficient QLoRA fine-tuning on 70B parameters using curated synthetic instruction data, achieving 4.2x throughput acceleration on vLLM.",
      
      proj3Title: "Vision-Language Automation Agent",
      proj3Desc: "Autonomous multimodal AI agent parsing complex visual inputs (UI diagrams, invoices, schematics) and deterministically executing structured API actions.",

      timelineEyebrow: "CAREER & ACADEMIC PATH",
      timelineHeading: "Experience & Education",
      timelineSubheading: "A continuous journey of enterprise AI systems engineering, LLM research, and core computer science academia.",
      phaseExperience: "Experience",
      exp1Status: "Currently Working Here",
      exp1Date: "Jan 2024 — Present",
      exp1Title: "AI & LLM Systems Engineer",
      exp1Company: "Autonomous AI Labs",
      exp1Summary: "Architecting enterprise autonomous AI agents, distributed retrieval pipelines (RAG), and high-throughput inference on GPU clusters.",
      exp1Bullet1: "Designed & deployed Multi-Hop Agentic RAG with hybrid dense-sparse retrieval (Qdrant & BM25), cutting hallucination failure rates by 78%.",
      exp1Bullet2: "Optimized vLLM cluster using PagedAttention & chunked prefill, boosting processing throughput by 4.2x on 70B parameter models.",
      exp1Bullet3: "Fine-tuned open-weight LLMs via QLoRA for domain-specific reasoning benchmarks with curated synthetic data.",
      exp2Status: "Contract / Project",
      exp2Date: "2023 — 2024",
      exp2Title: "Machine Learning Researcher & Engineer",
      exp2Company: "Cognitive Data Solutions",
      exp2Summary: "Research and deployment of Vision-Language Models (VLM) for structured document extraction and multimodal classification.",
      exp2Bullet1: "Built semi-autonomous information extraction pipelines processing 50,000+ technical documents monthly at 96.2% parsing accuracy.",
      exp2Bullet2: "Developed custom LoRA adapters for multilingual semantic segmentation across technical documentation.",
      transitionBridgeText: "↓ Transition: Academic Foundation to Production Engineering",
      phaseEducation: "Education",
      edu1Honor: "Bachelor's Degree • Cum Laude",
      edu1Degree: "Bachelor of Computer Science (B.Comp.Sc)",
      edu1Institution: "University / Institute of Technology",
      edu1ThesisLabel: "Undergraduate Research & Thesis:",
      edu1ThesisTopic: "Implementation of Deep Learning & Sparse-Dense Hybrid Embeddings for Enhanced Semantic Information Retrieval on Indonesian Corpora",
      edu1Bullet1: "Graduated with 3.8+ GPA / Cum Laude distinction, focusing research on Natural Language Processing and Deep Learning.",
      edu1Bullet2: "Graduate of Bangkit Academy (Google, GoTo, Traveloka) Machine Learning Cohort with Distinction.",
      edu1Bullet3: "Teaching Assistant for Artificial Intelligence & Data Structures laboratories.",
      edu2Badge: "Verified Specialization",
      edu2Title: "Deep Learning & LLM Systems Specialization",
      edu2Desc: "In-depth mastery of Transformer architectures, multi-head attention, gradient convergence optimization, distributed training, and RLHF."
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
      downloadResume: "履歴書・経歴書をダウンロード",
      resumeDropdownTitle: "書類の形式を選択してください：",
      resumeEnTitle: "英文レジュメ (ATS Resume)",
      resumeEnDesc: "グローバル向け標準1〜2枚フォーマット (.pdf)",
      resumeRirekishoTitle: "履歴書 (JIS規格準拠)",
      resumeRirekishoDesc: "基本情報・学歴・資格記載の標準形式 (.pdf)",
      resumeShokumuTitle: "職務経歴書 (詳細版)",
      resumeShokumuDesc: "AI/LLM開発プロジェクト詳細・技術スタック記載 (.pdf)",
      langLabel: "言語:",
      
      proj1Title: "企業向け高精度RAGエージェント",
      proj1Desc: "密ベクトルと疎ベクトルのハイブリッド検索、Cross-Encoderリランキング、自己補正クエリ生成を備えた企業向けナレッジベース推論基盤。",
      
      proj2Title: "ドメイン特化型指示追従LLM",
      proj2Desc: "合成指示データを用いた70Bモデルの効率的QLoRA微調整により、単一GPU環境における推論スループットを4.2倍に向上。",
      
      proj3Title: "マルチモーダル視覚言語自動化エージェント",
      proj3Desc: "UI画面や技術図面などの視覚データを高精度に解析し、安全かつ決定論的にAPIアクションを実行する自律型AIエージェント。",

      timelineEyebrow: "CAREER & ACADEMIC PATH",
      timelineHeading: "職務経歴・学歴タイムライン",
      timelineSubheading: "エンタープライズAIシステム開発、LLM基盤モデル研究、および情報工学における学術的研鑽の軌跡。",
      phaseExperience: "職務経歴 (Experience)",
      exp1Status: "現在在籍中 (Active)",
      exp1Date: "2024年1月 — 現在",
      exp1Title: "AI・LLMシステムエンジニア",
      exp1Company: "Autonomous AI Labs",
      exp1Summary: "企業向け自律型AIエージェントの設計、大規模ハイブリッドRAGパイプライン構築、GPUクラスタにおける高スループット推論最適化を担当。",
      exp1Bullet1: "QdrantとBM25を組み合わせたハイブリッド検索によるマルチホップAgentic RAGを設計・構築し、ハルシネーション発生率を78%低減。",
      exp1Bullet2: "PagedAttentionとチャンクプリフィルを用いたvLLMクラスタの最適化を行い、70Bモデルでの推論スループットを4.2倍に向上。",
      exp1Bullet3: "高品質な合成指示データセットを用いて70BモデルのQLoRA微調整を実施し、ドメイン特化型推論精度を大幅改善。",
      exp2Status: "契約 / プロジェクト参画",
      exp2Date: "2023年 — 2024年",
      exp2Title: "機械学習リサーチャー＆エンジニア",
      exp2Company: "Cognitive Data Solutions",
      exp2Summary: "視覚言語モデル（VLM）を活用した非構造化図面・帳票データの高精度抽出およびマルチモーダル推論基盤の開発。",
      exp2Bullet1: "月間5万件以上の技術文書を自動処理する情報抽出基盤を開発し、パース精度96.2%を達成。",
      exp2Bullet2: "技術文書向け多言語セマンティックセグメンテーション用カスタムLoRAアダプタを開発・検証。",
      transitionBridgeText: "↓ アカデミア（学術研究）からプロダクションエンジニアリングへの移行",
      phaseEducation: "学歴・専門研究 (Education)",
      edu1Honor: "学士（工学・情報科学） • 優等卒業 (Cum Laude)",
      edu1Degree: "学士（情報工学 / コンピュータサイエンス）",
      edu1Institution: "国立工科大学 / 総合大学",
      edu1ThesisLabel: "卒業研究・論文テーマ：",
      edu1ThesisTopic: "「自然言語処理における疎・密ハイブリッド埋め込みと深層学習を用いたセマンティック情報検索の高精度化」",
      edu1Bullet1: "GPA 3.8以上 / 首席優等（Cum Laude）で卒業。自然言語処理および分散深層学習を専門に研究。",
      edu1Bullet2: "Google・GoTo・Traveloka主導の「Bangkit Academy」機械学習コースを首席（Distinction）で修了。",
      edu1Bullet3: "人工知能研究室およびアルゴリズム・データ構造実習のティーチングアシスタントを担当。",
      edu2Badge: "専門資格・認定修了",
      edu2Title: "Deep Learning & LLM Systems Specialization",
      edu2Desc: "Transformerアーキテクチャの内部機構、自己注意機構、分散学習、およびRLHF（人間のフィードバックによる強化学習）の修得。"
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
  // 5. VERTICAL RAIL: ACTIVE SLIDING INDICATOR & SCROLLSPY (Option 1)
  // ==========================================================================
  const railTrack = document.getElementById('railTrack');
  const railIndicator = document.getElementById('railIndicator');
  const railItems = document.querySelectorAll('.rail-item');

  function updateRailIndicator(activeItem) {
    if (!railTrack || !railIndicator || !activeItem) return;

    const trackRect = railTrack.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    const indicatorHeight = railIndicator.offsetHeight || 32;

    // Hitung posisi tengah vertikal item terhadap rail track
    const itemCenter = (itemRect.top + itemRect.height / 2) - trackRect.top;
    const targetY = Math.round(itemCenter - indicatorHeight / 2);

    railIndicator.style.transform = `translateY(${targetY}px)`;
  }

  function setActiveRailItem(item) {
    if (!item) return;
    railItems.forEach(r => r.classList.remove('active'));
    item.classList.add('active');
    updateRailIndicator(item);
  }

  // Posisi awal indikator saat halaman pertama kali dimuat
  const initialActive = document.querySelector('.rail-item.active') || railItems[0];
  if (initialActive) {
    // Sedikit timeout agar font & layout selesai dihitung browser
    setTimeout(() => updateRailIndicator(initialActive), 100);
  }

  // Interaksi Klik dengan Smooth Scroll & Gliding Indicator
  railItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveRailItem(item);

      const targetId = item.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Re-alignment saat layar diubah ukurannya (Resize Listener)
  window.addEventListener('resize', () => {
    const current = document.querySelector('.rail-item.active');
    if (current) updateRailIndicator(current);
  });

  // Scrollspy Otomatis
  function handleScrollspy() {
    const scrollY = window.scrollY;
    const hero = document.getElementById('about');
    const heroHeight = hero ? hero.offsetHeight : 600;

    // Jika masih di layar pertama (Hero / About)
    if (scrollY < heroHeight * 0.4) {
      const aboutItem = Array.from(railItems).find(item => item.getAttribute('href') === '#about');
      if (aboutItem && !aboutItem.classList.contains('active')) {
        setActiveRailItem(aboutItem);
      }
      return;
    }

    const expEl = document.getElementById('experience');
    const eduEl = document.getElementById('education');

    if (eduEl && eduEl.getBoundingClientRect().top <= window.innerHeight * 0.45) {
      const eduItem = Array.from(railItems).find(item => item.getAttribute('href') === '#education');
      if (eduItem && !eduItem.classList.contains('active')) {
        setActiveRailItem(eduItem);
      }
    } else if (expEl && expEl.getBoundingClientRect().top <= window.innerHeight * 0.55) {
      const expItem = Array.from(railItems).find(item => item.getAttribute('href') === '#experience');
      if (expItem && !expItem.classList.contains('active')) {
        setActiveRailItem(expItem);
      }
    }
  }

  window.addEventListener('scroll', handleScrollspy, { passive: true });


  // ==========================================================================
  // 6. RESUME DOWNLOAD DROPDOWN POPOVER
  // ==========================================================================
  const resumeBtn = document.getElementById('resumeDropdownTrigger');
  const resumeDropdown = document.getElementById('resumeDropdownMenu');
  const resumeWrapper = document.getElementById('resumePopoverWrapper');

  if (resumeBtn && resumeDropdown) {
    function toggleResumeDropdown(forceState) {
      const isOpen = typeof forceState === 'boolean' 
        ? forceState 
        : !resumeDropdown.classList.contains('open');
      
      resumeDropdown.classList.toggle('open', isOpen);
      resumeBtn.classList.toggle('open', isOpen);
      resumeBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    resumeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleResumeDropdown();
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (resumeWrapper && !resumeWrapper.contains(e.target)) {
        toggleResumeDropdown(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleResumeDropdown(false);
      }
    });

    // Close after clicking an option item
    const resumeOptions = resumeDropdown.querySelectorAll('.resume-option-item');
    resumeOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        setTimeout(() => toggleResumeDropdown(false), 200);
      });
    });
  }

});
