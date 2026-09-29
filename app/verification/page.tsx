'use client'

import { ArrowLeft, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react'

const profileImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260929_212728-cDIaWzrFnez9lNxI2zqLMzAZpaDEtA.jpg'
const verificationImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260929_212707-XJg7ZC4b8ToHxw1mw3jEF1cGEELTPL.jpg'

export default function VerificationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10" aria-label="Verification navigation">
          <a href="/" className="font-mono text-sm font-bold tracking-[0.2em]">AMANCHAIN <span className="text-primary">GLOBAL</span></a>
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"><ArrowLeft className="size-4" /> Back home</a>
        </nav>
      </header>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl"><div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"><ShieldCheck className="size-4" /> PROFESSIONAL PROFILE & VERIFICATION</div><h1 className="mt-7 text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl">Credentials with clarity. <span className="text-primary">Work with confidence.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">This page presents the professional profile and verification materials of AMANCHAIN GLOBAL — a crypto influencer, blockchain developer and Web3 strategist focused on responsible communication, community growth and digital product building.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2"><article className="overflow-hidden rounded-3xl border border-border bg-card/60"><img src={profileImage} alt="AMANCHAIN professional profile document" className="aspect-[4/5] w-full object-cover object-top" /><div className="p-6"><div className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 className="size-5 text-primary" /> Professional profile</div><p className="mt-3 text-sm leading-6 text-muted-foreground">A reference profile covering blockchain development, Web3 strategy, community building and crypto marketing experience.</p><a href={profileImage} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Open document <ExternalLink className="size-4" /></a></div></article><article className="overflow-hidden rounded-3xl border border-border bg-card/60"><img src={verificationImage} alt="AMANCHAIN official crypto influencer verification card" className="aspect-[16/10] w-full object-cover object-top" /><div className="p-6"><div className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 className="size-5 text-primary" /> Verification card</div><p className="mt-3 text-sm leading-6 text-muted-foreground">A visual verification reference for the AMANCHAIN professional identity and public-facing Web3 work.</p><a href={verificationImage} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Open verification card <ExternalLink className="size-4" /></a></div></article></div>
        <div className="mt-10 rounded-3xl border border-primary/25 bg-primary/5 p-6 sm:p-8"><p className="text-sm font-semibold text-primary">A professional note</p><p className="mt-3 max-w-3xl text-lg leading-8 text-muted-foreground">Credentials are shared to support transparent conversations with clients, collaborators and communities. Please confirm the scope, deliverables and working terms directly before beginning any engagement.</p></div>
      </section>
    </main>
  )
}
