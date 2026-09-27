'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Check, Code2, GraduationCap, LineChart, Megaphone, Menu, Send, Sparkles, X } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260926_180918_704-KDi8LnLNnCaijYxkMRbvDj7nnHmGj8.jpg'

const tracks = [
  { title: 'Learning & Digital Marketing', label: 'Brand + growth', text: 'Learn practical marketing foundations, content strategy, audience growth and digital campaigns.', icon: Megaphone, accent: 'from-emerald-300/20 to-transparent' },
  { title: 'Trading Futures & Memecoins', label: 'Market education', text: 'Build a responsible foundation in market structure, risk management, research and trading discipline.', icon: LineChart, accent: 'from-violet-400/20 to-transparent' },
  { title: 'Crypto Promotion', label: 'Web3 communications', text: 'Understand how to communicate crypto products, grow communities and plan transparent promotional campaigns.', icon: Sparkles, accent: 'from-cyan-300/20 to-transparent' },
  { title: 'IT Students Program', label: 'Build your toolkit', text: 'Strengthen your development foundations with web technologies, APIs, product thinking and deployment.', icon: Code2, accent: 'from-amber-300/20 to-transparent' },
]

export default function ApplicationsPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-70 [background:radial-gradient(circle_at_80%_0%,oklch(0.42_0.16_160_/_0.14),transparent_28%),radial-gradient(circle_at_5%_40%,oklch(0.35_0.12_300_/_0.14),transparent_26%)]" />
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10" aria-label="Main navigation">
          <a href="/" className="flex items-center gap-3"><img src={logoUrl} alt="AMANCHAIN GLOBAL logo" className="size-10 rounded-full object-cover ring-1 ring-primary/50" /><span className="font-mono text-xs font-bold tracking-[0.2em] sm:text-sm">AMANCHAIN <span className="text-primary">GLOBAL</span></span></a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex"><a href="/" className="transition hover:text-foreground">Home</a><a href="/#projects" className="transition hover:text-foreground">Projects</a><a href="/applications" className="text-foreground">Applications</a><a href="/links" className="transition hover:text-foreground">Community</a><a href="/pay" className="rounded-full bg-foreground px-4 py-2 font-semibold text-background transition hover:bg-primary hover:text-primary-foreground">Work with me <ArrowUpRight className="ml-1 inline size-4" /></a></div>
          <button className="rounded-lg border border-border p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <div className="flex flex-col gap-4 border-t border-border bg-background px-5 py-5 text-sm md:hidden"><a href="/">Home</a><a href="/#projects">Projects</a><a href="/applications" className="text-primary">Applications</a><a href="/links">Community</a><a href="/pay" className="font-semibold">Work with me <ArrowUpRight className="ml-1 inline size-4" /></a></div>}
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 md:pt-24 lg:px-10">
        <div className="max-w-4xl"><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300"><span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7]" /> APPLICATIONS ARE OPEN</div><h1 className="text-5xl font-semibold leading-[.95] tracking-[-0.065em] sm:text-7xl">LEARN THE SKILLS TO <span className="text-primary">BUILD WHAT&apos;S NEXT.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">Practical training for people who want to understand digital marketing, Web3, trading education and IT — with a focus on learning responsibly and shipping useful work.</p></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-border bg-card/50 p-5"><GraduationCap className="size-6 text-primary" /><p className="mt-5 text-sm font-semibold">Learn by doing</p><p className="mt-2 text-sm text-muted-foreground">Clear lessons, practical exercises and a builder mindset.</p></div><div className="rounded-2xl border border-border bg-card/50 p-5"><Check className="size-6 text-primary" /><p className="mt-5 text-sm font-semibold">Responsible education</p><p className="mt-2 text-sm text-muted-foreground">Trading and crypto content is educational, not financial advice.</p></div><div className="rounded-2xl border border-border bg-card/50 p-5"><Send className="size-6 text-primary" /><p className="mt-5 text-sm font-semibold">Built for your next step</p><p className="mt-2 text-sm text-muted-foreground">Choose a track and tell us where you want to go.</p></div></div>
      </section>

      <section className="border-y border-border bg-card/25"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"><p className="eyebrow">TRAINING TRACKS</p><h2 className="section-title mt-4 max-w-2xl">Choose your lane. Build your edge.</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{tracks.map(({ title, label, text, icon: Icon, accent }) => <article key={title} className={`rounded-3xl border border-border bg-gradient-to-br ${accent} p-6 transition hover:-translate-y-1 hover:border-primary/50`}><div className="flex items-start justify-between gap-4"><Icon className="size-7 text-primary" /><span className="rounded-full border border-border/80 px-3 py-1 text-xs text-muted-foreground">{label}</span></div><h3 className="mt-12 text-2xl font-semibold">{title}</h3><p className="mt-3 max-w-md leading-7 text-muted-foreground">{text}</p><a href="#apply" className="mt-7 inline-flex items-center text-sm font-semibold text-primary">Apply for this track <ArrowUpRight className="ml-2 size-4" /></a></article>)}</div></div></section>

      <section id="apply" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10"><div><p className="eyebrow">START HERE</p><h2 className="section-title mt-4">Apply for the next learning opportunity.</h2><p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">Share a little about yourself and the track you want to explore. We&apos;ll use your response to understand how to guide the next conversation.</p><p className="mt-6 text-sm text-muted-foreground">No payment is taken through this form. Applications are reviewed before any program or service is confirmed.</p></div><form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card/55 p-6 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-medium">Full name<input required name="name" className="h-12 rounded-xl border border-input bg-background/70 px-4 outline-none transition focus:border-primary" placeholder="Your name" /></label><label className="grid gap-2 text-sm font-medium">Email address<input required type="email" name="email" className="h-12 rounded-xl border border-input bg-background/70 px-4 outline-none transition focus:border-primary" placeholder="you@example.com" /></label></div><label className="mt-5 grid gap-2 text-sm font-medium">I&apos;m interested in<select required name="track" className="h-12 rounded-xl border border-input bg-background/70 px-4 outline-none transition focus:border-primary"><option value="">Choose a track</option>{tracks.map((track) => <option key={track.title}>{track.title}</option>)}</select></label><label className="mt-5 grid gap-2 text-sm font-medium">Tell us about your goals<textarea required name="goals" className="min-h-32 rounded-xl border border-input bg-background/70 px-4 py-3 outline-none transition focus:border-primary" placeholder="What do you want to learn or build?" /></label><button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:scale-[1.01]">{submitted ? 'Application received' : 'Submit application'} <ArrowUpRight className="ml-2 size-4" /></button>{submitted && <p className="mt-4 text-center text-sm text-emerald-300" role="status">Thanks — your application is ready for review. We&apos;ll follow up using the details provided.</p>}</form></section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10"><span>© 2026 AMANCHAIN GLOBAL</span><a href="/" className="text-foreground hover:text-primary">Back to official website <ArrowUpRight className="ml-1 inline size-4" /></a></div></footer>
    </main>
  )
}

