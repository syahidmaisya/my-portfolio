'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Palette,
  Database,
  Mail,
  Github,
  Linkedin,
  Sparkles,
} from 'lucide-react';
import {
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
} from 'react-icons/si';

export default function Home() {
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
                className="hover:text-white transition-colors duration-300"
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

      <HeroSection />
      <MarqueeSection />
      <IntroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturedProject />
      <TechStackSection />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ============ HERO ============ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center overflow-hidden">
      <motion.div style={{ opacity, y }} className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="shrink-0"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0%, white 10%, transparent 20%)',
                  opacity: 0.08,
                }}
              />
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-white/10">
                {/* FIX: pakai foto.jpg sesuai file di /public */}
                <Image
                  src="/foto.jpg"
                  alt="Syahid Maisya"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute bottom-1 right-1 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] mb-3"
            >
              Full-Stack Developer · Bandung, Indonesia
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Transforming ideas into{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                  exceptional
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-white to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>{' '}
              digital products.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm text-neutral-400 mt-4 max-w-lg leading-relaxed"
            >
              I specialize in crafting high-performance web applications with meticulous attention
              to detail, seamless user experiences, and scalable architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <Link
                href="/projects"
                className="bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-neutral-200 transition-all"
              >
                View Portfolio
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/contact"
                className="border border-white/10 text-xs font-medium px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                Start a Project
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-5 flex gap-2 justify-center md:justify-start"
            >
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Mail, label: 'Email' },
              ].map(({ icon: Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  className="p-2 border border-white/[0.06] rounded-full text-neutral-600 hover:text-white hover:border-white/20 transition-all"
                >
                  <Icon className="w-3 h-3" />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-white/20" />
        <span className="text-[9px] text-neutral-600 uppercase tracking-widest">Scroll</span>
      </motion.div>

      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
    </section>
  );
}

/* ============ MARQUEE ============ */
function MarqueeSection() {
  return (
    <div className="border-y border-white/[0.04] py-4 overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -800] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-8 items-center text-sm font-medium text-neutral-800">
            <span>Next.js</span>
            <span className="text-neutral-700">·</span>
            <span>Laravel</span>
            <span className="text-neutral-700">·</span>
            <span>React</span>
            <span className="text-neutral-700">·</span>
            <span>TypeScript</span>
            <span className="text-neutral-700">·</span>
            <span>Tailwind CSS</span>
            <span className="text-neutral-700">·</span>
            <span>MySQL</span>
            <span className="text-neutral-700">·</span>
            <span>REST API</span>
            <span className="text-neutral-700">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ============ INTRO ============ */
function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const words =
    'Every pixel is intentional. Every interaction is considered. I build digital experiences that elevate brands and engage users.'.split(
      ' '
    );

  return (
    <section ref={ref} className="min-h-[50vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl text-center">
        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-5">— Approach</p>
        <p className="text-xl md:text-3xl font-semibold tracking-tight leading-[1.4]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <motion.span
                key={i}
                style={{
                  opacity: useTransform(scrollYProgress, [start * 0.7 + 0.15, end * 0.7 + 0.15], [
                    0.1,
                    1,
                  ]),
                }}
                className="inline-block mr-[0.35em]"
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}

/* ============ STATS ============ */
function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const stats = [
    { value: '40+', label: 'Projects Delivered' },
    { value: '25+', label: 'Satisfied Clients' },
    { value: '3+', label: 'Years of Experience' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section ref={ref} className="py-16 px-6 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="text-center py-4"
          >
            <p className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-b from-white to-neutral-600 bg-clip-text text-transparent">
              {stat.value}
            </p>
            <p className="text-[9px] text-neutral-600 mt-1 uppercase tracking-[0.15em]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============ SERVICES ============ */
function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      desc: 'Engineered for performance, built for scale. Modern web solutions using cutting-edge frameworks.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Intuitive interfaces that captivate users and drive meaningful engagement with your product.',
    },
    {
      icon: Database,
      title: 'Full Stack Solutions',
      desc: 'Complete end-to-end development with robust backend systems and elegant frontend experiences.',
    },
  ];

  return (
    <section className="py-20 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">Expertise</p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Services crafted to{' '}
            <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
              deliver results.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-6 hover:border-white/10 transition-all group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="w-9 h-9 bg-black border border-white/[0.06] rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-base font-semibold mb-1.5">{service.title}</h3>
        <p className="text-xs text-neutral-500 leading-relaxed">{service.desc}</p>
        <div className="mt-4 text-[10px] text-neutral-600 group-hover:text-white transition-colors flex items-center gap-1">
          Explore <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  );
}

/* ============ FEATURED PROJECT ============ */
function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="py-20 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-6 text-center mb-10">
        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">Portfolio</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Selected{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            case studies.
          </span>
        </h2>
        <p className="text-xs text-neutral-500 mt-3 max-w-md mx-auto leading-relaxed">
          A curated collection of projects where strategy, design, and engineering come together.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Main */}
        {/* NOTE: kalau kamu pakai route /projects/project/ka-kaos, link ini juga harus kamu samain */}
        <Link href="/projects/project/ka-kaos" className="block group">
          <motion.div
            ref={ref}
            className="bg-neutral-950 border border-white/[0.04] hover:border-white/10 rounded-2xl overflow-hidden transition-all"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-52 md:h-64 overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0">
                  <Image
                    src="/Screenshot.png"
                    alt="KA-KAOS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 md:block hidden" />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-500 mb-2">
                  E-Commerce Platform
                </p>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">KA-KAOS</h3>
                <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                  A premium custom apparel marketplace featuring intuitive product customization,
                  streamlined checkout flow, and real-time order management.
                </p>

                <div className="flex gap-1.5 mt-3">
                  {['Laravel', 'MySQL', 'Tailwind'].map((t) => (
                    <span
                      key={t}
                      className="text-[9px] px-2 py-0.5 border border-white/[0.06] rounded-full text-neutral-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs text-neutral-500 group-hover:text-white transition-colors">
                  View Case Study{' '}
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Secondary */}
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          {[
            {
              title: 'Analytics Dashboard',
              tag: 'SaaS Application',
              desc: 'Real-time data visualization platform with actionable insights for business decision-making.',
              img: '/project2.png',
            },
            {
              title: 'Brand Landing Page',
              tag: 'Marketing Site',
              desc: 'High-converting landing page engineered for maximum user engagement and lead generation.',
              img: '/project3.png',
            },
          ].map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white border border-white/[0.06] hover:border-white/20 px-5 py-2 rounded-full transition-all"
          >
            View All Projects
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="bg-neutral-950 border border-white/[0.04] rounded-2xl overflow-hidden hover:border-white/10 transition-all group"
    >
      <div className="relative h-32 overflow-hidden">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
      </div>
      <div className="p-5">
        <p className="text-[9px] uppercase tracking-[0.15em] text-neutral-600 mb-1">{project.tag}</p>
        <h4 className="text-sm font-bold mb-1">{project.title}</h4>
        <p className="text-[11px] text-neutral-500 leading-relaxed">{project.desc}</p>
      </div>
    </motion.div>
  );
}

/* ============ TECH STACK ============ */
function TechStackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const techs = [
    { Icon: SiLaravel, name: 'Laravel' },
    { Icon: SiReact, name: 'React' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiTailwindcss, name: 'Tailwind' },
    { Icon: SiMysql, name: 'MySQL' },
  ];

  return (
    <section ref={ref} className="py-20 px-6 border-t border-white/[0.04]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">Technology</p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Powered by{' '}
            <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
              industry-leading tools.
            </span>
          </h2>
          <p className="text-xs text-neutral-500 mt-3 max-w-sm mx-auto leading-relaxed">
            I leverage the most reliable and performant technologies to build solutions that stand
            the test of time.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ y: -3, scale: 1.05 }}
              className="aspect-square bg-neutral-950 border border-white/[0.04] rounded-xl flex flex-col items-center justify-center gap-2 hover:border-white/15 transition-all"
            >
              <tech.Icon className="w-5 h-5 text-neutral-300" />
              <p className="text-[9px] text-neutral-600">{tech.name}</p>
            </motion.div>
          ))}
        </div>
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
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-28 px-6 border-t border-white/[0.04] relative overflow-hidden">
      <motion.div style={{ scale, opacity }} className="max-w-2xl mx-auto text-center">
        <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <Sparkles className="w-6 h-6 mx-auto mb-4 text-neutral-400" />
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
          Ready to bring your{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            vision to life?
          </span>
        </h2>

        <p className="text-xs text-neutral-500 mt-4 max-w-sm mx-auto leading-relaxed">
          Whether it&apos;s a new product, a redesign, or a complex web application — I&apos;m here to
          help you build something remarkable. Let&apos;s collaborate.
        </p>

        <div className="mt-7 flex gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-all text-xs"
          >
            Start a Conversation
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* FIX: mailto jangan pakai "<mailto:...>" */}
          <a
            href="<mailto:hello@syahid.dev>"
            className="inline-flex items-center gap-2 border border-white/10 px-6 py-2.5 rounded-full hover:border-white/30 hover:bg-white/5 transition-all text-xs text-neutral-400"
          >
            <Mail className="w-3.5 h-3.5" />
            hello@syahid.dev
          </a>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.015] rounded-full blur-[80px]" />
    </section>
  );
}

/* ============ Footer ============ */
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
          {[
            { icon: Github, label: 'GitHub' },
            { icon: Linkedin, label: 'LinkedIn' },
            { icon: Mail, label: 'Email' },
          ].map(({ icon: Icon, label }) => (
            <Link key={label} href="#" className="hover:text-white transition-colors flex items-center gap-1">
              <Icon className="w-3 h-3" /> {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}