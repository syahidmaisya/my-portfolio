'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Copy,
  Check,
  Sparkles,
  Send,
  MessageSquare,
} from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = 'syahidmaisya@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* NAVBAR */}

      <main className="max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-20">
        <HeroSection />
        <ContactCards email={email} copied={copied} copyToClipboard={copyToClipboard} />
        <AvailabilitySection email={email} />
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
        <Sparkles className="w-3 h-3" /> Get In Touch
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
      >
        Let’s start a{' '}
        <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
          conversation.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm text-neutral-400 leading-relaxed max-w-xl mx-auto"
      >
        Whether you have a project in mind, a collaboration opportunity, or just
        want to connect, I’m always open to meaningful conversations.
      </motion.p>
    </motion.section>
  );
}

function ContactCards({
  email,
  copied,
  copyToClipboard,
}: {
  email: string;
  copied: boolean;
  copyToClipboard: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section ref={ref} className="py-16 border-t border-white/[0.04]">
      <div className="text-center mb-10">
        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">
          Contact Channels
        </p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Reach out through your preferred{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            channel.
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {/* WHATSAPP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-6 hover:border-white/10 transition-all group"
        >
          <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
            <SiWhatsapp className="w-4 h-4 text-emerald-400" />
          </div>

          <h3 className="text-sm font-bold text-white mb-2">WhatsApp</h3>
          <p className="text-[11px] text-neutral-500 leading-relaxed mb-5">
            The fastest way to reach me for quick discussions, project inquiries,
            and urgent communication.
          </p>

          <a
            href="<https://wa.me/6285524884478>"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-4 py-2.5 rounded-full hover:bg-neutral-200 transition-all text-xs"
          >
            Chat on WhatsApp
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* EMAIL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="bg-neutral-950 border border-white/[0.04] rounded-2xl p-6 hover:border-white/10 transition-all group"
        >
          <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-4">
            <Mail className="w-4 h-4 text-blue-400" />
          </div>

          <h3 className="text-sm font-bold text-white mb-2">Email</h3>
          <p className="text-[11px] text-neutral-500 leading-relaxed mb-5">
            Best suited for formal proposals, collaborations, and professional
            opportunities.
          </p>

          <button
            onClick={copyToClipboard}
            className="w-full flex items-center justify-between px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:border-white/15 transition-all text-left"
          >
            <span className="text-xs text-neutral-300 truncate pr-3">{email}</span>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-neutral-600 shrink-0" />
            )}
          </button>
        </motion.div>

        {/* LOCATION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="md:col-span-2 bg-neutral-950 border border-white/[0.04] rounded-2xl p-6 hover:border-white/10 transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-white/[0.03] border border-white/[0.06] rounded-xl flex items-center justify-center">
                <MapPin className="w-4 h-4 text-neutral-400" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-white mb-1">Based in Indonesia</h3>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  West Java · GMT+7 · Available for remote collaboration and freelance projects.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/15 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/15 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AvailabilitySection({ email }: { email: string }) {
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
          <MessageSquare className="w-5 h-5 mx-auto mb-4 text-neutral-500" />
        </motion.div>

        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">
          Availability
        </p>

        <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.15]">
          Currently accepting new{' '}
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            projects.
          </span>
        </h2>

        <p className="text-xs text-neutral-500 mt-3 max-w-sm mx-auto leading-relaxed">
          If you’re looking for a developer to build a polished website, web
          application, or full-stack solution, I’d be glad to hear more.
        </p>

        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-all text-xs"
          >
            <Send className="w-3.5 h-3.5" />
            Send an Email
          </a>

          <a
            href="<https://wa.me/6285524884478>"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 px-5 py-2.5 rounded-full hover:border-white/30 hover:bg-white/5 transition-all text-xs text-neutral-400"
          >
            Message on WhatsApp
          </a>
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
            Open for collaboration and meaningful work.
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