// All portfolio content lives here. Edit this file; components render it.

export const profile = {
  name: "Boules Ashraf Samir",
  role: "Machine Learning Engineer",
  location: "Cairo, Egypt",
  email: "boules.ashraf.cv@gmail.com",
  github: "https://github.com/Boules123",
  linkedin: "https://www.linkedin.com/in/boules-ashraf-331037269/",
  headline: "I implement research papers from scratch and build reproducible ML pipelines.",
  intro:
    "Boules Ashraf Samir, machine learning engineer in Cairo, Egypt. I work on computer vision and NLP with PyTorch.",
  about:
    "I graduated in Computer Science from Egyptian E-Learning University in July 2026. My work centers on reimplementing published architectures, testing them with ablation studies, and packaging experiments so they can be reproduced. I completed a machine learning internship at FlyRank AI, mentor students at Google Developer Groups (GDG EELU), and work in Arabic and English.",
  openTo: "Open to junior and applied machine learning engineer roles in Egypt and remote.",
  description:
    "Junior machine learning engineer in Cairo. Paper reproductions in PyTorch (CVPR 2016, ECCV 2018), a from-scratch 110M-parameter BERT, and reproducible ML pipelines.",
};

export const nav = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Research", "#research"],
  ["Experience", "#experience"],
  ["Certifications", "#certs"],
  ["Contact", "#contact"],
];

export const ledger = [
  { work: "CVPR 2016 group activity recognition", href: "#cvpr2016", result: "90.5% accuracy", reference: "7% above the reported baseline" },
  { work: "ECCV 2018 relational network", href: "#eccv2018", result: "89.2% accuracy", reference: "Matches the paper, no reference code" },
  { work: "ECCV 2018 inference time", href: "#eccv2018", result: "50% lower", reference: "Vectorized tensor operations" },
];

export const skills = [
  ["Languages", "Python, SQL, C++"],
  ["Machine learning", "scikit-learn, regression, classification, clustering, anomaly detection, imbalanced classification, feature engineering, model evaluation, ablation studies"],
  ["Deep learning", "PyTorch, Torchvision, Transformers, BERT, CLIP, ResNet-50, LSTM, graph neural networks, self-attention, contrastive learning, LoRA/PEFT"],
  ["Computer vision", "Video understanding, group activity recognition, object detection (YOLO), image captioning, visual question answering"],
  ["NLP", "Masked language modeling, embeddings, intent classification, vision-language models"],
  ["MLOps and data", "MLflow, DVC, Docker, FastAPI, GitHub Actions, CI/CD, Git, Pandas, NumPy, BigQuery"],
];

// Row shapes: { label, text?, flow?, chips?, list?: [{title,text}], bars?: [{label,value}] }
// Set `repo` to a URL to show the Code row; leave it null to hide it.
export const projects = [
  {
    id: "nyc-taxi",
    tag: "Applied ML pipeline",
    title: "NYC taxi trip duration prediction",
    metric: "R² of 0.69 on 1.4M+ trip records",
    repo: "https://github.com/Boules123/NYC-Taxi-Trip-Duration",
    rows: [
      { label: "Problem", text: "Predict how long a taxi trip will take." },
      { label: "Data", text: "1.4M+ trip records." },
      { label: "Features", text: "Geospatial and temporal feature engineering." },
      { label: "Methodology", text: "Data-leakage prevention and reproducible experimentation across an end-to-end pipeline." },
      { label: "Result", text: "R² of 0.69." },
      { label: "Stack", chips: ["Python", "scikit-learn", "Pandas", "NumPy", "MLflow", "DVC", "Docker", "FastAPI", "GitHub Actions CI/CD"] },
    ],
  },
  {
    id: "fraud",
    tag: "Applied ML pipeline",
    title: "Credit card fraud detection",
    metric: "0.97 ROC-AUC on 284K+ imbalanced transactions",
    repo: "https://github.com/Boules123/Credit-Card-Fraud-Detection",
    rows: [
      { label: "Problem", text: "Detect fraud in a highly imbalanced dataset." },
      { label: "Data", text: "284K+ transactions." },
      { label: "Models", text: "A Random Forest classifier, benchmarked against a custom PyTorch MLP." },
      {
        label: "Results",
        text: "Random Forest: 0.97 ROC-AUC, 0.93 precision, 0.87 F1. The MLP reached 0.80 F1.",
        bars: [{ label: "Random Forest", value: 0.87 }, { label: "PyTorch MLP", value: 0.8 }],
      },
      { label: "Stack", chips: ["Python", "PyTorch", "scikit-learn", "Pandas", "NumPy"] },
    ],
  },
];

export const research = [
  {
    id: "cvpr2016",
    tag: "Research implementation",
    title: "Hierarchical deep temporal model, CVPR 2016",
    metric: "90.5% accuracy, 7% above the reported baseline",
    repo: "https://github.com/Boules123/A-Hierarchical-Deep-Temporal-Model-for-Group-Activity-Recognition",
    rows: [
      { label: "Objective", text: "Reimplement the group activity recognition model from scratch and compare it with the reported baseline." },
      { label: "Architecture", flow: ["Video input", "ResNet-50", "Group-LSTM", "Group activity"] },
      { label: "Methodology", text: "Nine targeted ablation studies on architectural components and training strategies." },
      { label: "Result", text: "90.5% accuracy, 7% above the reported baseline." },
      { label: "Stack", chips: ["Python", "PyTorch", "Torchvision", "ResNet-50", "Group-LSTM"] },
    ],
  },
  {
    id: "eccv2018",
    tag: "Research implementation",
    title: "Hierarchical relational network, ECCV 2018",
    metric: "89.2% accuracy without reference code, 50% faster inference",
    repo: "https://github.com/Boules123/Relational-Networks-and-Retrieval",
    rows: [
      { label: "Objective", text: "Reproduce the paper’s spatial-temporal relational architecture from scratch, without reference code." },
      { label: "Architecture", flow: ["ResNet-50", "Graph neural network with message passing", "Group activity"] },
      { label: "Optimization", text: "Vectorized tensor operations for feature aggregation reduced inference time by 50%." },
      { label: "Result", text: "89.2% accuracy, matching the paper’s benchmark." },
      { label: "Stack", chips: ["PyTorch", "ResNet-50", "Graph neural networks", "Relational modeling"] },
    ],
  },
  {
    id: "transformers",
    tag: "Research implementation",
    title: "From-scratch Transformers",
    metric: "110M-parameter BERT, CLIP, and a long-context Transformer",
    repo: null, // add the repository URL here to show a Code link
    rows: [
      { label: "Objective", text: "Build foundation-model components from first principles in PyTorch." },
      {
        label: "Implementations",
        list: [
          { title: "nanoBERT", text: "a 110M-parameter BERT pretrained from scratch with masked language modeling." },
          { title: "CLIP", text: "ViT image encoder, causal Transformer text encoder, symmetric InfoNCE loss, and a learned temperature." },
          { title: "Long-context Transformer", text: "grouped-query attention, YaRN RoPE, FlashAttention-style chunked attention, sliding-window and global layer interleaving, attention sinks, and KV caching." },
        ],
      },
      { label: "Validation", text: "Correctness tests verify numerical equivalence with PyTorch SDPA." },
    ],
  },
];

export const experience = [
  {
    title: "Machine learning intern, FlyRank AI",
    dates: "Jul 2026 – Sep 2026",
    bullets: [
      "Developed embedding-based clustering and intent-classification workflows on real-world search and analytics data to support search understanding.",
      "Prepared large-scale analytics datasets for modeling by handling missing fields, joining sources, and flattening nested structures with Python, Pandas, SQL, and BigQuery.",
    ],
  },
  {
    title: "AI instructor and mentor, Google Developer Groups (GDG EELU)",
    bullets: ["Delivered ML and deep learning workshops to 30+ students and led Python code reviews and project debugging."],
  },
  {
    title: "Programming instructor, Code Kids Academy",
    bullets: ["Taught programming fundamentals to 48+ students through practical exercises and self-developed projects."],
  },
  { title: "Participant and mentor, Egyptian Collegiate Programming Contest (ECPC)" },
];

export const certifications = [
  "Machine Learning Diploma",
  "Artificial Intelligence",
  "AI & Data Science: Generative AI Professional",
  "Deep Learning Diploma (in progress)",
  "Data Structures and Algorithms (in progress)",
];
