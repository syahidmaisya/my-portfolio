'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  MapPin,
  Download,
  Sparkles,
  Terminal,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import {
  SiLaravel,
  SiReact,
  SiPhp,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiWordpress,
  SiGithub,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si';

export default function AboutPage() {
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
                  item === 'About' ? 'text-white' : ''
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
        <StorySection />
        <ExperienceSection />
        <SkillsSection />
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
      className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-20"
    >
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="shrink-0"
      >
        <div className="relative w-52 h-64 md:w-56 md:h-72 rounded-3xl overflow-hidden border border-white/[0.06] group">
          {/* FIX: ganti /profile.jpg -> /foto.jpg */}
          <Image
            src="/foto.jpg"
            alt="Syahid Maisya"
            fill
            priority
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Info overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <h2 className="text-base font-bold text-white leading-tight">Syahid Maisya N.</h2>
            <div className="flex items-center gap-1.5 text-neutral-300 text-[10px] mt-1">
              <MapPin className="w-3 h-3" /> West Java, Indonesia
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text */}
      <div className="text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] text-neutral-400 uppercase tracking-[0.15em] mb-5"
        >
          <Sparkles className="w-3 h-3" /> Full-Stack Web Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
        >
          Passionate about crafting{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            meaningful
          </span>{' '}
          digital solutions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-neutral-400 leading-relaxed max-w-lg mb-6"
        >
          Informatics Engineering graduate with hands-on experience in building and managing modern
          web applications. I specialize in <span className="text-white font-medium">Laravel</span>,{' '}
          <span className="text-white font-medium">PHP</span>,{' '}
          <span className="text-white font-medium">JavaScript</span>, and{' '}
          <span className="text-white font-medium">MySQL</span> — focused on delivering clean,
          performant, and user-centric solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-3 justify-center md:justify-start"
        >
          <a
            href="/cv-syahid.pdf"
            className="bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-neutral-200 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume
          </a>

          <Link
            href="/contact"
            className="border border-white/10 text-xs font-medium px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:border-white/30 hover:bg-white/5 transition-all text-neutral-400"
          >
            Get in Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ============ STORY / PHILOSOPHY ============ */
function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const words =
    'I believe great software is built at the intersection of thoughtful design, clean architecture, and genuine empathy for the end user.'.split(
      ' '
    );

  return (
    <section ref={ref} className="py-16 border-t border-white/[0.04]">
      <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-6 text-center">
        — My Philosophy
      </p>

      <p className="text-lg md:text-2xl font-semibold tracking-tight leading-[1.4] text-center max-w-3xl mx-auto">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <motion.span
              key={i}
              style={{
                opacity: useTransform(scrollYProgress, [start * 0.6 + 0.2, end * 0.6 + 0.2], [
                  0.1,
                  1,
                ]),
              }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          );
        })}
      </p>
    </section>
  );
}

/* ============ EXPERIENCE & EDUCATION ============ */
function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-16 border-t border-white/[0.04]">
      <div className="text-center mb-12">
        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">Background</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Experience &{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Education.
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-6 hover:border-white/10 transition-all"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Professional Experience</h3>
              <p className="text-[10px] text-neutral-600">Career journey</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-5 border-l border-white/[0.06]">
            <div className="relative pb-0">
              <span className="absolute -left-[22.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-black border border-emerald-500 ring-2 ring-neutral-950" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                <h4 className="text-sm font-bold text-white">Web Developer Intern</h4>
                <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded-full text-[9px] text-emerald-400 font-semibold uppercase tracking-widest flex items-center gap-1 w-max">
                  <Calendar className="w-2.5 h-2.5" /> Jun – Aug 2023
                </span>
              </div>

              <p className="text-xs text-neutral-400 font-medium mb-3 flex items-center gap-1.5">
                <MapPin className="w-3 h-3" /> Jasa Website Biz · Buah Batu, Bandung
              </p>

              <ul className="space-y-2">
                {[
                  'Developed and maintained client websites using Laravel and WordPress, handling both content management and custom feature implementation.',
                  'Engineered tailored web solutions aligned with specific business requirements and user workflows.',
                  'Performed comprehensive testing and debugging to optimize website performance and reliability.',
                  'Collaborated within a cross-functional team to ensure on-time, high-quality project delivery.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-[11px] text-neutral-500 leading-relaxed">
                    <span className="text-emerald-500/60 mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-6 hover:border-white/10 transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Education</h3>
                <p className="text-[10px] text-neutral-600">Academic background</p>
              </div>
            </div>

            <div className="pl-5 border-l border-white/[0.06] relative">
              <span className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-black border border-blue-500 ring-2 ring-neutral-950" />
              <h4 className="text-sm font-bold text-white mb-1">Informatics Engineering</h4>
              <p className="text-xs text-blue-400 font-medium mb-1">International Women University</p>
              <p className="text-[10px] text-neutral-600 uppercase tracking-widest flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5" /> Bachelor&apos;s Degree · 2020 – 2025
              </p>
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-6 hover:border-white/10 transition-all flex-grow"
          >
            <p className="text-[10px] text-neutral-600 uppercase tracking-[0.15em] mb-4">At a glance</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '3+', label: 'Years Coding' },
                { value: '40+', label: 'Projects' },
                { value: '25+', label: 'Clients' },
                { value: '100%', label: 'Commitment' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center py-3 bg-white/[0.02] border border-white/[0.04] rounded-xl"
                >
                  <p className="text-lg font-bold bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-[9px] text-neutral-600 uppercase tracking-widest mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============ SKILLS ============ */
function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const skillGroups = [
    {
      title: 'Languages',
      color: 'purple',
      skills: [
        { icon: SiPhp, name: 'PHP', color: '#777BB4' },
        { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
        { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
        { icon: null, name: 'HTML/CSS', color: null },
      ],
    },
    {
      title: 'Frameworks',
      color: 'blue',
      skills: [
        { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
        { icon: SiReact, name: 'React', color: '#61DAFB' },
        { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
        { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
        { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
      ],
    },
    {
      title: 'Tools & Platforms',
      color: 'emerald',
      skills: [
        { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
        { icon: SiWordpress, name: 'WordPress', color: '#21759B' },
        { icon: SiGithub, name: 'Git/GitHub', color: '#ffffff' },
        { icon: null, name: 'SEO', color: null },
      ],
    },
  ];

  return (
    <section ref={ref} className="py-16 border-t border-white/[0.04]">
      <div className="text-center mb-10">
        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">Capabilities</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Technical{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            proficiency.
          </span>
        </h2>
        <p className="text-xs text-neutral-500 mt-3 max-w-md mx-auto leading-relaxed">
          A versatile toolkit refined through years of real-world development, enabling me to deliver robust and elegant solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: gi * 0.08 }}
            className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-5 hover:border-white/10 transition-all"
          >
            <div className="flex items-center gap-2 mb-4">
              <Terminal
                className={`w-3.5 h-3.5 ${
                  group.color === 'purple'
                    ? 'text-purple-400'
                    : group.color === 'blue'
                      ? 'text-blue-400'
                      : 'text-emerald-400'
                }`}
              />
              <p className="text-[10px] text-neutral-500 uppercase tracking-[0.15em] font-semibold">
                {group.title}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill, si) => (
                <motion.div
                  key={si}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.04 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:border-white/15 transition-all"
                >
                  {skill.icon && (
                    <skill.icon className="w-3 h-3" style={{ color: skill.color || undefined }} />
                  )}
                  <span className="text-[10px] text-neutral-300 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
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
        <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <Sparkles className="w-5 h-5 mx-auto mb-4 text-neutral-500" />
        </motion.div>

        <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.15]">
          Interested in working{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            together?
          </span>
        </h2>

        <p className="text-xs text-neutral-500 mt-3 max-w-sm mx-auto leading-relaxed">
          I&apos;m always open to discussing new opportunities, creative projects, or potential collaborations.
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
            href="/projects"
            className="inline-flex items-center gap-2 border border-white/10 px-5 py-2.5 rounded-full hover:border-white/30 hover:bg-white/5 transition-all text-xs text-neutral-400"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Projects
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
          <p className="text-[10px] text-neutral-700">Designed & developed with precision.</p>
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