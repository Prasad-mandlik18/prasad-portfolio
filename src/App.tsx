import React, { useState } from 'react';
import DataRain from '@/components/ui/data-rain';
import { WorksWheel, type WorksWheelItem } from '@/components/ui/works-wheel';
import confetti from 'canvas-confetti';
import {
  Brain,
  Cpu,
  Database,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Terminal,
  Award,
  GraduationCap,
  Sparkles,
  Download,
  CheckCircle2,
  Code2,
  Copy,
  ChevronRight,
  Layers,
  Search,
  Activity,
  Send,
  Eye,
  Sliders,
  Play,
  RotateCcw,
  Zap,
  Flame,
  Workflow,
  FileText,
  ChevronDown
} from 'lucide-react';

function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

const FEATURED_WORKS: WorksWheelItem[] = [
  {
    title: "GestureBI — Touchless Analytics",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
    href: "#gesturebi",
  },
  {
    title: "AI Candidate Ranking Engine",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    href: "#candidate-ranking",
  },
  {
    title: "RAG Study Copilot (Gemini)",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    href: "#rag-chatbot",
  },
  {
    title: "Content Movie Recommender",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    href: "#movie-recommender",
  },
  {
    title: "Online Crime Report System",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    href: "#crime-report",
  },
];

interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  badge: string;
  summary: string;
  tech: string[];
  image: string;
  stats: string;
  pipeline: string[];
  bulletPoints: string[];
  github: string;
}

const PROJECTS: ProjectDetail[] = [
  {
    id: "gesturebi",
    title: "GestureBI – Touchless AI Data Analytics Dashboard",
    category: "Computer Vision & Analytics",
    badge: "Flagship Innovation",
    summary:
      "A touchless Business Intelligence platform controlled entirely via real-time hand gestures without physical contact. Features low-latency virtual cursor tracking, pinch-selection, and automatic tabular data analysis.",
    tech: ["Python", "OpenCV", "MediaPipe", "Dynamic CSV Engine", "NumPy"],
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
    stats: "Sub-30ms Latency • Touchless Spatial Tracking",
    pipeline: [
      "Webcam Video Feed",
      "MediaPipe 21 Landmarks",
      "Adaptive Cursor Smoothing",
      "Pinch & Hover Trigger",
      "Dynamic CSV KPI Engine",
      "Dashboard Focus Mode"
    ],
    bulletPoints: [
      "Developed a touchless Business Intelligence dashboard controlled using real-time hand gestures with MediaPipe and OpenCV.",
      "Implemented gesture-based virtual cursor, pinch-to-select interaction, adaptive cursor smoothing, and coordinate mapping for seamless navigation.",
      "Built a dynamic CSV analytics engine that automatically detects dataset columns and generates KPIs, charts, and dashboard insights.",
      "Designed interactive features including Focus Mode, dynamic chart tooltips, semantic metric selection, and gesture-controlled dashboard navigation."
    ],
    github: "https://github.com/Prasad-mandlik18"
  },
  {
    id: "candidate-ranking",
    title: "AI-Powered Candidate Ranking System",
    category: "Information Retrieval & NLP",
    badge: "Vector Search Scale",
    summary:
      "High-throughput semantic candidate scoring engine capable of indexing and ranking 100,000+ candidate profiles against job requirements with millisecond retrieval and explainable scoring heuristics.",
    tech: ["FAISS", "Sentence Transformers", "Scikit-learn", "Streamlit", "Python"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    stats: "100,000+ Profiles Indexed • <15ms Vector Query",
    pipeline: [
      "100K+ Candidate Resumes",
      "all-MiniLM-L6-v2 Embeddings",
      "FAISS Vector Index",
      "Cosine Similarity Search",
      "Hybrid Scikit-learn Heuristic",
      "Recruiter Streamlit UI"
    ],
    bulletPoints: [
      "Ranked 100,000+ candidate profiles using dense semantic vector search powered by FAISS vector index.",
      "Built a hybrid explainable ranking engine combining Sentence Transformers embeddings with Scikit-learn heuristic scoring.",
      "Created an interactive Streamlit interface for recruiters with cosine score sliders and skill match breakdowns."
    ],
    github: "https://github.com/Prasad-mandlik18"
  },
  {
    id: "rag-chatbot",
    title: "AI-Powered RAG Study Chatbot",
    category: "Generative AI & LLMs",
    badge: "Knowledge Extraction",
    summary:
      "Retrieval-Augmented Generation tutor that synthesizes factual answers from user-uploaded study PDFs using local semantic search and seamlessly falls back to Google Gemini when queries exceed document context.",
    tech: ["RAG Architecture", "Google Gemini API", "FAISS", "PyMuPDF", "Sentence Transformers"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    stats: "Dual-Engine Retrieval • Context Guardrails",
    pipeline: [
      "PDF Course Material",
      "PyMuPDF Extraction & Chunking",
      "Dense Embeddings",
      "FAISS Local Retrieval",
      "Gemini Fallback Router",
      "Context-Grounded Answers"
    ],
    bulletPoints: [
      "Built a chatbot that answers questions from uploaded PDFs using Retrieval-Augmented Generation.",
      "Integrated Google Gemini as fallback when information is unavailable in local documents.",
      "Used FAISS, PyMuPDF, Sentence Transformers and Streamlit for an intuitive responsive study assistant."
    ],
    github: "https://github.com/Prasad-mandlik18"
  },
  {
    id: "movie-recommender",
    title: "Movie Recommender System",
    category: "Recommendation Systems & NLP",
    badge: "Cosine Similarity",
    summary:
      "Content-based movie discovery engine processing genre, cast, and synopsis tags into high-dimensional feature spaces, delivering instant nearest-neighbor cinematic recommendations with TMDB API artwork.",
    tech: ["NLP", "CountVectorizer", "Cosine Similarity", "TMDB API", "Streamlit"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    stats: "5,000+ Films Catalog • Real-time Metadata",
    pipeline: [
      "TMDB Film Database",
      "Metadata Feature Concatenation",
      "CountVectorizer Matrix",
      "Pairwise Cosine Similarity",
      "Top-N Nearest Neighbors",
      "Live TMDB Poster Display"
    ],
    bulletPoints: [
      "Built a content-based recommender using NLP, CountVectorizer and Cosine Similarity.",
      "Integrated TMDB API for live movie posters, release metadata, and ratings.",
      "Packaged the recommender into an interactive Streamlit application with instant title auto-completion."
    ],
    github: "https://github.com/Prasad-mandlik18"
  },
  {
    id: "crime-report",
    title: "Online Crime Report System",
    category: "Full-Stack Web Architecture",
    badge: "MERN Stack",
    summary:
      "Full-stack citizen complaint management and police department triage portal featuring role-based authentication, real-time investigation progress tracking, and MongoDB document persistence.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    stats: "Complete MERN Backend • Role-based Security",
    pipeline: [
      "Citizen Complaint Input",
      "React Form Validation",
      "Express REST API Endpoints",
      "JWT Session Authentication",
      "MongoDB Database Records",
      "Investigation Status Tracking"
    ],
    bulletPoints: [
      "Designed a complaint management portal with authentication and complaint tracking.",
      "Implemented complete MERN architecture with MongoDB backend and Express REST endpoints.",
      "Created an intuitive reactive UI in React with live complaint progress logs and administrative dashboard."
    ],
    github: "https://github.com/Prasad-mandlik18"
  }
];

const SKILL_GROUPS = [
  {
    title: "AI, Machine Learning & Vision",
    icon: Brain,
    color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
    skills: ["Scikit-learn", "Pandas", "NumPy", "FAISS", "Sentence Transformers", "RAG", "NLP", "Computer Vision", "MediaPipe", "OpenCV"]
  },
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/30",
    skills: ["Python", "Java", "JavaScript", "SQL"]
  },
  {
    title: "Web & Full-Stack Frameworks",
    icon: Layers,
    color: "from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30",
    skills: ["Streamlit", "React", "Node.js", "Express.js", "Tailwind CSS"]
  },
  {
    title: "Databases, Tools & APIs",
    icon: Database,
    color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Postman", "Google Gemini API"]
  }
];

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [flowSpeed, setFlowSpeed] = useState(1.0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#22e6ff', '#8a5cff', '#ff3d9a', '#eafcff']
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("prasadmandlik13@gmail.com");
    setCopiedEmail(true);
    triggerConfetti();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const downloadResumeTxt = () => {
    triggerConfetti();
    const resumeText = `PRASAD MANDLIK
AI / ML Engineer | Data Science | Python Developer
Pune, Maharashtra | +91-9373911148 | prasadmandlik13@gmail.com
GitHub: https://github.com/Prasad-mandlik18 | LinkedIn: www.linkedin.com/in/prasad-mandlik18

PROFESSIONAL SUMMARY
MCA student with hands-on experience in Artificial Intelligence, Machine Learning, Retrieval-Augmented Generation (RAG), NLP, recommendation systems, and full-stack development. Built multiple end-to-end AI applications using Python, FAISS, Streamlit, Sentence Transformers, Computer Vision and the MERN stack. Passionate about solving real-world problems with scalable AI solutions and continuously learning modern technologies.

TECHNICAL SKILLS
Programming: Python, Java, JavaScript, SQL
AI / ML: Scikit-learn, Pandas, NumPy, FAISS, Sentence Transformers, RAG, NLP, Computer Vision
Frameworks: Streamlit, React, Node.js, Express.js
Databases: MongoDB, MySQL
Tools: Git, GitHub, VS Code, Postman

PROJECTS
GestureBI – Touchless AI Data Analytics Dashboard
- Developed a touchless Business Intelligence dashboard controlled using real-time hand gestures with MediaPipe and OpenCV.
- Implemented gesture-based virtual cursor, pinch-to-select interaction, adaptive cursor smoothing, and coordinate mapping for seamless navigation.
- Built a dynamic CSV analytics engine that automatically detects dataset columns and generates KPIs, charts, and dashboard insights.
- Designed interactive features including Focus Mode, dynamic chart tooltips, semantic metric selection, and gesture controlled dashboard navigation.

AI-Powered Candidate Ranking System
- Ranked 100,000+ candidate profiles using semantic search with FAISS.
- Built a hybrid explainable ranking engine using Sentence Transformers and Scikit-learn.
- Created an interactive Streamlit interface for recruiters.

AI-Powered RAG Study Chatbot
- Built a chatbot that answers questions from uploaded PDFs using Retrieval-Augmented Generation.
- Integrated Google Gemini as fallback when information is unavailable in local documents.
- Used FAISS, PyMuPDF, Sentence Transformers and Streamlit.

Movie Recommender System
- Built a content-based recommender using NLP, CountVectorizer and Cosine Similarity.
- Integrated TMDB API for live movie posters and metadata.

Online Crime Report System (MERN)
- Designed a complaint management portal with authentication and complaint tracking.
- Implemented complete MERN architecture with MongoDB backend.

EDUCATION
- Master of Computer Applications (MCA) — DPGU School of Management & Research | CGPA: 9.11/10 | 2025–2027
- Bachelor of Computer Applications (BCA) — Dr. D. Y. Patil Arts, Commerce & Science College | CGPA: 8.28/10 | 2022–2025

CERTIFICATIONS
- MERN Stack — Apna College
- Node.js — HackerRank
- SQL (Basic) — HackerRank
- DSA using Java — Seven Mentor

ACHIEVEMENTS
- Built multiple AI applications including RAG chatbot, semantic candidate ranking engine, recommendation system and GestureBI.
- Participant — India Runs × Redrob AI Hackathon (2026).`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Prasad_Mandlik_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setMessageSent(true);
    triggerConfetti();
    setTimeout(() => {
      setMessageSent(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#020308] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      {/* ─── Top Navigation Bar ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#020308]/85 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="size-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-pink-500 p-[1.5px] shadow-lg shadow-cyan-500/25">
              <div className="size-full bg-[#020308] rounded-[10px] flex items-center justify-center font-bold text-sm tracking-wider text-cyan-400 group-hover:text-cyan-300 transition-colors">
                PM
              </div>
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors text-base">
                Prasad Mandlik
              </span>
              <span className="hidden sm:inline-block text-xs text-slate-400 ml-2 font-mono">
                / AI & ML Engineer
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#works-wheel" className="hover:text-cyan-400 transition-colors">Selected Works</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Project Dossiers</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Tech Matrix</a>
            <a href="#academics" className="hover:text-cyan-400 transition-colors">Education & Honors</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowResumeModal(true)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-500/60 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-all shadow-sm active:scale-95"
            >
              <FileText className="size-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>
            <a
              href="https://github.com/Prasad-mandlik18"
              target="_blank"
              rel="noreferrer"
              className="size-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/prasad-mandlik18"
              target="_blank"
              rel="noreferrer"
              className="size-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero Section with Living DataRain & Interactive Physics ─── */}
      <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden border-b border-slate-900">
        {/* Contained DataRain Background */}
        <div className="absolute inset-0 z-0">
          <DataRain
            fullscreen={false}
            count={3200}
            flowSpeed={flowSpeed}
            obstacleRadius={76}
            autopilot={true}
            palette={{
              calm: "#22e6ff",
              mid: "#8a5cff",
              hot: "#ff3d9a"
            }}
          />
        </div>

        {/* Cinematic Radial Lighting Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Vision & Identity */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/60 backdrop-blur-md text-cyan-300 text-xs font-mono tracking-wide shadow-sm">
              <span className="size-2 rounded-full bg-cyan-400 animate-ping inline-block" />
              <span>AI / ML ENGINEER • PUNE, MAHARASHTRA</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Architecting <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                High-Performance AI
              </span> & Intelligent Data Engines
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              MCA scholar building real-world AI applications: real-time <span className="text-cyan-300 font-semibold">Touchless Computer Vision</span> with MediaPipe, sub-second <span className="text-violet-300 font-semibold">FAISS Vector Search across 100k+ candidates</span>, and context-guarded <span className="text-pink-300 font-semibold">RAG architectures</span> with Google Gemini fallback.
            </p>

            {/* Quick Metrics HUD */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border border-slate-800/80 bg-slate-950/60 backdrop-blur-md rounded-2xl px-4 shadow-xl">
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-cyan-400">100K+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">FAISS Profiles</div>
              </div>
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-violet-400">9.11</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">MCA CGPA (Top)</div>
              </div>
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-pink-400">5+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">AI Systems</div>
              </div>
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-400">2026</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Redrob Hackathon</div>
              </div>
            </div>

            {/* Action Buttons & Quick Controls */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#works-wheel"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Interactive Wheel</span>
                <ChevronRight className="size-4" />
              </a>

              <button
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-sm font-semibold text-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="size-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-950/90 hover:bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 transition"
              >
                {copiedEmail ? <CheckCircle2 className="size-4 text-emerald-400" /> : <Copy className="size-4 text-slate-400" />}
                <span>{copiedEmail ? "Email Copied!" : "prasadmandlik13@gmail.com"}</span>
              </button>
            </div>

            {/* Generative UI Controls: DataRain Speed Regulator */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Sliders className="size-3.5" />
                <span>Particle Physics Speed:</span>
              </span>
              <div className="inline-flex p-1 rounded-lg bg-slate-950/80 border border-slate-800">
                <button
                  onClick={() => setFlowSpeed(0.5)}
                  className={`px-2.5 py-0.5 rounded text-[11px] transition ${flowSpeed === 0.5 ? "bg-cyan-500/30 text-cyan-300 font-bold" : "hover:text-white"}`}
                >
                  0.5x Calm
                </button>
                <button
                  onClick={() => setFlowSpeed(1.0)}
                  className={`px-2.5 py-0.5 rounded text-[11px] transition ${flowSpeed === 1.0 ? "bg-cyan-500/30 text-cyan-300 font-bold" : "hover:text-white"}`}
                >
                  1.0x Normal
                </button>
                <button
                  onClick={() => setFlowSpeed(2.0)}
                  className={`px-2.5 py-0.5 rounded text-[11px] transition ${flowSpeed === 2.0 ? "bg-pink-500/30 text-pink-300 font-bold" : "hover:text-white"}`}
                >
                  2.0x Warp
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Dossier with Authentic Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Luminous glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-violet-600 to-pink-500 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative w-72 sm:w-80 rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-2xl backdrop-blur-2xl">
                {/* Photo container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src="/prasad-mandlik.jpg"
                    alt="Prasad Mandlik"
                    className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                  
                  {/* Floating live indicator */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/70 shadow-lg">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-medium font-mono">
                        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                        Active for Roles
                      </span>
                      <span className="text-slate-300 font-mono text-[11px]">Pune • Hybrid</span>
                    </div>
                  </div>
                </div>

                {/* Identity Card Details */}
                <div className="mt-4 px-1 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-white text-lg tracking-tight">Prasad Mandlik</h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/80 font-bold">
                      MCA '27
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">AI / ML Engineer & Full-Stack Developer</p>
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-pink-400" />
                      Pune, Maharashtra
                    </span>
                    <span className="text-cyan-400 font-semibold">9.11 CGPA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Selected Works 3D Wheel (21st.dev Component) ─── */}
      <section id="works-wheel" className="py-24 border-b border-slate-900 bg-slate-950/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/70 border border-violet-800/60 text-violet-300 text-xs font-mono mb-3">
            <Sparkles className="size-3.5" />
            <span>INTERACTIVE 3D WHEEL CAROUSEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Selected Works Wheel
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-2 leading-relaxed">
            Scroll vertically or drag the cards to rotate through the 3D drum perspective. Click or tap to jump straight to technical architecture dossiers.
          </p>
        </div>

        {/* 3D Wheel Stage Container */}
        <div className="w-full h-[620px] max-w-6xl mx-auto rounded-3xl overflow-hidden border border-slate-800/90 bg-[#030611] shadow-2xl relative">
          <WorksWheel
            items={FEATURED_WORKS}
            label="PRASAD '26"
            action="Inspect Architecture"
          />
          {/* Interaction Helper Pill */}
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-[11px] text-slate-300 font-mono flex items-center gap-2 shadow-lg">
            <span>🖱️ Scroll Wheel or Drag Cards to Turn Drum</span>
          </div>
        </div>
      </section>

      {/* ─── Deep Project Architecture Showcase ─── */}
      <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="space-y-4 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
            <Terminal className="size-3.5" />
            <span>SYSTEM ARCHITECTURE DOSSIERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production & Research Projects
          </h2>
          <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
            Detailed breakdown of algorithms, data pipelines, vector search topologies, and full-stack implementations.
          </p>
        </div>

        <div className="space-y-14">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              id={project.id}
              className="group relative rounded-3xl bg-slate-900/40 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden p-6 sm:p-8 lg:p-10 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Visual Media & Metadata */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-cyan-300 font-mono text-[11px] font-semibold">
                        0{idx + 1} // {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-2 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Activity className="size-3.5 text-cyan-400" />
                      {project.stats}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold transition"
                    >
                      <span>Repository</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>

                  {/* Architecture Pipeline Flowchips */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      <Workflow className="size-3 text-cyan-400" />
                      <span>Data & Algorithm Pipeline:</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                      {project.pipeline.map((step, sIdx) => (
                        <React.Fragment key={step}>
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                            {step}
                          </span>
                          {sIdx < project.pipeline.length - 1 && (
                            <span className="text-slate-600 text-[10px]">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Implementation Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800 text-xs font-bold">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">SYSTEM ID: {project.id}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    <div className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                      Key Technical Accomplishments:
                    </div>
                    <ul className="space-y-2.5">
                      {project.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack chips */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono hover:border-cyan-500/40 hover:text-cyan-300 transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Interactive Technical Skills Matrix ─── */}
      <section id="skills" className="py-24 border-b border-slate-900 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/70 border border-pink-800/60 text-pink-300 text-xs font-mono">
              <Cpu className="size-3.5" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Technical Stack & Tooling
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
              Click any skill below to filter projects utilizing that technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="rounded-2xl bg-slate-900/50 border border-slate-800/90 p-6 space-y-4 hover:border-slate-700 transition"
                >
                  <div className={`size-11 rounded-xl bg-gradient-to-br ${group.color} border flex items-center justify-center`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">{group.title}</h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => {
                      const isSelected = selectedSkill === skill;
                      return (
                        <button
                          key={skill}
                          onClick={() => setSelectedSkill(isSelected ? null : skill)}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer ${
                            isSelected
                              ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30"
                              : "bg-slate-950 text-slate-300 border border-slate-800/90 hover:border-cyan-500/50 hover:text-cyan-300"
                          }`}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skill Filter Feedback Bar */}
          {selectedSkill && (
            <div className="mt-8 p-4 rounded-xl bg-slate-900/80 border border-cyan-500/40 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-mono">Filtered by:</span>
                <span className="font-bold text-cyan-300 font-mono">{selectedSkill}</span>
                <span className="text-slate-400">
                  — Used in {PROJECTS.filter(p => p.tech.some(t => t.toLowerCase().includes(selectedSkill.toLowerCase()))).length} project(s)
                </span>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-xs font-mono text-pink-400 hover:underline"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── Education, Certifications & Hackathons ─── */}
      <section id="academics" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono">
                <GraduationCap className="size-4" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Education & Academics</h3>
            </div>

            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-cyan-500/50 space-y-2">
                <div className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-cyan-500 shadow-md shadow-cyan-500/50" />
                <span className="text-xs font-mono text-cyan-400 font-semibold">2025 — 2027</span>
                <h4 className="text-lg font-bold text-white">Master of Computer Applications (MCA)</h4>
                <p className="text-sm text-slate-300">DPGU School of Management & Research, Pune</p>
                <div className="inline-block mt-1 px-3 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/80 font-mono text-xs font-bold shadow-sm">
                  CGPA: 9.11 / 10.0 (High Distinction)
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-800 space-y-2">
                <div className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-slate-700" />
                <span className="text-xs font-mono text-slate-400 font-semibold">2022 — 2025</span>
                <h4 className="text-lg font-bold text-white">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-sm text-slate-300">Dr. D. Y. Patil Arts, Commerce & Science College, Pune</p>
                <div className="inline-block mt-1 px-3 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 font-mono text-xs">
                  CGPA: 8.28 / 10.0
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Hackathon Accolades */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-pink-400 text-xs font-mono">
                <Award className="size-4" />
                <span>CREDENTIALS & HONORS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Certifications & Honors</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono text-pink-400 font-semibold">Apna College</div>
                <div className="font-bold text-white text-sm">MERN Stack Development</div>
                <div className="text-xs text-slate-400">Full-stack web architecture, React & MongoDB</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono text-pink-400 font-semibold">HackerRank Certified</div>
                <div className="font-bold text-white text-sm">Node.js Certified</div>
                <div className="text-xs text-slate-400">Backend runtime, event loops & API services</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono text-pink-400 font-semibold">HackerRank Certified</div>
                <div className="font-bold text-white text-sm">SQL (Basic) Proficiency</div>
                <div className="text-xs text-slate-400">Relational schema design & optimization</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono text-pink-400 font-semibold">Seven Mentor</div>
                <div className="font-bold text-white text-sm">DSA using Java</div>
                <div className="text-xs text-slate-400">Data structures, algorithmic complexity & graph theory</div>
              </div>
            </div>

            {/* Hackathon Achievement Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/70 via-slate-900/90 to-slate-950 border border-violet-800/60 flex items-start gap-4 shadow-xl">
              <div className="size-11 rounded-xl bg-violet-600/30 border border-violet-500/50 flex items-center justify-center shrink-0 text-violet-400">
                <Sparkles className="size-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-violet-300 font-semibold">NATIONAL HACKATHON (2026)</div>
                <div className="font-bold text-white text-base">India Runs × Redrob AI Hackathon</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Competed with top developers across India building real-time generative AI and agentic software solutions under intensive time limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact & Connect ─── */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black border border-slate-800/90 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
                <Mail className="size-3.5" />
                <span>INITIATE CONTACT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Let's Build Scalable AI Systems Together
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Whether you're looking for an AI/ML Engineer for computer vision prototypes, dense vector retrieval systems, or production web services, my inbox is always open.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="size-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">EMAIL ADDRESS</div>
                    <a href="mailto:prasadmandlik13@gmail.com" className="font-semibold text-white hover:text-cyan-400 transition">
                      prasadmandlik13@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="size-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-pink-400">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">PHONE</div>
                    <a href="tel:+919373911148" className="font-semibold text-white hover:text-pink-400 transition">
                      +91-9373911148
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="size-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-violet-400">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">LOCATION</div>
                    <span className="font-semibold text-white">Pune, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Interactive Message Form */}
            <div className="lg:col-span-6 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-800/90 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Send a Direct Message</h3>

              {messageSent ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="size-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-slate-400 font-mono">Thank you! Prasad will get back to you promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">MESSAGE / PROJECT DETAILS</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Discussing AI/ML roles, computer vision or RAG..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 font-bold text-white text-sm shadow-lg shadow-cyan-500/25 hover:opacity-95 transition flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="size-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Resume Modal Preview ─── */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-slate-950 border border-slate-800 w-full max-w-2xl rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Prasad Mandlik — Curriculum Vitae</h3>
                <p className="text-xs text-slate-400 font-mono">Pune, Maharashtra • +91-9373911148 • prasadmandlik13@gmail.com</p>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="size-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-cyan-400 font-bold">PROFESSIONAL SUMMARY:</span>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  MCA student with hands-on experience in AI, ML, RAG, NLP, recommendation systems, and full-stack development. Built multiple end-to-end AI applications using Python, FAISS, Streamlit, Sentence Transformers, Computer Vision and the MERN stack.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-violet-400 font-bold">KEY TECHNICAL SKILLS:</span>
                <p className="text-slate-300">
                  Python, Java, JavaScript, SQL • Scikit-learn, Pandas, NumPy, FAISS, Sentence Transformers, RAG, NLP, Computer Vision • Streamlit, React, Node.js, Express.js • MongoDB, MySQL
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-pink-400 font-bold">EDUCATION & HONORS:</span>
                <p className="text-slate-300">
                  MCA — DPGU School of Management & Research (CGPA 9.11/10 | 2025–2027)<br />
                  BCA — Dr. D. Y. Patil ACS College (CGPA 8.28/10 | 2022–2025)<br />
                  Participant — India Runs × Redrob AI Hackathon (2026)
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 text-xs font-medium hover:text-white"
              >
                Close Preview
              </button>
              <button
                onClick={downloadResumeTxt}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 active:scale-95"
              >
                <Download className="size-3.5" />
                <span>Download Resume File</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 bg-[#010206] text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Prasad Mandlik. Designed with 21st.dev interactive components.
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="https://github.com/Prasad-mandlik18" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/prasad-mandlik18" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">LinkedIn</a>
            <button onClick={() => setShowResumeModal(true)} className="hover:text-pink-400 transition">Download CV</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
