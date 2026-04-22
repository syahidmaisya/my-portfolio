'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Palette,
  Database,
  Globe,
  Layers3,
  Wrench,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    icon: Code2,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    description:
      'Modern, scalable web applications built with clean architecture, strong performance, and maintainable code.',
    points: [
      'Custom website development',
      'Responsive frontend implementation',
      'Performance-focused builds',
      'Clean and maintainable structure',
    ],
  },
  {
    title: 'UI Implementation',
    icon: Palette,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    description:
      'Pixel-precise interfaces transformed from ideas or designs into responsive, polished user experiences.',
    points: [
      'Responsive layout implementation',
      'Modern interface styling',
      'Design-to-code conversion',
      'Consistent component structure',
    ],
  },
  {
    title: 'Backend Development',
    icon: Database,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    description:
      'Robust backend systems with secure authentication, structured database design, and reliable business logic.',
    points: [
      'Authentication systems',
      'CRUD & admin panel features',
      'Database architecture',
      'Business logic implementation',
    ],
  },
  {
    title: 'Full-Stack Solutions',
    icon: Layers3,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    description:
      'End-to-end product development covering frontend, backend, database, and deployment-ready workflows.',
    points: [
      'Frontend + backend integration',
      'API connection and data flow',
      'Complete system development',
      'Production-ready solutions',
    ],
  },
  {
    title: 'Company Profile Website',
    icon: Globe,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    description:
      'Professional websites designed to strengthen brand presence, communicate credibility, and support business growth.',
    points: [
      'Landing page development',
      'Company profile websites',
      'SEO-friendly structure',
      'Fast and responsive pages',
    ],
  },
  {
    title: 'Maintenance & Improvement',
    icon: Wrench,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    description:
      'Ongoing support to improve stability, fix issues, enhance features, and keep your website running smoothly.',
    points: [
      'Bug fixing and troubleshooting',
      'Feature enhancement',
      'Code refinement',
      'Performance improvements',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
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
                  item === 'Services' ? 'text-white' : ''
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
            Let's Talk →
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-20">
        <HeroSection />
        <ServicesGrid />
        <ProcessSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

function HeroSection() {
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
        <Sparkles className="w-3 h-3" /> Services
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
      >
        Solutions designed to{' '}
        <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
          create impact.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm text-neutral-400 leading-relaxed max-w-xl mx-auto"
      >
        I help businesses and individuals build modern digital products through
        thoughtful design implementation, solid backend systems, and scalable
        full-stack development.
      </motion.p>
    </motion.section>
  );
}

function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section ref={ref} className="py-16 border-t border-white/[0.04]">
      <div className="text-center mb-10">
        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">
          Expertise
        </p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          What I can{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            help with.
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-5 hover:border-white/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div
                  className={`w-9 h-9 ${service.bg} border ${service.border} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-4 h-4 ${service.color}`} />
                </div>

                <h3 className="text-sm font-bold text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-[11px] text-neutral-500 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/[0.04]">
                  {service.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-[10px] text-neutral-400 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      desc: 'Understanding your goals, audience, and project requirements before writing a single line of code.',
    },
    {
      number: '02',
      title: 'Planning',
      desc: 'Defining the structure, technical approach, and workflow needed to execute the project efficiently.',
    },
    {
      number: '03',
      title: 'Development',
      desc: 'Building the product with attention to performance, maintainability, and user experience.',
    },
    {
      number: '04',
      title: 'Launch & Improve',
      desc: 'Testing, refining, and preparing the final result for deployment and long-term growth.',
    },
  ];

  return (
    <section ref={ref} className="py-16 border-t border-white/[0.04]">
      <div className="text-center mb-10">
        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">
          Process
        </p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          A simple and focused{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            workflow.
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-5 hover:border-white/10 transition-all"
          >
            <p className="text-[10px] text-neutral-600 uppercase tracking-[0.15em] mb-3">
              Step {step.number}
            </p>
            <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

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
          <Sparkles className="w-5 h-5 mx-auto mb-4 text-neutral-500" />
        </motion.div>

        <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.15]">
          Need a digital product{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            built properly?
          </span>
        </h2>

        <p className="text-xs text-neutral-500 mt-3 max-w-sm mx-auto leading-relaxed">
          If you have a website, system, or web application in mind, I’d be glad
          to help turn it into a clean, reliable, and production-ready solution.
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
            View Projects
          </Link>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-white/[0.01] rounded-full blur-[80px]" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <p className="text-[10px] text-neutral-600">© 2026 Syahid Maisya N.</p>
          <span className="text-neutral-800">·</span>
          <p className="text-[10px] text-neutral-700">
            Designed & developed with precision.
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