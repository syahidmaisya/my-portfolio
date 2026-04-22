'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  FolderGit2,
  Sparkles,
  MonitorSmartphone,
  Server,
  Globe2,
  BarChart3,
  Box,
  Code2,
  ShoppingBag,
  Shirt, // Icon baru untuk website konfeksi
} from 'lucide-react';

/* ============ PROJECT DATA ============ */
const projects = [
  {
    id: 'ka-kaos',
    title: 'KA-KAOS E-Commerce',
    category: 'Full-Stack Web Application',
    icon: MonitorSmartphone,
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/10',
    description:
      'A custom apparel marketplace featuring intelligent cart logic, real-time shipping integration, and a comprehensive admin dashboard.',
    tech: ['Next.js', 'Laravel', 'Tailwind CSS', 'MySQL'],
    link: '/projects/project/ka-kaos',
    image: '/Screenshot.png',
    isFeatured: true,
  },
  {
    id: 'ecommerce-levis',
    title: "E-Commerce Levi's",
    category: 'Full-Stack E-Commerce',
    icon: ShoppingBag,
    iconColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    bgColor: 'bg-amber-500/10',
    description:
      "Platform belanja online modern untuk ritel pakaian denim & kasual bergaya Levi's — dibangun dengan Laravel, Alpine.js, dan Tailwind CSS. Dilengkapi Midtrans, POS, dan admin dashboard lengkap.",
    tech: ['Laravel', 'Alpine.js', 'Tailwind CSS', 'MySQL', 'Midtrans'],
    link: '/projects/project/ecommerce-levis',
    image: '/Picture1.png',
    isFeatured: false,
  },
  {
    id: 'website-konfeksi',
    title: 'Premium Konfeksi Platform',
    category: 'Corporate & Order System',
    icon: Shirt,
    iconColor: 'text-indigo-400',
    borderColor: 'border-indigo-500/20',
    bgColor: 'bg-indigo-500/10',
    description:
      'Platform company profile dan sistem pemesanan custom untuk industri konfeksi. Dilengkapi galeri portofolio interaktif dan fitur pelacakan progres produksi baju.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL'],
    link: '/projects/project/konfeksi',
    image: '/Screenshot.png', // Ganti dengan gambar website konfeksi kamu kalau ada (misal: '/konfeksi.png')
    isFeatured: false,
  },
  {
    id: 'shipping-api',
    title: 'Logistics API Integration',
    category: 'Backend Microservice',
    icon: Box,
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-500/10',
    description:
      'An integrated backend system for precise shipment tracking, dynamic rate calculation, and courier data synchronization.',
    tech: ['PHP', 'Laravel', 'REST API', 'Postman'],
    link: '#',
    image: '/Screenshot.png',
    isFeatured: false,
  },
  {
    id: 'portfolio-web',
    title: 'Developer Portfolio',
    category: 'Frontend Architecture',
    icon: Globe2,
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    bgColor: 'bg-purple-500/10',
    description:
      'An interactive portfolio with fluid animations, optimized performance, and premium aesthetics built on the React ecosystem.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: '/',
    image: '/Screenshot.png',
    isFeatured: false,
  },
  {
    id: 'pos-system',
    title: 'Point of Sales System',
    category: 'Enterprise Software',
    icon: Server,
    iconColor: 'text-orange-400',
    borderColor: 'border-orange-500/20',
    bgColor: 'bg-orange-500/10',
    description:
      'A web-based POS and inventory management system with real-time stock tracking and automated digital receipt generation.',
    tech: ['Laravel', 'Bootstrap', 'MySQL', 'jQuery'],
    link: '#',
    image: '/Screenshot.png',
    isFeatured: false,
  },
  {
    id: 'dashboard-analytics',
    title: 'Analytics Dashboard',
    category: 'Data Visualization',
    icon: BarChart3,
    iconColor: 'text-pink-400',
    borderColor: 'border-pink-500/20',
    bgColor: 'bg-pink-500/10',
    description:
      'An interactive dashboard for monitoring key business metrics, visualizing data trends, and generating automated reports.',
    tech: ['Laravel', 'JavaScript', 'Chart.js', 'MySQL'],
    link: '#',
    image: '/Screenshot.png',
    isFeatured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">

      <main className="max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-20">
        <HeaderSection />
        <FeaturedSection />
        <ProjectGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

/* ============ HEADER ============ */
function HeaderSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] text-neutral-400 uppercase tracking-[0.15em] mb-5"
      >
        <FolderGit2 className="w-3 h-3" /> Project Showcase
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
      >
        Selected{' '}
        <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
          Works.
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm text-neutral-400 leading-relaxed max-w-lg mx-auto"
      >
        A curated collection of projects where strategy, design, and engineering
        converge to deliver impactful digital solutions.
      </motion.p>
    </motion.section>
  );
}

/* ============ FEATURED PROJECT ============ */
function FeaturedSection() {
  const featured = projects.find((p) => p.isFeatured);
  if (!featured) return null;
  const FeaturedIcon = featured.icon;
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-10"
    >
      <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-4">
        — Featured
      </p>
      <Link href={featured.link} className="block group">
        <div className="bg-neutral-950 border border-white/[0.04] hover:border-white/10 rounded-2xl overflow-hidden transition-all">
          <div className="grid md:grid-cols-2">
            <div className="relative h-52 md:h-64 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 hidden md:block" />
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/90 text-black rounded-full text-[9px] font-semibold">
                  <Sparkles className="w-2.5 h-2.5" /> Featured
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-1.5 mb-2">
                <FeaturedIcon className={`w-3.5 h-3.5 ${featured.iconColor}`} />
                <span className="text-[9px] text-neutral-500 uppercase tracking-[0.15em] font-medium">
                  {featured.category}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                {featured.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-3">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] px-2 py-0.5 border border-white/[0.06] rounded-full text-neutral-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-neutral-500 group-hover:text-white transition-colors">
                View Case Study
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.section>
  );
}

/* ============ PROJECT GRID ============ */
function ProjectGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const otherProjects = projects.filter((p) => !p.isFeatured);
  return (
    <section ref={ref} className="mb-16">
      <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-4">
        — All Projects
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {otherProjects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link href={project.link} className="block group h-full">
                <div className="bg-neutral-950 border border-white/[0.04] rounded-2xl overflow-hidden hover:border-white/10 transition-all h-full flex flex-col">
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div
                        className={`w-5 h-5 ${project.bgColor} border ${project.borderColor} rounded-md flex items-center justify-center`}
                      >
                        <Icon className={`w-2.5 h-2.5 ${project.iconColor}`} />
                      </div>
                      <span className="text-[9px] text-neutral-600 uppercase tracking-[0.12em] font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3 pt-3 border-t border-white/[0.04]">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[8px] px-2 py-0.5 bg-white/[0.03] border border-white/[0.06] rounded-full text-neutral-600 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-[10px] text-neutral-600 group-hover:text-white transition-colors font-medium">
                        View Details
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                        <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-black transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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
    <section
      ref={ref}
      className="py-20 border-t border-white/[0.04] relative overflow-hidden"
    >
      <motion.div style={{ scale, opacity }} className="max-w-2xl mx-auto text-center">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Code2 className="w-5 h-5 mx-auto mb-4 text-neutral-500" />
        </motion.div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.15]">
          Have a project{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            worth building?
          </span>
        </h2>
        <p className="text-xs text-neutral-500 mt-3 max-w-sm mx-auto leading-relaxed">
          I&apos;m always excited to take on new challenges. Let&apos;s discuss how we can
          turn your concept into a polished, production-ready product.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-all text-xs"
          >
            Start a Conversation
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-white/10 px-5 py-2.5 rounded-full hover:border-white/30 hover:bg-white/5 transition-all text-xs text-neutral-400"
          >
            Back to Home
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
          <p className="text-[10px] text-neutral-700">
            Designed &amp; developed with precision.
          </p>
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