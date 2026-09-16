# MUHAMMAD FAQIH

**Lokasi:** Mojokerto, Indonesia | **Email:** info.mxfaqih@gmail.com | **Telepon:** +62857-3240-6997 | **LinkedIn:** in/mxfaqih

## SUMMARY

AI/ML Engineer with production experience deploying and optimizing large language models, building end-to-end ML pipelines, and shipping real AI systems at government scale. Experienced in LLM serving via VLLM, model quantization, multimodal inference, and integrating AI capabilities into high-concurrency backend services built with FastAPI and PostgreSQL. I work across the full ML lifecycle, from research and experimentation to production deployment and monitoring.

## EXPERIENCE

### AI Engineer

**Pasuruan Regency Government - Department of Communications & Information Technology** | _Pasuruan, Indonesia_ | _January 2026 - Present_

- Independently engineered the full lifecycle of Kapas AI (ai.pasuruankab.go.id), a government-grade multimodal AI platform, covering raw GPU server provisioning, Linux administration, model deployment, and frontend delivery.
- Deployed and optimized Qwen3.5-9B via VLLM with BitsAndBytes half-precision quantization, maintaining 95% GPU memory utilization.
- Designed a custom sliding window memory with background LLM-based auto-summarization to maintain long-term context within a 8192-token window.
- Developed high-concurrency microservices in FastAPI (Python 3.12) with async/await and real-time SSE streaming. Built an OpenAI-compatible API gateway with custom auth middleware, sliding window rate-limiting, and asyncio concurrency control.
- Designed complex PostgreSQL relational schemas via SQLAlchemy 2.x ORM with UUID indexing, many-to-many associations, and automated migrations via Alembic.
- Built automated pipelines for multi-format document extraction (PDF, DOCX, TXT) and real-time image preprocessing, feeding into a production RAG system using Qdrant, BGE-M3 hybrid embeddings, and a BGE reranker for two-stage retrieval to ground Kapas AI's responses in verified government documents.
- Created an automated forecasting service across 12 regional tax types and 24 districts, implementing SARIMA and Damped Holt's Linear Trend with automatic model selection; evaluated using sMAPE and MAE to ensure stability on volatile fiscal data for regional budget planning.
- Architected an extensible scraping framework using Abstract Base Classes to aggregate 300-500 posts/cycle from Instagram, TikTok, and Facebook via Apify SDKs; integrated Google Gemini and IndoBERT in a dual-model pipeline for batch sentiment classification and narrative topic modeling.
- Built a fault-tolerant background worker system via APScheduler (~95% job success rate) automating daily scraping and AI analysis cycles with independent database session management.

### Operational Exellence (Internship)

**Ajinomoto Indonesia** | _Mojokerto, Indonesia_ | _July 2025 - August 2025_

- Assisted in collecting, organizing, and consolidating operational data for internal reporting.
- Reduced manual and paper-based reporting processes by approximately 60% through digital transformation.
- Prepared structured reports and summaries to support management review and decision-making.

## RESEARCH & PUBLICATION

- Faqih, M., Rahman, R. A., & Holle, K. F. H. (2026). Efficient and robust crosswalk segmentation under adverse weather using ConvNeXt-enhanced DeepLabv3. _Jurnal Ilmu Komputer dan Informasi, 19_(2), 179-195. http://dx.doi.org/10.21609/jiki.v19i2.1757
- Faqih, M., Aziz, O. Q., & Hanani, A. (2026). A ConvNeXt-based deep learning framework for endoscopic image classification in GERD and polyp detection. _Jurnal Ilmu Komputer dan Informasi, 19_(2), 157-167. http://dx.doi.org/10.21609/jiki.v19i2.1702

## PROJECTS

### End-to-End MLOps Platform for Endoscopic Diagnostics: GERD & Polyp Detection

**Personal Project** | [https://github.com/mxfaqih/gerdpolyp-mlops](https://github.com/mxfaqih/gerdpolyp-mlops)

- Transformed research project (12 experimental scenarios on endoscopy classification using modern CNN Architecture) into production-ready MLOps system, bridging academic research and industry deployment standards.
- Built comprehensive ML infrastructure: migrated from notebook-based prototypes to modularized codebase with DVC versioning, MLflow tracking, automated reproducibility, and full experiment traceability.
- Deployed containerized inference API with FastAPI, achieving <600ms latency with optimized model loading and preprocessing production-ready for clinical integration.

## EDUCATION

### Bachelor of Computer Science

**State Islamic University of Maulana Malik Ibrahim Malang** | _August 2022 - December 2025_

- **GPA:** 3.62/4.0
- **Relevant Courses:** Artificial Intelligence, Computer Vision, Natural Language Processing, Distributed Systems, Data Science, Numerical Methods, Database, Statistics.
- **Organization:** Vice President, Data Science Enthusiast Community (Department-Affiliated Student Organization) | September 2024 - July 2025.

## SKILLS

- **Programming:** Python, Java, HTML, CSS, PHP, Javascript, MySQL, PostgreSQL, MongoDB, Docker, Git, GitHub Action, AWS.
- **AI & Machine Learning:** TensorFlow, PyTorch, Keras, Hugging Face, OpenCV, FastAPI, Flask, Data Version Control, MLFlow, Qdrant.
- **Language:** English (Profesional Working Proficiency), Japanese (Professional Working Proficiency, N2).

## CERTIFICATION

- **Associate Data Scientist** - National (Ministry of Communication and Information Technology of the Republic of Indonesia) - _February 2026_.
- **Machine Learning Operations (MLOps) with Cloudeka** - (Dicoding Indonesia & Lintasarta) - _September 2024_.
