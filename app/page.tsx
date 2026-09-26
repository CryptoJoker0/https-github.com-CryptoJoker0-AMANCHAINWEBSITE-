'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Copy, Menu, ShieldCheck, Sparkles, X } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260926_180918_704-KDi8LnLNnCaijYxkMRbvDj7nnHmGj8.jpg'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  function copyAddress() {
    navigator.clipboard?.writeText('0xAC7A...9F42')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-70 [background:radial-gradient(circle_at_72%_12%,oklch(0.52_0.24_329_/_0.22),transparent_26%),radial-gradient(circle_at_18%_58%,oklch(0.38_0.18_300_/_0.18),transparent_28%)]" />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Amanchain home">
          <img src={logoUrl} alt="Amanchain Global neon logo" className="size-11 rounded-full object-cover ring-1 ring-primary/40" />
          <span className="font-mono text-sm font-bold tracking-[0.2em] text-foreground">AMANCHAIN<span className="text-primary">.</span></span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#how-it-works">How it works</a>
          <a className="transition-colors hover:text-foreground" href="#security">Security</a>
          <a className="transition-colors hover:text-foreground" href="#network">Network</a>
          <a href="#pay" className="rounded-full border border-border bg-card/80 px-4 py-2 text-foreground transition hover:border-primary/70 hover:bg-primary/10">Open wallet <ArrowRight className="ml-2 inline size-4" /></a>
        </div>
        <button className="rounded-lg border border-border p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {menuOpen && <div className="relative z-10 flex flex-col gap-4 border-y border-border bg-card/95 px-5 py-5 text-sm md:hidden"><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><a href="#security" onClick={() => setMenuOpen(false)}>Security</a><a href="#network" onClick={() => setMenuOpen(false)}>Network</a></div>}

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-12 sm:px-8 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"><Sparkles className="size-3.5" /> Global payments, reimagined</div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl">Move money with <span className="bg-gradient-to-r from-fuchsia-400 via-primary to-violet-400 bg-clip-text text-transparent">more certainty.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Amanchain is the payment layer for a borderless economy. Fast settlement, transparent fees, and the confidence to build anywhere.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#pay" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[0_0_35px_oklch(0.65_0.28_330_/_0.3)] transition hover:scale-[1.02]">Start a payment <ArrowRight className="ml-2 size-4" /></a><a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 font-semibold transition hover:border-primary/60 hover:bg-primary/5">Explore the network</a></div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground"><span><strong className="text-foreground">&lt; 2 sec</strong> settlement</span><span><strong className="text-foreground">160+</strong> countries</span><span><strong className="text-foreground">99.99%</strong> uptime</span></div>
        </div>
        <div id="pay" className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -inset-10 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-card/80 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-border bg-background/70 p-6">
              <div className="flex items-center justify-between"><span className="text-sm font-medium text-muted-foreground">Your balance</span><span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">● Live</span></div>
              <p className="mt-3 text-4xl font-semibold tracking-tight">$24,890<span className="text-xl text-muted-foreground">.42</span></p>
              <div className="mt-6 h-24 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-violet-500/10 to-transparent"><svg viewBox="0 0 400 100" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true"><path d="M0 76 C40 62, 55 78, 90 52 S130 65, 160 43 S210 60, 242 30 S290 51, 325 20 S370 30, 400 8" fill="none" stroke="oklch(0.75 0.22 330)" strokeWidth="3" /><path d="M0 76 C40 62, 55 78, 90 52 S130 65, 160 43 S210 60, 242 30 S290 51, 325 20 S370 30, 400 8 V100 H0Z" fill="url(#fill)" opacity=".25" /><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="oklch(0.7 0.25 330)" /><stop offset="1" stopColor="transparent" /></linearGradient></defs></svg></div>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm"><span className="text-muted-foreground">Available to send</span><span className="font-semibold">$18,420.00</span></div>
              <button onClick={copyAddress} className="mt-5 flex w-full items-center justify-between rounded-xl border border-border bg-muted/50 px-4 py-3 text-left text-sm transition hover:border-primary/50"><span><span className="block text-xs text-muted-foreground">Wallet address</span>0xAC7A...9F42</span>{copied ? <Check className="size-4 text-emerald-300" /> : <Copy className="size-4 text-muted-foreground" />}</button>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative z-10 border-y border-border bg-card/30"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Built for movement</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">One network.<br />Every possibility.</h2></div><div className="grid gap-8 sm:grid-cols-3"><Feature number="01" title="Connect" text="Link your wallet or business in minutes." /><Feature number="02" title="Move" text="Send value globally with clear pricing." /><Feature number="03" title="Grow" text="Build products on open rails." /></div></div></section>
      <section id="security" className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10"><div className="rounded-[1.75rem] border border-border bg-card/60 p-8"><ShieldCheck className="size-8 text-primary" /><h2 className="mt-10 text-3xl font-semibold tracking-tight">Security that never takes a day off.</h2><p className="mt-4 leading-7 text-muted-foreground">Your assets are protected by multi-layer controls, real-time monitoring, and infrastructure designed for the moments that matter.</p><a href="#network" className="mt-8 inline-flex items-center text-sm font-semibold text-primary">See our approach <ArrowRight className="ml-2 size-4" /></a></div><div id="network" className="rounded-[1.75rem] border border-primary/20 bg-gradient-to-br from-primary/15 to-violet-500/5 p-8"><p className="text-sm text-muted-foreground">Network volume</p><p className="mt-3 text-5xl font-semibold">$8.4B<span className="text-lg text-primary">+</span></p><p className="mt-2 text-sm text-muted-foreground">processed across Amanchain rails</p><div className="mt-14 flex items-center gap-3 text-sm"><span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7]" />All systems operational <ChevronDown className="ml-auto size-4 rotate-[-90deg]" /></div></div></section>
      <footer className="relative z-10 border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10"><span>© 2026 Amanchain Global</span><span>Move value. Move forward.</span></div></footer>
    </main>
  )
}

function Feature({ number, title, text }: { number: string; title: string; text: string }) {
  return <div><span className="font-mono text-xs text-primary">{number}</span><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>
}
