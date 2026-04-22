'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, BookOpen, Sparkles, Clock3, Tag, PenSquare } from 'lucide-react';

const featuredPost = {
  title: 'Building Scalable Web Applications with Laravel',
  excerpt:
    'A practical perspective on structuring modern Laravel applications for maintainability, performance, and long-term growth.',
  category: 'Development',
  date: 'April 2026',
  readTime: '6 min read',
  image: '/Screenshot.png',
  slug: '/blog/scalable-web-applications-with-laravel',
};

const posts = [
  {
    title: 'Why Clean UI Improves Product Trust',
    excerpt:
      'Thoughtful interface design does more than look good — it directly influences credibility, clarity, and conversion.',
    category: 'Design',
    date: 'April 2026',
    readTime: '4 min read',
    slug: '/blog/why-clean-ui-improves-product-trust',
  },
  {
    title: 'How I Approach Full-Stack Project Architecture',
    excerpt:
      'A concise breakdown of how I plan application structure, database relationships, and development workflow.',
    category: 'Engineering',
    date: 'March 2026',
    readTime: '5 min read',
    slug: '/blog/how-i-approach-fullstack-project-architecture',
  },
  {
    title: 'Optimizing Website Performance for Better UX',
    excerpt:
      'Performance is part of the experience. Here are practical ways to make websites feel faster and more reliable.',
    category: 'Performance',
    date: 'March 2026',
    readTime: '5 min read',
    slug: '/blog/optimizing-website-performance-for-better-ux',
  },
  {
    title: 'Turning Business Requirements into Technical Solutions',
    excerpt:
      'Bridging the gap between what stakeholders need and what the system should actually deliver.',
    category: 'Strategy',
    date: 'February 2026',
    readTime: '7 min read',
    slug: '/blog/turning-business-requirements-into-technical-solutions',
  },
  {
    title: 'Responsive Design Principles That Still Matter',
    excerpt:
      'A reminder that responsive design is not only about breakpoints, but also about hierarchy, readability, and flow.',
    category: 'Frontend',
    date: 'February 2026',
    readTime: '4 min read',
    slug: '/blog/responsive-design-principles-that-still-matter',
  },
  {
    title: 'What Makes a Portfolio Feel Professional',
    excerpt:
      'A few small but important decisions that make a personal website feel more polished, intentional, and credible.',
    category: 'Personal Branding',
    date: 'January 2026',
    readTime: '3 min read',
    slug: '/blog/what-makes-a-portfolio-feel-professional',
  },
];

export default function BlogPage() {
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
                  item === 'Blog' ? 'text-white' : ''
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
        <FeaturedPostSection />
        <PostsGridSection />
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
        <BookOpen className="w-3 h-3" /> Blog
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
      >
        Thoughts, insights, and{' '}
        <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
          practical ideas.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm text-neutral-400 leading-relaxed max-w-xl mx-auto"
      >
        A collection of notes on web development, design thinking, performance,
        and building digital products with clarity and purpose.
      </motion.p>
    </motion.section>
  );
}

function FeaturedPostSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-10"
    >
      <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-4">— Featured Post</p>

      <Link href={featuredPost.slug} className="block group">
        <div className="bg-neutral-950 border border-white/[0.04] hover:border-white/10 rounded-2xl overflow-hidden transition-all">
          <div className="grid md:grid-cols-2">
            <div className="relative h-52 md:h-64 overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
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
              <div className="flex flex-wrap items-center gap-2 mb-2 text-[9px] text-neutral-500 uppercase tracking-[0.12em]">
                <span className="inline-flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {featuredPost.category}
                </span>
                <span>·</span>
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="w-3 h-3" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                {featuredPost.title}
              </h2>

              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-4">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-1 text-xs text-neutral-500 group-hover:text-white transition-colors">
                Read Article
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.section>
  );
}

function PostsGridSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section ref={ref} className="py-16 border-t border-white/[0.04]">
      <div className="mb-8">
        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em]">— Latest Articles</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post, i) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Link href={post.slug} className="block group h-full">
              <div className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-5 hover:border-white/10 transition-all h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-[9px] text-neutral-600 uppercase tracking-[0.12em]">
                  <span className="inline-flex items-center gap-1">
                    <PenSquare className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                  {post.title}
                </h3>

                <p className="text-[11px] text-neutral-500 leading-relaxed mb-4 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[9px] text-neutral-600">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="w-6 h-6 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                    <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
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
          Want to discuss an idea{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            in more detail?
          </span>
        </h2>

        <p className="text-xs text-neutral-500 mt-3 max-w-sm mx-auto leading-relaxed">
          If something here resonates with your project or perspective, feel free
          to reach out. I’m always open to meaningful conversations.
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
          <p className="text-[10px] text-neutral-700">Thoughts on design, code, and digital products.</p>
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