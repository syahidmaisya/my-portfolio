'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  Code2,
  Database,
  Server,
  ExternalLink,
  LayoutDashboard,
  Sparkles,
  Scissors,
  Truck,
  Calculator,
  MessageCircle
} from 'lucide-react';

export default function KonfeksiProjectDetail() {
  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link href="/" className="font-semibold text-sm tracking-tight">
            Syahid<span className="text-neutral-600">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-xs text-neutral-500">
            {['About', 'Projects', 'Services', 'Blog'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`hover:text-white transition-colors duration-300 ${
                  item === 'Projects' ? 'text-white' : ''
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Let&apos;s Talk →
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-20">
        <HeroSection />
        <TechScopeSection />
        <InterfaceSection />
        <CapabilitiesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

/* ============ HERO ============ */
function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-8"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-[10px] text-neutral-500 hover:text-white transition-colors uppercase tracking-widest"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Projects
        </Link>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] text-neutral-400 uppercase tracking-[0.15em] mb-5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        ERP & Corporate Platform
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-4"
      >
        <span className="bg-gradient-to-b from-white via-white to-neutral-500 bg-clip-text text-transparent">
          Konfeksi Mini ERP
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm text-neutral-400 leading-relaxed max-w-xl mx-auto mb-6"
      >
        Sistem manajemen konfeksi *full-stack* berbasis Laravel. Menggabungkan landing page publik terintegrasi WhatsApp dengan panel admin komprehensif untuk mengelola pesanan, produksi, keuangan (P&L), hingga logistik.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-3 justify-center flex-wrap"
      >
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-neutral-200 transition-all"
        >
          Visit Live Website
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href="#interface"
          className="border border-white/10 text-xs font-medium px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:border-white/30 hover:bg-white/5 transition-all text-neutral-400"
        >
          View Screenshots
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </motion.div>

      {/* Hero image - pakai 1 (1).png */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-10 relative rounded-2xl overflow-hidden border border-white/[0.06] group"
      >
        <Image
          src="/1 (1).png"
          alt="Konfeksi Platform Hero"
          width={1200}
          height={675}
          className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      {/* Quick specs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-6 flex flex-wrap gap-1.5 justify-center"
      >
        {['Laravel MVC', 'SQLite', 'Tailwind CSS', 'Alpine.js', 'Chart.js', 'Breeze Auth'].map((tech) => (
          <span
            key={tech}
            className="text-[9px] px-2.5 py-1 border border-white/[0.06] rounded-full text-neutral-500 font-medium"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </motion.section>
  );
}

/* ============ TECH & SCOPE ============ */
function TechScopeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-16 border-t border-white/[0.04]">
      <div className="text-center mb-10">
        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">Technical Overview</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Architecture &{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">Execution.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-3 mb-3">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-6 hover:border-white/10 transition-all"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center">
              <Code2 className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Technology Stack</h3>
              <p className="text-[10px] text-neutral-600">Core infrastructure</p>
            </div>
          </div>
          <p className="text-[11px] text-neutral-500 leading-relaxed mb-4">
            Backend dibangun sebagai Mini ERP menggunakan <span className="text-white font-medium">Laravel (PHP)</span> dengan database <span className="text-white font-medium">SQLite</span>. Autentikasi dikelola oleh <span className="text-white font-medium">Laravel Breeze</span>.
            UI dirender melalui <span className="text-white font-medium">Blade Template</span> yang didesain menggunakan <span className="text-white font-medium">Tailwind CSS</span>. Interaktivitas dinamis (dropdown, drawer, filter) ditangani oleh <span className="text-white font-medium">Alpine.js</span>, didukung <span className="text-white font-medium">Chart.js</span> untuk analitik visual dan <span className="text-white font-medium">QR Code generator</span> untuk keperluan logistik.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['Laravel 11', 'SQLite', 'Tailwind CSS', 'Alpine.js 3.x', 'Chart.js', 'QR Code & PDF Gen'].map((tech) => (
              <span key={tech} className="text-[9px] px-2.5 py-1 bg-white/[0.03] border border-white/[0.06] rounded-lg text-neutral-400 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scope */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-6 hover:border-white/10 transition-all"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center">
              <Server className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Scope of Work</h3>
              <p className="text-[10px] text-neutral-600">Key deliverables</p>
            </div>
          </div>
          <ul className="space-y-2.5">
            {[
              'Merancang Landing Page publik dengan integrasi WhatsApp Deeplink untuk auto-fill form pesanan.',
              'Membangun modul Order Management dengan multi-status workflow dan auto-generate invoice & SPK.',
              'Mengembangkan Employee Management dengan sistem upah piece-rate (harian), payroll, dan tracking kasbon.',
              'Implementasi modul Keuangan (Finance) lengkap untuk HPP, Profit & Loss (P&L), dan pelacakan Piutang.',
              'Integrasi modul Pengiriman (Shipping) dengan Packing List berbasis QR Code dan cetak PDF Surat Jalan.',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-[11px] text-neutral-500 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/60 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ============ INTERFACE SHOWCASE ============ */
function InterfaceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  // Pakai gambar 1 (2).png sampai 1 (5).png
  const screenshots = [
    { src: '/1 (2).png', alt: 'Public Landing & Catalog' },
    { src: '/1 (3).png', alt: 'Admin Dashboard v2 & Analytics' },
    { src: '/1 (4).png', alt: 'Order & SPK Management' },
    { src: '/1 (5).png', alt: 'Finance & Payroll Module' },
  ];

  return (
    <section ref={ref} id="interface" className="py-16 border-t border-white/[0.04]">
      <div className="text-center mb-10">
        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">Visual Overview</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Platform{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">Interface.</span>
        </h2>
        <p className="text-xs text-neutral-500 mt-3 max-w-md mx-auto leading-relaxed">
          A closer look at the design language and user experience across key touchpoints.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {screenshots.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative rounded-2xl overflow-hidden border border-white/[0.04] hover:border-white/10 transition-all group bg-neutral-950"
          >
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[9px] px-2 py-0.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full text-neutral-400 font-medium">
                {img.alt}
              </span>
            </div>
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={450}
              className="w-full aspect-video object-cover object-top group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============ CAPABILITIES ============ */
function CapabilitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const capabilities = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Automation',
      desc: 'Setiap CTA pada katalog publik terhubung langsung ke WhatsApp admin dengan template pesan dan detail produk (nama & bahan) auto-fill.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
    },
    {
      icon: LayoutDashboard,
      title: 'Smart Dashboard KPI',
      desc: 'Visualisasi grafik penjualan bulanan menggunakan Chart.js serta widget status produksi real-time dan tracking piutang pelanggan.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
    },
    {
      icon: Scissors,
      title: 'Production Workflow',
      desc: 'Manajemen order multi-item dengan flow spesifik: menunggu DP → antre → potong → jahit → QC → pengiriman.',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
    },
    {
      icon: Database,
      title: 'Piece-rate Employee System',
      desc: 'Pencatatan input kerja harian karyawan (qty good/reject), rekap upah periode, hingga sistem manajemen kasbon (hutang).',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
    },
    {
      icon: Calculator,
      title: 'Comprehensive Finance',
      desc: 'Kalkulasi HPP (Harga Pokok Produksi) per order, pelacakan DP otomatis, Profit & Loss (P&L), dan expense umum secara akurat.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
    },
    {
      icon: Truck,
      title: 'QR Code Shipping',
      desc: 'Cetak Packing List ber-QR code dan Surat Jalan profesional via PDF, ditambah fitur form scan resi logistik.',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/20',
    },
  ];

  return (
    <section ref={ref} className="py-16 border-t border-white/[0.04]">
      <div className="text-center mb-10">
        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">Core ERP Modules</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          System{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">Capabilities.</span>
        </h2>
        <p className="text-xs text-neutral-500 mt-3 max-w-md mx-auto leading-relaxed">
          Modul operasional *end-to-end* yang mendigitalisasi proses konveksi dari order masuk hingga pengiriman.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {capabilities.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-5 hover:border-white/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className={`w-9 h-9 ${cap.bg} border ${cap.border} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-4 h-4 ${cap.color}`} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{cap.title}</h3>
                <p className="text-[11px] text-neutral-500 leading-relaxed">{cap.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ============ CTA ============ */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-20 border-t border-white/[0.04] relative overflow-hidden">
      <motion.div style={{ scale, opacity }} className="max-w-2xl mx-auto text-center">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="w-5 h-5 mx-auto mb-4 text-neutral-500" />
        </motion.div>

        <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.15]">
          Have a similar ERP project{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            in mind?
          </span>
        </h2>

        <p className="text-xs text-neutral-500 mt-3 max-w-sm mx-auto leading-relaxed">
          I'd love to discuss how we can build a tailored management system to streamline your business operations.
        </p>

        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-all text-xs"
          >
            Start a Conversation
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-white/10 px-5 py-2.5 rounded-full hover:border-white/30 hover:bg-white/5 transition-all text-xs text-neutral-400"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to Portfolio
          </Link>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-white/[0.01] rounded-full blur-[80px]" />
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <p className="text-[10px] text-neutral-600">© 2026 Syahid Maisya N.</p>
          <span className="text-neutral-800">·</span>
          <p className="text-[10px] text-neutral-700">Konfeksi Mini ERP Case Study</p>
        </div>

        <div className="flex gap-5 text-[10px] text-neutral-600">
          {['GitHub', 'LinkedIn', 'Email'].map((label) => (
            <Link key={label} href="#" className="hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}