import { ArrowUpRight } from 'lucide-react'

const services = [
  ['Website Development', 'Modern responsive websites and landing pages.', 'Discuss scope'],
  ['Full-Stack Development', 'Frontend, backend, APIs and deployment for digital products.', 'Discuss scope'],
  ['Web3 Development', 'Wallets, NFT systems and blockchain-connected experiences.', 'Discuss scope'],
  ['Technical Consulting', 'Architecture, integrations and technical execution guidance.', 'Discuss scope'],
]

export default function PayPage() {
  return <main className="min-h-screen bg-background px-5 py-10 text-foreground sm:px-8"><div className="mx-auto max-w-5xl"><a href="/" className="font-mono text-sm font-bold tracking-[.2em]">AMANCHAIN <span className="text-primary">GLOBAL</span></a><div className="max-w-2xl pb-16 pt-24"><p className="eyebrow">PROFESSIONAL SERVICES</p><h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">Work with AMANCHAIN GLOBAL.</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">Bring your idea, product or technical challenge. Confirm the requirements first, then we can agree on the right scope and next step.</p></div><div className="grid gap-4 md:grid-cols-2">{services.map(([name, description, cta]) => <article key={name} className="rounded-3xl border border-border bg-card/60 p-7"><h2 className="text-2xl font-semibold">{name}</h2><p className="mt-3 min-h-14 text-muted-foreground">{description}</p><div className="mt-8 flex items-center justify-between border-t border-border pt-5"><span className="text-sm text-primary">Scope confirmed before payment</span><a href="/links" className="text-sm font-semibold">{cta} <ArrowUpRight className="ml-1 inline size-4" /></a></div></article>)}</div><p className="mt-10 text-sm text-muted-foreground">No automatic payment is implied on this page. Use the link hub to start a conversation and confirm project requirements.</p></div></main>
}
