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
      expPhaseRange: "2025 — Sekarang",
      exp1Status: "Currently Working Here (Active)",
      exp1Date: "Jan 2026 — Sekarang",
      exp1Title: "AI Engineer",
      exp1Company: "Dinas Komunikasi dan Informatika Kab. Pasuruan",
      exp1Loc: "• Pasuruan, Indonesia",
      exp1Summary: "Merancang dan membangun siklus penuh Kapas AI (ai.pasuruankab.go.id), platform AI multimodal tingkat pemerintahan berskala produksi, mulai dari provisioning bare-metal GPU server, Linux sysadmin, model serving, hingga frontend delivery.",
      exp1Bullet1: "Mendeploy & mengoptimasi Qwen3.5-9B via vLLM dengan BitsAndBytes quantization, mempertahankan efisiensi 95% GPU memory utilization.",
      exp1Bullet2: "Membangun Two-Stage Production RAG menggunakan Qdrant, BGE-M3 hybrid embeddings, dan BGE reranker dengan ekstraksi multi-dokumen (PDF/DOCX/TXT) serta sliding-window memory (8k context).",
      exp1Bullet3: "Mengembangkan microservices FastAPI (Python 3.12) asinkron dengan real-time SSE streaming, OpenAI-compatible API gateway, forecasting pajak daerah (SARIMA), dan automated social media intelligence (Apify + Gemini + IndoBERT).",
      exp2Status: "Corporate Internship",
      exp2Date: "Jul 2025 — Agu 2025",
      exp2Title: "Operational Excellence Intern",
      exp2Company: "PT Ajinomoto Indonesia",
      exp2Loc: "• Mojokerto, Indonesia",
      exp2Summary: "Mengumpulkan, mengonsolidasikan, dan menganalisis data operasional internal manufaktur untuk mendukung pelaporan manajemen dan efisiensi alur kerja operasional.",
      exp2Bullet1: "Mereduksi proses pelaporan manual dan berbasis kertas sebesar ~60% melalui inisiatif transformasi digital sistematis.",
      exp2Bullet2: "Menyusun laporan analitik terstruktur dan ringkasan data berkala untuk memfasilitasi evaluasi kinerja manajemen eksekutif.",
      transitionBridgeText: "↓ Transisi: Fondasi Akademis Ilmu Komputer & Riset ke Rekayasa AI Produksi",
      phaseEducation: "Education",
      eduPhaseRange: "2022 — 2026",
      edu1Honor: "Sarjana Komputer • IPK 3.62 / 4.0",
      edu1Date: "Agu 2022 — Des 2025",
      edu1Degree: "Sarjana Ilmu Komputer (S.Kom)",
      edu1Institution: "UIN Maulana Malik Ibrahim Malang",
      edu1Loc: "• Malang, Indonesia",
      edu1ThesisLabel: "Fokus Akademik & Riset Sarjana:",
      edu1ThesisTopic: "Fokus mendalam pada Artificial Intelligence, Computer Vision, & Deep Learning yang melahirkan 2 publikasi jurnal ilmiah terakreditasi (JIKI 2026) pada segmentasi citra ConvNeXt-DeepLabv3+ dan deteksi diagnostik endoskopi.",
      edu1Bullet1: "Meraih IPK 3.62 / 4.0 dengan penguasaan kuat pada Computer Vision, Deep Learning, Distributed Systems, Data Science, dan NLP.",
      edu1Bullet2: "Vice President — Data Science Enthusiast Community (DSEC UIN Malang), memimpin workshop teknis ML dan komunitas mahasiswa (Sep 2024 — Jul 2025).",
      edu1Bullet3: "Merancang platform End-to-End MLOps dengan DVC, MLflow tracking, dan FastAPI inference API (<600ms latency) untuk menghubungkan riset ke standar industri.",
      edu2Badge: "Verified Credentials",
      edu2Date: "2024 — 2026",
      edu2Title: "Sertifikasi Profesional Data Science & MLOps",
      edu2Company: "Kementerian Kominfo RI & Dicoding / Lintasarta",
      edu2Loc: "• Sertifikasi Nasional & Industri",
      edu2Cert1: "Associate Data Scientist — Sertifikasi Kompetensi Nasional, Kementerian Komunikasi dan Informatika RI (Februari 2026).",
      edu2Cert2: "Machine Learning Operations (MLOps) with Cloudeka — Dicoding Indonesia & Lintasarta Cloudeka (September 2024).",
      thesisBadge: "Skripsi Sarjana (Tugas Akhir)",
      thesisStatus: "Lulus & Terbit • S.Kom",
      thesisTitle: "Segmentasi Zebra Cross yang Efisien dan Kuat di Bawah Cuaca Buruk Menggunakan DeepLabv3 Berbasis ConvNeXt",
      thesisDesc: "Riset skripsi sarjana yang mengeksplorasi arsitektur ConvNeXt sebagai backbone ekstraksi fitur pada DeepLabv3+ untuk segmentasi semantik zebra cross yang tangguh di bawah kondisi cuaca ekstrem (hujan deras, kabut, dan minim cahaya).",
      thesisBtn: "Buka Skripsi Lengkap (.pdf)",
      thesisPaperLink: "Diterbitkan di Jurnal Ilmiah (JIKI) → Lihat Paper",
      pubEyebrow: "Peer-Reviewed Scientific Research",
      pubHeading: "Research & Publications",
      pubSubheading: "Publikasi artikel ilmiah terindeks di jurnal nasional terakreditasi, berfokus pada arsitektur deep learning modern, computer vision tahan cuaca ekstrem, dan diagnostik citra medis.",
      pubPeerReviewed: "Paper Peer-Reviewed",
      pub1Abstract: "Mengusulkan integrasi backbone ConvNeXt pada DeepLabv3+ untuk meningkatkan efisiensi komputasi dan ketahanan segmentasi semantik zebra cross pada kondisi jalanan ekstrem (hujan lebat, kabut tebal, dan pencahayaan rendah) untuk sistem persepsi autonomous driving.",
      pub2Abstract: "Merancang kerangka kerja deep learning berbasis transfer learning ConvNeXt untuk klasifikasi otomatis citra endoskopi gastrointestinal, membedakan GERD dan polip dengan 12 skenario eksperimen klinis komparatif berstandar diagnostik.",
      pubDownloadPdf: "Baca Paper (.pdf)"
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
      expPhaseRange: "2025 — Present",
      exp1Status: "Currently Working Here (Active)",
      exp1Date: "Jan 2026 — Present",
      exp1Title: "AI Engineer",
      exp1Company: "Pasuruan Regency Government (Diskominfo)",
      exp1Loc: "• Pasuruan, Indonesia",
      exp1Summary: "Independently engineered the full lifecycle of Kapas AI (ai.pasuruankab.go.id), a government-grade multimodal AI platform, covering bare-metal GPU provisioning, Linux administration, model serving, and frontend delivery.",
      exp1Bullet1: "Deployed and optimized Qwen3.5-9B via vLLM with BitsAndBytes half-precision quantization, maintaining 95% GPU memory utilization.",
      exp1Bullet2: "Built a production two-stage RAG pipeline using Qdrant, BGE-M3 hybrid embeddings, and a BGE reranker, coupled with multi-format document extraction and 8k sliding-window context memory.",
      exp1Bullet3: "Developed high-concurrency async FastAPI microservices with real-time SSE streaming, OpenAI-compatible API gateway, regional fiscal forecasting (SARIMA), and automated multi-platform social media intelligence.",
      exp2Status: "Corporate Internship",
      exp2Date: "Jul 2025 — Aug 2025",
      exp2Title: "Operational Excellence Intern",
      exp2Company: "PT Ajinomoto Indonesia",
      exp2Loc: "• Mojokerto, Indonesia",
      exp2Summary: "Collected, organized, and consolidated internal manufacturing operational data to drive reporting workflows and support executive management review.",
      exp2Bullet1: "Reduced manual, paper-based reporting workflows by approximately 60% through structured digital transformation.",
      exp2Bullet2: "Formulated standardized analytical reports and automated periodic summaries to streamline management evaluation.",
      transitionBridgeText: "↓ Transition: Computer Science Academia & Research to Production AI Engineering",
      phaseEducation: "Education",
      eduPhaseRange: "2022 — 2026",
      edu1Honor: "Bachelor's Degree • GPA 3.62 / 4.0",
      edu1Date: "Aug 2022 — Dec 2025",
      edu1Degree: "Bachelor of Computer Science (B.Comp.Sc / S.Kom)",
      edu1Institution: "State Islamic University of Maulana Malik Ibrahim Malang",
      edu1Loc: "• Malang, Indonesia",
      edu1ThesisLabel: "Undergraduate Focus & Academic Research:",
      edu1ThesisTopic: "Core focus on Artificial Intelligence, Computer Vision, & Deep Learning, leading to 2 peer-reviewed journal publications (JIKI 2026) in ConvNeXt-DeepLabv3+ segmentation and endoscopic diagnostic classification.",
      edu1Bullet1: "Graduated with 3.62 / 4.0 GPA, with coursework in Distributed Systems, Data Science, NLP, Numerical Methods, and Database Architecture.",
      edu1Bullet2: "Vice President — Data Science Enthusiast Community (DSEC), spearheading technical ML workshops and departmental student initiatives (Sep 2024 — Jul 2025).",
      edu1Bullet3: "Engineered an end-to-end MLOps pipeline with DVC, MLflow experiment tracking, and containerized FastAPI inference (<600ms latency).",
      edu2Badge: "Verified Credentials",
      edu2Date: "2024 — 2026",
      edu2Title: "Professional Certifications in Data Science & MLOps",
      edu2Company: "Ministry of Communication & IT (Kominfo) & Dicoding / Lintasarta",
      edu2Loc: "• National & Industry Credentials",
      edu2Cert1: "Associate Data Scientist — National Professional Competency Certification, Ministry of Communication and IT of RI (Feb 2026).",
      edu2Cert2: "Machine Learning Operations (MLOps) with Cloudeka — Dicoding Indonesia & Lintasarta Cloudeka (Sep 2024).",
      thesisBadge: "Bachelor's Capstone Thesis",
      thesisStatus: "Defended • S.Kom",
      thesisTitle: "Segmentasi Zebra Cross yang Efisien dan Kuat di Bawah Cuaca Buruk Menggunakan DeepLabv3 Berbasis ConvNeXt",
      thesisDesc: "Undergraduate capstone research exploring ConvNeXt as a feature extraction backbone in DeepLabv3+ for robust semantic crosswalk segmentation under adverse weather conditions (heavy rain, dense fog, low lighting).",
      thesisBtn: "View Full Thesis (.pdf)",
      thesisPaperLink: "Published in Scientific Journal (JIKI) → View Paper",
      pubEyebrow: "Peer-Reviewed Scientific Research",
      pubHeading: "Research & Publications",
      pubSubheading: "Peer-reviewed scientific publications in accredited national journals, focusing on modern deep learning architectures, adverse weather computer vision, and clinical medical AI.",
      pubPeerReviewed: "Peer-Reviewed Paper",
      pub1Abstract: "Proposes the integration of ConvNeXt backbone into DeepLabv3+ to significantly improve computational efficiency and semantic crosswalk segmentation robustness under extreme adverse weather conditions for autonomous driving perception.",
      pub2Abstract: "Engineered a ConvNeXt transfer learning deep learning framework for automated clinical classification of gastrointestinal endoscopic imagery, discriminating GERD and polyps across 12 comparative experimental scenarios.",
      pubDownloadPdf: "Read Paper (.pdf)"
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
      expPhaseRange: "2025年 — 現在",
      exp1Status: "現在在籍中 (Active)",
      exp1Date: "2026年1月 — 現在",
      exp1Title: "AIエンジニア (AI Engineer)",
      exp1Company: "パスルアン県情報通信局 (Diskominfo Pasuruan)",
      exp1Loc: "• インドネシア パスルアン",
      exp1Summary: "パスルアン県政府向け次世代マルチモーダルAI基盤「Kapas AI (ai.pasuruankab.go.id)」の全ライフサイクル（GPUサーバー構築、Linux環境管理、LLMサービング、フロントエンド配信）を主導・実装。",
      exp1Bullet1: "vLLM上でQwen3.5-9BのサービングおよびBitsAndBytes量子化を実施し、GPUメモリ利用率95%の高効率運用を実現。",
      exp1Bullet2: "Qdrant、BGE-M3ハイブリッド埋め込み、BGEリランカーによる2段階高精度RAG基盤および8kスライディングウィンドウ長期記憶機構を構築。",
      exp1Bullet3: "FastAPIによる非同期マイクロサービス（SSEリアルタイム配信、OpenAI互換APIゲートウェイ、SARIMA時系列税収予測、およびGemini/IndoBERTによるSNS分析自動化）を開発。",
      exp2Status: "企業インターンシップ",
      exp2Date: "2025年7月 — 2025年8月",
      exp2Title: "業務効率化（オペレーショナル・エクセレンス）インターン",
      exp2Company: "味の素 インドネシア (PT Ajinomoto Indonesia)",
      exp2Loc: "• インドネシア モジョケルト",
      exp2Summary: "製造および業務オペレーションデータの収集・集計・構造化を行い、経営陣の意思決定に向けたレポーティングフローを支援。",
      exp2Bullet1: "業務フローのデジタル化を推進し、従来の紙ベースおよび手動レポーティング業務の約60%を削減。",
      exp2Bullet2: "部門間データ統合および定例分析レポートを体系化し、経営評価の迅速化に貢献。",
      transitionBridgeText: "↓ アカデミア（情報工学研究）から実環境AIエンジニアリングへの移行",
      phaseEducation: "学歴・専門研究 (Education)",
      eduPhaseRange: "2022年 — 2026年",
      edu1Honor: "学士（情報工学） • GPA 3.62 / 4.0",
      edu1Date: "2022年8月 — 2025年12月",
      edu1Degree: "学士（情報工学 / コンピュータサイエンス）",
      edu1Institution: "マウラナ・マリク・イブラヒム州立イスラム大学 マラン (UIN Malang)",
      edu1Loc: "• インドネシア マラン",
      edu1ThesisLabel: "学部専攻・学術研究領域：",
      edu1ThesisTopic: "人工知能、コンピュータビジョン、深層学習を専門に研究。ConvNeXt-DeepLabv3+セグメンテーションおよび内視鏡病変診断分類に関する査読付き学術論文2本（JIKI 2026）を執筆・採択。",
      edu1Bullet1: "GPA 3.62 / 4.0取得。分散システム、自然言語処理、データサイエンス、数値計算、データベース論を履修。",
      edu1Bullet2: "データサイエンス研究コミュニティ（DSEC）副代表（Vice President）。機械学習技術勉強会の企画・主導を担当（2024年9月〜2025年7月）。",
      edu1Bullet3: "DVC、MLflow追跡、およびFastAPIコンテナ推論基盤（レイテンシ600ms未満）によるEnd-to-End MLOpsパイプラインを構築。",
      edu2Badge: "国家認定・専門資格修了",
      edu2Date: "2024年 — 2026年",
      edu2Title: "データサイエンス＆MLOps専門認定",
      edu2Company: "インドネシア通信情報省 (Kominfo) & Dicoding / Lintasarta",
      edu2Loc: "• 国家認定および業界専門資格",
      edu2Cert1: "Associate Data Scientist — インドネシア通信情報省（Kominfo）国家職業資格認定 (2026年2月)",
      edu2Cert2: "Machine Learning Operations (MLOps) with Cloudeka — Dicoding & Lintasarta (2024年9月)",
      thesisBadge: "学士卒業論文 (Capstone Thesis)",
      thesisStatus: "審査合格・掲載済 • S.Kom",
      thesisTitle: "Segmentasi Zebra Cross yang Efisien dan Kuat di Bawah Cuaca Buruk Menggunakan DeepLabv3 Berbasis ConvNeXt",
      thesisDesc: "悪天候条件下（豪雨・濃霧・低照度）における高精度な横断歩道セマンティックセグメンテーションを目指し、DeepLabv3+のバックボーンにConvNeXtを統合・検証した学士論文研究。",
      thesisBtn: "論文全文を開く (.pdf)",
      thesisPaperLink: "査読付き学術誌（JIKI）採択済 → 論文を見る",
      pubEyebrow: "査読付き学術研究論文 (Scientific Research)",
      pubHeading: "研究業績・学術論文 (Publications)",
      pubSubheading: "査読付き国内学術誌（SINTA/JIKI）に掲載された論文一覧。深層学習アーキテクチャ、悪天候対応コンピュータビジョン、内視鏡医療画像AIを主軸に展開。",
      pubPeerReviewed: "査読付き論文 (Peer-Reviewed)",
      pub1Abstract: "自動運転の認識性能向上に向け、DeepLabv3+にConvNeXtバックボーンを導入し、悪天候（豪雨・濃霧・暗所）下における横断歩道セグメンテーションの計算効率と頑健性を大幅に向上。",
      pub2Abstract: "消化器内視鏡画像におけるGERD（胃食道逆流症）および大腸ポリオの自動分類を目的とし、ConvNeXt転移学習モデルを構築。12通りの比較実験シナリオで高精度を実証。",
      pubDownloadPdf: "論文PDFを読む (.pdf)"
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

  // ==========================================================================
  // 6. SCROLL SPY FOR VERTICAL RAIL NAVIGATION
  // ==========================================================================
  const railLinks = document.querySelectorAll('.rail-item');
  const sectionsToWatch = [
    { id: 'about', el: document.getElementById('about') },
    { id: 'experience', el: document.getElementById('experience') },
    { id: 'education', el: document.getElementById('education') },
    { id: 'publication', el: document.getElementById('publication') }
  ].filter(s => s.el !== null);

  if (railLinks.length > 0 && sectionsToWatch.length > 0) {
    function updateRailActive() {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      let currentSectionId = sectionsToWatch[0].id;

      for (let i = 0; i < sectionsToWatch.length; i++) {
        const { id, el } = sectionsToWatch[i];
        const top = el.offsetTop - 180;
        if (scrollPos >= top) {
          currentSectionId = id;
        }
      }

      railLinks.forEach(item => {
        const href = item.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', updateRailActive, { passive: true });
    updateRailActive();
  }

});
