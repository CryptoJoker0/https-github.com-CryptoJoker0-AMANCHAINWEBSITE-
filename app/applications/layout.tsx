import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Applications | AMANCHAIN GLOBAL',
  description: 'Apply for AMANCHAIN GLOBAL training tracks across digital marketing, responsible crypto education and IT foundations.',
}

export default function ApplicationsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
