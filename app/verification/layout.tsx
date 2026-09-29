import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Profile & Verification | AMANCHAIN GLOBAL',
  description: 'Professional profile and verification references for AMANCHAIN GLOBAL.',
}

export default function VerificationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
